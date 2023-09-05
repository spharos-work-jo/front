import React from "react";
import roundDot from "/public/assets/images/etc/round_dot.png";
import { customStyle } from "@/types/cssType";
import Image from "next/image";

const beforeStyle: customStyle = {
  content: "",
  position: "absolute",
  top: "24px",
  backgroundSize: "100% auto",
};

const EmptyBox = (props: {content : string}) => {
  const { content } = props
  return (
    <div className="regist-box h-[154px] border-[1px] w-full">
      <p className="flex justify-center relative text-[13px] leading-[21px] text-[#767676] text-center pt-[80px] box-border">
        <Image
          src={roundDot}
          style={beforeStyle}
          width={48}
          height={48}
          alt="round_dot"
        ></Image>
        {content}<br />
      </p>
    </div>
  );
};

export default EmptyBox;
