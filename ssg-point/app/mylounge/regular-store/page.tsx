import RegularHeader from "@/components/pages/my-regular-store/RegularHeader";
import RegularReg from "@/components/pages/my-regular-store/RegularReg";
import React from "react";

const RegularStore = () => {
  return (
    <section className="pt-[4rem]">
      <RegularHeader></RegularHeader>
      <RegularReg></RegularReg>
    </section>
  );
};

export default RegularStore;
