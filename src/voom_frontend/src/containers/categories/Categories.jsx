import { Link } from 'react-router-dom';
import product from "../../public/assets/product.png"

const categories = [
    {
        image: product,
        name: "Gadgets",
        url: "",
    },
    {
        image: product,
        name: "Food Stuffs",
        url: "",
    },
    {
        image: product,
        name: "Accessories",
        url: "",
    },
    {
        image: product,
        name: "Home Services",
        url: "",
    },
    {
        image: product,
        name: "Business Services",
        url: "",
    },
]

const Categories = () => {
  return (
    <div className='mb-5'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[16px] font-[600]'>Categories</h3>
            <Link to="./categories" className='text-[11px] font-[500] text-[#8F959E]'>View All</Link>
        </div>

        <div className="flex justify-between items-center py-4">
            {categories.map((content) => (
                <div className="flex flex-col gap-2 items-center">
                    <div>
                        <img
                            src={content.image}
                            alt={content.name}
                            className="w-[44px] rounded-[50%] h-[44px] object-center"
                        />
                    </div>

                    <p className="text-[10px] text-[#888888] font-[600]">{content.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories