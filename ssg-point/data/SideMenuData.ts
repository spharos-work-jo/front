export interface MenuItem {
  url: string;
  name: string;
  img_url: string;
}

export interface MenuListType {
  main: string;
  menu: MenuItem[];
}

// 사이드 메뉴 비로그인 상태
export const menuList: MenuListType[] = [
  {
    main: "신세계 포인트",
    menu: [
      {
        url: "url1",
        name: "가맹점 소개",
        img_url: "/assets/images/sidemenu/store_intro.png",
      },
      {
        url: "url1",
        name: "포인트 카드",
        img_url: "/assets/images/sidemenu/point_card.png",
      },
      {
        url: "url1",
        name: "포인트 서비스",
        img_url: "/assets/images/sidemenu/point_service.png",
      },
      {
        url: "url1",
        name: "임시 발급 카드 인증",
        img_url: "/assets/images/sidemenu/tmp_card.png",
      },
      {
        url: "url1",
        name: "신세계그룹 뉴스레터",
        img_url: "/assets/images/sidemenu/ssg_new_letter.png",
      },
    ],
  },
  {
    main: "맴버십 서비스",
    menu: [
      {
        url: "url1",
        name: "신세계포인트 통합 ID 관리",
        img_url: "/assets/images/sidemenu/ID_manage.png",
      },
      {
        url: "url1",
        name: "클럽",
        img_url: "/assets/images/sidemenu/club.png",
      },
      {
        url: "url1",
        name: "신세계 유니버스 클럽",
        img_url: "/assets/images/sidemenu/universe_club.png",
      },
    ],
  },
  {
    main: "고객센터",
    menu: [
      {
        url: "url1",
        name: "공지사항",
        img_url: "/assets/images/sidemenu/announce.png",
      },
      {
        url: "url1",
        name: "FAQ",
        img_url: "/assets/images/sidemenu/faq.png",
      },
      {
        url: "url1",
        name: "1:1상담",
        img_url: "/assets/images/sidemenu/inquiry.png",
      },
    ],
  },
];

// 사이드 메뉴 로그인 상태
export const loginMenuList = [
  {
    main: "마이 포인트",
    menu: [
      {
        img_url: "/assets/images/sidemenu/point_history.png",
        name: "포인트 내역",
        url: "/my-point",
      },
      {
        img_url: "/assets/images/sidemenu/card_manage.png",
        name: "포인트 카드 관리",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/point_gift.png",
        name: "포인트 선물",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/partner_point_add.png",
        name: "제휴포인트 카드 관리",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/point_change.png",
        name: "포인트 전환",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/receipt_add.png",
        name: "영수증으로 적립",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/change_pwd.png",
        name: "포인트 비밀번호 변경",
        url: "/",
      },
    ],
  },
  {
    main: "마이 혜택",
    menu: [
      {
        img_url: "/assets/images/sidemenu/point_plus.png",
        name: "포인트 플러스",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/my_luck.png",
        name: "나의 운세 보기",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/my_coupon.png",
        name: "마이 쿠폰함",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/my_event.png",
        name: "마이 이벤트",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/point_tip.png",
        name: "포인트 꿀팁",
        url: "/",
      },
    ],
  },
  {
    main: "마이 라운지",
    menu: [
      {
        img_url: "/assets/images/sidemenu/shop_history.png",
        name: "쇼핑 히스토리",
        url: "/mylounge/history",
      },
      {
        img_url: "/assets/images/sidemenu/recommend.png",
        name: "추천 서비스",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/smart_receipt.png",
        name: "스마트 영수증",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/find_store.png",
        name: "매장 찾기",
        url: "/mylounge/find-store",
      },
      {
        img_url: "/assets/images/sidemenu/regular_store.png",
        name: "자주 찾는 매장",
        url: "/mylounge/regular-store",
      },
    ],
  },
  {
    main: "마이 회원정보",
    menu: [
      {
        img_url: "/assets/images/sidemenu/ad_agree.png",
        name: "광고정보 수신관리",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/service_agree.png",
        name: "서비스 동의관리",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/change_profile.png",
        name: "회원정보 수정",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/change_myPwd.png",
        name: "비밀번호 변경",
        url: "/",
      },
      {
        img_url: "/assets/images/sidemenu/quit.png",
        name: "회원 탈퇴",
        url: "/",
      },
    ],
  },
];

export const favList: string[][] = [
  ["포인트 내역", "00.png", "my_point"],
  ["포인트 카드", "01.png"],
  ["선물하기", "02.png"],
  // ['포인트 전환', '03.png'],
  // ['포인트 비밀번호', '05.png'],
  // ['영수증', '04.png'],
  // ['제휴사', '06.png'],
];

export interface favListType {
  id: number;
  name: string;
  url: string;
  img_url: string;
}

export const test: favListType[] = [
  {
    id: 0,
    name: "포인트 내역",
    url: "/",
    img_url: "/assets/",
  },
  {
    id : 1,
    name : '포인트 비밀번호',
    url : '/',
    img_url: '/assets/'
} , 
{
    id : 2,
    name : '포인트 내역',
    url : '/',
    img_url: '/assets/'
} , 
{
    id : 3,
    name : '포인트 내역',
    url : '/',
    img_url: '/assets/'
} , 

  // ['포인트 전환', '03.png'],
  // ['포인트 비밀번호', '05.png'],
  // ['영수증', '04.png'],
  // ['제휴사', '06.png'],
];
