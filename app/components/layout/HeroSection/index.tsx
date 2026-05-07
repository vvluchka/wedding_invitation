import { Countdown } from "../Countdown";
import { Decorations } from "./decorations";

type Props = {
  isLoaded: boolean;
};

export function HeroSection({ isLoaded }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e8d9c7_0.8px,transparent_1px)] bg-[length:25px_25px] opacity-40" />

      <div
        className={`relative z-10 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="mb-10 text-[#3f2e1e]">
          <p className="font-script text-[4.8rem] md:text-[5.5rem] leading-none tracking-wider ">
            Роман
          </p>
          <p className="text-5xl  font-light my-1">&amp;</p>
          <p className="font-script text-[4.8rem] md:text-[5.5rem] leading-none tracking-wider ">
            Христина
          </p>
        </div>

        <div className="mb-8">
          <p className="text-3xl tracking-[6px] text-[#3f2e1e] font-medium">
            06.06.2026
          </p>
        </div>

        <Countdown />

        <div className="flex justify-center mb-10">
          <span className="text-6xl animate-heartbeat text-pink-400">💗</span>
        </div>
        <p className="text-xl text-[#6b5a45] bg-white/70 backdrop-blur-sm rounded-2xl p-5 inline-block shadow-sm tracking-widest font-light">
          Since 2016 to ∞
        </p>
      </div>

      {/* Декоративні фото */}
      <Decorations />

      <div className="lg:opacity-0 opacity-100 mt-10 flex items-end justify-center gap-8 text-4xl">
        🌸🌼🌷🌻🌺
      </div>
    </section>
  );
}
