import Image from "next/image";

const Div4 = () => {
  return (
    <main>
      {/* div 1*/}
      <div
        className="min-h-screen bg-cover bg-center text-white flex flex-col items-center"
        style={{ backgroundImage: "url('/image/why1.png')" }}
      >
        <div className="flex flex-col justify-center max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-left mt-10 md:mt-20 p-4 md:p-8 mr-64">
          <div className="mb-6 md:mb-10">
            <p className="text-3xl md:text-5xl text-[#334618]">WHY CHOOSE</p>
            <p className="text-5xl md:text-7xl font-extrabold text-[#334618]">
              BABY NEIRO?
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm md:text-xl text-[#334618] max-w-[65%] mb-10">
              <strong>BabyNeiro</strong> is not just another meme token—it's a
              viral sensation, born from the legendary DOGE narrative, with the
              world now buzzing about the rise of NEIRO.
            </p>
            <p className="text-sm md:text-xl text-[#334618] max-w-[65%]">
              For the first time in history, two Neiro tokens made their way
              onto Binance Futures and Spot! And in an exciting twist, Binance
              chose to list NEIROETHCTO over the whale-backed NeiroOnEthereum.
              Why? Because NEIROETHCTO embodies exactly what it promises:
              decentralized, fairly distributed, and fully community-owned—a
              legendary meme in action.
            </p>
          </div>
        </div>
      </div>

      {/* div 2*/}
      <div
        className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center" // Added justify-center to center the content vertically
        style={{ backgroundImage: "url('/image/why2.png')" }}
      >
        <div className="flex flex-col justify-center max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-left p-4 md:p-8 ml-auto">
          <p className="text-sm md:text-xl text-[#334618] max-w-[65%]">
            Now, here’s where things get interesting: Remember{" "}
            <strong>BabyDoge</strong>? In 2021, it hit billions in market cap
            because it was seen as the beta version of Doge. This season,{" "}
            <strong>
              Neiro is set to be the next Doge, and BabyNeiro is primed to be
              the BabyDoge of this new era
            </strong>
            . When Neiro hits a market cap like DOGE, BabyNeiro will follow in
            its footsteps, reaching billions. BabyDoge just landed on Binance
            this season—can you imagine the future of BabyNeiro in the upcoming
            bull run?
          </p>
        </div>
      </div>

      {/* div 3*/}
      <div
        className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center" // Added justify-center to center the content vertically
        style={{ backgroundImage: "url('/image/why3.png')" }}
      >
        <div className="flex flex-col justify-center max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-left p-4 md:p-8 mr-auto mr-64">
          <p className="text-sm md:text-xl text-[#334618] max-w-[65%]">
            With all that momentum,{" "}
            <strong>
              {" "}
              there’s no reason BabyNeiro won't become globally recognized
              because "we are also a decentralized, fairly distributed,
              community-owned project, and the firstborn of a legendary meme".
            </strong>{" "}
            We’re calling on all Doge, Shiba, and Neiro fans to join the
            movement and help spread the meme revolution. Together, we can make
            the DOGE narrative bigger than ever and create a community that
            makes real-world impact.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Div4;
