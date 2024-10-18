import React from 'react';
import Service from '../../componentss/service/Service';
import product from '../../public/assets/product.png'


const services = [
    {
        image: product,
        name: "Frank Paul",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
    {
        image: product,
        name: "Ola Ventures",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
    {
        image: product,
        name: "cooker",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
    {
        image: product,
        name: "Mechs",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
    {
        image: product,
        name: "Julius rubb",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
    {
        image: product,
        name: "Allison",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
    {
        image: product,
        name: "Nike Sportswear",
        price: "$99",
        category: "Graphic Designer",
        rating: "5.0"
    },
];


const ServicesNearYou = () => {
  return (
    <div className="my-5">
        <div className='flex items-center justify-between'>
            <h3 className='text-[16px] font-[600]'>Services near you</h3>
            <a href="#" className='text-[11px] font-[500] text-[#8F959E]'>View All</a>
        </div>

        <div className="flex items-start justify-between overflow-auto gap-3 my-3">
            {services.map((content, index) => (
                <div>
                    <Service
                        key={index}
                        image={content.image}
                        name={content.name}
                        price={content.price}
                        category={content.category}
                        rating={content.rating}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesNearYou