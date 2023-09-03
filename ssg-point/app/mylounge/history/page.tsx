import React from "react";
import HistoryTop from "@/components/pages/shopping-history/HistoryTop";
import HistoryBottom from "@/components/pages/shopping-history/HistoryBottom";
// todo : 로그인이 안된 상태라면, /login으로 리다이렉트 시킨다.

const ShopHistory = () => {
  return (
    <section className="">
      <HistoryTop></HistoryTop>
      <HistoryBottom></HistoryBottom>
    </section>
  );
};

export default ShopHistory;
