import Image from "next/image";

const Div2 = () => {
  return (
    <div
    id="div2"
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center bg-[url('/image/bg2.1.png')] md:bg-[url('/image/bg2.png')]"
    >
      <div className="w-full max-w-full py-6 mx-auto bg-black bg-opacity-25 z-50">
        <div className="text-center mb-4 mt-2">
          <h1 className="text-4xl font-bold mb-2">BABYNEIRO on major CEXs?</h1>
          <p className="text-lg">
            Absolutely! With the power of the community, there's nothing
            stopping us.
            <br /> Raise voice to vote for your favourite CEXs below:
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-4 p-4">
          {[
            "bitget",
            "kucoin",
            "bingx",
            "mexc",
            "gate",
            "binance",
            "coinbase",
            "bybit",
          ].map((logo) => (
            <div key={logo} className="p-2 flex justify-center items-center">
              <Image
                src={`/image/${logo}.png`}
                alt={`${logo} Logo`}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-left mt-10 md:mt-20 p-4 md:p-8 ml-auto">
        <div className="mb-6 md:mb-10">
          <p className="text-3xl md:text-5xl text-[#334618]">WHO IS</p>
          <p className="text-5xl md:text-7xl font-extrabold text-[#334618]">
            BABY NEIRO
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm md:text-xl text-[#334618] max-w-[65%]">
            Neiro is like the little sister to Doge, and she's carrying the meme
            torch forward! Adopted by <strong>Atsuko Sato</strong>, the same
            woman who owned Kabosu (the dog behind the iconic Doge meme), Neiro
            is a true heir to the meme kingdom. And guess what?{" "}
            <strong>BabyNeiro</strong> is Neiro's very first pup, born with the
            same unstoppable spirit as her legendary mother.
          </p>
          <p className="text-sm md:text-xl text-[#334618] max-w-[65%]">
            <strong>BabyNeiro</strong> was the first BabyNeiro token to be
            deployed on Ethereum, but its journey wasn't smooth. After being
            left behind by its original developer, we, the community decided to
            step up and take over the project. Now <strong>BabyNeiro</strong> is
            100% owned and managed by the community, reflecting the true spirit
            of decentralization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Div2;
