import { getContent } from "@/content/getContent";

type SkillsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MUI",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "REST API",
  "Zod",
  "JWT",
  "Authentication",
];

const databaseSkills = [
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Mongoose",
];

const toolsSkills = [
  "Git",
  "GitHub",
  "Linux",
  "Postman",
  "Docker",
];

export default async function SkillsPage({
  params,
}: SkillsPageProps) {
  const { locale } = await params;
  const content = getContent(locale);

  const skillGroups = [
    {
      title: content.skills.frontend,
      skills: frontendSkills,
    },
    {
      title: content.skills.backend,
      skills: backendSkills,
    },
    {
      title: content.skills.database,
      skills: databaseSkills,
    },
    {
      title: content.skills.tools,
      skills: toolsSkills,
    },
  ];

  const engineeringSkills = [
    content.skills.systemDesign,
    content.skills.scalability,
    content.skills.cleanCode,
    content.skills.debugging,
    content.skills.testing,
    content.skills.problemSolving,
  ];

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-5 pb-20 pt-32 text-[#0b1424] transition-colors duration-300 dark:bg-[#020b16] dark:text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1478ff]">
            {content.skills.label}
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {content.skills.title}
            <span className="text-[#1478ff]">.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {content.skills.description}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525] sm:p-8"
            >
              <h2 className="text-xl font-black">
                {group.title}
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-[#1478ff]/40 hover:text-[#1478ff] dark:border-slate-700 dark:bg-[#020b16] dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Skills */}
        <section className="mt-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525] sm:p-9">
            <h2 className="text-2xl font-black">
              {content.skills.engineering}
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {engineeringSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1478ff]/10 text-[#1478ff]">
                    ✓
                  </div>

                  <span className="text-sm font-semibold">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}