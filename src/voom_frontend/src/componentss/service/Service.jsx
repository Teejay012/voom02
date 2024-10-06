import { BsBalloonHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Service = ({ image, name, price, category, rating }) => {
  return (
    <div>
        <div className="rounded-[15px] overflow-hidden w-[160px] h-[171px] relative mb-3">
            <img
                src={image}
                alt="product"
                className="w-full h-full object-center"
            />

            <BsBalloonHeart className="absolute top-[15px] right-[15px] font-bold text-[17px]"/>
        </div>

        <h2 className="text-[16px] text-[#1D1E20] font-[600]">{name}</h2>
        <p className="text-[11px] text-[#8F959E] font-[500]">{category}</p>
        <span className="flex gap-1 items-center justify-start text-[13px] text-[#1D1E20] font-[600]">
            <FaStar />
            <p>{rating}</p>
        </span>
        <h3 className="text-[15px] text-[#1D1E20] font-[600]">{price}</h3>
    </div>
  )
}

export default Service