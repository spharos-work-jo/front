import { customStyle } from "@/types/cssType";
import React from "react";

const SearchList = (props: {
  name: string;
  id: number;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  sido: string;
  gun: string;
  detail: string;
}) => {
  const { name, id, selected, setSelected, sido, gun, detail } = props;

  const labelBefore =
    "before:inline-block before:absolute before:border-none before:top-[20px] before:right-[25px] before:w-[14px] before:h-[10px] before:bg-no-repeat before:bg-auto  before:bg-[length:14px_10px] ";

  const storeNameStyle =
    "table-cell align-middle leading-[21px] h-[24px] font-semibold ";

  const labelStyle = "block py-[15px] px-[20px] text-[14px]";
  const handleClick = (e: any) => {
    setSelected(e.target.htmlFor);
    console.log(selected, e.target.htmlfor);
  };
  return (
    <li
      className={
        selected === name
          ? "on border-t border-b-2 border-b-[#ea035c] bg-[#fff3f8]"
          : "border-t"
      }
      key={id}
    >
      <div className="block relative align-top">
        <input
          name="store"
          type="radio"
          className="absolute w-[40px] h-[24px] appearance-none"
          id={name}
        />
        <label
          className={
            selected === name
              ? `${labelStyle} ${labelBefore} before:bg-[url('/assets/images/etc/red_check.png')]`
              : `${labelStyle} ${labelBefore} before:bg-[url('/assets/images/etc/check.png')] before:opacity-30 `
          }
          onClick={handleClick}
          htmlFor={name}
        >
          <span
            className={
              selected === name
                ? `${storeNameStyle} text-[#ea035c]`
                : `${storeNameStyle}`
            }
          >
            {name}
          </span>
        </label>
      </div>
      {selected === name ? (
        <p className="text-[#666] text-[12px] pl-5 mt-[-10px] pb-[18px]">
          {sido} {gun} {detail}
        </p>
      ) : null}
    </li>
  );
};

export default SearchList;
