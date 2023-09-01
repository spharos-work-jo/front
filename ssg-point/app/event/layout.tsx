import Link from "next/link";

export default function EventLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <nav className="w-full pt-20">
      <ul className="flex">
        <li className="flex w-1/3 p-5 text-black">
          <Link href="/event/ingevent">진행 이벤트</Link>
        </li>
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/endevent">종료 이벤트</Link>
        </li>
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/winevent">당첨 확인</Link>
        </li>
      </ul>
    </nav>
    {children}
    </>
  )
}