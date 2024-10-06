import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Notification from '../../componentss/notification/Notification';

const NotificationPage = () => {
  return (
    <div className='mb-[100px]'>
        <div className='relative flex items-center justify-center fixed w-full h-[50px]'>
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF] absolute top-[15%] left-0 z-10'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>

            <h3 className='text-[16px] font-[600]'>Notification</h3>
        </div>

        <div className='flex flex-col my-5 gap-3'>
            {[1,2,3].map((content, index) => (
                <Notification 
                    key={index}
                />
            ))}
        </div>
    </div>
  )
}

export default NotificationPage