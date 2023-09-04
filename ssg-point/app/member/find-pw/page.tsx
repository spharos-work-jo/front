'use client'
import AuthBottom from "@/components/pages/auth/AuthBottom";
import AuthTop from "@/components/pages/auth/AuthTop";
import CardAuthBody from "@/components/pages/auth/CardAuthBody";
import PhoneAuthBody from "@/components/pages/auth/PhoneAuthBody";
import { PhoneCardBoxType } from "@/types/PhoneCardBoxType";
import { useState } from "react";

function Page(){

    const [selected,setSelected] = useState<string>("0");

    const PhoneCardSelectBoxData: PhoneCardBoxType[] = [
        {
            id:"0",
            title:"휴대폰인증",
            url:"/assets/images/card&phoneIcon/phoneIcon.png",
        },
        {
            id:"1",
            title:"카드인증",
            url:"/assets/images/card&phoneIcon/cardIcon.png",
        }
    ];

    return(
        <>
            <section className="pt-20">
                <AuthTop
                    typeList={PhoneCardSelectBoxData}
                    selected={selected}
                    setSelected={setSelected}
                />
                {
                    selected === "0" ? <PhoneAuthBody/> : <CardAuthBody/>

                }
                <AuthBottom/>
            </section>
        </>
    )
}
export default Page;
