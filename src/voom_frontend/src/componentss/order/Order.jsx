import shoe from "../../public/assets/shoe.png";

const Order = () => {
  return (
    <div className='flex justify-between items-center py-3 shadow-md px-2 rounded-[10px]'>
        <div className='flex justify-center items-center gap-4'>
            <div className='w-[70px] rounded-[10px] h-[70px] overflow-hidden'>
                <img
                    src={shoe}
                    alt='shoe'
                    className="h-full w-full object-center"
                />
            </div>

            <div className='flex flex-col'>
                <h4 className='text-[15px] font-[600]'>Nike Airforce</h4>
                <p className='text-[11px] font-[500] text-[#777784]'>Lorem ipsum dolor sit amet consec</p>
                <a href="#" className='text-[15px] text-secondary-color font-[500]'>Track Order</a>
            </div>
        </div>

        <h4 className='text-[15px] text-secondary-color font-[600]'>$44</h4>
    </div>
  )
}

export default Order