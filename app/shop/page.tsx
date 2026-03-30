"use client";

import ProductCard from "@/components/productCard";
import { fetchProducts } from "@/lib/fetchProducts";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Shop() {
  const [shopData, setShopData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchingData() {
      try {
        const data = await fetchProducts();
        setShopData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingData();
  }, []);

  return (
    <>
      <h1>Hi World, i am the Shop</h1>
      <div className="grid grid-cols-3">
        {shopData.map((data) => {
          return <ProductCard key={data.id} data={data} />;
        })}
      </div>
    </>
  );
}
