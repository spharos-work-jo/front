'use client';
import { usePathname } from "next/navigation";
import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"

const Header = () => {

  const point = 10;
  const pathname  = usePathname();
  return (
    <header className='main_header'>
      <HeaderTop />
      {
        (pathname === '/' || pathname === '/coupon') ?  <HeaderBottom /> : null
      } 

    </header>
  )
}

export default Header












// import HeaderBottom from "./HeaderBottom"
// import HeaderTop from "./HeaderTop"

// const Header = () => {

//   const point = 10;

//   return (
//     <header className='main_header'>
//       <HeaderTop passedData=""/>


//       <HeaderBottom />
//     </header>
//   )
// }

// export default Header