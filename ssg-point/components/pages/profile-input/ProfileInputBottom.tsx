import { wayMarketingList } from "@/data/wayMarketingList";
import React from "react";

function ProfileInputBottom() {
  return (  
    <>
      <form className="px-5 mt-5">
        <ul className="flex-col">
        <li className="flex text-[13px] my-5">
          <input 
            name="agreeMarketingReceive-1"
            type="checkbox"
            className="w-6 h-6 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"
            />
          <label htmlFor="agreeMarketingReceive">
            <p>
              [선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용동의
            </p>
          </label>
        </li>
        <li className="flex text-[13px] my-5">
          <input 
            name="agreeMarketingReceive-2"
            type="checkbox"
            className="w-6 h-6 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"
            />
          <label htmlFor="agreeMarketingReceive">
            <p>
              [선택] 이마트/신세계 공동 개인정보 수집 및 이용동의
            </p>
          </label>
        </li>
      </ul>
      <div className="border-l-2 border-gray-400">
      <p className="text-[17px] pl-5 pt-5">신세계포인트 광고정보 수신동의</p>
      <ul className="w-80 first:flex-col flex justify-between pl-5 relative">
        <li className="flex absolute pt-5">
          <input 
            type="checkbox"
            name="allAgree"
            className="w-5 h-5 mr-2 appearance-none rounded-full bg-gray-300 cursor-pointer checked:bg-black"
            />
            <label htmlFor="allAgree">
              <p>
                전체 동의
              </p>
            </label>  
        </li>       
      {
        wayMarketingList.map(item => (
          <li className="flex pt-16 pb-5">
            <input 
              type="checkbox"
              name={item.name}
              className="w-5 h-5 mr-2 appearance-none rounded-full bg-gray-300 cursor-pointer checked:bg-black"
              />
              <label htmlFor={item.name}>
            <p>
              {item.name}
            </p>
          </label>
          </li>
        ))
      }
        </ul>
      </div>
      <div className="mt-5 mb-10  border-t-[1px] border-gray-200">
        <p className="pt-5 text-base">앱 푸쉬 광고 알람</p>
        <li className="flex mt-5">
          <input
            type="checkbox"
            name="pushAlarm"
            className="w-6 h-6 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"
          />
          <label htmlFor="pushAlarm">
            <p>APP PUSH</p>
          </label>
        </li>
      </div>
      <span className="text-xs text-gray-400">
        당사,관계사,신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지<br/>
        제공,이벤트 정보 제공(할인 쿠폰,포인트 추가 적립,상품 할인 포함),<br/>
        제휴행사를 안내해 드립니다.수신동의 변경은 신세계포인트 고객센터 및<br/>
        홈페이지(www.shinsegaepoint.com)에서 가능합니다.<br/>
        ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이<br/>
        발송됩니다.
      </span>
      <button className="w-full" type='submit'>
        <p className='p-4 my-[50px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
          확인
        </p>
      </button>
    </form>
    </>
  );
}

export default ProfileInputBottom;