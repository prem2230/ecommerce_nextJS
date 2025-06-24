import { wixClientServer } from "@/lib/wixClientServer";
import { collections, products } from "@wix/stores";
import Image from "next/image"
import Link from "next/link"

const CategoryList = async () => {
    const wixClient = await wixClientServer();

    const items = await wixClient.collections.queryCollections().find();

    console.log('items', items)
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8 ">
                {items?.items?.map((item) => (
                    <Link key={`${item.id}+${item.slug}`} href={`/list?cat=${item?.slug}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                        <div className="relative bg-slate-100 w-full h-96">
                            <Image src={item?.media?.mainMedia?.image?.url || "/products/bottle-product.jpg"} alt="bottle-product" fill sizes="20vw" className="object-cover" />
                        </div>
                        <h1 className="mt-8 font-light text-center tracking-wide"> {item?.name} </h1>
                    </Link>
                ))}
                {/* <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/bottle-product.jpg" alt="bottle-product" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/fashion-one.jpg" alt="fashion-one" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/fashion-two.jpg" alt="fashion-two" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/fashion-three.jpg" alt="fashion-three" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/fashion-ten.jpg" alt="fashion-ten" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/fashion-nine.jpg" alt="fashion-nine" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="/products/fashion-eight.jpg" alt="fashion-eight" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-center tracking-wide">Almond Oil </h1>
                </Link> */}
            </div>
        </div>
    )
}

export default CategoryList