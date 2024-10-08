import React from 'react';
import Search from "../../containers/search/Search";
import { IoIosArrowBack } from "react-icons/io";
import { MdWhereToVote } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { PiAirplaneTakeoffFill } from "react-icons/pi";

const Track = () => {
  return (
    <div className='mb-[100px]'>
        <div>
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF]'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>
        </div>

        <div className='mt-5'>
            <Search />
        </div>

        <div className='flex flex-col gap-5 p-3 shadow-md rounded-[10px] my-8'>
            <div className='flex items-start gap-2'>
                <MdWhereToVote className='text-[20px]'/>

                <div className='mr-auto flex flex-col'>
                  <h4 className='text-[14px] text-[#1E222B] font-[600]'>5764 85574 2837</h4>
                  <p className="text-[10px] text-[#888888] font-[600]">Express way</p>
                </div>

                
                <h4 className='text-[14px] text-[#1E222B] font-[600]'>Transit</h4>
            </div>

            <div className='flex items-center gap-1'>
              <div className='w-[15px] h-[15px] rounded-[50%] bg-[#000]'></div>
              <div className='h-[3px] w-[90px] bg-[#000]'></div>
              <div className='w-[27px] h-[27px] rounded-[50%] bg-[#000] flex justify-center items-center'>
                  <MdDeliveryDining className='text-[#fff]'/>
              </div>
              <div className='h-[3px] w-[90px] bg-gray-200'></div>
              <div className='w-[15px] h-[15px] rounded-[50%] bg-gray-200'></div>
              <div className='h-[3px] w-[90px] bg-gray-200'></div>
              <div className='w-[15px] h-[15px] rounded-[50%] bg-gray-200'></div>
            </div>

            <div>
                <p className='text-[14px] text-[#888888] font-[600]'>4 Octomber 2024</p>
                <h3 className='text-[16px] text-[#1E222B] font-[600]'>Lagos Junction</h3>
            </div>
        </div>


        <div className='flex flex-col gap-3'>
            <div className="flex items-center gap-5 py-5 shadow-md p-3 rounded-[10px]">
                <div className='w-[50px] rounded-[10px] h-[50px] overflow-hidden bg-gray-200 flex justify-center items-center'>
                    <BsBoxSeamFill className='text-[20px]'/>
                </div>

                <div className="flex flex-col justify-start mr-auto">
                    <h3 className='text-[16px] text-[#1E222B] font-[600]'>NG 37373366373838</h3>
                    <p className='text-[14px] text-[#888888] font-[600]'>Tamil Nadu</p>
                </div>

                <h4 className='text-[15px] text-[#888888] font-[600]'>Delivered</h4>
            </div>

            <div className="flex items-center gap-5 py-5 shadow-md p-3 rounded-[10px]">
                <div className='w-[50px] rounded-[10px] h-[50px] overflow-hidden bg-gray-200 flex justify-center items-center'>
                    <MdDeliveryDining className='text-[20px]'/>
                </div>

                <div className="flex flex-col justify-start mr-auto">
                    <h3 className='text-[16px] text-[#1E222B] font-[600]'>NG 37373366373838</h3>
                    <p className='text-[14px] text-[#888888] font-[600]'>Tamil Nadu</p>
                </div>

                <h4 className='text-[15px] text-[#1E222B] font-[600]'>Transit</h4>
            </div>

            <div className="flex items-center gap-5 py-5 shadow-md p-3 rounded-[10px]">
                <div className='w-[50px] rounded-[10px] h-[50px] overflow-hidden bg-gray-200 flex justify-center items-center'>
                    <PiAirplaneTakeoffFill className='text-[20px]'/>
                </div>

                <div className="flex flex-col justify-start mr-auto">
                    <h3 className='text-[16px] text-[#1E222B] font-[600]'>NG 37373366373838</h3>
                    <p className='text-[14px] text-[#888888] font-[600]'>Tamil Nadu</p>
                </div>

                <h4 className='text-[15px] text-[#1E222B] font-[600]'>Accepted</h4>
            </div>
        </div>
    </div>
  )
}

export default Track