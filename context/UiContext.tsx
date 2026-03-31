"use client";

import { UiContextType } from "@/types/ui";
import { createContext, useContext, useState } from "react";

const UiContext = createContext<UiContextType>({
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export function useUi() {
  return useContext(UiContext);
}

export default function UiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  function openCart() {
    setIsCartOpen(true);
  }
  function closeCart() {
    setIsCartOpen(false);
  }
  return (
    <UiContext.Provider value={{ isCartOpen, openCart, closeCart }}>
      {children}
    </UiContext.Provider>
  );
}
