import Image from "next/image";

export default function Div3() {
  return (
    <div
    name="div3"
     className="bg-[url('/image/moon3.png')] py-20 bg-cover bg-center bg-[#E3E0DA] min-w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center p-4 w-full max-w-7xl mx-auto">
        <div className="relative w-full max-w-4xl mx-auto bg-transparent border-4 border-[#334618] rounded-2xl shadow-lg z-30 p-4 md:p-6 lg:p-8 mb-96"> {/* Thêm mx-auto ở đây */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Image
              src="/image/quote.png"
              alt="Quote Icon"
              width={64}
              height={64}
              className="object-contain w-16 h-16"
            />
            <p className="text-[#334618] text-justify text-lg md:text-xl lg:text-2xl">
              But <strong>BabyNeiro</strong> is more than just a meme token—it has a heart! We
              are committed to charitable causes, supporting animal care, just
              like Vitalik when he received Neiro tokens from the original Neiro
              team. <strong>BabyNeiro</strong> is here to make a difference, one meme at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
