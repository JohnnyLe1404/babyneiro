import Image from "next/image";

const Div9 = () => {
  return (
    <div
    name="div9"
     className="bg-[url('/image/footer.png')] bg-[#fbfaf9] bg-cover bg-center w-full py-8 md:py-12 lg:py-16 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-around items-center px-4 md:px-8 lg:px-16 space-y-4 md:space-y-0">
        <div className="text-4xl md:text-4xl lg:text-6xl font-bold text-center md:text-left">
          BABY NEIRO
        </div>
        <div className="text-center md:text-left text-base md:text-lg max-w-[450px] text-[#334618]">
          <strong>$BABYNEIRO</strong> is ready to make <strong>Ethereum</strong>{" "}
          great again by driving strong trading volume and bringing back the
          excitement of the blockchain (along with those notorious gas fees).
        </div>
      </div>
      <div className="w-full max-w-[1250px] mt-8 flex justify-center md:justify-start space-x-8 items-center border-b-2 border-opacity-50 border-white pb-4">
        <Image src="/image/x.png" alt="X Logo" width={56} height={56} />
        <Image
          src="/image/telegram.png"
          alt="Telegram Logo"
          width={56}
          height={56}
        />
      </div>
      <span className="w-full max-w-[1250px] mt-8 md:mt-6 lg:mt-10 text-start block opacity-40">
        © 2024 BabyNeiro • All Rights Reserved{" "}
      </span>
    </div>
  );
};

export default Div9;
