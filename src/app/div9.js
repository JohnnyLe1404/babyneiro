import Image from "next/image";

const Div9 = () => {
  return (
    <div
      name="div9"
      className="bg-[url('/image/footer.png')] bg-[#fbfaf9] bg-cover bg-center w-full py-8 md:py-12 lg:py-16 flex flex-col items-center"
    >
      <div className="w-full flex flex-col md:flex-row justify-around items-center px-4 md:px-8 lg:px-16 space-y-4 md:space-y-0">
        <div className="text-4xl md:text-4xl lg:text-6xl font-bold text-center md:text-left text-black">
          BABY NEIRO
        </div>
        <div className="text-center md:text-left text-base md:text-lg max-w-[450px] text-white">
          <strong>$BABYNEIRO</strong> is ready to make <strong>Ethereum</strong>{" "}
          great again by driving strong trading volume and bringing back the
          excitement of the blockchain (along with those notorious gas fees).
        </div>
      </div>
      <div className="w-full max-w-[1300px] mt-8 flex justify-center md:justify-start space-x-8 items-center border-b-2 border-opacity-50 border-white pb-4">
        <div className="flex space-x-4 justify-center items-center">
          <a href="https://x.com/babyneiroethcto" target="_blank" rel="noopener noreferrer">
            <Image src="/image/x-black.png" alt="X Logo" width={35} height={35} />
          </a>
          <a href="https://t.me/babyneiro_ethcto" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/telegram-black.png"
              alt="Telegram Logo"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/dextool-black.png"
              alt="dextool Logo"
              width={35}
              height={35}
            />
          </a>
          <a href="https://dexscreener.com/ethereum/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/dexscreen-black.png"
              alt="dexscreen Logo"
              width={45}
              height={45}
            />
          </a>
        </div>
      </div>
      <span className="w-full max-w-[1350px] mt-8 md:mt-6 lg:mt-10 text-black text-start block font-bold text-xl">
        © 2024 BabyNeiro • All Rights Reserved{" "}
      </span>
    </div>
  );
};

export default Div9;
