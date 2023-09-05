'use client'
import Link from "next/link";
import { eventTabMenu } from '@/data/TabMenu';
import { EventMenuType } from '@/types/TabMenuType';
import { usePathname } from 'next/navigation';


export default function EventLayout({children}: {children: React.ReactNode}) {

  const pathName = usePathname()

  return (
      <>
      <nav className="flex w-full pt-20">
        <ul className="flex w-full">
        {
          eventTabMenu.map((item: EventMenuType) => (
            <li key={item.id} className={ pathName === `/event${item.link}` ? 'event-tab active' : 'event-tab'}>
              <Link href={`/event${item.link}`}>{item.name}</Link>
            </li>
          ))
        }
        </ul>
      </nav>
      {children}
      </>
  )
}