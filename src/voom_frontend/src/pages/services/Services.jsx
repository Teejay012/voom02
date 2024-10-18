import React from 'react';
import Search from "../../containers/search/Search";
import ServicesForYou from '../../containers/servicesForYou/ServicesForYou';
import ServicesNearYou from '../../containers/servicesNearYou/ServicesNearYou';
import MoreServices from '../../containers/moreServices/MoreServices';
import { IoIosArrowBack } from "react-icons/io";
import Ads from '../../componentss/ads/Ads';

const Services = () => {
  return (
    <div className='mb-[100px]'>
        <div className='relative flex items-center justify-center w-full h-[50px] mb-5'>
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF] absolute top-[15%] left-0 z-10'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>

            <h3 className='text-[16px] font-[600]'>Services</h3>
        </div>

        <Search />
        <ServicesForYou />
        <Ads />
        <ServicesNearYou />
        <MoreServices />
    </div>
  )
}

export default Services