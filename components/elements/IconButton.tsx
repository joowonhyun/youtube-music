"use client";
import React from "react";

interface IconProps {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}
const IconButton = ({ icon, onClickIcon }: IconProps) => {
  const onClickMenu = () => {};
  return (
    <div
      onClick={onClickIcon}
      className="flex justify-center items-center w-[36px] h-[36px]
       hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer "
    >
      {icon}
    </div>
  );
};

export default IconButton;
