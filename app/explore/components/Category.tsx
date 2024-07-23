import React from "react";
import { FiMusic } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";

const CategoryMenu = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div
      className="w-full h-[56px] py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 cursor-pointer
    rounded-sm hover:bg-neutral-800 transition
    "
    >
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu
        icon={<FiMusic color="#AAAAAA" size={24} />}
        label={"최신음악"}
      />
      <CategoryMenu
        icon={<FiBarChart color="#AAAAAA" size={24} />}
        label={"차트"}
      />
      <CategoryMenu
        icon={<FiSmile color="#AAAAAA" size={24} />}
        label={"분위기 및 장르"}
      />
    </div>
  );
};

export default Category;
