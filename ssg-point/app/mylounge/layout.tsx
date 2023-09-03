'use client'
import Link from "next/link";
import { myloungeTabMenu } from "@/data/TabMenu";
import { myloungeTabMenuType } from "@/types/TabMenuType";
import { usePathname } from 'next/navigation';


export default function myloungeLayout({children}: {children: React.ReactNode}) {

  const pathName = usePathname()

  return (
      <div className="top-[56px] opacity-[1]">
      <div className="flex w-full overflow-auto pt-20">
        <ul className="scrollbar flex w-full whitespace-nowrap overflow-x-auto [-ms-overflow-style:none;]">
        {
          myloungeTabMenu.map((item: myloungeTabMenuType) => (
            <li key={item.id} className={ pathName === `/mylounge${item.link}` ? 'mylounge-tab active' : 'mylounge-tab'}>
              <Link href={`/mylounge${item.link}`} className={`pt-[12px] pb-[12px] ${pathName === `/mylounge${item.link}` ? 'active-link' : ''}`}>{item.name}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      {children}
      </div>
  )
}