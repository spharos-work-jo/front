import ProfileInputBody from "@/components/pages/profile-input/ProfileInputBody";
import ProfileInputBottom from "@/components/pages/profile-input/ProfileInputBottom";
import ProfileInputTop from "@/components/pages/profile-input/ProfileInputTop";
import React from "react";

function Page() {
  return (  
    <>
      <section className="pt-20 pb-10 block">
        <ProfileInputTop/>
        <ProfileInputBody/>        
        <ProfileInputBottom/>
      </section>
    </>
  );
}
export default Page;