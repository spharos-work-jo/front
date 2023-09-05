import Image from 'next/image'

function ConditionsTop() {

  const iconUrl : string = "/assets/images/signupIcon/";

  return (  
    <>
      <div className="px-5 py-5 flex w-110">
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20}/>
      </div>
      <div className="px-5">
        <p className="text-2xl pb-1">
          약관동의
        </p>
        <button
          type='button'
          className='h-[48px] w-full rounded-[8px] bg-black mt-8 mb-3'
        >
        <p className='text-white text-sm'>모두 동의합니다.</p>
        </button>
        <span className="text-[13px] text-gray-400 w-full">
          <b>※전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며,<br/>
          개별적인 동의 선택도 가능합니다.선택항목에 대한 동의를 거부하시더라도<br/>
          필수 서비스 이용은 가능합니다.
          </b>
        </span>
      </div>
    </>
  );
}

export default ConditionsTop;