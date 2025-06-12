"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        src: "/products/perfumeTwo.jpg",
        alt: "perfumeTwo"
    },
    {
        id: 2,
        src: "/products/perfumeOne.jpg",
        alt: "perfumeOne"
    },
    {
        id: 3,
        src: "/products/perfumeThree.jpg",
        alt: "perfumeThree"
    }
]

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[500px] relative">
                <Image src={images[index].src} alt="perfume" fill sizes="50vw" className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((image, idx) => (
                    <div key={idx} className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" onClick={() => setIndex(idx)}>
                        <Image src={image.src} alt={image.alt} fill sizes="20vw" className="object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages;