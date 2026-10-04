import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

import { getContent } from "@/content/getContent";
import personImage from "@/public/person-image.png";
type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};
const iconMap = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-6 w-6 text-black dark:text-white" />,
  },
  {
    name: "React",
    icon: <FaReact className="h-6 w-6 text-[#61DAFB]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-6 w-6 text-[#3178C6]" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-6 w-6 text-[#339933]" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-6 w-6 text-[#47A248]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4]" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-6 w-6 text-[#F05032]" />,
  },  
]
export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  const content = getContent(locale);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8fc] text-[#0b1424] transition-colors duration-300 dark:bg-[#020b16] dark:text-white">
      {/* Hero */}
      <section className="relative min-h-screen">
        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[180px]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-[#1478ff]/10
            blur-[120px]
            dark:bg-[#1478ff]/10
          "
        />

        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-[1450px]
            items-center
            px-5
            pb-16
            pt-32
            sm:px-8
            lg:px-12
          "
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-10">
            {/* Left Side */}
            <div className="relative z-10 max-w-2xl">
              {/* Availability */}
              <div
                className="
                  mb-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#1478ff]/20
                  bg-[#1478ff]/5
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-[#1478ff]
                  dark:border-[#1478ff]/30
                  dark:bg-[#1478ff]/10
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1478ff] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1478ff]" />
                </span>

                {content.home.availability}
              </div>

              {/* Greeting */}
              <p className="mb-3 text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-xl">
                {content.home.greeting}
              </p>

              {/* Title */}
              <h1
                className="
                  max-w-3xl
                  text-5xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {content.home.title}
                <span className="text-[#1478ff]">.</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                  sm:text-lg
                "
              >
                {content.home.description}
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={`/${locale}/projects`}
                  className="
                    rounded-full
                    bg-[#1478ff]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#1478ff]/20
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#0868e8]
                  "
                >
                  {content.home.viewWork} →
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="
                    rounded-full
                    border
                    border-slate-300
                    bg-white/70
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    transition
                    hover:-translate-y-0.5
                    hover:border-[#1478ff]
                    hover:text-[#1478ff]
                    dark:border-slate-700
                    dark:bg-[#071525]/70
                  "
                >
                  {content.home.contact}
                </Link>
              </div>

              {/* Technologies */}
              <div className="mt-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {iconMap.map((icon) => (
                    <span
                      key={icon.name}
                      className="
                        rounded-full
                        border
                        border-slate-400
                        bg-white
                        px-3.5
                        py-2
                        text-xs
                        font-medium
                        text-slate-600
                        shadow-sm
                        dark:border-slate-800
                        dark:bg-[#071525]
                        dark:text-slate-300
                        hover:border-[#1478ff]
                        dark:hover:border-[#1478ff]
                        transition: transform ease-in-out duration-300
                        hover:-translate-y-2.5
                      "
                    >
                      {icon.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative mx-auto h-[520px] w-full max-w-[560px]">
              {/* Main Neon Glow */}
              <div
                className="
    absolute
    -right-2/3
    top-2/3
    h-[280px]
    w-[450px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-[50%]
    bg-[#1478ff]/90
    blur-[70px]
    animate-neon-glow
  "
              />

              {/* Circle */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[350px]
                  w-[350px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#1478ff]/20
                  bg-gradient-to-br
                  from-[#1478ff]/10
                  to-transparent
                "
              />

              {/* Profile Image */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  h-[280px]
                  w-[280px]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-full
                  border-8
                  border-white
                  bg-slate-100
                  shadow-[0_30px_80px_rgba(20,120,255,0.18)]
                  dark:border-[#071525]
                  dark:bg-[#071525]
                "
              >
                <Image
                  src={personImage}
                  alt="person image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Experience Card */}
              <div
                className="
                  absolute
                  left-0
                  top-[100px]
                  z-20
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/90
                  px-5
                  py-4
                  shadow-xl
                  backdrop-blur-xl
                  dark:border-slate-800
                  dark:bg-[#071525]/90
                  hover:border-[#1478ff]
                        dark:hover:border-[#1478ff]
                        transition: transform ease-in-out duration-300
                        hover:-translate-y-2.5
                "
              >
                <div className="text-2xl font-black text-[#1478ff]">2+</div>

                <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {content.home.yearsExperience}
                </div>
              </div>

              {/* Projects Card */}
              <div
                className="
                  absolute
                  bottom-[85px]
                  right-0
                  z-20
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/90
                  px-5
                  py-4
                  shadow-xl
                  backdrop-blur-xl
                  dark:border-slate-800
                  dark:bg-[#071525]/90
                  hover:border-[#1478ff]
                        dark:hover:border-[#1478ff]
                        transition: transform ease-in-out duration-300
                        hover:-translate-y-2.5
                "
              >
                <div className="text-2xl font-black text-[#1478ff]">5+</div>

                <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {content.home.projectsCompleted}
                </div>
              </div>

              {/* Code Card */}
              <div
                dir="ltr"
                className="
                  absolute
                  bottom-[15px]
                  left-[25px]
                  z-20
                  hidden
                  w-[230px]
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/90
                  p-4
                  font-mono
                  text-[10px]
                  leading-5
                  shadow-xl
                  backdrop-blur-xl
                  dark:border-slate-800
                  dark:bg-[#071525]/90
                  sm:block
                  hover:border-[#1478ff]
                        dark:hover:border-[#1478ff]
                        transition: transform ease-in-out duration-300
                        hover:-translate-y-2.5
                "
              >
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="text-slate-400">
                  <span className="text-[#1478ff]">const</span> developer ={" "}
                  {"{"}
                </div>

                <div className="pl-3 text-slate-500 dark:text-slate-400">
                  name:{" "}
                  <span className="text-[#1478ff]">&quot;Name&quot;</span>,
                </div>

                <div className="pl-3 text-slate-500 dark:text-slate-400">
                  role:{" "}
                  <span className="text-[#1478ff]">
                    &quot;Full Stack Engineer&quot;
                  </span>
                </div>

                <div className="text-slate-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
