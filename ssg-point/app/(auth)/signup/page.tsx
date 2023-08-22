import Footer from '@/components/layout/Footer'
import HeaderTop from '@/components/layout/HeaderTop'
import React from 'react'


function Page(){
    return (  
        <>
          <HeaderTop />
            <section className="px-5 py-16">
              <div>
                <p className="text-2xl">
                  신세계포인트<br/>
                  <strong>통합ID 회원가입</strong>으로<br/>
                  다양한 혜택을 누리세요!
                </p>
              </div>
              <div className='pt-10 flex h-70'>
                <img src={"https://m.shinsegaepoint.com/img/ico_step.7dd5193d.png"} className='shrink w-18 h-80'/>
                <ul className='flex-none'>
                  <li className='border-solid border-b py-7 pl-3'>STEP.1 <b>본인인증</b></li>
                  <li className='border-solid border-b py-7 pl-3'>STEP.2 <b>약관동의</b></li>
                  <li className='border-solid border-b py-7 pl-3'>STEP.3 <b>정보입력</b></li>
                  <li className='border-solid border-b py-7 pl-3'>STEP.4 <b>가입완료</b></li>
                </ul>
              </div>
              {/* <div className='text-center py-12 bg-gradient-to-r from-#ff8a00 via-rgb(248, 180, 4) to-#b258cb'> */}
              <div className='text-center py-12'>
                <div className='content-center w-70 h-12 text-center bg-gradient-to-r from-orange-500 via-yellow-500) to-purple-500 '>
                  <a href='#' className='text-[13px]'><b>회원가입</b></a>
                </div>
                <p className='text-[7px] text-slate-500 my-5'>만 14세 미만 아동은 회원가입할 수 없습니다.</p>
              </div>
            </section>
          <Footer/>
        </>
        
    )
}
export default Page