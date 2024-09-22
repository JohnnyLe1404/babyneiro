import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Div1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      name="div1"
      className="min-w-screen min-h-screen bg-cover bg-center text-white flex flex-col items-start bg-[url('/image/bg1.1.png')] md:bg-[url('/image/bg1.png')]"
    >
      {/* Header */}
      <header className="w-full flex justify-between  md:justify-center items-center p-2 md:p-4 bg-black bg-opacity-60 z-50">
        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Image
            src="/image/logo.png"
            alt="Neiro Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold text-white">
            BABY
            <br />
            NEIRO
          </span>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-center space-x-14 lg:space-x-28 text-2xl text-white items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/image/logo.png"
              alt="Neiro Logo"
              width={50}
              height={50}
            />
            <span className="text-2xl font-bold text-white">
              BABY
              <br />
              NEIRO
            </span>
          </div>
          <Link
            to="div1"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="div2"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="div6"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Tokenomics
          </Link>
          <div className="flex space-x-14 justify-center items-center">
            <a
              href="https://x.com/babyneiroethcto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/image/x2.png" alt="X Logo" width={30} height={30} />
            </a>
            <a
              href="https://t.me/babyneiro_ethcto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/telegram2.png"
                alt="Telegram Logo"
                width={35}
                height={35}
              />
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/dextool2.png"
                alt="dextool Logo"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://dexscreener.com/ethereum/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/dexscreen2.png"
                alt="dexscreen Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-black bg-opacity-50 text-white">
          <nav className="flex flex-col items-center py-4 space-y-4 text-xl">
            <Link
              to="div1"
              smooth={true}
              duration={500}
              className="hover:text-gray-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="div2"
              smooth={true}
              duration={500}
              className="hover:text-gray-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="div6"
              smooth={true}
              duration={500}
              className="hover:text-gray-300 cursor-pointer"
            >
              Tokenomics
            </Link>
            <div className="flex space-x-8 justify-center items-center">
              <a
                href="https://x.com/babyneiroethcto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/image/x2.png" alt="X Logo" width={30} height={30} />
              </a>
              <a
                href="https://t.me/babyneiro_ethcto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/telegram2.png"
                  alt="Telegram Logo"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/dextool2.png"
                  alt="dextool Logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://dexscreener.com/ethereum/0x4e8b4ab7eca3df46f62ad5d9b7a0ea6bbe5d3821"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/dexscreen2.png"
                  alt="dexscreen Logo"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-center mt-40 md:mt-44 md:ml-52 text-center px-4 md:px-0">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-2 md:mb-4">
            Meet
          </h1>
          <div className="flex items-center space-x-2 mb-2">
            <h2 className="text-5xl md:text-8xl font-extrabold mb-2 md:mb-4 text-white">
              BABYNEIRO
            </h2>
          </div>
          <p className="text-gray-100 mb-6 text-base md:text-lg px-4 md:px-0">
            <span className="text-3xl md:text-4xl">
              The First <strong>BabyNeiro</strong> on <strong>ETHEREUM</strong>
            </span>
            <br />
            <span className="text-2l md:text-3xl">
              managed by community with all our hearts
            </span>
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://app.uniswap.org/swap?outputCurrency=0x8581998b905070B8984d99DC9af2C6800D97dCE1"
              target="_blank" /* This ensures it opens in a new tab */
              rel="noopener noreferrer" /* For security best practices */
              className="bg-white text-black border border-black rounded-full px-6 py-3 inline-block hover:bg-gray-300 w-full md:w-auto"
            >
              Buy <strong>$BABYNEIRO</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
