import { AgreeConditionsList } from "@/data/AgreeCondotionsList";
import { provideInforCompanyList } from "@/data/provideInforCompanyList";
import Link from "next/link";

function ConditionsBottom() {
  return (  
    <>
      <div className="px-5 mt-11">
        <p className="text-xl"><b>신세계포인트 통합회원</b></p>
          <b>
            {
              provideInforCompanyList.map(item => (
                
                <span className="text-xs">
                <b>(주)</b> {item.name},  
                </span>
              ))
            }
          <span className="text-xs"> 귀중</span>
          </b>
          {
            AgreeConditionsList.map( item =>(
              <li className="flex text-[13px] my-5" key={item.id}>
              <input id="agreeProvideConditions" name="agreeAllConditions" type="checkbox" className="w-5 h-5 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"/>
              <label htmlFor="agreeProvideConditions">{item.content}</label>
            </li>
            ))
          }
          <Link href="signup/profile-input">
            <button className="w-full" type='submit'>
              
              <p className='p-4 mt-[30px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
                다음
              </p>
            </button>
          </Link>
      </div>
    </>
  );
}

export default ConditionsBottom;