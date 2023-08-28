"use client";
import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import EmptyBox from "@/components/layout/EmptyBox";
import SearchList from "./SearchList";

const select_box = "relative inline-block rounded-[8px] align-top";
const FindRegion = () => {
  interface SelectType {
    id: string;
    name: string;
  }

  interface SearchType {
    partner: string;
    si: string;
    gungu: string;
  }
  const partnerList: SelectType[] = [
    {
      id: "0",
      name: "쓱고우",
    },
    {
      id: "1",
      name: "노브랜드",
    },
    {
      id: "2",
      name: "센터필드",
    },
  ];

  const regionList: SelectType[] = [
    {
      id: "0",
      name: "서울",
    },
    {
      id: "1",
      name: "강원",
    },
  ];

  const test: any = {
    강원: ["강릉시", "고성군", "동해시"],
    서울: ["강남구", "강동구"],
  };

  const select =
    "block relative h-[48px] pr-[32px] pl-[15px] border-2 border-[#e8e8e8] rounded-[8px] text-[13px] font-bold";

  const [gunguList, setGunguList] = useState<[]>([]);

  const [searchData, setSearchData] = useState<SearchType>({
    partner: "",
    si: "",
    gungu: "",
  });

  const resData = {
    data: [
      {
        id: 1,
        store_name: "이마트24",
        sido: "부산시",
        gungu: "00구",
        detail_address: "상세상세 00호",
        la: 35.1821291,
        lo: 128.976148,
        image_url:
          "https://storage.googleapis.com/ssg-point-spharos/ssg-partner/emart24.jpg",
      },
      {
        id: 2,
        store_name: "스타벅스 00점",
        sido: "부산시",
        gungu: "00구",
        detail_address: "상세상세 00호",
        la: 35.1821293,
        lo: 128.97614,
        image_url:
          "https://storage.googleapis.com/ssg-point-spharos/ssg-partner/starbucks.jpg",
      },
    ],
  };


  const [SearchRes, setSearchRes] = useState();
  const handleData = (e: any) => {
    switch (e.target.title) {
      case "제휴사":
        setSearchData({ ...searchData, partner: e.target.value });
        break;

      case "도시":
        // setGunguList({ ...gunguList, name: test[e.target.value] });
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
          <SelectBox
            title={"제휴사"}
            placehold={"제휴사"}
            optionList={partnerList}
            handleData={handleData}
          ></SelectBox>

          {/* 도시 선택 box */}
          <SelectBox
            title={"도시"}
            placehold={"시"}
            optionList={regionList}
            handleData={handleData}
          ></SelectBox>

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
          <button className="btn_box bg-black text-[#fff] w-[100%] p-[10px] h-[45px]">
            검색
          </button>
        </div>
      </div>
      <div className="mt-[-40px]">
        {/* 검색 정보가 없을 경우 */}
        <EmptyBox content={"지역 매장 정보가 없습니다"}></EmptyBox>

        {/* 검색 정보가 있을 경우 */}
        <ul>
          {resData.data.map((item : any, idx : number)=> (
            <SearchList name={item.store_name}></SearchList>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FindRegion;
