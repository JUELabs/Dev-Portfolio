import Image from "next/image";

import { getContent } from "@/content/getContent";
import personImage from "@/public/person-image.png";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-5 pb-20 pt-32 text-[#0b1424] transition-colors duration-300 dark:bg-[#020b16] dark:text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1478ff]">
            {content.about.label}
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {content.about.title}
            <span className="text-[#1478ff]">.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {content.about.description}
          </p>
        </div>

        {/* Main About Card */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Image */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#071525]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b16]/80 via-transparent to-transparent" />

            <Image
              src={personImage}
              alt="Name | Full Stack Engineer"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm font-medium text-white">
                Full Stack Engineer
              </p>

              <p className="mt-1 text-xs text-white/70">
                Building real-world digital products.
              </p>
            </div>
          </div>

          {/* Who I Am */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525] sm:p-9">
            <h2 className="text-2xl font-black">
              {content.about.whoIAm}
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
              <p>{content.about.paragraph1}</p>

              <p>{content.about.paragraph2}</p>
            </div>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#f4f8fc] p-4 text-center dark:bg-[#020b16]">
                <div className="text-2xl font-black text-[#1478ff]">
                  5+
                </div>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {content.about.projects}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f4f8fc] p-4 text-center dark:bg-[#020b16]">
                <div className="text-2xl font-black text-[#1478ff]">
                  100%
                </div>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {content.about.commitment}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f4f8fc] p-4 text-center dark:bg-[#020b16]">
                <div className="text-2xl font-black text-[#1478ff]">
                  ∞
                </div>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {content.about.happyClients}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <section className="mt-10">
          <div className="mb-6">
            <h2 className="text-2xl font-black">
              {content.about.myApproach}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Understand */}
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1478ff]/10 text-lg font-black text-[#1478ff]">
                01
              </div>

              <h3 className="mt-6 text-lg font-bold">
                {content.about.understand}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {content.about.understandDescription}
              </p>
            </div>

            {/* Design */}
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1478ff]/10 text-lg font-black text-[#1478ff]">
                02
              </div>

              <h3 className="mt-6 text-lg font-bold">
                {content.about.design}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {content.about.designDescription}
              </p>
            </div>

            {/* Build */}
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1478ff]/10 text-lg font-black text-[#1478ff]">
                03
              </div>

              <h3 className="mt-6 text-lg font-bold">
                {content.about.build}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {content.about.buildDescription}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}