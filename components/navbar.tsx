import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-6 m-6 border-2 border-[#1F1F1F] rounded-3xl h-24">
        <div>
          <Image src={"/logo-store.png"} alt={"Logo"} width={80} height={0} style={{height:"auto", width:"50px"}} loading="eager"/>
        </div>
        <ul className="flex gap-4">
          <li><Link href="/" className="text-xl text-[#888888] hover:text-[#ffffff]">Home</Link></li>
          <li><Link href="/shop" className="text-xl text-[#888888] hover:text-[#ffffff]">Shop</Link></li>
        </ul>
        <div className="w-8 h-8">
          <Link href="/cart"><AiOutlineShoppingCart className="w-8 h-8 text-[#888888] hover:text-[#ffffff]"/></Link>
        </div>
      </nav>
    </>
  );
}
