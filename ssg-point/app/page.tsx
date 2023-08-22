import Header from '@/components/layout/Header'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='mt-10' style={{marginTop: '120px'}}>
        <section id="main_event_banner">
        <div className="event_banner_wrap">
            <img src="./assets/images/event/main_event01.jpg" alt="이벤트 배너" />
            <div className="progress_nav_wrap">
                <div className="progress_bar"></div>
                <div className="progress_step">
                    <p><span>1</span>/6</p>
                </div>
            </div>
        </div>
    </section>

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

    </main>

  )
}
