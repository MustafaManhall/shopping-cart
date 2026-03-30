import { Product } from "@/types/product";
import axios from "axios";

export async function fetchProducts(): Promise<Product[]> {
  const products = await axios.get("https://fakestoreapi.com/products");
  return products.data;
}
