import React from 'react'

export const CouponPage = () => {

    
  return (

    <div className="coupon_intro_box">
        <div className="coupon_top">
            <div className="coupon_tit">
                <strong className="sp_tit2">쇼핑 할인에서 제휴 우대까지
                <br className="">신세계포인트 회원만 </br>
                <br className="">누릴 수 있는 혜택! </br>
                </strong>
                <p className="sp_txt5">원하는 쿠폰을 다운로드하고
                <br className="">마이 쿠폰함에 쓱- 담아 사용해 보세요. </br>
                </p>
            </div>
        </div>
        
        <div className="coupon_bot">
            <div className="coupon_banner">
                </div>
                <div className="coupon_button">
                    <ul className="">
                        <li className="my_coupon">
                            <a className="" href="javascript:;">마이쿠폰함으로 이동</a>
                        </li>
                    
                        <li className="register_coupon">
                           <button className="" type="button">쿠폰 등록</button>
                        </li>
                    </ul>
                <div className="register_coupon_box" style="display: none;">
                    <p className="sp_txt1">신세계포인트 쿠폰 등록을 위해<br className="">
                        <span className="">쿠폰 번호를 입력</span>해 주세요.
                    </p><div className="input_box coupon_num">
                        <input className="" type="text" id="couponNum">
                            <label for="couponNum">
                                <span className="in_box">대소문자 구분하여 정확히 입력해 주세요.</span>
                            </label>
                        <button className="del" style="display: none;">삭제</button>
                        </div>
                        <div className="btn_box">
                            <button className="btn1 gray">다음에 하기</button>
                            <button className="btn_primary">등록하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );

}
