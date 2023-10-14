"use client";

import { useState, useEffect } from "react";

const RandomQuoteDisplay = () => {
  const [randomQuote, setRandomQuote] = useState<{
    quote: string;
    teller: string;
  }>({
    quote: "",
    teller: "",
  });

  useEffect(() => {
    const quotes = [
      {
        quote: "Travel far enough, you meet yourself.",
        teller: "David Mitchell",
      },
      { quote: "Adventure is worthwhile in itself.", teller: "Amelia Earhart" },
      { quote: "The journey not the arrival matters.", teller: "T.S. Eliot" },
      {
        quote:
          "Travel makes one modest. You see what a tiny place you occupy in the world.",
        teller: "Gustave Flaubert",
      },
      { quote: "To travel is to live.", teller: "Hans Christian Andersen" },
      {
        quote:
          "A good traveler has no fixed plans and is not intent on arriving.",
        teller: "Lao Tzu",
      },
      {
        quote:
          "The world is a book, and those who do not travel read only one page.",
        teller: "Saint Augustine",
      },
      {
        quote:
          "Traveling – it leaves you speechless, then turns you into a storyteller.",
        teller: "Ibn Battuta",
      },
      {
        quote:
          "I travel not to go anywhere but to go. I travel for travel's sake. The great affair is to move.",
        teller: "Robert Louis Stevenson",
      },
      {
        quote:
          "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do.",
        teller: "Mark Twain",
      },
      {
        quote: "Travel is the only thing you can buy that makes you richer.",
        teller: "Anonymous",
      },
      { quote: "Life is short, and the world is wide.", teller: "Simon Raven" },
      { quote: "Adventure awaits.", teller: "Anonymous" },
      { quote: "Travel far, travel wide, travel boldly.", teller: "Anonymous" },
      {
        quote:
          "The best journeys in life are those that answer questions you never thought to ask.",
        teller: "Rich Ridgeway",
      },
    ];

    // Function to pick a random quote from the array
    const pickRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    };

    // Call the function when the component is loaded or appears
    pickRandomQuote();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <blockquote className="space-y-2 w-4/5 mx-auto p-5 bg-slate-900 bg-opacity-50 rounded-md">
      <p className="text-lg">&ldquo;{randomQuote.quote}&rdquo;</p>
      <footer className="text-sm">{randomQuote.teller}</footer>
    </blockquote>
  );
};

export default RandomQuoteDisplay;
