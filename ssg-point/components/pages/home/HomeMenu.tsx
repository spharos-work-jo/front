import React from 'react'
import styles from './HomeMenu.module.css'
import Link from 'next/link'

export default function HomeMenu() {
  return (
    <div>
      <section id="main">
        <div className={styles.main_menu}>
          <ul>
            <li>
                  <Link href="event/ingevent">
                      <img src="./assets/images/nav/menu01.png" alt="이벤트" />
                      <p>이벤트</p>
                  </Link>
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
  )
}

