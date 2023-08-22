import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer_box">
      <ul className="pb-[20px]">
        <li>
          <Link href={"/"}>서비스 이용약관</Link>
        </li>
        <li>
          <Link className="text-[#d51e1e]" href={"/"}>
            개인정보 처리방침
          </Link>
        </li>
      </ul>
      <div className="info_box">
        <p className="ssg_cs">신세계 포인트 고객센터</p>
        <button className="tel">1899-4349</button>
        <p className="op_time">
          {" "}
          운영시간
          <span>:</span>
          <em>09</em>시 -<em>18</em>시
          <br />
          점심시간
          <span>:</span>
          <em>12</em>시 -<em>13</em>시
          <br />
          (공휴일 제외)
        </p>
      </div>
      <div className="txt_cnt">
        <p className="txt">
          <span className="txt0">
            ㈜이마트 서울시 중구 세종대로 7길 37(순화동)
          </span>
          <br />
          <span className="txt1">대표자 : 강희석</span>
          <span className="txt2">사업자등록번호 : 206-86-50913</span>
        </p>
        <p className="copyright">
          COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="we_mark">
        <img
          src={"https://m.shinsegaepoint.com/img/wa_mark.144ed89e.png"}
        ></img>
      </div>
    </div>
  );
};

export default Footer;
