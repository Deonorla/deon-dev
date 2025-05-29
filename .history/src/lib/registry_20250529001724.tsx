"use client";

import React, { useState } from "react";
import { StyleSheetManager, ServerStyleSheet } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const isServer = typeof window === "undefined";

export default function StyledComponentsRegistry({ children }: Props) {
  const [styledComponentsStyleSheet] = useState(() =>
    isServer ? new ServerStyleSheet() : null
  );

  if (isServer && styledComponentsStyleSheet) {
    // During SSR: collect styles and render children wrapped
    const styles = styledComponentsStyleSheet.collectStyles(<>{children}</>);
    const styleTags = styledComponentsStyleSheet.getStyleElement();

    return (
      <>
        {styles}
        {/* This is the critical part: inject style tags */}
        {styleTags}
      </>
    );
  }

  // On client just render children normally with StyleSheetManager
  return <StyleSheetManager sheet={undefined}>{children}</StyleSheetManager>;
}
