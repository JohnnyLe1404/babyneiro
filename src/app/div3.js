import Image from "next/image";

export default function Div3() {
  return (
    <div
      name="div3"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/gradient.png"
          alt="Gradient Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative z-10 min-h-screen w-full flex flex-col justify-start items-center pt-16 md:pt-24 lg:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/moon3.1.png"
            alt="Moon Background Mobile"
            layout="fill"
            objectFit="contain"
            objectPosition="center bottom"
            quality={100}
            priority
            className="block md:hidden"
          />
          <Image
            src="/image/moon3.png"
            alt="Moon Background Desktop"
            layout="fill"
            objectFit="contain"
            objectPosition="center bottom"
            quality={100}
            priority
            className="hidden md:block"
          />
        </div>
        <div className="relative z-20 flex items-start p-4 w-full max-w-7xl mx-auto">
          <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-50 border-4 border-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
              <Image
                src="/image/quote.png"
                alt="Quote Icon"
                width={64}
                height={64}
                className="object-contain w-8 h-8"
              />
              <p className="text-white text-justify text-lg md:text-xl lg:text-2xl">
                But <strong>BabyNeiro</strong> is more than just a meme token—it
                has a heart! We are committed to charitable causes, supporting
                animal care, just like Vitalik when he received Neiro tokens
                from the original Neiro team. <strong>BabyNeiro</strong> is here
                to make a difference, one meme at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}