/**
 * Contact Form API Route
 * ----------------------
 * Handles form submissions and sends emails via Brevo (Sendinblue)
 *
 * POST /api/contact
 */

import { NextResponse } from "next/server";

const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map();

function getDayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

// Email HTML template
function generateEmailHTML({ name, email, subject, message }) {
  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = subject ? escapeHtml(subject) : "";
  const safeMessage = escapeHtml(message);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 40px 0;">
            <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #0ec14c 0%, #0a9e3d 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                    ✉️ New Message Received
                  </h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                    Someone reached out through your portfolio
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  
                  <!-- Sender Info Card -->
                  <table role="presentation" style="width: 100%; background-color: #f8faf9; border-radius: 12px; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 25px;">
                        <h2 style="color: #0ec14c; margin: 0 0 20px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                          Sender Information
                        </h2>
                        
                        <!-- Name -->
                        <table role="presentation" style="width: 100%; margin-bottom: 15px;">
                          <tr>
                            <td style="width: 30px; vertical-align: top;">
                              <span style="font-size: 18px;">👤</span>
                            </td>
                            <td>
                              <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase;">Name</p>
                              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${safeName}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Email -->
                        <table role="presentation" style="width: 100%; margin-bottom: 15px;">
                          <tr>
                            <td style="width: 30px; vertical-align: top;">
                              <span style="font-size: 18px;">📧</span>
                            </td>
                            <td>
                              <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase;">Email</p>
                              <a href="mailto:${safeEmail}" style="display: block; margin: 5px 0 0 0; color: #0ec14c; font-size: 16px; font-weight: 600; text-decoration: none;">${safeEmail}</a>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Subject -->
                        ${
                          subject
                            ? `
                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="width: 30px; vertical-align: top;">
                              <span style="font-size: 18px;">📋</span>
                            </td>
                            <td>
                              <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase;">Subject</p>
                              <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${safeSubject}</p>
                            </td>
                          </tr>
                        </table>
                        `
                            : ""
                        }
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message -->
                  <h2 style="color: #0ec14c; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                    💬 Message
                  </h2>
                  <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 12px; padding: 25px;">
                    <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
                  </div>
                  
                  <!-- Reply Button -->
                  <table role="presentation" style="width: 100%; margin-top: 30px;">
                    <tr>
                      <td style="text-align: center;">
                        <a href="mailto:${safeEmail}?subject=Re: ${safeSubject || "Your message from my portfolio"}" 
                           style="display: inline-block; background: linear-gradient(135deg, #0ec14c 0%, #0a9e3d 100%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 50px; font-weight: 600; font-size: 16px;">
                          Reply to ${safeName.split(" ")[0]}
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #1a1a1a; padding: 25px 30px; text-align: center;">
                  <p style="margin: 0; color: #888; font-size: 14px;">
                    This message was sent from your portfolio contact form
                  </p>
                  <p style="margin: 10px 0 0 0; color: #666; font-size: 12px;">
                    © ${new Date().getFullYear()} Ali Reza Habibi
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    // Basic per-IP rate limiting (5 requests/day)
    const ip = getClientIp(request);
    const dayKey = getDayKey();
    const rateKey = `${dayKey}:${ip}`;
    const currentCount = rateLimitStore.get(rateKey) || 0;

    if (currentCount >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again tomorrow." },
        { status: 429 },
      );
    }

    rateLimitStore.set(rateKey, currentCount + 1);

    // Best-effort cleanup of old entries
    if (rateLimitStore.size > 1000) {
      for (const key of rateLimitStore.keys()) {
        if (!key.startsWith(dayKey)) {
          rateLimitStore.delete(key);
        }
      }
    }

    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Brevo API configuration
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const SENDER_EMAIL = process.env.SENDER_EMAIL;
    const SENDER_NAME = process.env.SENDER_NAME || "Portfolio Contact Form";
    const RECIPIENT_EMAIL =
      process.env.RECIPIENT_EMAIL || "shahreyarhabibi@gmail.com";

    if (!BREVO_API_KEY || !SENDER_EMAIL) {
      console.error("Missing Brevo configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Send email via Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: SENDER_NAME,
          email: SENDER_EMAIL,
        },
        to: [
          {
            email: RECIPIENT_EMAIL,
            name: "Ali Reza Habibi",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: subject
          ? `Portfolio Contact: ${subject}`
          : `New message from ${name}`,
        htmlContent: generateEmailHTML({ name, email, subject, message }),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
