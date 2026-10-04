"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getContent } from "@/content/getContent";

type NavbarProps = {
  locale: string;
};

const navItems = [
  {
    key: "home",
    path: "",
  },
  {
    key: "about",
    path: "/about",
  },
  {
    key: "projects",
    path: "/projects",
  },
  {
    key: "services",
    path: "/services",
  },
  {
    key: "skills",
    path: "/skills",
  },
  {
    key: "contact",
    path: "/contact",
  },
];

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const content = getContent(locale);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const switchLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";

    const currentPath = pathname.replace(`/${locale}`, "");

    router.push(`/${nextLocale}${currentPath || ""}`);

    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-362.5">
        <nav
          className="
            relative
            flex
            h-16
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200/80
            bg-white/90
            px-5
            shadow-[0_10px_40px_rgba(15,23,42,0.07)]
            backdrop-blur-xl
            dark:border-slate-800
            dark:bg-[#061321]/90
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            sm:px-7
          "
        >
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-2xl font-black tracking-tight"
            aria-label={content.nav.logo}
          >
            {content.nav.logo}
            <span className="text-[#1478ff]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const href = `/${locale}${item.path}`;

              const active =
                item.path === ""
                  ? pathname === `/${locale}`
                  : pathname.startsWith(href);

              const label = content.nav[item.key as keyof typeof content.nav];

              return (
                <Link
                  key={item.path}
                  href={href}
                  className={`
                    relative
                    py-2
                    text-[12px]
                    font-medium
                    transition-colors
                    ${
                      active
                        ? "text-[#1478ff]"
                        : "text-slate-700 hover:text-[#1478ff] dark:text-slate-300"
                    }
                  `}
                >
                  {label}

                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 rounded-full bg-[#1478ff]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                transition
              hover:bg-slate-100
              dark:hover:bg-slate-800
              "
              aria-label="Toggle theme"
            >
              {/* Moon */}
              <svg
                className="block dark:hidden"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>

              {/* Sun */}
              <svg
                className="hidden dark:block"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </button>

            {/* Language */}
            <button
              type="button"
              onClick={switchLanguage}
              className="
                hidden
                h-9
                rounded-full
                border
                border-slate-200
                px-3
                text-[11px]
                font-semibold
                transition
                hover:border-[#1478ff]
                hover:text-[#1478ff]
                dark:border-slate-700
                sm:block
              "
            >
              {content.nav.language}
            </button>

            {/* CTA */}
            <Link
              href={`/${locale}/contact`}
              className="
                hidden
                rounded-full
                bg-[#1478ff]
                px-5
                py-2.5
                text-[11px]
                font-bold
                text-white
                shadow-lg
                shadow-[#1478ff]/20
                transition
                hover:bg-[#0868e8]
                sm:block
              "
            >
              {content.nav.letsTalk} →
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center md:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? (
                <span className="text-xl">×</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div
              className="
                absolute
                left-0
                right-0
                top-18
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-xl
                dark:border-slate-800
                dark:bg-[#071525]
                md:hidden
              "
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const label =
                    content.nav[item.key as keyof typeof content.nav];

                  return (
                    <Link
                      key={item.path}
                      href={`/${locale}${item.path}`}
                      onClick={() => setMenuOpen(false)}
                      className="
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        hover:bg-slate-100
                        dark:hover:bg-slate-800
                      "
                    >
                      {label}
                    </Link>
                  );
                })}

                <button
                  type="button"
                  onClick={switchLanguage}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-start
                    text-sm
                    font-medium
                    hover:bg-slate-100
                    dark:hover:bg-slate-800
                  "
                >
                  {content.nav.language}
                </button>

                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-2
                    rounded-xl
                    bg-[#1478ff]
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {content.nav.letsTalk} →
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
