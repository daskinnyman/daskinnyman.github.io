import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, JetBrains_Mono } from "next/font/google";
import { ScrollReset } from "@/components/scroll-reset";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen — Senior Backend Engineer",
  description:
    "Alex Chen's portfolio. Senior Backend Engineer with 9 years of experience specializing in Node.js, PostgreSQL, Fintech systems, and system modernization.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansTC.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black text-white antialiased">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
