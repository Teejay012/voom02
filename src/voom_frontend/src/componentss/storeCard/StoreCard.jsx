import React from 'react';
import { FaStar } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

const StoreCard = ({ key, profileImage, coverImage, storeName, storeRating, storeAdress, storeNummber, status }) => {
  return (
    <div key={key} className='my-4 relative overflow-hidden rounded-[10px] z-0 shadow-md h-[200px] w-[150px]'>
        <a href="./store" className='w-full h-full absolute inset-0 group transition-opacity duration-1000 flex flex-col justify-center items-center ease-in-out min-w-[]'>
            <div className="absolute z-10 h-full w-full bottom-0 left-0 bg-black bg-opacity-60 transition-all duration-300 group-hover:bg-opacity-80"></div>
            <img
                src={coverImage}
                alt="Iphone"
                className="w-full absolute h-full object-cover object-center"
            />
            <div className='rounded-[50%] h-[70px] w-[70px] z-20 border-2 border-[#fff] overflow-hidden'>
                <img
                    src={profileImage}
                    alt="Iphone"
                    className="w-full h-full object-center"
                />
            </div>

            <div className='flex z-20 justify-center flex-col items-center gap-1 text-[#fff] font-bold'>
                <h3 className='text-[16px] font-[600]">{'>{storeName}</h3>
                <span className='flex items-center'>
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </span>
                <p className="text-[13px] font-[500] text-center w-full">{storeAdress}</p>
                <span className='flex items-center gap-2'>
                    <MdOutlinePhoneIphone />
                    <p className="text-[13px] font-[500]">{storeNummber}</p>
                </span>
            </div>

            <p className='text-[11px] font-[500] z-20 absolute top-2 right-2 py-1 px-3 rounded-[50px] bg-green-500 text-[#fff]'>{status}</p>
        </a>
    </div>
  )
}

export default StoreCard