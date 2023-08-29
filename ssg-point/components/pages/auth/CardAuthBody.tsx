import React from "react";

function CardAuthBody() {
  return (  
    <>
    <div className="w-full text-xl">
      <div className="flex justify-center flex-wrap">
      <p className="my-[50px]">
        보유하신 <b>신용/체크카드</b>로<br/>
        본인인증이 가능합니다.
      </p>
      <button className="w-[300px]" type='submit'>
        <p className='py-4 mt-3 my-[50px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
          <b>신용/체크카드 인증</b>
        </p>
        </button>
        </div>
      </div>
    </>
  );
}

export default CardAuthBody;