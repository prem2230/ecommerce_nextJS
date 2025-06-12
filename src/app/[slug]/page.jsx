import Add from "../../components/Add"
import CustomizeProducts from "../../components/CustomizeProducts"
import ProductImages from "../../components/ProductImages"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus dolor magnam quaerat quae, fugiat pariatur natus eaque laudantium eos quidem quas itaque iste ut corporis. Iure sint quas vitae!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">₹100</h3>
          <h2 className="text-2xl font-medium">₹50</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className=" font-bold mb-4">PRODUCT INFO </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis dolores, vero numquam quidem architecto tempore itaque minus. Quae qui porro veniam eum deserunt, quam dicta quisquam hic aperiam rem.</p>
        </div>
        <div className="text-sm">
          <h4 className=" font-bold mb-4">SPECIFICATION</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis dolores, vero numquam quidem architecto tempore itaque minus. Quae qui porro veniam eum deserunt, quam dicta quisquam hic aperiam rem.</p>
        </div>
        <div className="text-sm">
          <h4 className=" font-bold mb-4">REFUND POLICY </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis dolores, vero numquam quidem architecto tempore itaque minus. Quae qui porro veniam eum deserunt, quam dicta quisquam hic aperiam rem.</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage