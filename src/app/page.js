import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Image from "next/image";
import { wixClientServer } from "../lib/wixClientServer";
import { Suspense } from "react";
import CategoryList from "@/components/CategoryList";

export default async function Home() {

  try {
    const wixClient = await wixClientServer();
    const res = await wixClient.products.queryProducts().find();
    console.log("response", res);
  } catch (error) {
    console.error("Wix API error:", error);
  }
  
  return (
    <div className="">
     <Slider />
     <div className=" mt-24 px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32">
      <h1 className="text-2xl">Featured Products</h1>
      <Suspense fallback="loading">
      <ProductList categoryId ={process.env.FEATURED_PRODUCTS_CATEGORY_ID} limit={4} />
      </Suspense>
     </div>
      <div className="mt-24">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
      <CategoryList />
     </div>
      <div className=" mt-24 px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32">
      <h1 className="text-2xl">New Products</h1>
      <ProductList categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID}/>
     </div>
    </div>
  );
}
