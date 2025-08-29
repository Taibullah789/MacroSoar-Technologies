import React, { useState } from 'react';
import '../styleCss/Home.css';
import whoweare from '../../assets/whoweare.png';

function AboutMacroSoar() {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <section className="section  py-20 bg-[#f4f5fe]" style={{marginTop:'30px'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Content - Title + Expandable Sections */}
            <div className="left-content">
              {/* Main Title */}
              <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                  Get to know about <span className="text-orange-500">Macro Soar</span>
                </h1>
              </div>

              {/* Who We Are Section */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-6 cursor-pointer hover:shadow-lg transition-all duration-300" style={{marginBottom:'10px'}} onClick={() => toggleSection('who')}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">Who We Are?</h2>
                  <div className="w-10 h-10 bg-gray-400 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xl">
                      {activeSection === 'who' ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                {activeSection === 'who' && (
                  <div className="mt-6 pt-6 bg-white border-t-2 border-gray-200">
                    <p className="text-gray-700 text-lg leading-relaxed" style={{padding:'10px'}}>
                      Founded in 2018, Macro Soar has come a long way from its beginnings in Islamabad. 
                      When we first started out, our passion for quality products drove us to do tons of research, 
                      so that Macro Soar can offer you the world's most advanced applications. We now serve 
                      customers all over the country and are thrilled that we're able to turn our passion into our own website.
                    </p>
                  </div>
                )}
              </div>

              {/* What Services Section */}
              <div className="bg-white rounded-xl shadow-md p-8 cursor-pointer hover:shadow-lg transition-all duration-300" onClick={() => toggleSection('services')}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">What services we are providing?</h2>
                  <div className="w-10 h-10 bg-gray-400 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xl">
                      {activeSection === 'services' ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                {activeSection === 'services' && (
                  <div className="mt-6 pt-6 border-t-2 border-gray-200">
                    <ul className="text-gray-700 text-lg space-y-3">
                      <li className="py-1">Digital Marketing</li>
                      <li className="py-1">Website Development</li>
                      <li className="py-1">Mobile Application development</li>
                      <li className="py-1">Graphic Designing</li>
                      <li className="py-1">Responsive Web Design</li>
                      <li className="py-1">Cyber Security</li>
                      <li className="py-1">AR/VR App Development</li>
                      <li className="py-1">Blockchain Development</li>
                      <li className="py-1">Artificial Intelligence</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="rightContent rightAnimation">
              <div className="flex justify-center">
                <img 
                  src={whoweare} 
                  alt="Macro Soar Team and Technology" 
                  className="w-full max-w-lg h-auto object-contain relative right-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMacroSoar;
