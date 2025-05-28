"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalStyle from "./globalStyles";
import "../../node_modules/normalize.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
