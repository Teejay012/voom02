import React from 'react';
import StoreCard from '../../componentss/storeCard/StoreCard';
import shoe from "../../public/assets/shoe.png";
import Search from '../../containers/search/Search';
import { IoIosArrowBack } from "react-icons/io";

const storeCardContent = [
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: shoe,
        coverImage: shoe,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
]

const Stores = () => {
  return (
    <div className='mb-[100px]'>

        <div className='relative flex items-center justify-center fixed w-full h-[50px] mb-5'>
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF] absolute top-[15%] left-0 z-10'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>

            <h3 className='text-[16px] font-[600]'>Stores</h3>
        </div>

        <Search />


        <div className='flex items-center gap-1'>
            <p className='text-[14px] text-[#1E222B] font-[400]'>Sort by: </p>
            <select name="sort" id="sort" className='border-2 outline-none py-2 px-4 border-grey text-[14px] text-[#1E222B] font-[400]'>
                <option value="Most Popular">Most Popular</option>
                <option value="Most Popular">Most Resent</option>
                <option value="Most Popular">Random</option>
                <option value="Most Popular">Open</option>
                <option value="Most Popular">Location</option>
            </select>
        </div> 

        <div className="flex flex-wrap items-start justify-between mt-10">
            {storeCardContent.map((content, index) => (
                <StoreCard
                    key={index}
                    profileImage={content.profileImage}
                    coverImage={content.coverImage}
                    storeName={content.storeName}
                    storeRating={content.storeRating}
                    storeAdress={content.storeAdress}
                    storeNummber={content.storeNummber}
                    status={content.status}
                />
            ))}
        </div>
    </div>
  )
}

export default Stores