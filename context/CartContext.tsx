"use client";

import { CartContextType, CartItem } from "@/types/cartItem";
import { Product } from "@/types/product";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<CartContextType>({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartList, setCartList] = useState<CartItem[]>([]);

  function addToCart(product: Product, quantity: number) {
    const item = cartList.find((item) => item.product.id === product.id);
    if (item) {
      setCartList(
        cartList.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCartList([...cartList, { quantity, product }]);
    }
  }
  function removeFromCart(id: number) {
    const newArr = cartList.filter((item) => item.product.id !== id);
    setCartList(newArr);
  }
  function updateQuantity(id: number, newQuantity: number) {
    if ((newQuantity >= 1 && newQuantity < 10 ) || (newQuantity > 1 && newQuantity <= 10)) {
      setCartList(
        cartList.map((item) =>
          item.product.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  }
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
