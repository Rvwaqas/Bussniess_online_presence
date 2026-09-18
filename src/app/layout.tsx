import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Markslink Solutions — Enterprise Software & IT Consulting",
  description:
    "Markslink Solutions architects custom ERPs, AI-driven automation, high-scale cloud platforms, and mobile apps for ambitious enterprises worldwide.",
  keywords: [
    "Enterprise Software",
    "IT Solutions",
    "Custom ERP",
    "CRM Systems",
    "Cloud Architecture",
    "DevOps",
    "AI Automation",
    "Mobile App Development",
    "Markslink Solutions",
  ],
  authors: [{ name: "Markslink Solutions" }],
  openGraph: {
    title: "Markslink Solutions — Enterprise Software & IT Consulting",
    description:
      "Engineering Next-Generation Software & Intelligent IT Infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
