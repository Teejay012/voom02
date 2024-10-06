import Order from "../../componentss/order/Order";
import { IoIosArrowBack } from "react-icons/io";

const Orders = () => {
  return (
    <div className="mb-[100px] relative w-full ">
        <div className="">
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF]'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>

            <div className='flex items-center justify-between my-5'>
                <h3 className='text-[16px] font-[600]'>My Order</h3>

                <div className='flex items-center justify-center gap-2'>
                    <button className='h-[35px] px-4 border-[1px] border-[#EEF3FF] rounded-[10px] text-[14px] font-[600]'>Ongoing</button>
                    <button className='h-[35px] px-4 bg-[#8E6CEF] text-[#fff] rounded-[10px] text-[14px] font-[600]'>Completed</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            {[1,2,3,4].map((content, index) => (
                <Order 
                    key={index}
                />
            ))}
        </div>
    </div>
  )
}

export default Orders