import Image from "next/image";

const Div6 = () => {
  return (
    <div className="bg-[url('/image/bg6.png')] bg-cover bg-center text-[#334618] min-h-screen w-full flex flex-col justify-between p-4 space-y-4 md:space-y-6 lg:space-y-8">
      {/* Tokenomics Section - Moved to the top */}
      <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-3xl md:text-4xl lg:text-6xl font-semibold">
            Tokenomics
          </span>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 w-full max-w-5xl">
          {[
            { label: "Symbol", value: "$Myro" },
            { label: "Tax", value: "0/0" },
            { label: "LP", value: "Burned Forever" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 h-20 md:h-24 border-4 border-[#334618] rounded-2xl bg-white flex items-center justify-between px-4"
            >
              <span className="text-left text-lg md:text-xl lg:text-3xl font-bold">
                {item.label}
              </span>
              <span className="text-right text-lg md:text-xl lg:text-3xl">
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
            <span className="text-right text-sm md:text-base lg:text-xl truncate max-w-[150px] md:max-w-[300px] lg:max-w-none">
              HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4
            </span>
            <Image
              src="/image/copy.png"
              alt="Copy Icon"
              width={24}
              height={24}
              className="ml-2 w-6 h-6 md:w-8 md:h-8 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Follow icons centered */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex space-x-64 md:space-x-[40rem] lg:space-x-[50rem]">
          <Image
            src="/image/x.png"
            alt="X Icon"
            width={48}
            height={48}
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
          />
          <Image
            src="/image/telegram.png"
            alt="Telegram Icon"
            width={48}
            height={48}
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
          />
        </div>
      </div>

      {/* h2 at the bottom */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-12 md:mb-24 text-center">
        Follow BABY NEIRO on social media
      </h2>
    </div>
  );
};

export default Div6;
