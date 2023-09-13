export interface pointHistoryMenuListType{
  id:string,
  name:string,
  pointType:string[]
}
export const pointHistoryMenuList:pointHistoryMenuListType[] = [
  {
    id:"1",
    name:"전체",
    pointType:["ETC","EVENT_REWARD","GIFT","EARN","USE","EXPIRE",]
  },
  { 
    id:"2",
    name:"적립/사용",
    pointType:["EARN","USE"]
  },
  {
    id:"3",
    name:"선물",
    pointType:["GIFT"]
  },
  {
    id:"4",
    name:"전환",
    pointType:["ETC"]
  }
]