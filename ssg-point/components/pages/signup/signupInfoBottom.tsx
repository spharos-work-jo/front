import React from "react";
import styles from "./signupInfoBottom.module.css";

const signupInfoBottom = () => {
    return(
        <>
        <div className="px-5 pb-8">
                <ol className="relative pb-90 h-92">
                  <li className="relative box-border break-after-auto">
                    <span className="">STEP.1본인인증</span>
                  </li>
                  <li className={styles.step_list_li}>
                    <span className={styles.txt0}>STEP.2</span>
                    <span className={styles.txt1}>약관동의</span>
                  </li>
                  <li className={styles.step3}>
                    <span className={styles.txt0}>STEP.3</span>
                    <span className={styles.txt1}>정보입력</span>
                  </li>
                  <li className={styles.step4}>
                    <span className={styles.txt0}>STEP.4</span>
                    <span className={styles.txt1}>가입완료</span>
                  </li>
                </ol>
                <div className={styles.btn_box}>
                  <a href='signup/cert' className={styles.btn_primary}>회원가입</a>
                  <p className={styles.sub_txt0}>만 14세 미만 아동은 회원가입할 수 없습니다.</p>
                </div>
              </div>
              </>
    );
};
export default signupInfoBottom;