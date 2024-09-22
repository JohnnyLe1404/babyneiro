import Image from "next/image";
import { useState } from "react";

const Div6 = () => {
  const [copyText, setCopyText] = useState(
    "0x8581998b905070B8984d99DC9af2C6800D97dCE1"
  );
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 350);
    });
  };
  return (
    <div
      name="div6"
      className="bg-[url('/image/bg6.png')] bg-cover bg-center text-[#334618] min-h-screen w-full flex flex-col justify-between p-4 space-y-4 md:space-y-6 lg:space-y-8"
    >
      {/* Tokenomics Section - Moved to the top */}
      <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-3xl md:text-4xl lg:text-6xl font-semibold">
            Tokenomics
          </span>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 w-full max-w-5xl">
          {[
            { label: "Symbol", value: "$BABYNEIRO" },
            { label: "Tax", value: "0/0" },
            { label: "LP", value: "Locked and burned" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 h-20 md:h-24 border-4 border-[#334618] rounded-2xl bg-white flex items-center justify-between px-4"
            >
              <span className="text-left text-base md:text-lg lg:text-2xl font-bold">
                {item.label}
              </span>
              <span className="text-right text-base md:text-lg lg:text-2xl">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-5xl h-20 md:h-24 border-4 border-[#334618] rounded-2xl bg-white flex items-center justify-between px-4">
          <span className="text-left text-lg md:text-xl lg:text-3xl font-bold">
            Token Address
          </span>
          <div className="flex items-center">
            <span
              className="text-right text-sm md:text-base lg:text-xl truncate max-w-[150px] md:max-w-[300px] lg:max-w-none cursor-pointer"
              onClick={handleCopy}
            >
              {isCopied ? "Copied to clipboard" : copyText}
            </span>
            <Image
              src="/image/copy.png"
              alt="Copy Icon"
              width={24}
              height={24}
              className="ml-2 w-6 h-6 md:w-8 md:h-8 object-contain cursor-pointer"
              onClick={handleCopy}
            />
          </div>
        </div>
      </div>

      {/* Follow icons centered */}
      <div className="flex justify-between items-center flex-grow px-4 md:px-80">
        <div className="flex space-x-10 md:space-x-36 items-center mt-80 md:mt-0">
          <a
            href="https://x.com/babyneiroethcto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/x3.png"
              alt="X Icon"
              width={40} // Giảm kích thước cho di động
              height={40} // Giảm kích thước cho di động
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/dextool3.png"
              alt="dextool Icon"
              width={40} // Giảm kích thước cho di động
              height={40} // Giảm kích thước cho di động
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
          </a>
        </div>
        <div className="flex space-x-10 md:space-x-36 items-center  mt-80 md:mt-0">
          <a
            href="https://dexscreener.com/ethereum/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/dexscreen3.png"
              alt="dexscreen Icon"
              width={40} // Giảm kích thước cho di động
              height={40} // Giảm kích thước cho di động
              className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
            />
          </a>
          <a
            href="https://t.me/babyneiro_ethcto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/telegram3.png"
              alt="telegram Icon"
              width={40} // Giảm kích thước cho di động
              height={40} // Giảm kích thước cho di động
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
          </a>
        </div>
      </div>

      {/* h2 at the bottom */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-12 md:mb-24 text-center">
        Follow <strong>BABY NEIRO</strong> on social media
      </h2>
    </div>
  );
};

export default Div6;
