import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="flex flex-col items-center mb-16 mt-12 justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 bg-brand-solid bg-cover bg-center bg-no-repeat scroll-mt-20">
      <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">
        Run your coffee shop or library on autopilot
      </h1>
      <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white"></div>
      <p className="text-sm md:text-base text-white max-w-xl">
        Bring inventory, members, and daily operations into one calm dashboard —
        and spend less time on admin and more time with your customers.
      </p>
      <button className="px-10 py-3 mt-4 text-sm bg-white text-brand-solid hover:scale-105 transition duration-300 rounded-full">
        Start free trial
      </button>
    </section>
  );
}
