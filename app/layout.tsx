import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "宝宝成长，妈妈不慌 | 0-3岁科学育儿与蒙氏启蒙指南",
  description:
    "面向0-3岁宝宝家庭的科学育儿成长月历，整理月龄发展、居家练习、玩具选择、蒙氏轻理解和妈妈低压力陪伴方法。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
