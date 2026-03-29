import Link from "next/link";

export default function Home() {
  const cardsInfo = [
    {
      id: 1,
      title: "Sculpted Wool",
      description:
        "High-twist tailoring with a clean shoulder and a fluid drape for long evening lines.",
    },
    {
      id: 2,
      title: "Noir Silk",
      description:
        "Low-sheen silk separates that catch light softly and move with deliberate elegance.",
    },
  ];
  return (
    <main className="flex justify-center flex-1 flex-col gap-12 bg-linear-to-b from-black/0 via-black/50 to-black/80">
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex items-center flex-col">
          <h1 className="text-7xl text-center mb-4 max-w-lg">
            The Art of <span className="text-[#B8925E]">Refined Noir</span>
          </h1>
          <p className="text-[#E8DDD0] text-xl text-center max-w-xl">
            A curated philosophy of quiet luxury for the modern minimalist.
            Designed to eliminate fatigue through timeless uniform excellence.
          </p>
        </div>
        <Link
          href="/shop"
          className="bg-[#B8925E] text-[#120F0D] p-4 pl-6 pr-6 rounded-xl hover:bg-[#D4B87A] font-bold"
        >
          Discover the vision
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8">
        {cardsInfo.map((data) => {
          return (
            <div
              key={data.id}
              className="rounded-2xl flex justify-center items-center flex-col gap-4 w-xs p-8 bg-[#ffffff08] hover:bg-[#ffffff0d] border border-[#ffffff14] hover:border-[#c9a96e40]"
            >
              <h6 className="text-[#C9A96E]">0{data.id} / 0{cardsInfo.length}</h6>
              <h2 className="text-2xl" >{data.title}</h2>
              <p className="text-center text-[#908A80]" >{data.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
