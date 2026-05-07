"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
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
  );
}
