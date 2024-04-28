import { ComponentProps } from "@/types";
import React from "react";
import Header from "@/components/Header";
const layout = ({ children }: ComponentProps) => {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
