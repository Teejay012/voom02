import { Link } from 'react-router-dom';
import product from "../../public/assets/product.png"
import { RiImageEditFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { TbHelpCircleFilled } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import { LuPackageCheck } from "react-icons/lu";
import { PiBellSimpleRinging } from "react-icons/pi";
import { FaGift } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { FaRoadCircleCheck } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="py-10 mb-[100px]">
        <div className="flex flex-col justify-center items-center gap-2 mb-[100px]">
            <div className="rounded-[15px] w-[100px] h-[100px] relative mb-3">
                <img
                    src={product}
                    alt='picture'
                    className="w-full h-full object-center"
                />

                <button className="absolute bottom-[-10px] right-[-10px] rounded-[5px] bg-[#fff] p-2 shadow-md">
                    <RiImageEditFill className="font-bold text-[17px]"/>
                </button>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-[#1D1E20] font-[600]">Tee Jay</h3>
                <p className="text-[13px] text-[#1D1E20] font-[500]">tijesunimioluwakoya@gmail.com</p>
            </div>


            {/* ///////////////////////////////////// PERSONAL INFORMATION ///////////////////////////////////// */}


            <div className="w-full flex flex-col justify-start mt-5">
                <h3 className="text-[18px] font-[600]">Personal Information</h3>

                <div className='h-[236px] w-full bg-secondary-color text-[#fff] flex gap-5 flex-col justify-start rounded-[30px] p-6 mt-5'>
                    <Link to={"../orders"} className="flex items-center gap-3">
                        <LuPackageCheck className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Your Orders</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </Link>

                    <Link to={"../notification"} className="flex items-center gap-3">
                        <PiBellSimpleRinging className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Your Notifications</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </Link>

                    <Link to={"../track-order"} className="flex items-center gap-3">
                        <FaRoadCircleCheck className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Track Your Order</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </Link>

                    <div className="flex items-center gap-3">
                        <MdOutlinePhonelinkSetup className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Setup Your Store</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaGift className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Rewards</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </div>
                    
                </div>
            </div>


            {/* /////////////////////////////////////////////////////////////////////////// */}

            <div className="w-full flex flex-col justify-start my-7">
                <h3 className="text-[18px] font-[600]">Settings</h3>

                <div className='h-[216px] w-full bg-secondary-color text-[#fff] flex gap-5 flex-col justify-start rounded-[30px] p-6 mt-5'>
                    <div className="flex items-center gap-3">
                        <MdLanguage className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Language</h4>
                        <p className='text-[14px] font-[400]'>English</p>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaEdit className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Edit Profiile</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaQuestion className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>FAQs</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </div>

                    <div className="flex items-center gap-3">
                        <TbHelpCircleFilled className="font-bold text-[17px]"/>
                        <h4 className='text-[14px] font-[500] mr-auto'>Help center</h4>
                        <IoIosArrowForward className="font-bold text-[17px]"/>
                    </div>
                </div>
            </div>

            <button className='h-[52px] w-full bg-[#8E6CEF] text-[#fff] rounded-[50px] text-[15px] font-[600] flex items-center justify-center'><IoLogOut className="mr-3 text-[20px]"/> Log Out</button>
        </div>
    </div>
  )
}

export default Profile