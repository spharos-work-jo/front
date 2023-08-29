import React from "react";

function CardAuthBody() {
  return (  
    <>
    <div className="px-5">
    <div className="flex justify-center items-center text-xl">
      <p className="my-[50px]">
        보유하신 <b>신용/체크카드</b>로<br/>
        본인인증이 가능합니다.
      </p>
      </div>
      <button className="w-full" type='submit'>
        <p className='p-4 mt-3 my-[50px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
          신용/체크카드 인증
        </p>
      </button>
      </div>
    </>
  );
}

export default CardAuthBody;