import { Product } from "./product";

export interface CartItem {
    quantity: number;
    product: Product;
}

export interface CartContextType {
  cartList: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
}