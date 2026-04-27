"use client";

import { useEffect, useState } from "react";
import { RSVPForm } from "./components";

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Каунтдаун
  useEffect(() => {
    const weddingDate = new Date("2026-06-06T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpened) {
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, [isOpened]);

  const openInvitation = () => setIsOpened(true);

  // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

  return (
    <div className="min-h-screen bg-[#fdfaf7] overflow-hidden font-serif">
      {/* Конверт — без змін */}
      {!isOpened && (
        <div className="min-h-screen flex items-center justify-center px-6 relative">
          <div
            onClick={openInvitation}
            className="cursor-pointer group relative w-full max-w-md transition-all duration-700 hover:scale-105 active:scale-95"
          >
            <div className="relative bg-[#eae0d0] aspect-[5/4] rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#f4e9d8] rounded-b-[60%] border-b border-[#3f2e1e] shadow-inner" />

              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                <p className="font-script text-4xl text-[#3f2e1e]">
                  Роман & Христина
                </p>
                <p className="text-sm tracking-widest text-[#6b5a45] mt-1">
                  06.06.2026
                </p>
              </div>

              <div className="absolute top-32 sm:bottom-28 left-1/2 -translate-x-1/2 z-20">
                <div className="w-28 h-28 bg-gradient-to-br from-[#9c2a2a] via-[#b33f3f] to-[#8c1f1f] rounded-full shadow-xl flex items-center justify-center border-8 border-[#f4e9d8] group-hover:rotate-6 transition-transform">
                  <div className="text-center text-white">
                    <div className="text-2xl">💌</div>
                    <div className="text-[10px] tracking-[2px] mt-1 font-medium">
                      ВІДКРИТИ
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#e8d9c7_0.5px,transparent_1px)] bg-[length:8px_8px] opacity-40" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/10 blur-xl rounded-full" />
          </div>
          <p className="absolute bottom-22 text-[#6b5a45] text-sm tracking-widest">
            Натисніть на конверт, щоб відкрити запрошення
          </p>
        </div>
      )}

      {/* Повне запрошення */}
      {isOpened && (
        <>
          {/* Титульна частина з каунтдауном — без змін */}
          <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
            {/* ... (весь код титульної секції з каунтдауном залишається як був) ... */}
            <div className="absolute inset-0 bg-[radial-gradient(#e8d9c7_0.8px,transparent_1px)] bg-[length:25px_25px] opacity-40" />

            <div
              className={`relative z-10 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="mb-10">
                <p className="font-script text-[4.8rem] md:text-[5.5rem] leading-none tracking-wider text-[#3f2e1e]">
                  Роман
                </p>
                <p className="text-5xl text-[#3f2e1e] font-light my-1">&amp;</p>
                <p className="font-script text-[4.8rem] md:text-[5.5rem] leading-none tracking-wider text-[#3f2e1e]">
                  Христина
                </p>
              </div>

              <div className="absolute left-22 top-12 md:left-32 md:top-18">
                <Butterfly
                  color="#d4a373"
                  className="w-20 h-20 rotate-[-25deg] animate-float"
                />
              </div>

              <div className="mb-8">
                <p className="text-3xl tracking-[6px] text-[#6b5a45] font-medium">
                  06.06.2026
                </p>
              </div>

              <div className="mb-12 bg-white/70 backdrop-blur-sm rounded-2xl py-6 px-10 inline-block shadow-sm">
                <p className="text-sm uppercase tracking-widest text-[#8c7a5e] mb-3">
                  До нашого весілля залишилось
                </p>
                <div className="flex justify-center gap-6 md:gap-8 text-[#3f2e1e]">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="text-4xl md:text-5xl font-medium tabular-nums">
                        {value}
                      </div>
                      <div className="text-xs tracking-widest uppercase mt-1">
                        {unit === "days" && "днів"}
                        {unit === "hours" && "годин"}
                        {unit === "minutes" && "хвилин"}
                        {unit === "seconds" && "секунд"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-10">
                <span className="text-6xl animate-heartbeat text-pink-400">
                  💗
                </span>
              </div>
              <p className="text-xl text-[#6b5a45] tracking-widest font-light">
                Since 2016 to ∞
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-8 text-4xl opacity-30 pointer-events-none">
              🌸🌼🌺🌻🌷
            </div>
          </section>

          {/* Повне запрошення з RSVP внизу */}
          <section className="max-w-2xl mx-auto px-6 pb-24 pt-10">
            <div
              className={`bg-white shadow-2xl rounded-3xl p-10 md:p-16 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="text-center space-y-12">
                {/* ... весь попередній текст ... */}
                <p className="text-lg leading-relaxed text-[#4a3f35] max-w-md mx-auto">
                  Є події, які залишаються в пам’яті на все життя.
                  <br />І є люди, з якими хочеться їх розділити.
                </p>

                <div>
                  <p className="font-script text-6xl md:text-7xl text-[#3f2e1e] tracking-wide mb-6">
                    Дорогі, Гості!
                  </p>
                  <p className="text-xl text-[#6b5a45]">
                    Запрошуємо вас розділити з нами радість
                    <br />
                    нашого одруження!
                  </p>
                </div>

                {/* Вінчання + Бенкет */}
                <div className="grid md:grid-cols-2 gap-10 border-t border-b border-[#e8d9c7] py-12">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💍</div>
                    <p className="font-medium text-[#3f2e1e] text-lg">
                      Вінчання
                    </p>
                    <p className="text-sm mt-3 text-[#6b5a45] leading-tight">
                      у храмі Святого Юрія, с. Переволока
                      <br />о 11:00
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🥂</div>
                    <p className="font-medium text-[#3f2e1e] text-lg">
                      Святковий бенкет
                    </p>
                    <p className="text-sm mt-3 text-[#6b5a45] leading-tight">
                      у ресторані «Княже село»
                      <br />о 14:00
                    </p>
                  </div>
                </div>

                {/* Кольори */}
                <div className="text-center">
                  <p className="uppercase tracking-[2px] text-xs text-[#8c7a5e] mb-4">
                    Кольорова гама нашого весілля
                  </p>
                  <div className="flex flex-wrap md:flex justify-center gap-5">
                    {[
                      "#f5e8d3",
                      "#f4a7b9",
                      "#f8f1c7",
                      "#a8b5a2",
                      "#e8d9c7",
                    ].map((color, i) => (
                      <div
                        key={i}
                        className="w-11 h-11 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Основний текст */}
                <div className="text-center text-sm leading-relaxed text-[#6b5a45] max-w-xs mx-auto">
                  Це запрошення — особливе.
                  <br />
                  Посадіть його та виростіть квітку, адже все справжнє і
                  красиве,
                  <br />
                  як і наше «ми», народжується з любові.
                  <div className="mt-8 text-3xl">🌱</div>
                </div>

                {/* === НОВИЙ БЛОК: ВБУДОВАНА ФОРМА === */}
                <div className="pt-12 border-t border-[#e8d9c7]">
                  <h2 className="text-2xl font-medium text-[#3f2e1e] mb-6">
                    Підтвердіть, будь ласка, свою присутність
                  </h2>

                  <p className="text-[#6b5a45] mb-8 max-w-md mx-auto">
                    Будемо дуже раді бачити вас! Заповніть форму нижче або
                    напишіть нам особисто.
                  </p>

                  {/* === КАСТОМНА ФОРМА RSVP === */}
                  <div className="pt-12 border-t border-[#e8d9c7]">
                    <h2 className="text-2xl font-medium text-[#3f2e1e] mb-6 text-center">
                      Підтвердіть, будь ласка, свою присутність
                    </h2>

                    <p className="text-[#6b5a45] mb-8 text-center max-w-md mx-auto">
                      Будемо дуже раді бачити вас на нашому весіллі!
                    </p>

                    <RSVPForm webAppUrl="https://script.google.com/macros/s/AKfycbzfoRYECUfAZA8dV7iLA4PAeTBB6eD5wQcYO-XLhBr7n-Q6jVxSmTZQowR9PcLCFZY/exec" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Стилі */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;500&family=Inter:wght@400;500&display=swap");

        .font-script {
          font-family: "Great Vibes", cursive;
        }

        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(-25deg);
          }
          50% {
            transform: translateY(-25px) rotate(-15deg);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 2.2s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
        }
      `}</style>
    </div>
  );
}

/* SVG Метелик */
function Butterfly({
  color = "#d4a373",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 20 Q10 40 25 70 Q40 85 55 55 Q40 30 30 20"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M90 20 Q110 40 95 70 Q80 85 65 55 Q80 30 90 20"
        fill={color}
        opacity="0.9"
      />
      <circle cx="60" cy="48" r="8" fill="#3f2e1e" />
      <path
        d="M55 48 Q60 40 65 48"
        stroke="#3f2e1e"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
