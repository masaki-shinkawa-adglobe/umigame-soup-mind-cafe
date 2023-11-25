import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/app/_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja">
    <body className={inter.className}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
