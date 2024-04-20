import React from "react";
import { ComponentProps } from "@/components/type";
import Image from "next/image";
import UserIcon from "@/components/UserIcon";

const Header = ({ children }: ComponentProps) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src={"https://images.unsplash.com/photo-1707833558984-3293e794031c"}
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black opacity-40 w-full"></div>
        </div>
      </section>
      <section>
        <UserIcon />
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;