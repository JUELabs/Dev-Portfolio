import Link from "next/link";

import { getContent } from "@/content/getContent";

type ServicesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const content = getContent(locale);

  const services = [
    {
      number: "01",
      title: content.services.webDevelopment,
      description: content.services.webDevelopmentDescription,
    },
    {
      number: "02",
      title: content.services.apiDevelopment,
      description: content.services.apiDevelopmentDescription,
    },
    {
      number: "03",
      title: content.services.uiux,
      description: content.services.uiuxDescription,
    },
    {
      number: "04",
      title: content.services.consultation,
      description: content.services.consultationDescription,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-5 pb-20 pt-32 text-[#0b1424] transition-colors duration-300 dark:bg-[#020b16] dark:text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1478ff]">
            {content.services.label}
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {content.services.title}
            <span className="text-[#1478ff]">.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {content.services.description}
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-[#071525] sm:p-9"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1478ff]/10 text-sm font-black text-[#1478ff]">
                  {service.number}
                </div>

                <span className="text-2xl text-slate-300 transition group-hover:text-[#1478ff] dark:text-slate-700">
                  ↗
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-black">{service.title}</h2>

              <p className="mt-4 max-w-lg text-sm leading-8 text-slate-500 dark:text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#1478ff] p-8 shadow-xl shadow-[#1478ff]/20 sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-black sm:text-4xl  text-white">
              {content.services.ctaTitle}
            </h2>

            <p className="mt-4 leading-8 text-white/80">
              {content.services.ctaDescription}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold !text-black transition hover:-translate-y-0.5 hover:bg-black hover:!text-white hover:cursor-pointer"
            >
              {content.nav.letsTalk} →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
