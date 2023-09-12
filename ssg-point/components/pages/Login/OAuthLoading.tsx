'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { AppContext } from "@/app/layout";

const OAuthLoading = () => {

  const data = useSession();
  console.log("")


  

  return (
    <>
    
    </>
  )

}
export default OAuthLoading