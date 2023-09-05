"use client";
import { customStyle } from "@/types/cssType";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import roundDot from "../../../public/assets/images/etc/round_dot.png";
import Link from "next/link";

interface StoreListType {
  id: number;
  name: string;
  sido?: string;
  gungu?: string;
  detail_address?: string;
  img_url?: string;
}
const RegularReg = () => {
  const beforeStyle: customStyle = {
    content: "",
    position: "absolute",
    top: "24px",
    backgroundSize: "100% auto",
  };

  const [storeList, setStoreList] = useState<StoreListType[]>([]);

  useEffect(() => {
    const data: StoreListType[] = [
      {
        id: 0,
        name: "수영다온채점",
        sido: "부산",
        gungu: "수영구",
        detail_address: "광안해변로307번길 15(민락동) 1층",
        img_url:
          "https://m.shinsegaepoint.com/static/brand/images/map/B200003370.png",
      },
      {
        id: 1,
        name: "센텀점",
        sido: "부산",
        gungu: "수영구",
        detail_address: "광안해변로307번길 15(민락동) 1층",
        img_url:
          "https://m.shinsegaepoint.com/static/brand/images/map/B200003370.png",
      },
    ];

    setStoreList(data);
  }, []);
  // const storeList = null

  const handleDelStore = (e:any) => {
    storeList.splice(e.target.id, 1)
    const newList = [...storeList];
    setStoreList(newList);
  };

  return (
    // 단골 매장이 없는 경우
    <div
      className={
        storeList.length === 0 ? `pb-[80px] mx-[20px]` : `px-[20px] pb-[80px]`
      }
    >
      {storeList.length === 0 ? (
        <div className="regist-box h-[154px] border-[1px] border-dashed border-[#bababa] w-full mb-10">
          <p className="flex justify-center relative text-[13px] leading-[21px] text-[#767676] text-center pt-[80px] box-border">
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
        <ul className="regular_lis pb-[40px] mx-[-20px] ">
          {storeList.map((item, idx) => (
            <li
              key={idx}
              className="table relative min-h-[82px] w-full py-[8px] border-t border-1 border-[#e5e5e5] last:border-b last:border-solid last:border-[#e5e5e5]"
            >
              <div className="relative table-cell pl-[90px] pr-[65px] align-middle  ">
                <Image
                  src={`${item.img_url}`}
                  className="absolute left-[20px] top-[50%] mt-[-26px] border-2 border-[#d5d5d5] rounded-[50%]  "
                  width={50}
                  height={50}
                  alt="store_img"
                ></Image>
                <p className="reg_title text-[14px] font-bold leading-6 ">
                  {item.name}
                </p>
                <p className="reg_txt text-[11px] text-[#767676] leading-[21px] font-semibold ">
                  {item.sido} {item.gungu} {item.detail_address}
                </p>
                <button
                  id={`${idx}`}
                  className="reg_del absolute bg-cover w-[20px] h-[26px] right-[30px] top-[50%] mt-[-13px] overflow-hidden bg-[url('/assets/images/etc/bookmark.png')]"
                  onClick={(e) => handleDelStore(e)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="btn_div w-full">
        <Link
          className="block rounded-[8px] w-full text-center h-[48px] text-[14px] leading-[24px] font-semibold box-border bg-gradient py-[12px] px-[16px]"
          href={"/mylounge/find-store"}
        >
          단골 매장 등록하기
        </Link>
      </div>
    </div>
  );
};

export default RegularReg;
