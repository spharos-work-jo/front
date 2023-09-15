'use client'
import { UserContext } from '@/context/UserContext';
import React, { createContext, use, useContext } from 'react'


export interface userInputProfileType{
  userName:string,
  phone:string,
  birthDay:string,
  loginId:string,
}


export default function Layout({children} : {children: React.ReactNode}){
    const user:userInputProfileType = {
      userName:"",
      phone:"",
      birthDay:"",
      loginId:""
    }
    return (  
        <>
          <UserContext.Provider value={user}>
            {children}
          </UserContext.Provider>
        </>
    );
};
