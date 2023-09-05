'use client'
import Link from "next/link";
import { mypointTabMenu } from "@/data/TabMenu";
import { mypointTabMenuType } from "@/types/TabMenuType";
import { usePathname } from 'next/navigation';


export default function mypointLayout({children}: {children: React.ReactNode}) {

  const pathName = usePathname()

  return (
      <div className="top-[56px] opacity-[1]">
      <div className="flex w-full overflow-auto pt-20">
        <ul className="scrollbar flex w-full whitespace-nowrap overflow-x-auto [-ms-overflow-style:none;]">
        {
          mypointTabMenu.map((item: mypointTabMenuType) => (
            <li key={item.id} className={ pathName === `/mypoint${item.link}` ? 'mypoint-tab active' : 'mypoint-tab'}>
              <Link href={`/mypoint${item.link}`} className={`pt-[12px] pb-[12px] ${pathName === `/mypoint${item.link}` ? 'active-link' : ''}`}>{item.name}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      {children}
      </div>
  )
}