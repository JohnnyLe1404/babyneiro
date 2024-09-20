import Image from "next/image";

const Div4 = () => {
  return (
    <main className="text-[#334618]">
      {/* div 1 */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url('/image/why1.png')" }}
      >
        <div className="flex flex-col justify-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-20">
          <div className="mb-6 md:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              WHY CHOOSE
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
              BABY NEIRO?
            </h1>
          </div>
          <div className="space-y-4 max-w-prose">
            <p className="text-base sm:text-xl md:text-xl lg:text-2xl">
              <strong>BabyNeiro</strong> is not just another meme token—it's a
              viral sensation, born from the legendary DOGE narrative, with the
              world now buzzing about the rise of NEIRO.
            </p>
            <p className="text-base sm:text-xl md:text-xl lg:text-2xl">
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

      {/* div 2 */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/image/why2.png')" }}
      >
        <div className="flex flex-col justify-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ml-auto max-w-prose">
            <p className="text-base sm:text-xl md:text-xl lg:text-2xl">
              Now, here's where things get interesting: Remember{" "}
              <strong>BabyDoge</strong>? In 2021, it hit billions in market cap
              because it was seen as the beta version of Doge. This season,{" "}
              <strong>
                Neiro is set to be the next Doge, and BabyNeiro is primed to be
                the BabyDoge of this new era
              </strong>
              . When Neiro hits a market cap like DOGE, BabyNeiro will follow in
              its footsteps, reaching billions. BabyDoge just landed on Binance
              this season—can you imagine the future of BabyNeiro in the
              upcoming bull run?
            </p>
          </div>
        </div>
      </div>

      {/* div 3 */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/image/why3.png')" }}
      >
        <div className="flex flex-col justify-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose">
            <p className="text-base sm:text-xl md:text-xl lg:text-2xl">
              With all that momentum,{" "}
              <strong>
                there's no reason BabyNeiro won't become globally recognized
                because "we are also a decentralized, fairly distributed,
                community-owned project, and the firstborn of a legendary meme".
              </strong>{" "}
              We're calling on all Doge, Shiba, and Neiro fans to join the
              movement and help spread the meme revolution. Together, we can
              make the DOGE narrative bigger than ever and create a community
              that makes real-world impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Div4;
