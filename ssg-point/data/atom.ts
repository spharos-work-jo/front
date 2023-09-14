import { atom } from "recoil";

let allAgree = atom({
  key:'IsAllAgree',
  default:false
});
let agreeState = atom({
  key:'agreeState',
  default:''
})
export default allAgree;