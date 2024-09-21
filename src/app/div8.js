import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Div8 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I Buy and Sell BABY NEIRO",
      answer:
        "You can trade $MYRO on any of our listed Centralised Exchanges, or on Decentralised Exchanges like Raydium and Jupiter.",
    },
    {
      question: "Will BABY NEIRO list on more CEX's?",
      answer: "Yes. $MYRO will be listed on most major worldwide exchanges.",
    },
    {
      question: "Is there a BABY NEIRO whitepaper / roadmap?",
      answer: (
        <>
          Yes, you can view our whitepaper{" "}
          <a href="#" className="underline text-blue-600">
            here
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div 
    name="div8"
    className="bg-[#fbfaf9] text-[#334618] flex justify-center items-center flex-col space-y-4 py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4 p-4">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
          FAQ
        </span>
        <Image
          src="/image/faq.png"
          alt="Bowl Icon"
          width={50}
          height={50}
          className="object-cover"
        />
      </div>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-3xl border-4 border-[#334618] rounded-2xl bg-white"
        >
          <div
            className="min-h-[60px] sm:min-h-[75px] lg:min-h-[91px] flex items-center justify-between px-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <span className="text-left text-lg sm:text-2xl lg:text-3xl font-bold pr-4">
              {item.question}
            </span>
            <FaChevronDown
              className={`flex-shrink-0 w-6 h-6 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          {openIndex === index && (
            <div className="p-4 text-left text-base sm:text-lg lg:text-xl">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Div8;
