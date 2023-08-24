"use client";
import { customStyle } from "@/types/cssType";
import Image from "next/image";
import React, { useState } from "react";
import roundDot from "../../../public/assets/images/etc/round_dot.png";
import Link from "next/link";

const RegularReg = () => {
  const beforeStyle: customStyle = {
    content: "",
    position: "absolute",
    top: "24px",
    left: "47%",
    backgroundSize: "100% auto",
  };

  interface StoreListType {
    name: string;
    sido?: string;
    gungu?: string;
    detail_address?: string;
    used?: number;
    lat?: string;
    lng?: string;
  }
  const [storeList, setStoreList] = useState<StoreListType | string>("dd");

  return (
    // 단골 매장이 없는 경우
    <div
      className={
        storeList === "" ? `pb-[80px] mx-[20px]` : `px-[20px] pb-[80px]`
      }
    >
      {storeList === "" ? (
        <div className="regist-box h-[154px] border-1 border-dashed border-[#bababa] w-full mb-10">
          <p className="relative text-[13px] leading-[21px] text-[#767676] text-center pt-[80px] box-border">
            <Image
              src={roundDot}
              style={beforeStyle}
              width={48}
              height={48}
              alt="round_dot"
            ></Image>
            단골 매장을 등록해주세요. <br />
            (최대 10개 까지 등록가능)
          </p>
        </div>
      ) : (
        <ul className="">
          <li>
            <div>
              <Image src={"/"} width={0} height={0} alt="store_img"></Image>
              <p></p>
            </div>
          </li>
        </ul>
      )}

      <div className="btn_box">
        <Link className='' href={'/mylounge/find-store'}></Link>
      </div>
    </div>
  );
};

export default RegularReg;
