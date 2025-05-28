"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import "../../node_modules/normalize.css";
import { lightTheme } from "@/components/Minor/theme/Themes";

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
      <body>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
