"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { getContent } from "@/content/getContent";

import ecommerceImage from "@/public/ecommerce.jpg";
import expenseImage from "@/public/expense.jpg";
import repairImage from "@/public/repair-laptop.jpg";
import groceryImage from "@/public/grocery-store.jpg";

type Project = {
  id: number;
  key: "taskflow" | "ecommerce" | "repairCenter" | "groceryStore";
  category: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    key: "taskflow",
    category: "webApps",
    image: expenseImage.src,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: 2,
    key: "ecommerce",
    category: "fullStack",
    image: ecommerceImage.src,
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: 3,
    key: "repairCenter",
    category: "fullStack",
    image: repairImage.src,
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: 4,
    key: "groceryStore",
    category: "fullStack",
    image: groceryImage.src,
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
];

export default function ProjectsPage() {
  const params = useParams();

  const locale =
    typeof params.locale === "string"
      ? params.locale
      : "en";

  const content = getContent(locale);

  const [activeFilter, setActiveFilter] = useState("all");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filters = [
    {
      key: "all",
      label: content.projects.all,
    },
    {
      key: "webApps",
      label: content.projects.webApps,
    },
    {
      key: "mobile",
      label: content.projects.mobile,
    },
    {
      key: "fullStack",
      label: content.projects.fullStack,
    },
    {
      key: "uiux",
      label: content.projects.uiux,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter,
        );

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-5 pb-20 pt-32 text-[#0b1424] transition-colors duration-300 dark:bg-[#020b16] dark:text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1478ff]">
            {content.projects.label}
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {content.projects.title}
            <span className="text-[#1478ff]">.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {content.projects.description}
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() =>
                setActiveFilter(filter.key)
              }
              className={`
                rounded-full
                px-5
                py-2.5
                text-sm
                !font-bold
                transition
                ${
                  activeFilter === filter.key
                    ? "bg-[#1478ff] text-white shadow-lg shadow-[#1478ff]/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#1478ff]/40 hover:text-[#1478ff] dark:border-slate-800 dark:bg-[#071525] dark:text-slate-300"
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const projectContent =
              content.projects.items[project.key];

            return (
              <button
                key={project.id}
                type="button"
                onClick={() =>
                  setSelectedProject(project)
                }
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  text-start
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                  dark:border-slate-800
                  dark:bg-[#071525]
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#020b16]">
                  <Image
                    src={project.image}
                    alt={projectContent.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-black">
                      {projectContent.name}
                    </h2>

                    <span className="text-[#1478ff] transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {projectContent.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            bg-[#f4f8fc]
                            px-2.5
                            py-1.5
                            text-[11px]
                            font-medium
                            text-slate-600
                            dark:bg-[#020b16]
                            dark:text-slate-400
                            border
                            border-slate-700
                            dark:border-white
                          "
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            px-5
            py-8
            backdrop-blur-sm
          "
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-[2rem]
              border
              border-slate-200
              bg-white
              shadow-2xl
              dark:border-slate-800
              dark:bg-[#071525]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Close */}
            <button
              type="button"
              onClick={() =>
                setSelectedProject(null)
              }
              className="
                absolute
                right-5
                top-5
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-lg
                text-white
                backdrop-blur-md
              "
              aria-label={content.projects.close}
            >
              ×
            </button>

            {/* Image */}
            <div className="relative aspect-[16/9]">
              <Image
                src={selectedProject.image}
                alt={
                  content.projects.items[
                    selectedProject.key
                  ].name
                }
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-7 sm:p-9">
              <h2 className="text-3xl font-black">
                {
                  content.projects.items[
                    selectedProject.key
                  ].name
                }
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                {
                  content.projects.items[
                    selectedProject.key
                  ].description
                }
              </p>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-[#1478ff]">
                {content.projects.technologies}
              </h3>

              <div className="mt-4 flex flex-wrap justify-between">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-xl
                          bg-[#f4f8fc]
                          px-4
                          py-2
                          text-sm
                          font-medium
                          dark:bg-[#020b16]
                          border
                              border-slate-700
                              dark:border-white
                        "
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              <Link
                  href={`https://github.com`}
                  target="_blank"
                  className="
                    rounded-full
                    bg-[#1478ff]
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#1478ff]/20
                    transition: transform ease-in-out duration-300
                    hover:shadow-[#1478ff]/40
                    hover:-translate-y-1
                    hover:bg-[#0868e8]
                  "
                >
                  {content.projects.Explore} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}