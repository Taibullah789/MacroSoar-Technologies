import React, { type JSX } from "react";
import strategyimage from "../../assets/strategyimg.jpeg";
import launchimage from "../../assets/launchimg.jpeg";
import improveimage from "../../assets/improveimg.png";

// Define TypeScript type for a card
interface Card {
  title: string;
  description: string[];
  footer: string;
  image: string; // image should be a string (imported image resolves to string in TS)
}

const cards: Card[] = [
  {
    title: "Strategy & Design",
    description: [
      "At MacroSoar Technologies, we begin every project with a strong foundation of strategy and design.",
      "We work closely with stakeholders to understand business goals, user needs, and market trends.",
      "Our team translates ideas into intuitive design systems that align functionality with a world-class user experience.",
    ],
    footer: "Timeline: 1 Week",
    image: strategyimage,
  },
  {
    title: "MVP Builds & Launch",
    description: [
      "We adopt an agile approach to rapidly develop Minimum Viable Products (MVPs) tailored for market validation.",
      "Our engineering team ensures seamless integration, scalability, and reliability from the very first release.",
      "Once ready, we launch with precision, delivering speed-to-market without compromising on quality.",
    ],
    footer: "Timeline: 2–3 Weeks",
    image: launchimage,
  },
  {
    title: "Iterate & Improve",
    description: [
      "Technology is never static, and neither are we at MacroSoar Technologies.",
      "Through continuous iteration, we refine digital products based on user feedback and performance insights.",
      "From feature enhancements to scaling infrastructure, our process ensures long-term growth and innovation.",
    ],
    footer: "Ongoing: Monthly Plans",
    image: improveimage,
  },
];

export default function ScrollCards(): JSX.Element {
  return (
    <div className="relative bg-[#f4f6fc] text-white">
      <h1 className="text-3xl font-bold text-black relative left-3/7 top-20">
        PROCESS
      </h1>

      {cards.map((card, i) => (
        <div
          key={i}
          className="sticky top-0 h-screen flex items-center justify-center"
        >
          <div
            className="h-[65vh] w-[88%] max-w-5xl px-14 py-12 rounded-2xl shadow-2xl 
                       bg-gradient-to-br from-neutral-900/95 to-neutral-800/80 
                       backdrop-blur-xl border border-neutral-700 flex items-center gap-10"
            style={{ padding: "30px" }}
          >
            {/* Left Side - Text */}
            <div className="flex-1">
              <h2 className="text-5xl font-extrabold mb-8 leading-snug text-[#ff612f]">
                {card.title}
              </h2>

              <ul
                className="mb-10 space-y-4 text-lg leading-relaxed text-gray-300 list-disc list-inside"
                style={{ padding: "10px", textAlign: "justify", lineHeight: "2" }}
              >
                {card.description.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>

              <p className="text-xl font-semibold text-[#ff612f] tracking-wide">
                {card.footer}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="max-h-64 object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
