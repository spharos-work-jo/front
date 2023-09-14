import React from 'react'
import EventSort from '@/components/pages/event/EventSort';
import IngEvent from '@/components/pages/event/IngEvent';

const ingEvent = () => {
  
  return (
    <div>
    <div className='flex w-full h-[56px] content-center justify-start'>
        <EventSort pathName={'/ingevent'}/>
    </div>
        <IngEvent/>
    </div>
  )
}

export default ingEvent