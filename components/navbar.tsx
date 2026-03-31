"use client";

import { useCart } from "@/context/CartContext";
import { useUi } from "@/context/UiContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./cart";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const { cartList } = useCart();
  const { openCart, isCartOpen } = useUi();
  const pathName = usePathname();
  const [navMenu, setNavMenu] = useState(false);

  function openNav() {
    setNavMenu(true);
  }
  function closeNav() {
    setNavMenu(false);
  }

  return (
    <>
      <nav className="flex flex-col justify-between items-center p-6 m-6 border-2 border-[#f4efe814] rounded-3xl bg-[#0807066b] sticky top-6 z-50 sm:hidden">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image
              src={"/logo-store.png"}
              alt={"Logo"}
              width={80}
              height={0}
              style={{ height: "auto", width: "50px" }}
              loading="eager"
            />
          </div>
          {!navMenu && (
            <button onClick={openNav}>
              <RxHamburgerMenu className="w-8 h-8" />
            </button>
          )}
          {navMenu && (
            <button onClick={closeNav}>
              <IoClose className="w-8 h-8 border rounded-lg" />
            </button>
          )}
        </div>
        {navMenu && (
          <ul className="w-full flex flex-col gap-4 mt-6">
            <li>
              <Link
                href="/"
                className={`text-xl hover:text-[#C9A96E] ${pathName === "/" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`text-xl hover:text-[#C9A96E] ${pathName === "/shop" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}
              >
                Shop
              </Link>
            </li>
            <li>
              {isCartOpen && <Cart />}
              {!isCartOpen && (
                <button
                  onClick={openCart}
                  className="text-xl hover:text-[#C9A96E]"
                >
                  Cart
                </button>
              )}
            </li>
          </ul>
        )}
      </nav>
      <nav className="flex justify-between items-center p-6 m-6 border-2 border-[#f4efe814] rounded-3xl h-24 bg-[#0807066b] sticky top-6 z-50 max-sm:hidden">
        <div>
          <Image
            src={"/logo-store.png"}
            alt={"Logo"}
            width={80}
            height={0}
            style={{ height: "auto", width: "50px" }}
            loading="eager"
          />
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className={`text-xl hover:text-[#C9A96E] ${pathName === "/" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={`text-xl hover:text-[#C9A96E] ${pathName === "/shop" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}
            >
              Shop
            </Link>
          </li>
        </ul>
        <div className="w-8 h-8 relative">
          {isCartOpen && <Cart />}
          {!isCartOpen && (
            <button onClick={openCart}>
              <AiOutlineShoppingCart
                className={`w-8 h-8 hover:text-[#C9A96E] ${pathName === "/cart" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}
              />
              <span className="absolute -top-2 -right-2 bg-[#C9A84C]  text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartList.length}
              </span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
