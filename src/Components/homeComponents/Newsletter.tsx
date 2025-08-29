import React from 'react';
import '../styleCss/Home.css';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';

function Newsletter() {
  return (
    <section className=" py-16 bg-white flex justify-center  relative top-15">
      <div className="container mx-auto px-4 h-full">
        <div className="max-w-6xl mx-auto h-full flex items-center">
          {/* Orange Banner with Newsletter */}
          <div className="bg-orange-500 rounded-2xl p-12 relative left-14 overflow-hidden w-full" style={{height:'50vh'}}>
            {/* Decorative 3D Shapes */}
            {/* Top Left - s1 */}
            <div className="absolute top-8 left-8">
              <img src={s1} alt="Decorative shape" className="w-20 h-20 object-contain" />
            </div>
            
            {/* Top Right - s2 */}
            <div className="absolute top-8 right-8">
              <img src={s2} alt="Decorative shape" className="w-20 h-20 object-contain" />
            </div>
            
            {/* Bottom Left - s3 */}
            <div className="absolute bottom-8 left-8">
              <img src={s3} alt="Decorative shape" className="w-20 h-20 object-contain" />
            </div>
            
            {/* Bottom Right - s4 */}
            <div className="absolute bottom-8 right-8">
              <img src={s4} alt="Decorative shape" className="w-20 h-20 object-contain" />
            </div>

            {/* Newsletter Content */}
            <div className="text-center relative z-10 h-full flex flex-col justify-center">
              {/* Main Heading */}
              <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                We always try to be as close <br /> to you as possible
              </h2>
              
              {/* Email Input and Subscribe Button */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto relative left-88 top-10">
                {/* Email Input Field */}
                <input 
                  type="email" 
                  placeholder="info@macrosoar.com" 
                  className="flex-1 px-6 py-4 bg-red-800 text-white placeholder-white rounded-lg border-none outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" style={{padding:'10px'}}
                />
                
                {/* Subscribe Button */}
                <button className="bg-blue-800 hover:bg-blue-900 hover:cursor-pointer text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{padding:'10px'}}>
                  {/* Flame Icon */}
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 14 4.5 14 7C14 9.5 12 12 12 12C12 12 10 9.5 10 7C10 4.5 12 2Z"/>
                    <path d="M12 12C12 12 14 14.5 14 17C14 19.5 12 22 12 22C12 22 10 19.5 10 17C10 14.5 12 12Z"/>
                    <path d="M12 2C12 2 10 4.5 10 7C10 9.5 12 10 12 10C12 10 14 9.5 14 7C14 4.5 12 2Z"/>
                  </svg>
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
