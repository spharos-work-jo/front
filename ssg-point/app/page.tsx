import EventBanner from "@/components/pages/event/EventBanner";
import styles from './page.module.css'
import Link from "next/link";

// import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/css';

// export interface EventType {
//     id : string,
//     img_url : string
//     }

// export const eventData: EventType[] = [
//     { id: '1', img_url: "https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230728/9b27af5c-59cb-4246-9778-0a1dfb2b21a7.jpg" }, 
//     { id: '2', img_url: "https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230728/9b27af5c-59cb-4246-9778-0a1dfb2b21a7.jpg" },
//     { id: '3', img_url: "https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230728/9b27af5c-59cb-4246-9778-0a1dfb2b21a7.jpg" },
//     ];

export default () => {

  return (
    <div>
        <h3 className="hidden">홈</h3>

        <div className="main_visual_banner">
            <h3 className="hidden">메인 비주얼 배너</h3>

            <div className="swiper_container">
                <ul className="swiper_wrapper flex box-content">
                    <li className="swiper-slide">
                        
                        {/* <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper> */}


                    </li>


                </ul>


            </div>

        </div>


    <nav style={{marginTop: '200px'}}>
        <ul className="flex gap-10">
          <li>
            <Link href="/event/ingevents">
                
                <img src="./assets/images/event/main_event01.jpg" />
                
                
            </Link>
          </li>
        </ul>
     </nav>



    <section id="main">
        <div className={styles.main_menu}>
                <ul>
                    <li>
                        <a href="#">
                            <img src="./assets/images/nav/menu01.png" alt="이벤트" />
                            <p>이벤트</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./assets/images/nav/menu02.png" alt="출석체크" />
                            <p>출석체크</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./assets/images/nav/menu03.png" alt="럭키룰렛" />
                            <p>럭키룰렛</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./assets/images/nav/menu04.png" alt="운세서비스" />
                            <p>운세서비스</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./assets/images/nav/menu05.png" alt="영수증" />
                            <p>영수증</p>
                        </a>
                    </li>
                </ul>
        </div>
    </section>

    </div>



  );
}