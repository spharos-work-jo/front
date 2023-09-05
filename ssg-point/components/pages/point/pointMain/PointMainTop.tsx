'use client'
import React, { useState } from "react";
import Image from "next/image";

function PointMainTop() {

  const [TotalPoint,setTotalPoint] = useState<number>(0);
  const [SavePoint,setSavePoint] = useState<number>(0);
  const [DeletePoint,setDeletePoint] = useState<number>(0);
  const [DeletePointDay,setDeletePointDay] = useState<string>("");

  return (  
    <>
      <div className="relative mt-5 mx-5 w-[400px] h-[202px] bg-ssg-linear rounded-[16px] flex justify-center items-end">
        <div className="flex">
          <Image 
            className="absolute top-3 left-3"
            src="/assets/images/logo/pointLogo.png"
            alt="포인트 내역페이지 로고"
            height={30}
            width={110}/>
            <Image 
            className="absolute right-3 top-3"
            src="/assets/images/logo/pointInfoLogo.png"
            alt="포인트 내역페이지 로고"
            height={18}
            width={18}/>
          </div>
          <div className="mb-1 w-[396px] h-[155px] bg-white rounded-[14px]">
            <ul className="py-6 px-5">
              <li className="w-full text-sm flex justify-between">
                <b>사용 가능</b>
                  <p>{TotalPoint}</p>
                  <Image 
                  src="/assets/images/point/pointImage.png"
                  alt="포인트 이미지"
                  height={30}
                  width={26}>
                  </Image>
              </li><br/>
              <li className="text-xs text-gray-500 flex justify-between">
                <b>적립 예정</b>
                {SavePoint}P</li><br/>
              <li className="text-xs text-gray-500 flex justify-between">
                <b>소멸 예정</b>
                {DeletePoint}P</li><br/>
            </ul>
          </div>
      </div>
      <div className="bg-[#FCEBF1] w-full h-[65px] my-7 flex">
        <Image
          alt="스마트 영수증 아이콘"
          className="mx-5 pt-3 pb-2"
          src="/assets/images/point/pointReceiptIcon.png"
          width={40}
          height={40}
        />
        <p className="my-3 text-sm text-[#D9044B] flex-col">
          내가 어디서 뭘 샀더라<br/>
          <span className="text-xs">신세계포인트 영수증 한 번에 모아보기</span>
        </p>
      </div>
    </>
  );
}

export default PointMainTop;
