import { Product } from "@/types/product";
import axios from "axios";

export async function fetchProducts(): Promise<Product[]> {
  const products = await Promise.all([
    axios.get("https://dummyjson.com/products/category/womens-bags"),
    axios.get("https://dummyjson.com/products/category/womens-dresses"),
   axios.get("https://dummyjson.com/products/category/womens-jewellery"),
    axios.get("https://dummyjson.com/products/category/womens-shoes"),
   axios.get("https://dummyjson.com/products/category/womens-watches"),
  ]);

  return products.flatMap((res) => res.data.products);
}
