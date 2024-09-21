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
      <header className="w-full max-w-full justify-between mx-auto flex items-center p-4 bg-black bg-opacity-60 z-50">
        <div
          className={`flex items-center space-x-2 ${
            isMenuOpen ? "" : "md:ml-44"
          }`}
        >
          <Image
            src="/image/logo.png"
            alt="Neiro Logo"
            width={50}
            height={50}
          />
          <span className="text-2xl md:text-4xl font-bold text-white">
            NEIRO
          </span>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-center space-x-4 lg:space-x-28 text-lg lg:text-2xl text-white">
          <Link
            to="div1"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="div2"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="div6"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Tokenomics
          </Link>
          <Link
            to="div4"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Whitepaper
          </Link>
          <Link
            to="div9"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Socials
          </Link>
        </nav>

        <button className="hidden md:block border border-white rounded-full px-4 py-2 hover:bg-gray-600 text-lg lg:text-2xl text-white mr-44">
          Join Telegram
        </button>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-black bg-opacity-90 text-white">
          <nav className="flex flex-col items-center py-4 space-y-4 text-xl">
            <Link
              to="div1"
              smooth={true}
              duration={500}
              className="hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="div2"
              smooth={true}
              duration={500}
              className="hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="div6"
              smooth={true}
              duration={500}
              className="hover:text-gray-300"
            >
              Tokenomics
            </Link>
            <Link
              to="div4"
              smooth={true}
              duration={500}
              className="hover:text-gray-300"
            >
              Whitepaper
            </Link>
            <Link
              to="div9"
              smooth={true}
              duration={500}
              className="hover:text-gray-300"
            >
              Socials
            </Link>
          </nav>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-center mt-40 md:mt-44 md:ml-72 text-center px-4 md:px-0">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 md:mb-8">
            Welcome to
          </h1>
          <div className="flex items-center space-x-2 mb-2">
            <h2 className="text-5xl md:text-8xl font-extrabold mb-6 md:mb-10 text-white">
              BABY NEIRO
            </h2>
          </div>
          <p className="text-gray-100 mb-6 text-base md:text-lg px-4 md:px-0">
            The First BabyNeiro on ETHEREUM, managed by community with all our
            hearts
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="bg-white text-black border border-black rounded-full px-6 py-3 inline-block hover:bg-gray-300 w-full md:w-auto"
            >
              Buy BABY NEIRO
            </a>
            <a
              href="#"
              className="bg-black bg-opacity-20 text-white border border-white rounded-full px-6 py-3 inline-block hover:bg-gray-800 hover:border-gray-400 w-full md:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
