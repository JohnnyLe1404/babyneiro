import Image from "next/image";

const Div5 = () => {
  return (
<div
  className="min-w-screen bg-[#fbfaf9] min-h-screen bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('/image/bg3.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
  }}
>
      <div className="max-w-4xl w-full p-6 md:p-8 lg:p-12">
        <div className="space-y-6 md:space-y-8 items-center my-40">
          <div className="bg-[#adadac] text-white p-6 md:p-8 lg:p-12 rounded-lg border border-white text-center">
            <h2 className="text-4xl md:text-4xl lg:text-5xl mb-8">
              How to buy
            </h2>
            <h1 className="text-6xl md:text-5xl lg:text-7xl font-extrabold mb-20">
              $BABYNEIRO
            </h1>
            <p className="mb-4 text-left text-2xl">
              - Download any EVM-compatible wallet.
            </p>
            <p className="mb-4 text-left text-2xl">
              - Buy some $ETH from an exchange and withdraw it to your EVM
              wallet (ERC-20 compatible).
            </p>
            <p className="mb-4 text-left text-2xl">
              - Head to Uniswap, enter the $BABYNEIRO contract address, and make
              your purchase.
            </p>
            <p className="text-left text-2xl">
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
