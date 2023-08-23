import React from "react";
import HistoryTop from "@/components/pages/ShoppingHistory/HistoryTop";
import HistoryBottom from "@/components/pages/ShoppingHistory/HistoryBottom";
// todo : 로그인이 안된 상태라면, /login으로 리다이렉트 시킨다.

const ShopHistory = () => {
  return (
    <section className="pt-[4rem]">
      <HistoryTop></HistoryTop>
      <HistoryBottom></HistoryBottom>
    </section>
  );
};

export default ShopHistory;
