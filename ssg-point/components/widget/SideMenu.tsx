"use client";

import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import Logo from "../ui/header/Logo";
import Link from "next/link";
import Image from "next/image";

const favUrl =
  "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_big_";

interface MenuItem {
  url: string;
  name: string;
  img_url: string;
}

interface MenuList {
  main: string;
  menu: MenuItem[];
}

function SideMenu(props: {
  isOpened: Boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  interface User {
    name: string;
    email?: string;
    phone?: string;
    point: string;
  }
  // 로그인 됐다고 가정
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>({name: '배송윤', point: '0'});

  // const user: User = { name: "배송윤", point: "0" };

  const { isOpened, setIsOpened } = props;
  const ssgPointLogoUrl =
    "https://m.shinsegaepoint.com/img/logo_header.840b502c.gif";

  // todo : 타입 변환 필요
  const favList: any[] = [
    ["포인트 내역", "00.png", "my_point"],
    ["포인트 카드", "01.png"],
    ["선물하기", "02.png"],
    // ['포인트 전환', '03.png'],
    // ['포인트 비밀번호', '05.png'],
    // ['영수증', '04.png'],
    // ['제휴사', '06.png'],
  ];

  // todo : 타입 변환 필요
  // 기본값으로 로그인 전 메뉴로 구성하고, 로그인이 확인되면, 마이페이지 추가해서 보여주기
  const menuList: MenuList[] = [
    {
      main: "신세계 포인트",
      menu: [
        {
          url: "url1",
          name: "가맹점 소개",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 카드",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 서비스",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "가맹점 소개",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 카드",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 서비스",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
      ],
    },
    {
      main: "맴버십 서비스",
      menu: [
        {
          url: "url1",
          name: "가맹점 소개",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 카드",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 서비스",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
      ],
    },
    {
      main: "고객센터",
      menu: [
        {
          url: "url1",
          name: "가맹점 소개",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 카드",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
        {
          url: "url1",
          name: "포인트 서비스",
          img_url:
            "https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_40.png",
        },
      ],
    },
  ];
  console.log(user);
  return (
    <>
      <div
        className={
          isOpened
            ? `${styles.sidemenuwrap} ${styles.open}`
            : `${styles.sidemenuwrap}`
        }
      >
        <div className="side_header pt-5 pl-5">
          <Logo
            url={"/"}
            imgUrl={ssgPointLogoUrl}
            imgAlt={"신세계포인트 로고"}
          ></Logo>
        </div>
        {/* 로그인 박스 */}
        <div className={styles.login_signup}>
          {user ? (
            <>
              <div>
                <p className="text-[18px] leading-[26px] inline">
                  <strong
                    className="relative inline font-extrabold 
                after:bg-[#ffdfb5] after:absolute
                after:w-[100%] after:inline-block after:h-[15px] after:z-[-1] after:left-0 after:bottom-0"
                  >
                    {user.name}
                  </strong>
                  님 반갑습니다.
                </p>
              </div>
              <p className="flex itmes-center mt-[16px] text-[20px] font-bold leading-6">
                {user.point}
                <Image
                  alt="point"
                  src={
                    "https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png"
                  }
                  width={27}
                  height={24}
                  style={{ display: "inline-block", marginLeft: "7px" }}
                ></Image>
              </p>
            </>
          ) : (
            <div>
              <p className={styles.login_txt}>로그인해 주세요</p>
            </div>
          )}

          <div className={styles.btn_box}>
            {user ? (
              <>
                <Link className={styles.btn_white} href={"/logout"}>
                  로그아웃
                </Link>
                <Link className={styles.btn_sub} href={"/mypage"}>
                  마이페이지
                </Link>
              </>
            ) : (
              <>
                <Link className={styles.btn_primary} href={"/login"}>
                  로그인
                </Link>
                <Link className={styles.btn_sub} href={"/signup"}>
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>

        {/* 즐겨찾기 메뉴 리스트 */}
        <FavList favList={favList}></FavList>

        {/* 메뉴 박스 */}
        <MenuBox menuList={menuList}></MenuBox>
        <button
          className={styles.close_btn}
          onClick={() => setIsOpened(false)}
        ></button>
      </div>
      <div
        className={isOpened ? styles.overlay : ""}
        onClick={() => setIsOpened(false)}
      ></div>
    </>
  );
}

export default SideMenu;

function FavList(props: { favList: any }) {
  return (
    <div className={styles.side_fav}>
      <div className={styles.side_fav_list}>
        {props.favList.map((fav: string, idx: number) => (
          <p className={styles.fav_menu_box} key={idx}>
            <Link href={fav[0]}>
              <img src={`${favUrl}${fav[1]}`} />
            </Link>
            {fav[0]}
          </p>
        ))}
      </div>
      <div className={styles.select_fav_box}>
        <button className={styles.ico_btn}></button>
        <span className={styles.select_txt}>
          <button className={styles.fav_sel_txt}>즐겨찾기 메뉴 선택</button>
          에서
          <br />
          나만의 즐겨찾기 메뉴를 설정할 수 있어요!
        </span>
      </div>
    </div>
  );
}

function MenuBox(props: { menuList: MenuList[] }) {
  const { menuList } = props;
  return (
    <div className={styles.shortcut_wrap}>
      <div className={styles.shortcut_menu_box}>
        {menuList.map((item, idx) => (
          <div key={idx}>
            <h3>{item.main}</h3>
            <ul className={styles.menu_list}>
              {item.menu.map((mm, idx) => (
                <li key={idx} className="w-1/2 sm:w-1/3">
                  <Link href={mm.url}>
                    <img src={mm.img_url}></img>
                    {mm.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
