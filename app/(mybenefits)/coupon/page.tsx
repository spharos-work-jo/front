"use client"
import React, { useState } from 'react';

const CouponComponent = () => {
  const [couponNumber, setCouponNumber] = useState('');
  const [showRegisterBox, setShowRegisterBox] = useState(false);

  const handleCouponNumberChange = (event : any) => {
    setCouponNumber(event.target.value);
  };

  const handleRegisterClick = () => {
    // Perform coupon registration logic here
    // You can use the `couponNumber` state for the entered coupon number
    // For example, you can make an API call to register the coupon

    // After registration, you might want to show a success message or update the UI
    // This is just a placeholder function
    // For demonstration purposes, this function doesn't include the actual registration logic
    console.log(`Registering coupon with number: ${couponNumber}`);
  };

  return (
    <div className="coupon_intro_box">
      <div className="coupon_top">
        <div className="coupon_tit">
          <strong className="sp_tit2">
            쇼핑 할인에서 제휴 우대까지
            <br />신세계포인트 회원만
            <br />누릴 수 있는 혜택!
          </strong>
          <p className="sp_txt5">
            원하는 쿠폰을 다운로드하고
            <br />마이 쿠폰함에 쓱- 담아 사용해 보세요.
          </p>
        </div>
      </div>
      <div className="coupon_bot">
        <div className="coupon_banner"></div>
        <div className="coupon_button">
          <ul>
            <li className="my_coupon">
              <a href="javascript:;">마이쿠폰함으로 이동</a>
            </li>
            <li className="register_coupon">
              <button type="button" onClick={() => setShowRegisterBox(true)}>
                쿠폰 등록
              </button>
            </li>
          </ul>
          {showRegisterBox && (
            <div className="register_coupon_box">
              <p className="sp_txt1">
                신세계포인트 쿠폰 등록을 위해
                <br />
                <span>쿠폰 번호를 입력</span>해 주세요.
              </p>
              <div className="input_box coupon_num">
                <input
                  type="text"
                  id="couponNum"
                  value={couponNumber}
                  onChange={handleCouponNumberChange}
                />
                <label htmlFor="couponNum">
                  <span className="in_box">대소문자 구분하여 정확히 입력해 주세요.</span>
                </label>
                <button className="del" style={{ display: 'none' }}>
                  삭제
                </button>
              </div>
              <div className="btn_box">
                <button className="btn1 gray" onClick={() => setShowRegisterBox(false)}>
                  다음에 하기
                </button>
                <button className="btn_primary" onClick={handleRegisterClick}>
                  등록하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CouponComponent;