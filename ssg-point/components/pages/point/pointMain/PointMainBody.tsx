import { pointHistoryMenuList, pointHistoryMenuListType } from "@/data/pointHistoryMenuList";
import { timeFilter } from "@/data/timeFilter";
import Image from "next/image";
import React from "react";

function PointMainBody() {

  return (
    <>
      <div>
      <ul className="flex justify-around mb-3 w-full border-b-[1px] border-gray-500 pb-4">
        {
          pointHistoryMenuList.map((item:pointHistoryMenuListType) => (
            <li 
              key={item.id}
              className="text-sm"
            >
              {item.name}
            </li>
          ))
        }
        </ul>
        <div className="px-5 pb-5">
          <select
            name="searchRangeTime"
            className="w-1/4 text-xs">
            {
              timeFilter.map(item => (
                <option
                  key={item.id}
                  value={item.name}>
                    {item.name}
                  </option>
              ))
            }
            </select>
            <p className="w-full block bg-gray-100 h-8 mt-2 flex">
              <Image
                alt="포인트 플러스 아이콘"
                src=""
                />
            </p>
          </div>
      </div>
    </>
  );
}

export default PointMainBody;