"use client";
import React from "react";
import Link from "next/link";
import { SmallMenuType } from "@/types/menuType";

const MenuWrap = (props: {
  menuList: SmallMenuType[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { menuList, selected, setSelected } = props;

  const handleClick = (e: any) => {
    setSelected(e.target.id);
    console.log(selected);
  };

  const commonStyle =
    "block w-[100%] h-[44px] pt-[10px] bg-[#fbfbfb] text-[13px] text-[#505050]  leading-6 cursor-pointer";
  return (
    <div>
      <ul className="tab_list flex items-center ">
        {menuList.map((item) => (
          <li
            key={item.id}
            className="flex-1 text-center"
            onClick={(e) => handleClick(e)}
          >
            <div
              id={item.id}
              className={
                selected === `${item.id}`
                  ? `${commonStyle} bg-[#fff3f8] text-[#d9044b] font-bold border-[#d9044b] border-b-2`
                  : `${commonStyle}`
              }
            >
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuWrap;
