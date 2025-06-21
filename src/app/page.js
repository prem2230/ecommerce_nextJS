import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList.tsx";
import Image from "next/image";
// import { useContext, useEffect } from "react";
// import { WixContext } from "../context/wixContext";
// import { useWixClient } from "../hooks/useWixClient";
import { wixClientServer } from "../lib/wixClientServer";
import { Suspense } from "react";

export default async function Home() {

  // const wixClient = useWixClient()
 
  // useEffect(()=>{
  //   const getProducts =async() =>{
  //     try {
  //       const res = await wixClient.products.queryProducts().find();
  //       console.log("response", res);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       // Handle the error appropriately
  //     }
  //   }
  //   getProducts();
  // },[wixClient])

  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().find();
  console.log("response",res)
  
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
      <ProductList />
     </div>
    </div>
  );
}
