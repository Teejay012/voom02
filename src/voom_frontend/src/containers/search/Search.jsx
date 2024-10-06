import { RiSearch2Line } from "react-icons/ri";
import { BsMic } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex items-center justify-between mb-5">
        <div className="h-[44px] w-[275px] rounded-[50px] bg-[#F5F6FA] flex items-center justify-start pl-3 text-[#8F959E] gap-2">
            <RiSearch2Line />
            <input type="text" placeholder="Search..." className="text-[12px] outline-none bg-transparent" />
        </div>

        <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[10px] bg-secondary-color cursor-pointer">
            <BsMic className="text-[#fff] text-[17px] font-bold"/>
        </div>
    </div>
  )
}

export default Search