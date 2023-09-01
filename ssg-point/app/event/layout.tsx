'use client'
import { useState } from 'react';
import './layout.css';
import Link from "next/link";

export default function EventLayout({children}: {children: React.ReactNode}) {

  const [activeTab, setActiveTab] = useState<number>();

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
      <>
      <nav className="flex w-full pt-20">
      <li
        className={`tab ${activeTab === 0 ? "active" : ""}`}
        onClick={() => handleTabClick(0)}
      >
        <Link href="/event/ingevent">진행 이벤트</Link>
      </li>

      <li
        className={`tab ${activeTab === 1 ? "active" : ""}`}
        onAbort={() => handleTabClick(1)}
      >
        <Link href="/event/endevent">종료 이벤트</Link>
      </li>

      <li 
        className={`tab ${activeTab === 2 ? "active" : ""}`}
      >
        <Link href="/event/winevent">당첨 확인</Link>
      </li>
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