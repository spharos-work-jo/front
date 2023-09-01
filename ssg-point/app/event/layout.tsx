'use client'
import Link from "next/link";
import { eventTabMenu } from '@/data/eventTabMenu';
import { EventMenuType } from '@/types/eventMenuType';
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




// export default function EventLayout({children}: {children: React.ReactNode}) {
//   return (
//     <>
//     <nav className="w-full pt-20">
//       <ul className="flex">
//         <li className="flex w-1/3 p-5 text-black">
          
//         </li>
//         <li className="w-1/3 p-5 bg-black text-white">
          
//         </li>
//         <li className="w-1/3 p-5 bg-black text-white">
          
//         </li>
//       </ul>
//     </nav>
//     {children}
//     </>
//   )
// }