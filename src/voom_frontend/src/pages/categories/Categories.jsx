import Category from "../../componentss/category/Category";
import image from "../../public/assets/image.png";
import Header from "../../componentss/header/Header";
import Search from "../../containers/search/Search";


const productCategories = [
    {
        id: 1,
        name: "Mobile Phones",
        image: image,
        from: "Gadgets",
    },
    {
        id: 2,
        name: "Mobile Phones",
        image: image,
        from: "Gadgets",
    },
    {
        id: 3,
        name: "Mobile Phones",
        image: image,
        from: "Gadgets",
    },
    {
        id: 4,
        name: "Mobile Phones",
        image: image,
        from: "Gadgets",
    },
    {
        id: 5,
        name: "Mobile Phones",
        image: image,
        from: "Gadgets",
    },
    {
        id: 6,
        name: "Mobile Phones",
        image: image,
        from: "Gadgets",
    },
]

const Categories = () => {
  return (
    <div className="mb-[100px]">

        <Header />
        <Search />

        <div className="my-5">
            <h3 className='text-[16px] font-[600]'>Categories</h3>


            <div className="flex justify-between flex-wrap gap-3 my-3">
                {productCategories.map((content, index) => (
                    <>
                        <Category
                            key={index}
                            name={content.name}
                            image={content.image}
                            from={content.from}
                        />
                    </>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Categories