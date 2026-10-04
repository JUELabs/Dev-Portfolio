import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Name | Full Stack Engineer",
  description: "Full Stack Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}