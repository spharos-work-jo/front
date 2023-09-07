'use client'
import { pointHistoryMenuList, pointHistoryMenuListType } from "@/data/pointHistoryMenuList";
import { timeFilter } from "@/data/timeFilter";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState} from "react";
import CreatePointComponent from "./CreatePointComponent";
import { pointDataType } from "@/types/pointDataType";

function PointMainBody() {

  const reqUrl ='http://workjo.duckdns.org'
  // const reqLocalUrl = "http://10.10.10.116:8000"

  const sessionData = useSession().data;
  const token = sessionData?.user.data.token;

  //날짜 설정 
  let date = new Date();
  let year = date.getFullYear();
  let month = "";
  let day = "";
  let ymdDate = "";

  const setDate = () => {

    if((date.getMonth() + 1) <= 9) {
      month = "-0" + (date.getMonth() + 1);  
    }else{
      month = "-" + date.getMonth() + 1;
    }
    if(date.getDate() < 9) {
      day = "-0" + date.getDate();
    }else{
      day = "-" + date.getDate();
    }
    
    ymdDate = year + month + day;

    return ymdDate;
  }
  //useSession
  const [savePoint,setSavePoint] = useState<number>(0);
  const [usedPoint,setUsedPoint] = useState<number>(0);
  const [emptyPointHistory,setEmptyPointHistory] = useState<boolean>(false);
  const [selectPointHistory,setSelectPointHistory] = useState<string>("1");
  const [pointList,setPointList] = useState<pointDataType[]>({} as pointDataType[]);

  async function handleOnClick(e: any) {

    
    setSelectPointHistory(e.target.id);

    console.log(`id ${e.target.id}`)
    // fetch보낼때 selectPointHistory (1 ~ 4)에 따라 API호출
    // + 1주일 ~ 6개월 시간 정보까지 같이 보냄

    let res = await fetch(reqUrl + '/api/v1/point/history',{
      method:"POST",
      headers:{
        'Content-type':'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        "historyStartDate": "2022-09-01",
        "historyEndDate": setDate(),
        "pointTypesToSearch": ["ETC"]
      })    
    })

    if (res.ok) {

      const data = await res.json();

      const pointDataList = data.data.pointList;

      if(pointDataList.length !== 0) {

        console.log(pointDataList.length)
        setEmptyPointHistory(true)
      }
      
      
      setPointList(pointDataList);

    } else {
      console.error('HTTP 오류 발생:', res.status);
    }
  }

  useEffect(() => {
    console.log("use Effect")
    console.log(pointList)
    console.log("use Effect")
  },[pointList])

  useEffect(() => {
    console.log(`selectPointHistory ${selectPointHistory}`)
  },[selectPointHistory])

  return (
    <>
      <div>
      {/* <p>{myDate.toLocaleDateString('ko-KR', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric'})}</p> */}

      <ul className="flex mb-3 w-full border-b-[2px] border-gray-500">
        {
          pointHistoryMenuList.map((item:pointHistoryMenuListType) => (
            <li 
              key={item.id}
              id={item.id}
              onClick={handleOnClick}
              className={
                selectPointHistory === item.id ? 'border-b-[3px] border-[#EA035C] pb-8 text-sm w-1/4 flex justify-center' :'text-sm w-1/4 pb-8 flex justify-center'
              }
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
                    <p className="ml-3 mr-8 text-[#EA035C] text-xs"><b>적립 {savePoint}P</b></p>
                <Image
                  alt="포인트 마이너스 아이콘"
                  src="/assets/images/point/pointMinusIcon.png"
                  height={2}
                  width={16}
                  />
                <p className="mx-2 text-xs">사용 {usedPoint}P</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            { 
              emptyPointHistory ? 
                <CreatePointComponent
                  id={selectPointHistory}
                  data={pointList}
                />
              :
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