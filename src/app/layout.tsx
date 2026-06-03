import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Israel Augusto Cáceres Suárez | Full Stack Developer",
  description:
    "Full Stack Developer based in Australia. Building web applications, SaaS dashboards, automation systems and business solutions using Next.js, React, TypeScript, Node.js and PostgreSQL. Available for remote roles.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Remote Developer",
    "Australia",
    "SaaS",
    "Web Applications",
  ],
  authors: [{ name: "Israel Augusto Cáceres Suárez" }],
  creator: "Israel Augusto Cáceres Suárez",
  metadataBase: new URL("https://iaugustodev.com"),
  openGraph: {
    type: "website",
    title: "Israel Augusto Cáceres Suárez | Full Stack Developer",
    description:
      "Full Stack Developer based in Australia. Building scalable web applications and business systems. Available for remote opportunities.",
    url: "https://iaugustodev.com",
    siteName: "iaugustodev.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Israel Augusto Cáceres Suárez | Full Stack Developer",
    description:
      "Full Stack Developer based in Australia. Available for remote opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
