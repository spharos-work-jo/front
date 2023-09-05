"use client";
import { RegionType } from "@/data/regionData";
import React from "react";

const select_box = "relative inline-block rounded-[8px] align-top";
const select =
  "block relative h-[48px] pr-[32px] pl-[15px] border-2 border-[#e8e8e8] rounded-[8px] text-[13px] font-bold";


const SelectBox = (props: {
  title: string;
  placehold: string;
  optionList: RegionType[];
  handleData: any;
}) => {
  const { title, placehold, optionList, handleData } = props;

  return (
    <div
      className={
        title === "partner"
          ? `${select_box} w-[100%]`
          : title === "city"
          ? `${select_box} w-[50%] mt-[10px]`
          : `${select_box} w-[50%] mt-[10px] pl-[10px]`
      }
    >
      <select
        title={title}
        className={`${select} w-[100%]`}
        onChange={handleData}
        name={title}
      >
        <option value="">{placehold}</option>
        {optionList &&
          optionList.map((item: any, idx: number) => (
            <option key={idx} value={item.name}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectBox;
