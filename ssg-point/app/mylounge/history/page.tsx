import React from "react";
import HistoryTop from "@/components/pages/shopping-history/HistoryTop";
import HistoryBottom from "@/components/pages/shopping-history/HistoryBottom";
// todo : 로그인이 안된 상태라면, /login으로 리다이렉트 시킨다.
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"



export default async function ShopHistory() {

  
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/coupon')
  }





  return (
    <section className="">
      <HistoryTop></HistoryTop>
      <HistoryBottom></HistoryBottom>
    </section>
  );
};
