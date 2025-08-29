import React, { useEffect, useRef } from 'react';
import '../styleCss/Home.css';

function AgileProcess() {
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
    <section 
      ref={sectionRef}
      className="section bg-dark min-h-screen flex items-center justify-center py-20 opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Agile Process
            </h1>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* UI Mockups - Top */}
              <div className="absolute -top-20 -left-32 text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center mb-2">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">UI MOCKUPS</p>
              </div>
              
              {/* Arrow from top UI Mockups to AGILE */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
              
              {/* AGILE Diamond */}
              <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-45 border border-gray-700 flex items-center justify-center">
                <div className="transform -rotate-45 text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">AGILE</h2>
                  <p className="text-purple-400 text-lg">2-3 Sprints</p>
                </div>
              </div>
              
              {/* Arrow from AGILE to bottom UI Mockups */}
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-gray-400 transform -rotate-45"></div>
              
              {/* UI Mockups - Bottom */}
              <div className="absolute -bottom-20 -left-32 text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center mb-2">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">UI MOCKUPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgileProcess;
