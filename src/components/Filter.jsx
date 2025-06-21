
const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EDEDED]">
                    <option >Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 " />
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 " />
                <select name="size" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EDEDED]">
                    <option >Size</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
                <select name="category" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EDEDED]">
                    <option >Category</option>
                    <option value="newArrival">New Arrival</option>
                    <option value="popular">Popular</option>
                </select>
                <select name="color" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EDEDED]">
                    <option >Color</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <select name="allFilters" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EDEDED]">
                    <option >All Filters</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
            </div>
            <div className="">
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white-ring-1 ring-gray-400">
                    <option >Sort By</option>
                    <option value="priceLow">Price (low to high)</option>
                    <option value="priceHigh">Price (high to low)</option>
                    <option value="new"> Newest</option>
                    <option value="old"> Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter