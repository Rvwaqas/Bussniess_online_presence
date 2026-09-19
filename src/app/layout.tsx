import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
      <body className={`${outfit.variable} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
