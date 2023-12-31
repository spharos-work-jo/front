'use client'
import { pointDataType } from "@/types/pointDataType";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

function CreatePointComponent({ data, id } : { data: pointDataType[], id:string }) {

  const PointData = data;
  const myDate = new Date();

  // useEffect(() =>{

  //   let totalPoint = 0;    

  //   PointData.map((item) =>{
  //       totalPoint += item.point
  //   })  
  //   console.log(point.totalPoint)
  //   point.totalPoint = totalPoint;
  //   console.log(totalPoint)

  // },[id])
  
  return (  
    <>
      <div className="w-full">        
        
        {
          PointData.map((item) => (
            <div className="flex border-b-[1px] border-gray-300 py-7">
              <p className="flex ml-2 h-4 w-[105px]">
                <Image
                  alt=""
                  height={2}
                  width={16}
                  src="/assets/images/point/pointPlusIcon.png"
                />
                <span 
                  className="text-[#EA035C] pl-1 text-sm">
                  <b>{item.point}P </b>
                  <p>{item.title}</p>
                </span> 
              </p>
              <p>
                <b>{item.title}</b>
              </p>
              <p className="text-xs w-1/2 flex justify-end">
              {myDate.toLocaleDateString('ko-KR', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric'})}
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default CreatePointComponent;