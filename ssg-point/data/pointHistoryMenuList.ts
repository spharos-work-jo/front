export interface pointHistoryMenuListType{
  id:string,
  name:string,
  pointType:string[]
}
export const pointHistoryMenuList:pointHistoryMenuListType[] = [
  {
    id:"1",
    name:"전체",
    pointType:["ETC"]
  },
  { 
    id:"2",
    name:"적립/사용",
    pointType:["EARN"]
  },
  {
    id:"3",
    name:"선물",
    pointType:["G"]
  },
  {
    id:"4",
    name:"전환",
    pointType:["ETC"]
  }
]