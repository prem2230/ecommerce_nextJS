"use client"

import Image from "next/image";
import React from "react";

const CartModal = () => {
    const cartItems = true;
    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div className="">
                    Cart is empty
                </div>
            ) : (
                <React.Fragment>
                    <h2 className="text-xl">Shopping Cart</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <Image src="/products/lipstick.jpg" alt="" width={72} height={96} className="object-cover rounded-md" />
                            <div className=" flex flex-col justify-between w-full">
                                <div className="">
                                    <div className="flex justify-between items-center gap-8">
                                        <h3 className="font-semibold">Product name</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                    </div>
                                    <div className=" text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className=" text-gray-500">Qty. 2</span>
                                    <span className=" text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image src="/products/lipstick.jpg" alt="" width={72} height={96} className="object-cover rounded-md" />
                            <div className=" flex flex-col justify-between w-full">
                                <div className="">
                                    <div className="flex justify-between items-center gap-8">
                                        <h3 className="font-semibold">Product name</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                    </div>
                                    <div className=" text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className=" text-gray-500">Qty. 2</span>
                                    <span className=" text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Taxes and shipping calculated at checkout
                        </p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 cursor-pointer">View Cart</button>
                            <button className=" rounded-md py-3 px-4 bg-black text-white cursor-pointer">Checkout</button>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default CartModal