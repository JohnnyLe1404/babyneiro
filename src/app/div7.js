import Image from "next/image";

const Div7 = () => {
  return (
    <div
      name="div7"
      className="bg-[url('/image/bg5.png')] bg-cover bg-center min-w-screen text-[#334618] min-h-screen flex flex-col items-center p-4 md:p-8">

      <div className="flex justify-center mb-12 md:mb-24">
        <div className="flex space-x-16 flex-wrap"> {/* Giảm khoảng cách và cho phép cuộn */}
          <Image src="/image/x.png" alt="X Icon" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          <Image src="/image/dextool.png" alt="dextool Icon" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          <Image src="/image/dexscreen.png" alt="dexscreen Icon" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          <Image src="/image/telegram.png" alt="Telegram Icon" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-80">
        Follow BABY NEIRO on social media
      </h2>
    </div>
  );
};

export default Div7;
