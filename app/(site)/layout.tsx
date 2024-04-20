import { ComponentProps } from "@/components/type";
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
