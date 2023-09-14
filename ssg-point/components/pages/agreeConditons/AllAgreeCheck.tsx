import agreeStates from '@/data/atom';
import { selector } from 'recoil';

const AllAgreeCheck = selector({
  key:'allAgreeCheck',
  get: ({get}) => {
    const agreeState = get(agreeStates) ? true : false
    
    return agreeState
    
  }
})
export default AllAgreeCheck;