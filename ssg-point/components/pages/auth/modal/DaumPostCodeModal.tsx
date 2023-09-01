'use client'
import React from 'react'
import DaumPostcode from "react-daum-postcode";

function PostCodeDaum({isView, setAddress}: {isView: boolean, setAddress: React.Dispatch<React.SetStateAction<any>>}) {

    const complete = (data : any) =>{
        setAddress(data)
        console.log(data)
    }

  return (
    <div>
        {
            isView &&
            <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={complete} 
            />
        }
    </div>
  )
}

export default PostCodeDaum