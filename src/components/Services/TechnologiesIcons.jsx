import { FaPhp } from "react-icons/fa";
/**
 * TechnologiesIcons Component (Server)
 * No hooks - pure presentational
 */

import { BsWordpress, BsGit, BsGithub } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  SiNestjs,
  SiPostman,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";

export default function TechnologiesIcons() {
  const style =
    "text-2xl text-zinc-500 hover:text-(--text) transition-all hover:scale-120";

  return (
    <div className="flex gap-5 flex-wrap justify-center items-center">
      <TbBrandNextjs className={style} title="NextJS" />
      <FaReact className={style} title="React" />
      <FaPython className={style} title="Python" />
      <SiTailwindcss className={style} title="Tailwind CSS" />
      <FaPhp className={style} title="PHP" />
      <AiFillHtml5 className={style} title="HTML5" />
      <SiFlutter className={style} title="Flutter" />
      <SiTypescript className={style} title="TypeScript" />
      <FaNodeJs className={style} title="NodeJs" />
      <SiPostman className={style} title="Postman" />
      <IoLogoJavascript className={style} title="JavaScript" />
      <BsWordpress className={style} title="WordPress" />
      <SiNestjs className={style} title="NestJs" />
      <BsGithub className={style} title="Github" />
      <BsGit className={style} title="Git" />
      <BiDotsHorizontalRounded className={style} title="And Many More" />
    </div>
  );
}
