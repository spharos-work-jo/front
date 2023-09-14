'use client'
import React, { useState } from "react";
import { SmallMenuType } from '@/types/menuType';
import MenuWrap from '@/components/pages/find-regular-store/MenuWrap';
import CouponAvailable from "@/components/pages/benefits/CouponAvailable";

const page = () => {
  const [selected, setSelected] = useState<string>("0");
  const menuList: SmallMenuType[] = [

    { id: "0", name: "사용가능 쿠폰" },
    { id: "1", name: "사용완료/기간만료 쿠폰" },
    
  ];

  return (
    <>
      <section className={selected === "0" ? '' : ''}>
      <MenuWrap
        menuList={menuList}
        selected={selected}
        setSelected={setSelected}
      ></MenuWrap>
      <CouponAvailable
        isUsed={selected}
      />
      </section>
    </>
  );
};

export default page