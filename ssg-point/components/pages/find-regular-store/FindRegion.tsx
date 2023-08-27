"use client";
import React, { useEffect, useState } from "react";

const select_box = "relative inline-block rounded-[8px] align-top";
const FindRegion = () => {
  interface PartnerType {
    partner_id: string;
    partner_name: string;
  }

  interface SearchType {
    partner: string;
    si: string;
    gungu: string;
  }
  const partnerList: PartnerType[] = [
    {
      partner_id: "0",
      partner_name: "쓱고우",
    },
    {
      partner_id: "1",
      partner_name: "노브랜드",
    },
    {
      partner_id: "2",
      partner_name: "센터필드",
    },
  ];

  const regionList: string[] = ["강원", "서울"];

  const test: any = {
    강원: ["강릉시", "고성군", "동해시"],
    서울: ["강남구", "강동구"],
  };

  const select =
    "block relative h-[48px] pr-[32px] pl-[15px] border-2 border-[#e8e8e8] rounded-[8px] text-[13px]";

  const [gunguList, setGunguList] = useState<[]>([]);

  const [searchData, setSearchData] = useState<SearchType>({
    partner: "",
    si: "",
    gungu: "",
  });


  const handleData = (e: any) => {
    switch (e.target.title) {
      case "제휴사":
        setSearchData({ ...searchData, partner: e.target.value });
        break;

      case "도시":
        setGunguList(test[e.target.value]);
        setSearchData({ ...searchData, si: e.target.value });
        break;

      case "군구":
        setSearchData({ ...searchData, gungu: e.target.value });
        break;
    }
  };
  return (
    <>
      <h3 className="hidden">지역으로 찾기</h3>
      <div className="form_wrap pt-[40px] px-[20px] pb-[80px]">
        <div className="store_select_box relative">
          {/* 제휴사 선택 box */}
          <div className={`${select_box} w-[100%]`}>
            <select
              title="제휴사"
              className={`${select} w-[100%]`}
              onClick={handleData}
            >
              <option value="">제휴사</option>
              {partnerList.map((item) => (
                <option key={item.partner_id} value={item.partner_name}>
                  {item.partner_name}
                </option>
              ))}
            </select>
          </div>

          {/* 도시 선택 box */}
          <div className={`${select_box} w-[50%] mt-[10px]`}>
            <select
              title="도시"
              className={`${select} w-[100%]`}
              onClick={(e) => handleData(e)}
            >
              <option value="">시</option>
              {regionList.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* 군구 선택 box */}
          <div className={`${select_box} w-[50%] mt-[10px] pl-[10px]`}>
            <select
              title="군구"
              className={`${select} w-[100%]`}
              onClick={handleData}
            >
              <option value="군구">군/구</option>
              {gunguList &&
                gunguList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="mt-[24px]">
          <button className="btn_box bg-black text-[#fff] w-[100%] p-[10px] h-[45px]">검색</button>
        </div>
      </div>
    </>
  );
};

export default FindRegion;
