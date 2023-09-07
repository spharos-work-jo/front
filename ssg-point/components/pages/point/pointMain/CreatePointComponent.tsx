import { pointDataType } from "@/types/pointDataType";
import Image from "next/image";
import React from "react";

function CreatePointComponent({data} : {data: pointDataType[]}) {

  const PointData = data;

  const handleOnClick = () => {
    console.log("halo~!")
    console.log(PointData)
    console.log("halo~!")
    
  }

  return (  
    <>
      <div className="w-full">
        {/* <button
        onClick={handleOnClick}
        >
        test
        </button> */}
        
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
                <span className="text-[#EA035C] pl-1 text-sm">
                  <b>{item.point}P </b>
                </span> 
              </p>
                <p className="">
                  <b>{item.title}</b>
                </p>
                {/* <p>{item.regDate.toString('YYYY-MM-DD')}</p> */}
              </div>
          ))
        }
      </div>
    </>
  );
}

export default CreatePointComponent;