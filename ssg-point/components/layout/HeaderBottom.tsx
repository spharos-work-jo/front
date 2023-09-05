'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import HomeMenu from '@/components/pages/home/HomeMenu'

function HeaderBottom() {

  const pathname = usePathname()
  
  return (
    <div className='header_bottom'>
      <nav>
        <ul className={ pathname === '/' ? 'flex gap-6 justify-center items-center pt-3 pb-1' : 'flex gap-6 justify-center items-center'}>
          <li className={ pathname === '/coupon' ? `text-sm font-bold active` : `text-sm font-bold`}>
            <Link href='/coupon'>쿠폰</Link>
          </li>
          <li className={ pathname === '/' ? `text-sm font-bold active` : `text-sm font-bold`}>
            <Link href='/'>홈</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderBottom