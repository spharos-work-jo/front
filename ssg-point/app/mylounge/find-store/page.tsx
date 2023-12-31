"use client";
import FindRegion from "@/components/pages/find-regular-store/FindRegion";
import KakaoMap from "@/components/pages/find-regular-store/KakaoMap";
import MenuWrap from "@/components/pages/find-regular-store/MenuWrap";
import { SmallMenuType } from "@/types/menuType";
import React, { useState } from "react";

const FindStore = () => {
  const [selected, setSelected] = useState<string>("1");

  const menuList: SmallMenuType[] = [
    { id: "0", name: "지도로 찾기" },
    { id: "1", name: "지역으로 찾기" },
  ];

  return (
    <section className={selected === "0" ? 'h-[100vh]' : ''}>
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
