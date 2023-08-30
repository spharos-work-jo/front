import { conditiosModalData } from "@/data/conditonsModalData";
import React from "react";

function ConditionsModal (props:{
  id:string,
  state:boolean
}) {

  const id:string = props.id;

  const data = conditiosModalData.find( item => item.id === id);

  return (  
    
    <div>
      <div className="backdrop-brightness-50 w-50 h100 ">
        <p>{data?.name}</p>
        <p>{data?.content}</p>
        <p>모달입니다.</p>
      </div>
    </div>
    

  );
}

export default ConditionsModal;