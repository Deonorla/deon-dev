import React, { useState } from "react";
import CustomCursorContext, { CursorLookType } from "./CustomCursorContext";

const CustomCursorManager: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
