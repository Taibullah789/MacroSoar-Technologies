import React, { useEffect, useRef } from 'react';
import '../styleCss/Home.css';
import shape1 from '../../assets/7.png';
import shape2 from '../../assets/10.png';
import shape3 from '../../assets/11.png';
import shape4 from '../../assets/12.png';

function ContactUs() {
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
      className="section py-20 bg-gray-100 relative overflow-hidden"
      style={{ maxHeight: '60vh', maxWidth: '90vw', margin: 'auto' }}
    >
      {/* Decorative Elements */}
      {/* Top-Left Circle */}
      <div className="absolute top-0 left-16">
        <img
          src={shape3}
          alt="Decorative shape"
          className="animate-slow-spin w-40 h-40 object-contain"
        />
      </div>

      {/* Top-Right Circle */}
      <div className="absolute top-0 right-16">
        <img
          src={shape4}
          alt="Decorative shape"
          className="animate-slow-spin w-40 h-40 object-contain"
        />
      </div>

      {/* Bottom-Left Zigzag */}
      <div className="absolute bottom-34 left-86">
        <img
          src={shape1}
          alt="Decorative zigzag"
          className="animate-slow-bounce w-36 h-16 object-contain"
        />
      </div>

      {/* Bottom-Right Circle with X */}
      <div className="absolute bottom-34 right-86">
        <img
          src={shape2}
          alt="Decorative circle with X"
          className="w-20 h-20 animate-slow-spin object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative bottom-22 z-10 h-full flex flex-col justify-top pt-8">
        <div
          ref={sectionRef}
          className="text-center opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
        >
          {/* Heading */}
          <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Have a project in mind?
          </h1>

          {/* Sub-heading */}
          <p className="text-2xl text-gray-500 mb-6 leading-relaxed">
            Don't hesitate to contact us.
          </p>

          {/* Contact Button */}
          <button
            className="bg-orange-500 relative left-140 top-8 hover:bg-orange-600 hover:cursor-pointer text-white font-bold py-4 px-10 rounded-lg flex items-center mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ padding: '15px' }}
          >
            {/* Flame Icon */}
            <svg
              className="w-6 h-6 mr-3 text-blue-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C12 2 14 4.5 14 7C14 9.5 12 12 12 12C12 12 10 9.5 10 7C10 4.5 12 2Z" />
              <path d="M12 12C12 12 14 14.5 14 17C14 19.5 12 22 12 22C12 22 10 19.5 10 17C10 14.5 12 12Z" />
              <path d="M12 2C12 2 10 4.5 10 7C10 9.5 12 10 12 10C12 10 14 9.5 14 7C14 4.5 12 2Z" />
            </svg>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
