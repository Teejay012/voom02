import Product from "../../componentss/product/Product";
import product from "../../public/assets/product.png";


const products = [
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: product,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
];

const Recommended = () => {
  return (
    <div className="my-5">
        <div className='flex items-center justify-between'>
            <h3 className='text-[16px] font-[600]'>Recommended</h3>
            <a href="#" className='text-[11px] font-[500] text-[#8F959E]'>View All</a>
        </div>

        <div className="flex items-start justify-between overflow-auto gap-3 my-3">
            {products.map((content, index) => (
                <div>
                    <Product
                        key={index}
                        image={content.image}
                        name={content.name}
                        price={content.price}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Recommended