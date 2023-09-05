import ProfileInputBody from "@/components/pages/profile-input/ProfileInputBody";
import ProfileInputTop from "@/components/pages/profile-input/ProfileInputTop";
import React from "react";

function Page() {
  return (  
    <>
      <section className="pt-20 pb-10 block">
        <ProfileInputTop/>
        <ProfileInputBody/>        
      </section>
    </>
  );
}
export default Page;