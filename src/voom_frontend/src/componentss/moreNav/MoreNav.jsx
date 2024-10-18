import React from 'react';
import { Link } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { BiSolidStore } from "react-icons/bi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const MoreNav = () => {
  return (
    <div className="fixed right-0 bottom-[70px] z-50 h-[70%] p-3 w-[70px] bg-[#fff] rounded-[15px] shadow-md">
        <ul className="flex flex-col gap-5 items-center justify-end w-full h-full">
            <li>
                <Link to="./notification" className="flex flex-col items-center justify-center gap-2">
                    <IoNotifications className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Notification</p>
                </Link>
            </li>

            <li>
                <Link to="./stores" className="flex flex-col items-center justify-center gap-2">
                    <BiSolidStore className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Stores</p>
                </Link>
            </li>

            <li>
                <Link href="#" className="flex flex-col items-center justify-center gap-2">
                    <IoChatbubbleEllipsesSharp className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Inbox</p>
                </Link>
            </li>

            <li>
                <Link to="./profile" className="flex flex-col items-center justify-center gap-2">
                    <FaUser className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Profile</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default MoreNav