'use client'
import PointMainBody from "@/components/pages/point/pointMain/PointMainBody";
import PointMainTop from "@/components/pages/point/pointMain/PointMainTop";
import React, { createContext } from "react";

export const AppContext = createContext<pointType>({
  totalPoint:0
});

interface pointType{
  totalPoint:number,
}

const point:pointType = {

  totalPoint : 0,

};

function Page() {



  return (  
    <>
      <section>
        <AppContext.Provider value={point}>
          
            <PointMainTop/>
            <PointMainBody/>
          
        </AppContext.Provider>
      </section>
    </>
  );
}
export default Page;