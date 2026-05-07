"use client";

import { useEffect, useState } from "react";
import { Envelope } from "./components/layout/Envelope";
import { HeroSection } from "./components/layout/HeroSection";
import { InvitationContent } from "./components/layout/InvitationContent";
import { RSVPSection } from "./components/RSVP/RSVPSection";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzfoRYECUfAZA8dV7iLA4PAeTBB6eD5wQcYO-XLhBr7n-Q6jVxSmTZQowR9PcLCFZY/exec";

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpened) {
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, [isOpened]);

  return (
    <div className="min-h-screen bg-[#fdfaf7] overflow-hidden font-serif">
      {!isOpened && <Envelope onOpen={() => setIsOpened(true)} />}

      {isOpened && (
        <>
          <HeroSection isLoaded={isLoaded} />

          <section className="max-w-2xl mx-auto px-6 pb-24 pt-10">
            <div
              className={`bg-white shadow-2xl rounded-3xl p-10 md:p-16 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <InvitationContent />
              <RSVPSection webAppUrl={WEB_APP_URL} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}
