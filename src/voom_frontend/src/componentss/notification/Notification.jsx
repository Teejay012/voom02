import React from 'react'
import { PiBellSimpleRinging } from "react-icons/pi";

const Notification = () => {
  return (
    <div className='flex items-center justify-between gap-5 py-3 px-5 bg-[#F4F4F4] rounded-[8px]'>
        <div>
            <PiBellSimpleRinging className="text-[20px] font-bold"/>
        </div>
        <p className='text-[12px] text-[#272727] font-[450]'>Gilbert, you placed and order check your order history for full details</p>
    </div>
  )
}

export default Notification