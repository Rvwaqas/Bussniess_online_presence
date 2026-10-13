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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jawa-it.com"),
  title: "Jawa Solutions — Enterprise Software & IT Consulting",
  description:
    "Jawa Solutions architects custom ERPs, AI-driven automation, high-scale cloud platforms, and mobile apps for ambitious enterprises worldwide.",
  keywords: [
    "Enterprise Software",
    "IT Solutions",
    "IT Agency Services",
    "Custom ERP",
    "CRM Systems",
    "Cloud Architecture",
    "DevOps",
    "AI Automation",
    "Mobile App Development",
    "Jawa Solutions",
    "Jawa",
  ],
  authors: [{ name: "Jawa Solutions" }],
  icons: {
    icon: [
      { url: "/images/jawa-rounded.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/jawa-rounded.png",
    apple: "/images/jawa-rounded.png",
  },
  openGraph: {
    title: "Jawa Solutions — Enterprise Software & IT Consulting",
    description:
      "Engineering Next-Generation Software & Intelligent IT Infrastructure.",
    type: "website",
    images: ["/images/jawa.jpeg"],
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
