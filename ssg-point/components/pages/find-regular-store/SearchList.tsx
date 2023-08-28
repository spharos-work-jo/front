import { customStyle } from "@/types/cssType";
import React from "react";

const SearchList = (props: {name : string }) => {
  const {name} = props
  
  const labelBefore = "before:block before:border-none before:top-[20px] before:left-[30px] before:right-[25px] before:w-[13px] before:h-[30px] before:bg-no-repeat before:bg-auto before:bg-[url('/assets/images/etc/check.png')]"

  return (
    <li className="border-t border-2">
      <div className="block relative align-top">
        <input name="store" type='radio' className="absolute w-[40px] h-[24px] appearance-none" />
        <label className={`block py-[15px] px-[20px] text-[14px] ${labelBefore} `}>
          <span >{name}</span>
        </label>
      </div>
    </li>
  );
};

export default SearchList;
