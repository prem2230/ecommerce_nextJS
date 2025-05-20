import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="/products/shoes.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-500" />
                    <Image src="/products/men-outfit.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-offset-pink-600 text-pink-600 text-xs hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="/products/men-outfit.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-500" />
                    <Image src="/products/outfit.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-offset-pink-600 text-pink-600 text-xs hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="/products/outfit.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-500" />
                    <Image src="/products/perfume.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-offset-pink-600 text-pink-600 text-xs hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="/products/perfume.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-500" />
                    <Image src="/products/shoes.jpg" alt="product" fill sizes="25vw" className="rounded-md absolute object-cover" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-offset-pink-600 text-pink-600 text-xs hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList