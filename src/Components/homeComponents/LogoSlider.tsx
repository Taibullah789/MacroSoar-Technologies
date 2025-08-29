import React, { useEffect, useRef } from 'react';
import '../styleCss/Home.css';
import w1 from '../../assets/w1.jpg';
import w3 from '../../assets/w3.png';
import w4 from '../../assets/w4.png';
import w5 from '../../assets/w5.png';
import w6 from '../../assets/w6.png';
import w7 from '../../assets/w7.jpeg';
import w8 from '../../assets/w8.png';
import w9 from '../../assets/w9.png';
import w10 from '../../assets/w10.jpeg';
import w11 from '../../assets/w11.png';
import w22 from '../../assets/w22.png';

function LogoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure animation starts
    if (trackRef.current) {
      trackRef.current.style.animation = 'slide-left 60s linear infinite';
    }
  }, []);

  const logos = [
    { src: w1, alt: 'Logo 1' },
    { src: w3, alt: 'Logo 3' },
    { src: w4, alt: 'Logo 4' },
    { src: w5, alt: 'Logo 5' },
    { src: w6, alt: 'Logo 6' },
    { src: w7, alt: 'Logo 7' },
    { src: w8, alt: 'Logo 8' },
    { src: w9, alt: 'Logo 9' },
    { src: w10, alt: 'Logo 10' },
    { src: w11, alt: 'Logo 11' },
    { src: w4, alt: 'Logo 4' },
    { src: w22, alt: 'Logo 22' },
    { src: w7, alt: 'Logo 7' },
    { src: w22, alt: 'Logo 22' },
    { src: w9, alt: 'Logo 9' },
    { src: w1, alt: 'Logo 1' },
    { src: w3, alt: 'Logo 3' },
    { src: w4, alt: 'Logo 4' },
    { src: w22, alt: 'Logo 22' },
  ];

  return (
    <section className="py-8 bg-[#f4f5fe] h-[50vh]   flex items-center overflow-hidden">
      <div className="container mx-auto w-[76vw] relative left-41">
        <div className="logo-slider-container ">
          <div ref={trackRef} className="logo-slider-track">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="logo-slide">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-38 w-auto object-contain mx-4"
                  style={{marginLeft:'35px'}}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="logo-slide">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-38 w-auto object-contain mx-4"
                  style={{marginLeft:'35px'}}
                />
              </div>
            ))}
             {logos.map((logo, index) => (
              <div key={`second-${index}`} className="logo-slide">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-38 w-auto object-contain mx-4"
                  style={{marginLeft:'35px'}}
                />
              </div>
            ))}
             {logos.map((logo, index) => (
              <div key={`second-${index}`} className="logo-slide">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-38 w-auto object-contain mx-4"
                  style={{marginLeft:'35px'}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;
