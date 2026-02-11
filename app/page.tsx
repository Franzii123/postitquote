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
  "You are beautiful!",
  "You are allowed to take up space in your own life.",
"You don’t need permission to believe in yourself.",
"Maybe nothing is wrong. Maybe you’re just growing.",
"Not everything is falling apart. Some things are falling into place.",
"Things fall apart before they fall into place.",
"There is more working for you than you realize.",
"One day you’ll miss this ordinary Tuesday.",
"Maybe this is the chapter you’ll reread one day.",
"The right timing is often disguised as delay.",
"It’s not delusion if you’re willing to work for it.",
"Romanticize the effort, not just the outcome.",
"Growth feels like losing old versions of yourself.",
"You are allowed to outgrow what once felt right.",
"You’re not too much. You’re just not in the right room.",
"Become the kind of person your younger self would feel safe with.",
"Walk like you already belong.",
"You don’t have to shrink to be loved.",
"The right people won’t be overwhelmed by your light.",
"Being seen starts with seeing yourself.",
"The people meant for you will recognize you.",
"You are already enough for the room you want to enter.",
"You are closer than you think.",
"You don’t need to control everything to be okay.",
"There is beauty in not knowing yet.",
"Trust the season you’re in.",
"Let them doubt you.",
"What is meant for you won’t require shrinking.",
"You don’t need to convince anyone.",
"If they want to, they will.",
"Let them. And then let yourself move on.",
"The life you want also wants you.",
"You can’t control how people behave. You can control what you tolerate.",
"Not everyone is meant to go where you’re going.",
"Rejection is redirection.",
"Confidence is built, not found.",
"Your feelings are valid. Your excuses are not.",
"Start before you feel ready.",
"The only way to build self-trust is to keep promises to yourself.",
"Motivation follows action. Not the other way around.",
"You are one decision away from a different life.",
"Stop waiting to feel like it.",
"Do it scared.",
"Someone else’s opinion of you is not your responsibility.",
"You are not responsible for managing everyone’s emotions.",
"Stop auditioning for a role in someone else’s life.",
"You don’t need to be chosen. You choose.",
"You don’t need everyone to understand you.",
"Most things you fear will never happen.",
"You are stronger than your temporary thoughts.",
"Not everything that feels urgent is important.",
"You can survive discomfort.",
"You are not stuck. You are scared.",
"Stop playing small in rooms you’ve outgrown.",
"Your life will change the moment you decide it can.",
"The next version of your life requires the next version of you.",
"You can’t meet your future self while clinging to your past.",
"Some doors only open when you let go of who you were.",
"The more you think, the less you do.",
"You can’t complain about a life you’re unwilling to change.",
"Growth requires participation.",
"Discomfort is not danger.",
"You can’t attract what you don’t believe you deserve.",
"You won’t outgrow your comfort zone without stepping outside it.",


];

export default function Home() {
  const [quote, setQuote] = useState<string>("Tap to get a Quote!");

  function getRandomQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        background: "radial-gradient(circle at center, #ff8a2b 0%, #ff6a00 100%)"
      }}
    >
      {/* Überschrift */}
      <h1
        className="mb-16 text-3xl md:text-4xl text-[#fff2e6]"
        style={{ fontFamily: "cursive", letterSpacing: "0.5px" }}
      >
        Lebensweisheiten by Franzi
      </h1>

      {/* Post-it */}
      <div
        onClick={getRandomQuote}
        className="w-[320px] h-[320px] bg-[#FFE3C2] rounded-[24px]
        shadow-[0_45px_70px_rgba(0,0,0,0.25)]
        flex items-center justify-center text-center
        px-6 cursor-pointer transition-all duration-300
        hover:scale-[1.03] active:scale-[0.97]"
        style={{ transform: "rotate(-1deg)" }}
      >
        <span className="text-[#2A1E16] text-lg leading-relaxed">
          {quote}
        </span>
      </div>
    </main>
  );
}
