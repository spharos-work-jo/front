import KakaoMap from "@/components/pages/find-regular-store/KakaoMap";
import NaverMaps from "@/components/pages/find-regular-store/NaverMaps";
import React, { useEffect } from "react";

const FindStore = () => {
  return (
    <section className="pt-[4rem] h-[100vh]">
      <KakaoMap></KakaoMap>
    </section>
  );
};

export default FindStore;
