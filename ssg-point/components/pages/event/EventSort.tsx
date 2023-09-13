'use client'
import { useRouter } from 'next/navigation'

function EventSort( {pathName} : { pathName: string }) {

  const router = useRouter()
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/event/${pathName}?sort=${e.target.value}`)
  }
  // useState 로 new인지 end인지 받아오는 방법도 가능
  return (
    <select onChange={handleSelect} className='w-[95px] h-[38px] ml-[15px] mt-[10px] '>
      <option value={'new'}>최신순</option>
      <option value={'endDate'}>마감임박</option>
    </select>
  )
}

export default EventSort