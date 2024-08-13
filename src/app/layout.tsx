import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type Props = {children: React.ReactNode;}
export default function RootLayout({children,}: Readonly<{ Props }>) {

  return (
    <html lang="en">
      <body>
      <HeaderComponent/>
      {children}
      </body>
    </html>
  );
}
