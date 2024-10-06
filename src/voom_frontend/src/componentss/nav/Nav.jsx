import { Link } from 'react-router-dom';
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import MoreNav from "../moreNav/MoreNav"
import { useState } from "react";

const Nav = () => {

    const [showMoreNav, setShowMoreNav] = useState(false);

    const showMoreNavHandleClick = ()=>{
        setShowMoreNav(prev => !prev);
    };

  return (
    <div className="fixed left-0 bottom-0 z-50 h-[70px] p-3 w-full bg-[#fff] rounded-[15px]">
        <ul className="flex justify-between items-center w-full h-full">
            <li>
                <Link to="./" className="flex flex-col items-center justify-center gap-2 text-secondary-color">
                    <RiHomeSmile2Fill className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Home</p>
                </Link>
            </li>

            <li>
                <Link to="./categories" className="flex flex-col items-center justify-center gap-2">
                    <BiSolidCategoryAlt className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Categories</p>
                </Link>
            </li>

            <li>
                <Link to="./categories" className="flex flex-col items-center justify-center gap-2">
                    <MdHomeRepairService className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Services</p>
                </Link>
            </li>

            <li>
                <button className="flex flex-col items-center justify-center gap-2" onClick={showMoreNavHandleClick}>
                    <MdMoreVert className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">More</p>
                </button>
            </li>
        </ul>

        {showMoreNav && <MoreNav />}
    </div>
  )
}

export default Nav