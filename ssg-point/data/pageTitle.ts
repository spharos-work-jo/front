export interface PageTitleType {
    path: String,
    title: String,
  }
  
  export const pageTitle : PageTitleType[] = [
    {path: "",title: "Home",},
    {path: "coupon", title: "쿠폰",},
    {path: "ingevent", title: "이벤트 - 진행 이벤트",},
    {path: "endevent", title: "이벤트 - 종료 이벤트",},
    {path: "winevent", title: "이벤트 - 당첨확인",},
    {path: "mylounge", title: "마이라운지",},
    {path: "signup",title:"회원가입",},
    {path: "login", title:"로그인",},
  ]