'use client'
import React, { useState } from "react";
import Image from "next/image";

function PointMainTop() {

  const [totalSavePoint,setTotalSavePoint] = useState<number>(0);


  return (  
    <>
<<<<<<< HEAD
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
            <li className="text-sm"><b>사용 가능 {totalSavePoint}</b></li><br/>
            <li className="text-xs text-gray-500">적립 예정 {totalSavePoint}</li><br/>
            <li className="text-xs text-gray-500">소멸 예정 {totalSavePoint}</li><br/>
            </ul>
          </div>
      </div>
=======
>>>>>>> 0902291953baac299607e884a797c1e9e61d3728
    </>
  );
}

export default PointMainTop;
