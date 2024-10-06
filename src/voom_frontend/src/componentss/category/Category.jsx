
const Category = ({ name, image, from }) => {
  return (
    <div className='bg-[#F8F9FB] h-[164px] w-[154px] rounded-[12px] flex justify-center items-center flex-col'>
        <div className='w-[68px] h-[68px] overflow-hidden'>
            <img
                src={image}
                alt={name}
                className="w-full h-full"
            />
        </div>

        <div className="flex justify-center items-center flex-col py-2">
            <h4 className='text-[13px] font-[600]'>{name}</h4>
            <p className='text-[11px] font-[400] text-[#777784]'>{from}</p>
        </div>
    </div>
  )
}

export default Category