export interface SignupInputProfileListType{
  id:number,
  placeholder:string,
  title:string,
  name:string,
}
export const SignupInputProfileList:SignupInputProfileListType[] = [
  {
    id:1,
    placeholder:"  영문 대/소문자,숫자,특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해주세요.",
    title:"비밀번호",
    name:"password",
  },
  {
    id:2,
    placeholder:"  입력하신 비밀번호를 다시 한번 입력해주세요.",
    title:"비밀번호 확인",
    name:"checkPassword",
  },
  {
    id:3,
    placeholder:" ",
    title:"이름",
    name:"userName"
  },
  {
    id:4,
    placeholder:" ",
    title:"휴대폰번호",
    name:"phone"
  },
]