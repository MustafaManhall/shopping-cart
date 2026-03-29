import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-6 m-6 border-2 border-[#f4efe814] rounded-3xl h-24 bg-[#0807066b]">
        <div>
          <Image src={"/logo-store.png"} alt={"Logo"} width={80} height={0} style={{height:"auto", width:"50px"}} loading="eager"/>
        </div>
        <ul className="flex gap-4">
          <li><Link href="/" className="text-xl text-[#C5C0B8] hover:text-[#C9A96E]">Home</Link></li>
          <li><Link href="/shop" className="text-xl text-[#C5C0B8] hover:text-[#C9A96E]">Shop</Link></li>
        </ul>
        <div className="w-8 h-8">
          <Link href="/cart"><AiOutlineShoppingCart className="w-8 h-8 text-[#C5C0B8] hover:text-[#C9A96E]"/></Link>
        </div>
      </nav>
    </>
  );
}
