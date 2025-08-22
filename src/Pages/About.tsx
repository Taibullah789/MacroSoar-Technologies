import React from 'react';
import '../Components/styleCss/Home.css';
import logo from '../assets/MacroSoar-Technologies-Logo.png'; // Uncomment and adjust path if you have the logo
import Footer from '../Components/homeComponents/Footer';
import HeaderInfo from '../Components/HeaderInfo';

const skills:string[] = [
  'Website Development',
  'Mobile Application development (Android, iOS)',
  'Graphic Designing',
  'Responsive Web Design',
  'Digital Marketing',
  'Cyber Security',
  'AR/VR app development',
  'Blockchain',
  'Artificial Intelligence',
];

function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      {/* Orange Wave Header */}
     <HeaderInfo header="About Us " description="The Macro Soar Story" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between px-4 py-12 relative top-20">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Content */}
          <div className="flex-1 relative right-20">
            <div className="text-orange-500 text-sm font-semibold mb-2">How we are Founded</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Take your business to the next level</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Macro Soar, your number one source for all products. We're dedicated to giving you the very best, with a focus on quality, versatility, reliability, trust and credibility.<br/>
              Founded in 2018, Macro Soar has come a long way from its beginnings in Islamabad. When we first started out, our passion for quality products drove us to do tons of research, so that Macro Soar can offer you the world's most advanced applications. We now serve customers all over the country, and are thrilled that we're able to turn our passion into our own website.
            </p>
            <p className="text-gray-700 mb-4">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <div className="text-gray-900 font-semibold mb-2">Our Skills:</div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          {/* Right Logo */}
          <div className="flex-1 flex justify-center items-center relative top-70">
           
            <div className="w-120 h-40 .aboutLogo  rounded-lg shadow-inner text-2xl text-gray-400 relative bottom-20">
              <img src={logo} alt=""/>
            </div>
          </div>
        </div>
      </div>

      
     <div className="footerAbout relative top-50">
      <Footer/>
      </div>
    </div>
  );
}

export default About;