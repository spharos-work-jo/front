import SignupCompletionBottom from "@/components/pages/signupCompletion/SignupCompletionBottom";
import SignupCompletionTop from "@/components/pages/signupCompletion/SignyupCompletionTop";
import React from "react";

function Page() {
  return (  
    <>
      <section className="my-20">
        <SignupCompletionTop/>
        <SignupCompletionBottom/>
      </section>
    </>
  );
}
export default Page;