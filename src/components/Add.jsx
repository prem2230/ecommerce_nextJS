"use client";
import { useState } from "react";

const Add = ({ stocks }) => {
    const [quantity, setQuantity] = useState(1);
    const stock = 6;
    const stocksLimit = stocks?.quantity || 0;
    const outOfStock = stocksLimit === 0;

    const handleQuantity = (action) => {
        if (outOfStock) return;

        if (action === 'inc' && quantity < stock) {
            setQuantity((prev) => prev + 1);
        } else if (action === 'dec' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                    <div className={`bg-gray-100 rounded-3xl flex items-center justify-between px-4 py-2 w-32 ${outOfStock && 'cursor-not-allowed opacity-50'}`}>
                        <button className={`text-xl ${outOfStock ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={() => handleQuantity('dec')} disabled={outOfStock}>-</button>
                        {quantity}
                        <button className={`text-xl ${outOfStock ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={() => handleQuantity('inc')} disabled={outOfStock}>+</button>
                    </div>
                    {stocksLimit <= 5 && stocksLimit > 0 && (
                        <div className="text-xs">Only <span className="text-orange-300">{stocksLimit} items</span> left!<br /> {"Don't"} miss it</div>
                    )}
                    {outOfStock && <div className="text-xs text-red-500">Out of Stock</div>}
                </div>
                <button className="w-36 text-sm rounded-3xl ring-1 ring-pink-500 cursor-pointer text-pink-500 py-2 px-4 hover:bg-pink-500 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0" disabled={outOfStock}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Add