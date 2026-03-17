/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdn.botpress.cloud https://files.bpcontent.cloud",
      "style-src 'self' 'unsafe-inline' https://cdn.botpress.cloud https://files.bpcontent.cloud https://fonts.googleapis.com",
      "img-src 'self' data: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "media-src 'self' data:",
      "connect-src 'self' https://cdn.botpress.cloud https://files.bpcontent.cloud https://*.botpress.cloud wss://*.botpress.cloud",
      "frame-src https://*.botpress.cloud",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
