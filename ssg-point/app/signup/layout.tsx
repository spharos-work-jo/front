'use client'
import React, { createContext } from 'react'

export const UserContext = createContext<userInputProfileType>({} as userInputProfileType);

export interface userInputProfileType{
  userName:string,
  phone:string,
  birthDay:string
}
const user:userInputProfileType = {
  userName:"",
  phone:"",
  birthDay:""
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
