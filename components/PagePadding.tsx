import React from "react";
import { ComponentProps } from "@/types";

const PagePadding = ({ children }: ComponentProps) => {
  return <div className="mx-auto px-[10px] py-2 lg:px-[100px]">{children}</div>;
};

export default PagePadding;
