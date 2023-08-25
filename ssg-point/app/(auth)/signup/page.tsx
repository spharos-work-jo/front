import React from 'react'
import SignupInfoTop from "@/components/pages/signup/signupInfoTop"
import SignupInfoBottom from "@/components/pages/signup/signupInfoBottom"

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