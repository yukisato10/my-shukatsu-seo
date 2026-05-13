import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My就活 | 就活管理アプリ",
    template: "%s | My就活",
  },
  description:
    "My就活は、企業管理・ES管理・面接予定・締切・就活ニュース・就活サービスをまとめて管理できる就活管理アプリです。",
  keywords: [
    "就活管理アプリ",
    "就活アプリ",
    "ES管理",
    "面接管理",
    "締切管理",
    "就活ニュース",
    "就活サービス",
  ],
  openGraph: {
    title: "My就活 | 就活管理アプリ",
    description:
      "企業管理・ES管理・面接予定・締切・就活ニュースをまとめて管理できる就活管理アプリ。",
    type: "website",
    locale: "ja_JP",
    siteName: "My就活",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}