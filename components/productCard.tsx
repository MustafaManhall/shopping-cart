"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ data }: { data: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  function handleQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    if (value >= 1) setQuantity(value);
  }
  function handleAddQuantity() {
    if (quantity >= 1 && quantity < 10) {
      setQuantity(quantity + 1);
    }
  }
  function handleMinusQuantity() {
    if (quantity > 1 && quantity <= 10) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div
      key={data.id}
      className="flex flex-col w-xs max-[35rem]:w-2xs border rounded-xl border-[#2A2A2A] hover:border-[#c9a96e60] bg-[#0F0F0F] hover:bg-[#131313] p-4 m-2"
    >
      <div className="h-full">
        <div className="relative w-full h-64">
          <Image
            src={data.image}
            alt={"data.title"}
            fill
            loading="eager"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col pt-4 pr-4 pl-4 gap-2 justify-between">
          <p className="text-sm first-letter:uppercase text-[#c9a96e]">
            {data.category}
          </p>
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-sm line-clamp-2">{data.description}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-2">
        <p className="text-[#c9a96e] text-2xl self-end m-4">${data.price}</p>
        <div className="flex flex-1 justify-center items-center gap-2">
          <button onClick={handleAddQuantity} className="w-fit h-full">
            <IoAddCircleOutline className="w-8 h-8" />
          </button>
          <input
            type="number"
            name="quantity"
            placeholder="1"
            value={quantity}
            onChange={handleQuantity}
            min={1}
            max={10}
            required
            className="min-w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#C9A84C] text-[#ffffff] placeholder:text-[#555555] text-center text-xl rounded-2xl"
          />
          <button onClick={handleMinusQuantity} className="w-fit h-full">
            <AiOutlineMinusCircle className="w-8 h-8" />
          </button>
        </div>
        <button
          onClick={() => addToCart(data, quantity)}
          className="flex justify-center items-center w-full bg-[#C9A84C] text-[#0a0a0a] hover:bg-[#B8973B] text-base font-bold p-4 m-4 rounded-2xl"
        >
          <IoMdAdd className="w-6 h-6" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
