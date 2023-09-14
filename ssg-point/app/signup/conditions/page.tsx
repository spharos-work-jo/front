'use client'
import ConditionsBottom from "@/components/pages/agreeConditons/ConditionsBottom";
import ConditionsTop from "@/components/pages/agreeConditons/ConditionsTop";
import React from "react";

function Page() {

  return(
    <>
      <section className="pt-20 pb-10 block">
        
            <ConditionsTop/>
            <ConditionsBottom/>
        
      </section>
    </>
  );
}
export default Page;