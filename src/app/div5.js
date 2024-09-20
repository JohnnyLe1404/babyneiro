import Image from "next/image";

const Div5 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#fbfaf9] px-4 py-12 sm:px-6 lg:px-8">
      <Image
        src="/image/bg3.png"
        alt="Background"
        layout="fill"
        objectFit="contain"
        quality={100}
        priority
        className="pointer-events-none"
      />
      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-[#818180] bg-opacity-80 text-white p-6 sm:p-8 md:p-12 rounded-lg border border-white text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
            How to buy
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 sm:mb-12 md:mb-16">
            $BABYNEIRO
          </h1>
          <div className="space-y-4 text-left text-lg sm:text-xl md:text-2xl">
            <p>- Download any EVM-compatible wallet.</p>
            <p>
              - Buy some $ETH from an exchange and withdraw it to your EVM
              wallet (ERC-20 compatible).
            </p>
            <p>
              - Head to Uniswap, enter the $BABYNEIRO contract address, and make
              your purchase.
            </p>
            <p>
              - Already got ETH on another chain? No worries! You can bridge
              your ETH over to Ethereum and buy $BABYNEIRO from there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div5;
