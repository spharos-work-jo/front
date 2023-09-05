'use client'
import AuthBottom from "@/components/pages/auth/AuthBottom";
import AuthHeaderBottom from "@/components/pages/auth/AuthHeaderBottom";
import AuthTop from "@/components/pages/auth/AuthHeaderBottom";
import AuthHeaderTop from "@/components/pages/auth/AuthHeaderTop";
import CardAuthBody from "@/components/pages/auth/CardAuthBody";
import PhoneAuthBody from "@/components/pages/auth/PhoneAuthBody";
import { PhoneCardSelectBoxData } from "@/data/PhoneCardSelectBoxData";
import { PhoneCardBoxType } from "@/types/PhoneCardBoxType";
import { useState } from "react";

function Page(){

    const [selected,setSelected] = useState<string>("0");

    return(
        <>
            <section className="pt-20">
                <AuthHeaderTop/>
                <AuthHeaderBottom
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
