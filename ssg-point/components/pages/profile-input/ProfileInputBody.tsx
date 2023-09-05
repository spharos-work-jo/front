'use client'
import React, {useState, useEffect} from "react";
import { SignupInputProfileList } from "@/data/SignupInputProfileList";
import { userProfileInputFormType } from "@/types/userProfileInputFormType";
import { profileInputErrTextType } from "@/types/profileInputErrTextType";
import { DaumAddressType } from "@/types/DaumAddressType";
import DaumPostCodeModal from "../auth/modal/DaumPostCodeModal";
import { wayMarketingList } from "@/data/wayMarketingList";

function ProfileInputBody() {

  const [isView, setIsView] = useState<boolean>(false);
  const [address, setAddress] = useState<DaumAddressType>();
  const [pwType, setPwType] = useState<boolean>(false);

  const handleOpenModal = () =>{

    setIsView(true);

  }

  useEffect(() => {
    if(address){
        // setIsView(false);
        console.log(address)
    }
}, [address])

  const [userProfile,setUserProfile] = useState<userProfileInputFormType>({
    id:"",
    loginId:"",
    password:"",
    checkPassword:"",
    name:"",
    phone:"",
    zoneCode:0,
    city:"",
    detailAddress:""
  })
  const [profileErrText,setProfileErrText] = useState<profileInputErrTextType>({
    loginId:"",
    password:"",
    checkPassword:"",
    name:"",
    phone:"",
    zoneCode:"",
    city:"",
    detailAddress:"",
  })
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {

    const {name,value} = e.target;

    setUserProfile({
      ...userProfile,
      [name]:value
    })
    setProfileErrText({
      ...profileErrText,
      [name]:value
    })

  }
  const handleOnFecth = (e : React.MouseEvent<HTMLButtonElement>) => {

    let errText:profileInputErrTextType = {
      loginId:"",
      password:"",
      checkPassword:"",
      name:"",
      phone:"",
      zoneCode:"",
      city:"",
      detailAddress:""
    }

    if(userProfile.loginId === "" || userProfile.loginId.length < 21 || userProfile.loginId.length < 7 ){
      errText.loginId = "아이디를 6자 이상 20자 이하로 입력해주세요."
    } 
    if(8 < userProfile.password.length || 21 < userProfile.password.length){
      errText.password = "비밀번호는 8자 이상 20자 이하로 입력해주세요."
    }
    if(userProfile.password !== userProfile.checkPassword){
      errText.checkPassword = "비밀번호가 서로 다릅니다."
    }
    if(userProfile.name === "") errText.name = "이름을 입력해주세요."
    if(userProfile.phone === "") errText.phone = "전화번호를 입력해주세요."
    if(userProfile.zoneCode === 0) errText.zoneCode = "우편번호를 입력해주세요."
    if(userProfile.city === "") errText.city = "주소를 입력해주세요."
    if(userProfile.detailAddress === "") errText.detailAddress = "상세주소를 입력해주세요."
    if(errText.loginId !== "" || errText.password !== "" || errText.checkPassword !== "" ||
      errText.name !== "" || errText.phone !== "" || errText.zoneCode !== "" || errText.city !== "" ||
      errText.detailAddress !== ""){

      setProfileErrText(errText);

      return
    }
    
  }
  return (  
    <>
      <form className="block px-5 mt-10">
        <p className="text-[14px] pb-2">아이디<span className="text-red-500">*</span></p>
        <div className="flex">
          <input
            className="h-[48px] border w-3/4 rounded-[6px] divide-[#e5e7eb] text-sm"
            type="text"
            placeholder="  영문,숫자 6~20자리 입력해주세요."
            name="loginId"
            onChange={handleOnChange}
          />
          <button 
            className="h-[px] w-1/4 border rounded-[6px] ml-3 border-gray-400 text-[15px]"
            type="button"
            >
            중복확인
          </button>
        </div>
        <div className="flex-col">
          {
            SignupInputProfileList.map( item => (

            <div>
              {/* { item.id === 1 || 2 ? () => setPwType(true)  : null} */}
            <p className="text-[14px] my-3">{item.title}<span className="text-red-500">*</span></p>
              <input
                className="h-[48px] border w-full rounded-[6px] diveide-[#e5e7eb] text-sm"
                type= { pwType? "password" : "text"}
                placeholder={item.placeholder}
                name={item.name}
                onChange={handleOnChange}
                //이름과 휴대폰 번호는 휴대폰 인증에서 데이터 받아와서 미리 표시해두고 싶지만
                //시간부족으로 차후 구현예정입니다.
                />
            </div>
            ))
          }
        <p className="text-[14px] my-3">자택주소<span className="text-red-500">*</span></p>
        <div className="flex mb-2">
          <DaumPostCodeModal 
            isView={isView}
            setAddress={setAddress} />
          <input
            className="h-[48px] border w-3/4 rounded-[6px] divide-[#e5e7eb] text-sm"
            type="text"
            placeholder="  우편번호"
            name="zoneCode"
            value={address?.zonecode}
          />
          <p
            className="w-1/4 border text-center rounded-[6px] ml-3 border-gray-400 text-[14px]"
            onClick={handleOpenModal}
            >
            {/* form태그안 button은 default가 submit이고 누를시 새로고침된다.
            방지하려면 button의 type을 button으로 주면된다. */}
            우편번호<br/> 찾기
          </p>
        </div>
        <div className="flex-col">
          <input
            className="h-[48px] border w-full mb-2 rounded-[6px] diveide-[#e5e7eb] text-sm"
            type="text"
            name="address"
            value={address?.address}
            />
            <input
            className="h-[48px] border w-full mb-2 rounded-[6px] diveide-[#e5e7eb] text-sm"
            type="text"
            placeholder="  상세주소"
            name="detailAddress"
            />
        </div>
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
      <button
        className="w-full"
        type='submit'
        onClick={handleOnFecth}
        >
        <p className='p-4 my-[50px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
          확인
        </p>
      </button>
      </div>
    </form>
    </>
  );
}

export default ProfileInputBody;