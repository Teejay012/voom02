import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Cart = ({ name, image, price, numberOfProducts }) => {
  return (
    <div className="flex items-center gap-5 py-5 border-b-[1px] border-[#EBEBFB]">
        <div className='w-[30px] rounded-[10px] h-[30px] overflow-hidden'>
            <img
                src={image}
                alt={name}
                className="w-full h-full"
            />
        </div>

        <div className="flex flex-col justify-start mr-auto">
            <h4 className='text-[14px] text-[#1E222B] font-[500]'>{name}</h4>
            <p className='text-[14px] text-[#1E222B] font-[400]'>{price}</p>
        </div>

        <div className="flex items-center justify-end gap-3">
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF]'><FaMinus  className='text-[17px]'/></button>
            <p className='text-[14px] text-[#1E222B] font-[400]'>{numberOfProducts}</p>
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF]'><FaPlus  className='text-[17px]'/></button>
        </div> 
    </div>
  )
}

export default Cart