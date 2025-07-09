"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ media }) => {

    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[500px] relative">
                <Image src={media[index].image.url} alt="perfume" fill sizes="50vw" className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {media.map((image, idx) => (
                    <div key={idx} className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" onClick={() => setIndex(idx)}>
                        <Image src={image.image.url} alt={image.title} fill sizes="20vw" className="object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages;