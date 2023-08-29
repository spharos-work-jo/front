"use client";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import EmptyBox from "@/components/layout/EmptyBox";
import SearchList from "./SearchList";
import { gungu, gunguType, regionList, regionType } from "@/data/regionData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { now } from "next-auth/client/_utils";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";

const select_box = "relative inline-block rounded-[8px] align-top";
const select =
  "block relative h-[48px] pr-[32px] pl-[15px] border-2 border-[#e8e8e8] rounded-[8px] text-[13px] font-bold";

const FindRegion = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  // 검색에 필요한 데이터 타입
  interface SearchType {
    partner: string | null;
    city: string | null;
    gunGu: string | null;
  }

  const partnerList: regionType[] = [
    {
      code: "0",
      name: "쓱고우",
    },
    {
      code: "1",
      name: "노브랜드",
    },
    {
      code: "2",
      name: "센터필드",
    },
  ];

  const [queryUrl, setQueryUrl] = useState<String>();
  const [gunguList, setGunguList] = useState<regionType[]>([]);
  const [searchData, setSearchData] = useState<SearchType>({
    partner: null,
    city: null,
    gunGu: null,
  });

  // 검색을 한번이라도 했는지
  const [isClicked, setIsClicked] = useState<Boolean>(false);

  // 검색 결과 리스트 선택된 값
  const [selected, setSelected] = useState<string>("");

  // 검색 결과 더미 데이터
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

  // 제휴사, 시, 군구 선택 시 실행
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    // 옵션 변경 로직
    const name: string = e.target.title;
    setSearchData({ ...searchData, [name]: e.target.value });
    if (name === "city") {
      const val = e.target.value;
      const resGungu = gungu[val];
      setGunguList(resGungu);
    }
    
    // 선택 할 때 마다, queryUrl 갱신, 푸시는 안됨
    const searchUrl = `${pathname}?partner=${searchData.partner}&city=${searchData.city}&gunGu=${searchData.gunGu}&isClick=${isClicked}`;
    setQueryUrl(searchUrl);
    
    
  };

  // fetch 함수 선언
  const fetchData = () => {
    console.log("fetch 실행");
    const part = params.get("partner");
    const city = params.get("city");
    const gun = params.get("gunGu");
    // query 불러오기
    const searchUrl = `${pathname}?partner=${searchData.partner}&city=${searchData.city}&gunGu=${searchData.gunGu}&isClick=${isClicked}`;
    console.log("현재 상태", searchUrl);
    // const fetchRes = await fetch(`/api/v1/store/find-map?${searchUrl}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // }).then((res) => res.json);
  };

  // 검색 시 실행
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const part = params.get("partner");
    const city = params.get("city");
    const gun = params.get("gunGu");

    // 클릭을 한번도 안했다면, 했다고 처리
    if (!isClicked) {
      setIsClicked(!isClicked);
    }

    // 검색 당시의 query 정보를 담아, 푸시한다.
    const searchUrl = `${pathname}?partner=${part}&city=${city}&gunGu=${gun}&isClick=${isClicked}`;
    router.push(searchUrl);
    fetchData()
  };

  useEffect(() => {
    console.log('유즈이펙트 실행')
    // 검색 버튼을 한번도 안눌렀다면, fetch 막는다.
    if (isClicked) {
      fetchData();
    }

    const part = params.get("partner");
    const city = params.get("city");
    const gun = params.get("gunGu");
    
    console.log(part, city, gun)
    const searchUrl = `${pathname}?partner=${part}&city=${city}&gunGu=${gun}&isClick=${isClicked}`;
    router.push(searchUrl)
    console.log('유즈이펙트 실행 시 url', searchUrl)
  }, [queryUrl]);

  return (
    <>
      <h3 className="hidden">지역으로 찾기</h3>
      <form
        className="form_wrap pt-[40px] px-[20px] pb-[80px]"
        onSubmit={handleSubmit}
      >
        <div className="store_select_box relative">
          {/* 제휴사 선택 box */}
          <SelectBox
            title={"partner"}
            placehold={"제휴사"}
            optionList={partnerList}
            handleData={handleData}
          />

          {/* 도시 선택 box */}
          <SelectBox
            title={"city"}
            placehold={"시"}
            optionList={regionList}
            handleData={handleData}
          ></SelectBox>

          {/* 군구 선택 box */}
          <SelectBox
            title={"gunGu"}
            placehold={"군/구"}
            optionList={gunguList}
            handleData={handleData}
          />
        </div>

        <div className="mt-[24px]">
          <button
            type="submit"
            className="btn_box bg-black text-[#fff] w-[100%] p-[10px] h-[45px]"
          >
            검색
          </button>
        </div>
      </form>
      <div className="mt-[-40px]">
        {resData === null ? (
          // 검색 정보가 없을 경우
          <EmptyBox content={"지역 매장 정보가 없습니다"}></EmptyBox>
        ) : (
          // 검색 정보가 있을 경우
          <ul>
            {resData.data.map((item: any, idx: number) => (
              <SearchList
                name={item.store_name}
                id={item.id}
                selected={selected}
                setSelected={setSelected}
                sido={item.sido}
                gun={item.gungu}
                detail={item.detail_address}
              ></SearchList>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FindRegion;
