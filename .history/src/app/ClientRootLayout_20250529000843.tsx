"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import "../../node_modules/normalize.css";
import { lightTheme } from "@/components/Minor/theme/Themes";
import StyledComponentsRegistry from "@/lib/registry";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <StyledComponentsRegistry> */}
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
