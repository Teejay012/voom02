import { Link } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import Menu from "../menu/Menu"
import { useState } from "react";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandleClick = ()=>{
    setShowMenu(prev => !prev);
  };

  return (
    <div className="flex items-center gap-3 py-5">
        <div className="h-[32px] w-[32px] bg-[#F5F6FA] rounded-[50%] flex justify-center items-center cursor-pointer relative">
            <RiMenu4Fill  className="font-bold text-[17px]" onClick={showMenuHandleClick}/>
            {showMenu && <Menu />}
        </div>

        <div className="mr-auto">
            <p className="text-[12px] font-[300]">Hello!</p>
            <h3 className="text-[14px] font-[600]">Stranger 👋</h3>
        </div>

        <Link to="./cart" className="h-[32px] w-[32px] bg-[#F5F6FA] rounded-[50%] flex justify-center items-center cursor-pointer">
            <RiShoppingBag4Line  className="font-bold text-[17px]" />
        </Link>
    </div>
  )
}

export default Header