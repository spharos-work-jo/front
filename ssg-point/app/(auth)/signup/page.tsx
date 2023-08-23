import Footer from '@/components/layout/Footer'
import HeaderTop from '@/components/layout/HeaderTop'
import React from 'react'
import '../signup/style.css'
function Page(){
    return (  
        <>
        <section className="px-5 py-10 block">
          <HeaderTop passedData='회원가입'/> 
              <div className="text-2xl px-5 py-8">
                <p>
                  신세계포인트<br/>
                  <strong>통합ID 회원가입</strong>으로<br/>
                  다양한 혜택을 누리세요!
                </p>
              </div>
              <div className='px-5 pt-0 pb-8'>
                <ol className='step_list'>
                  <li className='step1'>
                    <span className='txt0'>STEP.1</span>
                    <span className='txt1'>본인인증</span>
                  </li>
                  <li className='step2'>
                    <span className='txt0'>STEP.2</span>
                    <span className='txt1'>약관동의</span>
                  </li>
                  <li className='step3'>
                    <span className='txt0'>STEP.3</span>
                    <span className='txt1'>정보입력</span>
                  </li>
                  <li className='step4'>
                    <span className='txt0'>STEP.4</span>
                    <span className='txt1'>가입완료</span>
                  </li>
                </ol>
                <div className='btn_box'>
                  <a href='#' className='btn_primary'>회원가입</a>
                  <p className='sub_txt0'>만 14세 미만 아동은 회원가입할 수 없습니다.</p>
                </div>
              </div>
            </section>
          <Footer/>
        </>
        
    )
}
export default Page