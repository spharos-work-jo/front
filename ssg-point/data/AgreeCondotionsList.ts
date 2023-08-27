export interface AgreeConditionsListType{
  id:number,
  content:string
}

export const AgreeConditionsList :AgreeConditionsListType[] = [
  {
    id:1,
    content:"[필수] 신세계포인트 회원 이용약관"
  },
  {
    id:2,
    content:"[필수] 개인정보 수집 및 이용동의"
  },
  {
    id:3,
    content:"[필수] 이마트/신세계 공동 개인정보 수집 및 이용 동의"
  },
  {
    id:4,
    content:"[필수] 통합회원 서비스 제공 개인정보 제3자 제공 동의"
  },
  {
    id:5,
    content:"[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의"
  },
  {
    id:6,
    content:"[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의"
  },
]

