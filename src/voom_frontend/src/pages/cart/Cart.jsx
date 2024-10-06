import image from "../../public/assets/image.png"
import { IoIosArrowBack } from "react-icons/io";
import Cart from '../../componentss/cart/Cart';



const cartProducts = [
    {
        id: 1,
        name: "Package 01",
        image: image,
        price: "$7.90",
        numberOfProducts: 2,
    },
    {
        id: 2,
        name: "Package 02",
        image: image,
        price: "$7.90",
        numberOfProducts: 2,
    },
    {
        id: 3,
        name: "Package 03",
        image: image,
        price: "$7.90",
        numberOfProducts: 2,
    },
    {
        id: 4,
        name: "Package 04",
        image: image,
        price: "$7.90",
        numberOfProducts: 2,
    },
    {
        id: 5,
        name: "Package 05",
        image: image,
        price: "$7.90",
        numberOfProducts: 2,
    },
]

const CartPage = () => {
  return (
    <div className='mb-[100px]'>
        <div className='relative flex items-center justify-center fixed w-full h-[50px]'>
            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF] absolute top-[15%] left-0 z-10'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>

            <h3 className='text-[16px] font-[600]'>Shopping Cart (5)</h3>
        </div>

        <div className='my-5 flex flex-col'>
            {cartProducts.map((content) => (
                <Cart 
                    key={content.id}
                    name={content.name}
                    image={content.image}
                    price={content.price}
                    numberOfProducts={content.numberOfProducts}
                />
            ))}
        </div>

        <div className='h-[266px] w-full bg-[#F8F9FB] flex justify-between flex-col rounded-[30px] p-6'>
            <div className='flex flex-col gap-3'>
                <span className='flex justify-between items-center'>
                    <p className='text-[14px] text-[#1E222B] font-[400]'>Subtotal</p>
                    <h4 className='text-[14px] text-[#1E222B] font-[500]'>$35.96</h4>
                </span>

                <span className='flex justify-between items-center'>
                    <p className='text-[14px] text-[#1E222B] font-[400]'>Delivery</p>
                    <h4 className='text-[14px] text-[#1E222B] font-[500]'>$2.00</h4>
                </span>

                <span className='flex justify-between items-center'>
                    <p className='text-[14px] text-[#1E222B] font-[400]'>Total</p>
                    <h4 className='text-[14px] text-[#1E222B] font-[500]'>$38.98</h4>
                </span>
            </div>

            <button className='h-[52px] w-full bg-[#8E6CEF] text-[#fff] rounded-[50px] text-[15px] font-[600]'>Proceed  To checkout</button>
        </div>
    </div>
  )
}

export default CartPage