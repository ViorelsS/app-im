import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-2 border-red-500">{children}</div>;
};

export default layout;
