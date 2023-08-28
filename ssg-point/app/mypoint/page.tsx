import PointMainBottom from "@/components/pages/point/pointMain/PointMainBottom";
import PointMainTop from "@/components/pages/point/pointMain/PointMainTop";
import React from "react";

function Page() {
  return (  
    <>
      <section className="pt-20 pb-10 block">
        <PointMainTop/>
        <PointMainBottom/>
      </section>
    </>
  );
}

export default Page