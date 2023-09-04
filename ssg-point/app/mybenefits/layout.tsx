'use client'
import Link from "next/link";
import { mybenefitsTabMenu } from "@/data/TabMenu";
import { mybenefitsTabMenuType } from "@/types/TabMenuType";
import { usePathname } from 'next/navigation';


export default function mybenefitsLayout({children}: {children: React.ReactNode}) {

  const pathName = usePathname()

  return (
      <div className="top-[56px] opacity-[1]">
      <div className="flex w-full overflow-auto pt-20">
        <ul className="scrollbar flex w-full whitespace-nowrap overflow-x-auto [-ms-overflow-style:none;]">
        {
          mybenefitsTabMenu.map((item: mybenefitsTabMenuType) => (
            <li key={item.id} className={ pathName === `/mybenefits${item.link}` ? 'mybenefits-tab active' : 'mybenefits-tab'}>
              <Link href={`/mybenefits${item.link}`} className={`pt-[12px] pb-[12px] ${pathName === `/mybenefits${item.link}` ? 'active-link' : ''}`}>{item.name}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      {children}
      </div>
  )
}