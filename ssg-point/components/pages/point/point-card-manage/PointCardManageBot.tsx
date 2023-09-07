import React from 'react'
import Link from 'next/link'

const PointCardManageBot = () => {
  return (
    <div>
      <div className='bg-[#fbfbfb] p-[20px] [border-bottom-width:1px] [border-bottom-style:solid] [border-bottom-color:rgb(232,232,232)] mb-[40px]'>
        <div className='relative pb-[8px]'>
          <p className='text-[14px] leading-[24px] pr-[30px]'>
            [필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
          </p>
          <button className='agree_show absolute right-0 top-0 w-[24px] h-[24px]'/>
        </div>
        <div className='relative inline-block align-top text-[0]'>
          <input className='absolute left-0 top-0 w-[24px] h-[24px] rounded-xl border-none' true-value={"Y"} false-value={"N"}/>
          <label className='mg_label block min-h-[22px] pt-[1px] pl-[30px] text-[14px] leading-[18px] break-keep align-middle'>
            동의합니다.
          </label>
        </div>
      </div>


        <div>
        <div className='pr-[20px] pb-[40px] pl-[20px]'>
          <div className='pb-[16px] box-border'>
            <p className='tit pb-[8px] text-[13px] leading-[21px]'>
              제휴 멤버십 선택
              <span className='hidden'>필수항목</span>
            </p>
            <div className='w-full'>

            <select className='pm_sel bg-[#f8f8f8] block w-full h-[48px] pr-[32px] pl-[15px] box-border [border-width:1px] [border-style:solid] [border-color:rgb(232,232,232)] rounded-lg text-[14px] relative [z-index:1] [color:#000]' disabled={true}>
              <option value={1}>제휴사를 선택하세요</option>
              <option value={2}>삼성전자 포인트</option>
              <option value={3}>대한항공 마일리지</option>
              <option value={4}>아시아나 마일리지</option>
            </select>

            </div>
            </div>

            <div className='pb-[16px] box-border'>
            <p className='tit pb-[8px] text-[13px] leading-[21px]'>
              카드 번호
              <span className='hidden'>필수항목</span>
            </p>

            <div className='flex w-full border-x border-y [border-style:solid] [border-color:rgb(232,232,232)] rounded-lg'>

              <div className='cardNum flex-1 m-0 p-0 relative'>
                <label className='blind absolute table box-border w-full h-[48px] pr-[16px] pl-[16px] leading-[24px] text-[14px] [color:#767676]'>
                  {/* <span className='table-cell align-middle text-left break-keep [color:#767676]'>카드번호 첫번째 네자리</span> */}
                </label>
                <input className=' w-full h-[48px] text-center border-none' id='cardNum10' type='tel' maxLength={4} disabled={true}/>

              </div>

              <div className='cardNum flex-1 relative'>
                <label className='blind absolute table box-border w-full h-[48px] pr-[16px] pl-[16px] leading-[24px] text-[14px] [color:#767676]'>
                  {/* <span className='table-cell align-middle text-left break-keep [color:#767676]'>카드번호 두번째 네자리</span> */}
                </label>
                <input className=' w-full h-[48px] text-center border-none' id='cardNum11' type='tel' maxLength={4} disabled={true}/>
              </div>

              <div className='cardNum flex-1 relative'>
                <label className='blind absolute table box-border w-full h-[48px] pr-[16px] pl-[16px] leading-[24px] text-[14px] [color:#767676]'>
                  {/* <span className='table-cell align-middle text-left break-keep [color:#767676]'>카드번호 세번째 네자리</span> */}
                </label>
                <input className=' w-full h-[48px] text-center border-none' id='cardNum12' type='tel' maxLength={4} disabled={true}></input>
              </div>

              <div className='flex-1 relative'>
                <label className='blind absolute table box-border w-full h-[48px] pr-[16px] pl-[16px] leading-[24px] text-[14px] [color:#767676]'>
                  {/* <span className='table-cell align-middle text-left break-keep [color:#767676]'>카드번호 마지막 네자리</span> */}
                </label>
                <input className='w-full h-[48px] text-center border-none' id='cardNum13' type='tel' maxLength={4} disabled={true}></input>
              </div>
            </div>
            </div>

            <div className='pt-[40px]'>
              <button className='btn_pm block rounded-lg w-full text-center h-[48px] text-[14px] leading-[24px] font-[550] box-border'>
                <Link href={''} className=''>등록하기</Link>
              </button>
            </div>

      </div>
      </div>
    </div>
  )
}

export default PointCardManageBot