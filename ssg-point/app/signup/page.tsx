import React from 'react'

import SignupInfoTop from "@/components/pages/signup/SignupInfoTop"
import SignupInfoBottom from "@/components/pages/signup/SignupInfoBottom"

function Page(){
    return (  
        <>
            <section className="pt-20 pb-10 block">
              <SignupInfoTop />  
              <SignupInfoBottom />  
            </section>
        </>
    );
};
export default Page;
