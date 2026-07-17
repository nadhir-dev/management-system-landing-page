"use client";
import { useState } from "react";

const faqsData = [
  {
    question: "Can I run both a coffee shop and a library with it?",
    answer:
      "Yes. The system is built for small, inventory-driven businesses, so you can manage a café, a library, or both from a single dashboard.",
  },
  {
    question: "How does inventory tracking work?",
    answer:
      "Log items as they arrive, track stock levels in real time, and get low-stock alerts before you run out of beans, books, or supplies.",
  },
  {
    question: "Can regular customers have member accounts?",
    answer:
      "Absolutely. Create member profiles for loyalty, borrowing, or subscriptions, and keep their full history in one place.",
  },
  {
    question: "Do I need any technical setup?",
    answer:
      "None. Your workspace is live in under 10 minutes — no installs, no training, and no credit card required to start.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. Your data is encrypted and hosted securely, with role-based access so only your team can see what they need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="faq" className="flex flex-col items-center text-center px-4 py-10 scroll-mt-20">
      <h1 className="text-brand-600 text-4xl font-semibold mt-2">
        Frequently Asked Questions
      </h1>
      <p className="text-sm text-slate-500 mt-4 max-w-sm">
        Everything you need to know about running your coffee shop or library
        with one simple management system.
      </p>

      <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">
        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="faq-item flex flex-col items-start w-full"
            >
              <div
                onClick={() => toggleFaq(index)}
                className="faq-header flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-brand-secondary to-brand-50 border border-slate-200 p-4 rounded transition-all"
              >
                <h2 className="text-sm">{faq.question}</h2>
                <svg
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p
                className={`text-sm text-slate-500 px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
