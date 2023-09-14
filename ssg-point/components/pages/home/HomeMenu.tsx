import React from 'react'
import styles from './HomeMenu.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeMenu() {
  return (
    <div>
      <section id="main">
        <div className={styles.main_menu}>
          <ul>
            <li>
                  <Link href="event/ingevent">
                      <Image src="/assets/images/nav/menu01.png" alt="이벤트" height={20} width={20} />
                      <p>이벤트</p>
                  </Link>
              </li>
              <li>
                  <Link href="">
                      <Image src="/assets/images/nav/menu02.png" alt="출석체크" height={20} width={20} />
                      <p>출석체크</p>
                  </Link>
              </li>
              <li>
                  <Link href="">
                      <Image src="/assets/images/nav/menu03.png" alt="럭키룰렛" height={20} width={20} />
                      <p>럭키룰렛</p>
                  </Link>
              </li>
              <li>
                  <Link href="">
                      <Image src="/assets/images/nav/menu04.png" alt="운세서비스" height={20} width={20} />
                      <p>운세서비스</p>
                  </Link>
              </li>
              <li>
                  <Link href="">
                      <Image src="/assets/images/nav/menu05.png" alt="영수증" height={20} width={20} />
                      <p>영수증</p>
                  </Link>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}

