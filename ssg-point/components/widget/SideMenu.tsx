'use client'

import React from 'react'
import styles from './SideMenu.module.css'
import Logo from '../ui/header/Logo'
import Link from 'next/link'


const favUrl = 'https://mycloudmembership-prd.s3.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/images/menu-images-renewal/menu_big_'
const favList: any[] = [
  ['포인트 내역', '00.png', 'my_point'],
  ['포인트 카드', '01.png'],
  ['선물하기', '02.png'],
  // ['포인트 전환', '03.png'],
  // ['포인트 비밀번호', '05.png'],
  // ['영수증', '04.png'],
  // ['제휴사', '06.png'],
]
function SideMenu(props : {isOpened: Boolean, setIsOpened: React.Dispatch<React.SetStateAction<Boolean>>}) {

  const { isOpened, setIsOpened } = props
  const ssgPointLogoUrl = 'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'

  
  return (
    <>
      <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}`}>
        <div className='side_header pt-5 pl-5' >
          <Logo url={'/'} imgUrl={ssgPointLogoUrl} imgAlt={'신세계포인트 로고'}></Logo>
        </div>
        <div className={styles.login_signup}>
          <div>
            <p className={styles.login_txt}>로그인해 주세요</p>
          </div>
          <div className={styles.btn_box}>
            <Link className={styles.btn_primary} href={'/login'}>로그인</Link>
            <Link className={styles.btn_sub} href={'/signup'}>회원가입</Link>
           </div>
        </div>

        {/* 즐겨찾기 메뉴 리스트 */}
        <FavList></FavList>

      </div>
      <div className={isOpened ? styles.overlay : ''} onClick={()=>setIsOpened(false)}></div>
    </>
  )
}

export default SideMenu

function FavList () {
  return (
    <div className={styles.side_fav}>
      <div className={styles.side_fav_list}>
        {
          favList.map((fav: string)=> (
            <p className={styles.menu_box}>
              <Link href={fav[0]}>
                <img src={`${favUrl}${fav[1]}`}/>
              </Link>
              {fav[0]}
            </p>
          ))
        }
      </div>
      <div className={styles.select_fav_box}>
        <button className={styles.ico_btn}></button>
        <span className={styles.select_txt}>
          <button className={styles.fav_sel_txt}>
            즐겨찾기 메뉴 선택
          </button>
          에서
          <br/>
          나만의 즐겨찾기 메뉴를 설정할 수 있어요!
        </span>
      </div>
    </div>
  )
}