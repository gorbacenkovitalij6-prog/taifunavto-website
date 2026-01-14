import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ТАЙФУНАВТО - Продажа автомобилей с пробегом в Тольятти",
  description: "ООО Тайфунавто - надежная компания по продаже качественных подержанных автомобилей в Тольятти. Подбор и продажа автомобилей из Европы, Японии, Кореи и США с учетом всех пожеланий и бюджета клиента.",
  keywords: ["автомобили", "пригон авто", "Тольятти", "подержанные автомобили", "авто из Европы", "Тайфунавто"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
