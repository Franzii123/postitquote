"use client";

import { useState } from "react";

const quotes = [
  "Sometimes we forget we’re already in the middle of what we used to wish for.",
  "The right doors won’t open for you until you are the version of yourself that’s supposed to walk through them.",
  "Already knowing how much you’re going to miss a moment while you’re still living it.",
  "It’s sweet when things don’t work out and then later on, you realize that they actually really did.",
  "Everything is a win when the goal is to experience.",
  "It’s often delusion and audacity that takes us where logic never could.",
  "May all your delulu come trululu.",
  "The less you care, the more you live.",
  "A year from now, a lot of things you’re stressing about won’t mean a thing.",
  "If you never go, you will never know.",
  "Don’t give up on something you think of every day.",
  "The happiest people romanticize their life because they know magic exists around them all the time.",
  "The good news is: if you can overthink the worst, you can overthink the best too.",
  "Your thoughts create your reality.",
  "You’ll never feel ready because ready isn’t a feeling, it’s a decision.",
  "No one is you and that is your power.",
  "Break the pattern today or the loop will repeat tomorrow.",
  "Be open to learn, unlearn, and relearn.",
  "Overthinking kills happiness.",
  "Choose growth over comfort.",
  "Confidence comes from trusting your ability, not knowing everything.",
  "Ready is a decision.",
  "May you attract someone who’s so consistent, you forget what doubt feels like.",
  "Major cheat code in life: act like things are working out before they do.",
  "When you are confident, people become confident in you.",
  "Enjoy the space between where you are and where you are going.",
  "Being ready is a myth. You start. You suck. You figure it out. You get better.",
  "You are allowed to take up space in your own life.",
  "You don’t need permission to believe in yourself.",
  "Maybe nothing is wrong. Maybe you’re just growing.",
  "Not everything is falling apart. Some things are falling into place.",
  "Things fall apart before they fall into place.",
  "There is more working for you than you realize.",
  "One day you’ll miss this ordinary Tuesday.",
  "The right timing is often disguised as delay.",
  "Romanticize the effort, not just the outcome.",
  "You’re not too much. You’re just not in the right room.",
  "Walk like you already belong.",
  "Rejection is redirection.",
  "Start before you feel ready.",
  "Do it scared.",
  "You are not stuck. You are scared.",
  "Growth requires participation.",
  "Discomfort is not danger.",
  "You won’t outgrow your comfort zone without stepping outside it."
];

export default function Home() {
  const [quote, setQuote] = useState<string>("Tap to get a Quote");

  function getRandomQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  return (
    <main
      className="
        min-h-screen
        flex flex-col items-center justify-center
        bg-[radial-gradient(circle_at_center,_#ffe4c4_0%,_#f9a55a_55%,_#f97316_90%)]
      "
    >
      {/* Überschrift */}
      <h1
        className="mb-16 text-3xl md:text-4xl text-black"
        style={{
          fontFamily: "Georgia, serif",
          letterSpacing: "0.4px",
        }}
      >
        Lebensweisheiten by Franzi
      </h1>

      {/* Post-it */}
      <div
        onClick={getRandomQuote}
        className="
          w-[300px] h-[300px]
          bg-[#FFE7BA]
          rounded-[4px]
          flex items-center justify-center text-center
          px-6 cursor-pointer
          transition-all duration-300
          hover:scale-[1.03]
          active:scale-[0.97]
        "
        style={{
          transform: "rotate(-2deg)",
          boxShadow: "0 40px 60px rgba(0,0,0,0.25)",
        }}
      >
        <span className="text-black text-lg leading-relaxed font-medium">
          {quote}
        </span>
      </div>
    </main>
  );
}
