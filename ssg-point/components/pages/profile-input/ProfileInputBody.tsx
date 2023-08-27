'use client'
import { SignupInputProfileList } from "@/data/SignupInputProfileList";
import React from "react";

function ProfileInputBody() {
  return (  
    <>
      <form className="px-5 mt-10">
      <p className="text-[14px] pb-2">아이디<span className="text-red-500">*</span></p>
        <div className="flex">
          <input
            className="h-[48px] border w-[28rem] rounded-[6px] divide-[#e5e7eb] text-sm"
            type="text"
            placeholder="  영문,숫자 6~20자리 입력해주세요."
            name="loginId"
          />
          <button className="h-[px] w-1/5 border rounded-[6px] ml-3 border-gray-400 text-[15px]">
            중복확인
          </button>
        </div>
        <div className="flex-col">
          {
            SignupInputProfileList.map( item => (
            <div>
            <p className="text-[14px] my-3">{item.title}<span className="text-red-500">*</span></p>
              <input
                className="h-[48px] border w-full rounded-[6px] diveide-[#e5e7eb] text-sm"
                type="text"
                placeholder={item.placeholder}
                name={item.name}
              />
            </div>
            ))
          }
        <p className="text-[14px] my-3">자택주소<span className="text-red-500">*</span></p>
        <div className="flex mb-2">
          <input
            className="h-[48px] border w-3/4 rounded-[6px] divide-[#e5e7eb] text-sm"
            type="text"
            placeholder="  우편번호"
            name="zipCode"
          />
          <button className="h-[px] w-1/4 border rounded-[6px] ml-3 border-gray-400 text-[15px]">
            우편번호 찾기
          </button>
        </div>
        <div className="flex-col">
          <input
            className="h-[48px] border w-full mb-2 rounded-[6px] diveide-[#e5e7eb] text-sm"
            type="text"
            name="address"
            />
            <input
            className="h-[48px] border w-full mb-2 rounded-[6px] diveide-[#e5e7eb] text-sm"
            type="text"
            placeholder="  상세주소"
            name="detailAddress"
            />
        </div>
      </div>
    </form>
    </>
  );
}

export default ProfileInputBody;