import React from "react";
import { AppThemeProvider } from "./theme";
import { AppLanguageProvider } from "./language";
const index: React.FunctionComponent = ({ children }) => {
  return (
    <AppThemeProvider>
      <AppLanguageProvider>{children}</AppLanguageProvider>
    </AppThemeProvider>
  );
};

export default index;
