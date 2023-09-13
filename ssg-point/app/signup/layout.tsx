'use client'
import React, { createContext } from 'react'
import { Context } from '../layout';

export const UserContext = createContext<userInputProfileType>({} as userInputProfileType);

export interface userInputProfileType{
  userName:string,
  phone:string,
  birthDay:string,
  loginId:string,
}
const user:userInputProfileType = {
  userName:"",
  phone:"",
  birthDay:"",
  loginId:""
}
export default function Layout({children} : {children: React.ReactNode}){
    return (  
        <>
          <UserContext.Provider value={user}>
            {children}
          </UserContext.Provider>
        </>
    );
};