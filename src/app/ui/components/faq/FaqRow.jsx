"use client"
import { useState } from "react";

export default function FaqRow({ faq }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const faqHandler = () => {
    setShowAnswer((prev) => {
      return !prev
    });
  }
  return (
    <div 
      className="py-8 border-y-2 border-slate-300 cursor-pointer select-none hover:border-black"
      onClick={faqHandler}
    >
      <h4 className="font-normal pb-4 text-3xl sm:text-4xl">{faq.question}</h4>
      <div className={`ml-auto md:max-w-[50%] ${!showAnswer ? "hidden" : ""}`}>
        <p className="font-normal text-3xl sm:text-4xl">{faq.answer}</p>
      </div>
    </div>
  );
}