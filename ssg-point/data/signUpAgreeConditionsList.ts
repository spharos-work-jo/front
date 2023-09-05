export interface signUpAgreeListType{
  id:number;
  title:string;
  check:boolean;
}

export const signUpAgreeList:signUpAgreeListType[] = [
  {
    id:1,
    title:"[필수] 휴대전화 인증 서비스 이용약관",
    check: false
  },
  {
    id:2,
    title:"[필수] 고유식별정보 처리 동의",
    check: false
  },
  {
    id:3,
    title:"[필수] 통신사 이용약관 동의",
    check: false
  },
  {
    id:4,
    title:"[필수] 개인정보 수집/이용동의",
    check: false
  },
]