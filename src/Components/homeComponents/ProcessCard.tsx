import React, { useEffect, useRef } from 'react';
import '../styleCss/Home.css';

function ProcessCard() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
              PROCESS
            </h1>
          </div>
          
          {/* Two Column Layout: Strategy & Design + Process Flowchart */}
          <div 
            ref={sectionRef}
            className="w-full strategy-design opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Strategy & Design */}
              <div className="ps-md-0 px-3">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Strategy & Design</h1>
                <ul className="pt-3 ps-md-5 m-0 space-y-4">
                  <li className="text-gray-700 text-lg leading-relaxed">
                    Work closely with clients to conceptualize visionary blueprints aligned with business goals.
                  </li>
                  <li className="text-gray-700 text-lg leading-relaxed">
                    Delve into business objectives, target audience, and market dynamics for a strategic foundation.
                  </li>
                  <li className="text-gray-700 text-lg leading-relaxed">
                    Bring concepts to life, ensuring seamless alignment between aesthetics and functionality.
                  </li>
                </ul>
                <h3 className="pt-5 mt-3 text-3xl font-bold text-purple-500">1 Week</h3>
              </div>

              {/* Right Column: Process Flowchart */}
              <div className="position-relative process-card-section">
                {/* Top Process Card */}
                <div className="process-card position-relative bg-gray-900 rounded-xl p-8 mb-8 border border-gray-700 shadow-2xl">
                  <p className="process-top position-absolute -top-3 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium border border-gray-600">Problem</p>
                  <div className="define-arrow position-absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-400"></div>
                  <div className="d-flex align-items-center justify-between mob-des mob-des1 mt-16 mb-6">
                    <div className="bg-gray-700 rounded-lg px-4 py-3 border border-gray-600">
                      <p className="text-white text-sm m-0 font-medium">Research</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg px-4 py-3 border border-gray-600">
                      <p className="text-white text-sm m-0 font-medium">Empathy</p>
                    </div>
                  </div>
                  <div className="process-hr w-full h-1 bg-gray-600 my-6"></div>
                  <div className="mob-hr1 process-vr position-absolute right-6 top-0 w-1 h-full bg-gray-600"></div>
                  <b className="d-block text-center text-uppercase pt-4 text-white text-2xl font-bold">Define</b>
                </div>

                {/* Bottom Process Card */}
                <div className="process-card-solution">
                  <div className="process-card position-relative process-card-top bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-2xl">
                    <p className="process-top position-absolute -top-3 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium border border-gray-600">Solution</p>
                    <div className="define-arrow position-absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-400"></div>
                    <div className="d-flex align-items-center justify-between mob-des mt-16 mb-6">
                      <div className="bg-gray-700 rounded-lg px-4 py-3 border border-gray-600">
                        <p className="text-white text-sm m-0 font-medium">Ideate</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg px-4 py-3 border border-gray-600">
                        <p className="text-white text-sm m-0 font-medium">Prototype</p>
                      </div>
                      </div>
                    <div className="process-hr w-full h-1 bg-gray-600 my-6"></div>
                    <div className="mob-hr2 process-vr position-absolute right-6 top-0 w-1 h-full bg-gray-600"></div>
                    <b className="d-block text-center text-uppercase pt-4 text-white text-2xl font-bold">Deliver</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessCard;
