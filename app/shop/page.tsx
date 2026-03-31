import ProductCard from "@/components/productCard";
import { fetchProducts } from "@/lib/fetchProducts";

export default async function Shop() {
  const shopData = await fetchProducts();
  const categories = [...new Set(shopData.map((item) => item.category))];
  
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 items-center mb-4">
        <p className="text-[#C9A96E] text-xl">Iconic Essentials</p>
        <h1 className="text-6xl max-sm:text-5xl max-[25rem]:text-4xl">Signature Pieces</h1>
        <p className="text-[#A99D92] text-xl max-sm:text-base max-[25rem]:text-sm">
          Curated essentials for the Luxe Noir aesthetic
        </p>
      </div>
      <div className="flex flex-col w-auto m-8 max-sm:m-2">
        {categories.map((category) => (
          <div key={category} className="flex flex-col justify-center items-center m-4 max-sm:m-2 max-[30rem]:m-0 max-[30rem]:mb-4 gap-3">
            <h2 className="text-4xl first-letter:uppercase">{category}</h2>
            <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-[68rem]:grid-cols-2 max-md:grid-cols-1">
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
