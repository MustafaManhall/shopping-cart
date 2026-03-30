"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const { cartList } = useCart();
  const pathName = usePathname();
  
  return (
    <>
      <nav className="flex justify-between items-center p-6 m-6 border-2 border-[#f4efe814] rounded-3xl h-24 bg-[#0807066b]">
        <div>
          <Image src={"/logo-store.png"} alt={"Logo"} width={80} height={0} style={{height:"auto", width:"50px"}} loading="eager"/>
        </div>
        <ul className="flex gap-4">
          <li><Link href="/" className={`text-xl hover:text-[#C9A96E] ${pathName === "/" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}>Home</Link></li>
          <li><Link href="/shop" className={`text-xl hover:text-[#C9A96E] ${pathName === "/shop" ? "text-[#C9A96E]" : "text-[#C5C0B8]"}`}>Shop</Link></li>
        </ul>
        <div className="w-8 h-8 relative">
          <Link href="/cart" className="" ><AiOutlineShoppingCart className="w-8 h-8 text-[#C5C0B8] hover:text-[#C9A96E]"/><span className="absolute -top-2 -right-2 bg-[#C9A84C]  text-shadow-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartList.length}</span></Link>
        </div>
      </nav>
    </>
  );
}
