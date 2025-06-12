
const CustomizeProducts = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Choose a color</h4>
            <ul className=" flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-black">
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-teal-500">
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-violet-500">
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
                </li>
            </ul>
            <h4 className="font-medium">Choose a color</h4>
            <ul className=" flex items-center gap-3">
                <li className="ring-1 ring-pink-600 py-1 px-4 text-sm cursor-pointer text-white bg-pink-600 rounded-md ">Large</li>
                <li className="ring-1 ring-pink-600 text-pink-600 py-1 px-4 text-sm cursor-pointer rounded-md ">Medium</li>
                <li className="ring-1 ring-pink-300 text-white bg-pink-200 py-1 px-4 text-sm cursor-not-allowed rounded-md ">Small</li>
            </ul>

        </div>
    )
}

export default CustomizeProducts