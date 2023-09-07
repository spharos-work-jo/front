"use client";
import PointCardManageTop from '@/components/pages/point/point-card-manage/PointCardManageTop'
import PointCardManageBot from '@/components/pages/point/point-card-manage/PointCardManageBot'
import MenuWrap from "@/components/pages/find-regular-store/MenuWrap";
import { SmallMenuType } from "@/types/menuType";
import React, { useState } from "react";
import PointCardManageSam from '@/components/pages/point/point-card-manage/PointCardManageSam';
import PointCardManageDae from '@/components/pages/point/point-card-manage/PointCardManageDae';
import PointCardManageAsia from '@/components/pages/point/point-card-manage/PointCardManageAsia';
import PointCardManageNotice from '@/components/pages/point/point-card-manage/PointCardManageNotice';

const PointCardManage = () => {

  const [selected, setSelected] = useState<string>("1");
  const menuList: SmallMenuType[] = [
    { id: "0", name: "삼성전자 멤버십" },
    { id: "1", name: "대한항공" },
    { id: "2", name: "아시아나항공"}
  ];

  return (
    <>
      <PointCardManageTop/>
      <section className={selected === "0" ? '' : ''}>
      <MenuWrap
        menuList={menuList}
        selected={selected}
        setSelected={setSelected}
      ></MenuWrap>
      {selected === "0" ?
      <PointCardManageSam/>
      : selected === "1" ?
      <PointCardManageDae/>
      : <PointCardManageAsia/>}
      </section>
      
      <PointCardManageBot/>
      <PointCardManageNotice/>
    </>
  );
};




export default PointCardManage