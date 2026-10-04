"use client";

import { FormEvent, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getContent } from "@/content/getContent";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  const params = useParams();

  const locale = typeof params.locale === "string" ? params.locale : "en";
  const content = getContent(locale);

  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      setNotification(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.code === "INVALID_FORM_DATA") {
          throw new Error(content.contact.fieldRequired);
        }

        throw new Error(content.contact.error);
      }

      form.reset();

      setNotification({
        type: "success",
        message: content.contact.success,
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: error instanceof Error ? error.message : content.contact.error,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-5 pb-20 pt-32 text-[#0b1424] transition-colors duration-300 dark:bg-[#020b16] dark:text-white sm:px-8 lg:px-12">
      {notification && (
        <div
          className={`
            fixed
            top-24
            z-[200]
            w-[320px]
            overflow-hidden
            rounded-2xl
            border
            px-5
            py-4
            shadow-xl
            backdrop-blur-xl
            ${locale === "ar" ? "left-5" : "right-5"}
            ${
              notification.type === "success"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600"
                : "border-red-500/30 bg-red-500/10 text-red-600"
            }
          `}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">{notification.message}</p>

            <button
              type="button"
              onClick={() => setNotification(null)}
              className="ml-4 text-sm opacity-60 hover:opacity-100"
            >
              ×
            </button>
          </div>

          {/* Progress Bar */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-1
              w-full
              origin-left
              animate-notification-progress
              bg-[#1478ff]
            "
          />
        </div>
      )}
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1478ff]">
            {content.nav.contact}
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {content.contact.title}
            <span className="text-[#1478ff]">.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {content.contact.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525] sm:p-9">
            <h2 className="text-2xl font-black">{content.contact.followMe}</h2>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1478ff]">
                  {content.contact.email}
                </p>

                <a
                  href="mailto:name@example.com"
                  className="mt-2 block text-sm font-medium text-slate-700 hover:text-[#1478ff] dark:text-slate-300"
                >
                  name@example.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1478ff]">
                  {content.contact.location}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {content.contact.locationValue}
                </p>
              </div>

              {/* Availability */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1478ff]">
                  {content.contact.availability}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {content.contact.availabilityValue}
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-sm font-bold transition hover:border-[#1478ff] hover:text-[#1478ff] dark:border-slate-700"
              >
                <FaFacebookF className="text-[#1877F2]" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-sm font-bold transition hover:border-[#E4405F] hover:text-[#1478ff] dark:border-slate-700"
              >
                <FaInstagram className="text-[#E4405F]" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-sm font-bold transition hover:border-[#0A66C2] hover:text-[#1478ff] dark:border-slate-700"
              >
                <FaLinkedinIn className="text-[#0A66C2]" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-sm font-bold transition hover:border-[#25D366] hover:text-[#1478ff] dark:border-slate-700"
              >
                <FaWhatsapp className="text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#071525] sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  {content.contact.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={content.contact.namePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1478ff] dark:border-slate-700 dark:bg-[#020b16]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  {content.contact.emailField}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={content.contact.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1478ff] dark:border-slate-700 dark:bg-[#020b16]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                {content.contact.message}
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder={content.contact.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1478ff] dark:border-slate-700 dark:bg-[#020b16]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-xl bg-[#1478ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1478ff]/20 transition hover:bg-[#0868e8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? content.contact.sending : content.contact.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
