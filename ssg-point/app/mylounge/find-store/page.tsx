"use client";
import FindRegion from "@/components/pages/find-regular-store/FindRegion";
import KakaoMap from "@/components/pages/find-regular-store/KakaoMap";
import MenuWrap from "@/components/pages/find-regular-store/MenuWrap";
import NaverMaps from "@/components/pages/find-regular-store/NaverMaps";
import { SamllMenuType } from "@/types/menuType";
import React, { useState } from "react";

const FindStore = () => {
  const [selected, setSelected] = useState<string>("1");

  const menuList: SamllMenuType[] = [
    { id: "0", name: "지도로 찾기" },
    { id: "1", name: "지역으로 찾기" },
  ];

  return (
    <section className={selected === "0" ? 'pt-[4rem] h-[100vh]' : 'pt-[4rem]'}>
      <MenuWrap
        menuList={menuList}
        selected={selected}
        setSelected={setSelected}
      ></MenuWrap>
      {selected === "0"
      ? <KakaoMap></KakaoMap> 
      : <FindRegion></FindRegion>}
    </section>
  );
};

export default FindStore;
