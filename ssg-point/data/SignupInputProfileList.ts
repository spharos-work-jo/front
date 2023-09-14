export interface SignupInputProfileListType{
  id:number,
  placeholder:string,
  title:string,
  name:string,
  message:string
}
export const SignupInputProfileList:SignupInputProfileListType[] = [
  {
    id:1,
    placeholder:"  영문 대/소문자,숫자,특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해주세요.",
    title:"비밀번호",
    name:"password",
    message:"비밀번호는 8자 이상 20자 이하로 입력해주세요."
  },
  {
    id:2,
    placeholder:"  입력하신 비밀번호를 다시 한번 입력해주세요.",
    title:"비밀번호 확인",
    name:"checkPassword",
    message:"비밀번호가 서로 다릅니다."
  },
]