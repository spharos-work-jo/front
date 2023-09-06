'use client'

import { pointHistoryMenuList, pointHistoryMenuListType } from "@/data/pointHistoryMenuList";
import { timeFilter } from "@/data/timeFilter";
import { getCsrfToken, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState} from "react";

function PointMainBody() {

  const reqLocalUrl = "http://10.10.10.116:8000"

  const {data, status} = useSession();
  //useSession
  const [savePoint,setSavePoint] = useState<number>(0);
  const [usedPoint,setUsedPoint] = useState<number>(0);
  const [emptyPointHistory,setEmptyPointHistory] = useState<boolean>(false);
  const [selectPointHistory,setSelectPointHistory] = useState<number>(0);

  async function handleOnClick(e: any) {

    const {id} = e.target.id;

    setSelectPointHistory(id);
    // fetch보낼때 selectPointHistory (1 ~ 4)에 따라 API호출
    // + 1주일 ~ 6개월 시간 정보까지 같이 보냄

    const csrfToken = await getCsrfToken();

    let res = await fetch(reqLocalUrl + '/api/v1/point/history',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        "historyStartDate": "2022-09-01",
        "historyEndDate": "2023-09-06",
        "pointTypesToSearch": ['EARN',"ETC"]
      })
    })
    console.log(res)
    console.log(res.body)
    console.log(csrfToken)

  }
  return (
    <>
      <div>
      <ul className="flex justify-around mb-3 w-full border-b-[1px] border-gray-500 pb-4">
        {
          pointHistoryMenuList.map((item:pointHistoryMenuListType) => (
            <li 
              key={item.id}
              className="text-sm"
              onClick={handleOnClick}
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
          </div>
            <div className="w-full mt-2 pt-1 h-6 bg-gray-100">
              <div className="mx-2 h-4 flex">
                <Image
                  alt="포인트 플러스 아이콘"
                  src="/assets/images/point/pointPlusIcon.png"
                  height={2}
                  width={16}
                  />
                    <p className="mx-3 text-[#EA035C] text-xs">적립 {savePoint}P</p>
                <Image
                  alt="포인트 마이너스 아이콘"
                  src="/assets/images/point/pointMinusIcon.png"
                  height={2}
                  width={16}
                  />
                <p className="mx-2 text-xs">사용 {usedPoint}P</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-32">
            { emptyPointHistory ? null :
              <Image
                alt="빈 내역창 아이콘"
                height={48}
                width={48}
                src="/assets/images/point/noPointIcon.png"
              />
            }
        </div>
      </div>
    </>
  );
}

export default PointMainBody;