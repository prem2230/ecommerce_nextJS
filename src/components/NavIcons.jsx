"use client"

import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();
    const isLoggedIn = false;
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen(!isProfileOpen);
    }

    return (
        <div className=" flex items-center gap-4 xl:gap-6 relative">
            <Image src="/user.svg" alt="profile" width={24} height={24} className="cursor-pointer" onClick={handleProfile} />
            {isProfileOpen && <div className=" absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                <Link href="/" >Profile</Link>
                <div className="mt-2 cursor-pointer">
                    Logout
                </div>
            </div>}
            <Image src="/bell.svg" alt="notification" width={24} height={24} className="cursor-pointer" />
            <div className='relative cursor-pointer'>
                <Image src="cart.svg" alt="cart" width={24} height={24} className="cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)} />
                <div className="absolute rounded-full text-sm flex items-center justify-center text-white -top-4 -right-4 w-6 h-6 bg-[#F35C7A]">
                    2
                </div>
            </div>
            {isCartOpen && <CartModal />}

        </div>
    )
}

export default NavIcons