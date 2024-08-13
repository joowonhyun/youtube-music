"use client";

import React from "react";
import { ComponentProps } from "../types";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import usePlayerState from "@/hooks/usePlayerState";
import { cn } from "@/lib/utils";

const Sidebar = ({ children }: ComponentProps) => {
  const { isVisiblePlayer } = usePlayerState();
  return (
    <div
      className={cn(
        "flex flex-row h-full",
        isVisiblePlayer && "h-[calc(100vh-72px)]"
      )}
    >
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <Navigator />
      </nav>
      <div className="w-full lg:w-[calc(100% - 240px)]">{children}</div>
    </div>
  );
};

export default Sidebar;
