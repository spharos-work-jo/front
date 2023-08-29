import React from 'react'

const bar = {
  position: "absolute",
  top: '0',
  left: '0',
  width: '100%',
  background: "#fff",
  height: "48px",
  overflow: "hidden",
  opacity: "0",
  zIndex: "1",
  transition: "top .2s,opacity .2s",
  borderBottom: "1px solid #e8e8e8",
};


// className='menu_bar top-[56px] opacity-100 absolute left-0 w-full bg-white h-[48px] overflow-hidden [z-index:1]

export const menubar = () => {
  return (
    <div>
      <ul className=''>
      <li>

      </li>
      </ul>
    </div>
  )
}