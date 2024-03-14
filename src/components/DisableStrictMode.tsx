import React from "react";

const DisableStrictMode = ({ children }: any) => {
  // Render children without strict mode
  return <React.StrictMode>{children}</React.StrictMode>;
};

export default DisableStrictMode;
