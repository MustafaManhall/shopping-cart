"use client";

import ProductCard from "@/components/productCard";
import { fetchProducts } from "@/lib/fetchProducts";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Shop() {
  const [shopData, setShopData] = useState<Product[]>([]);
  const categories = [...new Set(shopData.map((item) => item.category))];

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
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 items-center mb-4">
        <p className="text-[#C9A96E] text-xl">Iconic Essentials</p>
        <h1 className="text-6xl">Signature Pieces</h1>
        <p className="text-[#A99D92] text-xl">
          Curated essentials for the Luxe Noir aesthetic
        </p>
      </div>
      <div className="flex flex-col w-auto m-8">
        {categories.map((category) => (
          <div key={category} className="flex flex-col justify-center items-center m-4 gap-3">
            <h2 className="text-4xl first-letter:uppercase">{category}</h2>
            <div className="grid grid-cols-4">
              {shopData
                .filter((item) => item.category === category)
                .map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
