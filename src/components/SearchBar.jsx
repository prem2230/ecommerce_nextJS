"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('ddd', e.target);
        const name = formData.get("name");

        if (name) {
            router.push(`/list?name=${name}`);
        }
    }
    return (
        <form onSubmit={handleSearch} className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
            <input type="text" name="name" placeholder="search" className="flex-1 bg-transparent outline-none" />
            <button className="cursor-pointer">
                <Image src="/search.svg" alt="search" width={16} height={16} />
            </button>
        </form>
    )
}

export default SearchBar