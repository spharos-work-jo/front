import CertTop from "@/components/pages/cert/CertTop";
import CertBody from"@/components/pages/cert/CertBody";

function Page(){
    return(
        <>
            <section className="pt-20 pb-10 block">
                <CertTop/>
                <CertBody/>
            </section>
        </>
    )
}
export default Page;
