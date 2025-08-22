import React from 'react'

function Success() {
  return  (
    <section className="bg-[#0d0d0f] text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Strategy <br /> & Design
          </h2>

          <ul className="mt-6 space-y-4 text-gray-300 text-lg leading-relaxed">
            <li>• Work closely with clients to conceptualize visionary blueprints aligned with business goals.</li>
            <li>• Delve into business objectives, target audience, and market dynamics for a strategic foundation.</li>
            <li>• Bring concepts to life, ensuring seamless alignment between aesthetics and functionality.</li>
          </ul>

          <p className="mt-6 text-2xl font-semibold text-purple-400">1 Week</p>
        </div>

        {/* RIGHT SIDE (Flow Chart Boxes) */}
        <div className="flex flex-col items-center gap-10">
          {/* Define Box */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg w-64 shadow-lg text-center">
            <p className="flex justify-between text-gray-400 text-sm mb-4">
              <span>Research</span>
              <span>Empathy</span>
            </p>
            <hr className="border-gray-700 mb-4" />
            <h3 className="text-xl font-bold">DEFINE</h3>

            {/* Top arrow label */}
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              Problem
            </span>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gray-500"></div>
          </div>

          {/* Arrow Down */}
          <div className="w-px h-8 bg-gray-500"></div>

          {/* Deliver Box */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg w-64 shadow-lg text-center">
            <p className="flex justify-between text-gray-400 text-sm mb-4">
              <span>Ideate</span>
              <span>Prototype</span>
            </p>
            <hr className="border-gray-700 mb-4" />
            <h3 className="text-xl font-bold">DELIVER</h3>

            {/* Top arrow label */}
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              Solution
            </span>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gray-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};



  

export default Success