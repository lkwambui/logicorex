import React from "react";

const logos = [
  "BrightWave",
  "Nimbus Labs",
  "Kijani Health",
  "Harbor Finance",
  "Nova Retail",
  "Atlas Logistics",
];

export default function TrustBar() {
  return (
    <section
      className="bg-white py-10 px-4"
      aria-label="Trusted by teams"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500">
          Trusted by growing teams
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-center text-xs sm:text-sm font-semibold text-gray-500 bg-gray-50 border border-gray-100 rounded-full py-3"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
