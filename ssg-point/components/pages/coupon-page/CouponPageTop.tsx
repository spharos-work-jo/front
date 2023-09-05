import React from 'react'
import styles from './CouponPageTop.module.css'

const CouponPageTop = () => {
  return (
    <div>
      <h3 className="hidden">쿠폰</h3>
        <div className={styles.coupon_intro_box} >
          <div className={styles.coupon_top}>
            <div className={styles.coupon_tit}>
              <strong className={styles.coupon_tit2}>
                쇼핑 할인에서 제휴 우대까지<br />
                신세계포인트 회원만<br />
                누릴 수 있는 혜택!
              </strong>
              <p className='text-[13px] leading-5 color: rgb-000'>원하는 쿠폰을 다운로드하고<br />
                마이 쿠폰함에 쓱- 담아 사용해 보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CouponPageTop