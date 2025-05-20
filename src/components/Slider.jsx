"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"


const slides = [
    {
        id: 1,
        title: "Summer Collection 2024",
        description: "Up to 40% off on all summer essentials",
        img: "/products/summer-collection.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
        category: "summer-sale"
    },
    {
        id: 2,
        title: "New Arrivals",
        description: "Discover the latest fashion trends",
        img: "/products/new-collection.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        category: "new-in"
    },
    {
        id: 3,
        title: "Premium Electronics",
        description: "Latest gadgets with exclusive offers",
        img: "/products/electronics.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
        category: "electronics"
    }
]
const Slider = () => {
    const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}>
                {slides.map((slide, index) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-between gap-8 2xl:gap-12 text-center">
                            <h2 className=" text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4"> SHOP NOW</button>
                            </Link>
                        </div>
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.img} alt={slide.title} fill sizes="100%" className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto bottom-8 left-1/2 flex gap-4">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={` w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`}
                        onClick={() => setCurrent(index)}>
                        {current === index && <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider