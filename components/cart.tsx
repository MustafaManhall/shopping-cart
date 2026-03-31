import { useCart } from "@/context/CartContext";
import { useUi } from "@/context/UiContext";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

export default function Cart() {
  const { closeCart } = useUi();
  const { removeFromCart, cartList, updateQuantity } = useCart();

  const totalPrice = cartList.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <main className="fixed top-0 right-0 h-full w-1/3 max-2xl:w-1/2 max-lg:w-2/3 max-md:w-full max-md:bg-black z-40 bg-black/70">
      <div className="flex justify-between p-8 sticky top-0 bg-black">
        <h1 className="text-2xl">Cart</h1>
        <button onClick={closeCart}>
          <IoClose className="w-8 h-8 border rounded-lg" />
        </button>
      </div>
      <div className="h-[calc(100vh-15rem)] z-50 p-8 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {cartList.map((item) => {
            return (
              <div
                key={item.product.id}
                className="flex w-full justify-start items-center flex-1 p-2 border border-[#2A2A2A] hover:border-[#C9A84C] rounded-2xl max-sm:flex-col"
              >
                <div className="relative h-28 w-28 max-sm:h-40 max-sm:w-40">
                  <Image
                    src={item.product.image}
                    alt={"data.title"}
                    fill
                    loading="eager"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col flex-1 p-2 justify-start max-sm:w-full">
                  <div className="flex justify-between items-center pr-2 pl-2">
                    <p className="text-sm first-letter:uppercase text-[#c9a96e]">
                      {item.product.category}
                    </p>
                    <button onClick={() => removeFromCart(item.product.id)}>
                      <MdDeleteOutline className="w-8 h-8 fill-red-500" />
                    </button>
                  </div>
                  <div className="flex flex-1 w-full justify-between max-sm:flex-col">
                    <div className="flex flex-col gap-2 p-2">
                      <h1 className="text-2xl max-sm:text-xl">{item.product.title}</h1>
                      <div className="flex justify-start items-center gap-2 w-full">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-fit h-full"
                        >
                          <IoAddCircleOutline className="w-8 h-8" />
                        </button>
                        <input
                          type="number"
                          name="quantity"
                          value={item.quantity}
                          min={1}
                          max={10}
                          disabled
                          className="w-40 max-sm:w-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#ffffff] text-center text-xl rounded-2xl"
                        />
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-fit h-full"
                        >
                          <AiOutlineMinusCircle className="w-8 h-8" />
                        </button>
                      </div>
                    </div>
                    <p className="text-[#c9a96e] text-2xl self-end m-2">
                      ${item.product.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black sticky bottom-0 h-40 p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Total:</h1>
          <h1 className="text-2xl">{0 || totalPrice.toFixed(2)}</h1>
        </div>
        <button className="w-full p-4 border border-[#C9A84C] text-[#C9A84C] rounded-2xl hover:bg-[#C9A84C] hover:text-[#0A0A0A] text-2xl">
          Payment
        </button>
      </div>
    </main>
  );
}
