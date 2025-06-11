import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
            <div className="flex flex-col md:flex-row justify-content gap-24">
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className="text-2xl tracking-widest">  aKart </div>
                    </Link>
                    <p>xyz colony, philipines</p>
                    <span className="font-semibold">hello@akart.com</span>
                    <span className="font-semibold">+91 1234567890</span>
                    <div className="flex gap-6">
                        <Image src="/logos/facebook.png" alt="" width={16} height={16} />
                        <Image src="/logos/instagram.png" alt="" width={16} height={16} />
                        <Image src="/logos/pinterest.png" alt="" width={16} height={16} />
                        <Image src="/logos/youtube.png" alt="" width={16} height={16} />
                        <Image src="/logos/x.png" alt="" width={16} height={16} />
                    </div>
                </div>
                <div className="hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col justify-between ">
                        <h1 className="font-medium text-lg">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">About Us</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Affiliates </Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <h1 className="font-medium text-lg">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">New Arrivals</Link>
                            <Link href="">Accessories</Link>
                            <Link href="">Men </Link>
                            <Link href="">Women</Link>
                            <Link href="">All products</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Customer Service</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store </Link>
                            <Link href="">Legal & Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>Be the first to get the latest news and updates from aKart.</p>
                    <div className="flex">
                        <input type="text" placeholder="Email Address" className="p-4 w-3/4 bg-white" />
                        <button className="w-1/4 bg-pink-600 text-white">JOIN</button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex justify-between">
                        <Image src="/logos/discover.png" alt="" width={40} height={20} />
                        <Image src="/logos/skrill.png" alt="" width={40} height={20} />
                        <Image src="/logos/paypal.png" alt="" width={40} height={20} />
                        <Image src="/logos/mastercard.png" alt="" width={40} height={20} />
                        <Image src="/logos/visa.png" alt="" width={40} height={20} />
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    )
}

export default Footer;