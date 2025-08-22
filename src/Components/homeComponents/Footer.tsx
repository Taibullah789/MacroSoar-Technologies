import React from 'react';
import '../styleCss/Footer.css';

const Footer: React.FC = () => (
  <footer className="bg-[#0a0e2a] text-white pt-16 pb-6 px-4 footerHeight">
    <div className=" footerSection max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      {/* Left Section */}
      <div className="md:w-1/2 footMarginl">
        <h2 className="text-2xl font-bold mb-2">Macro Soar</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-4"></div>
        <p className="text-gray-300">
          We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate and feel free to contact us.
        </p>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 footMargin">
        <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-4"></div>
        <ul className="text-gray-300 space-y-3">
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">Location:</span> Office #19, 2nd Floor, Huzaifa plaza, I-8 Markaz, Islamabad, Pakistan
            </span>
          </li>
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">Email:</span> info@macrosoar.com
            </span>
          </li>
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">Phone:</span> +92518899135
            </span>
          </li>
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">WhatsApp:</span>
              <span className="block ml-6">923355135135</span>
              <span className="block ml-6">923455237716</span>
            </span>
          </li>
        </ul>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="bg-[#1a1e3a] p-2 rounded-full hover:bg-orange-500 transition">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="bg-[#1a1e3a] p-2 rounded-full hover:bg-orange-500 transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="bg-[#1a1e3a] p-2 rounded-full hover:bg-orange-500 transition">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
    </div>
    {/* Bottom Copyright */}
    <div className=" footerCopyright border-t border-gray-700 mt-12 pt-4 text-center text-gray-400 text-sm">
      © MacroSoar Technologies, All Rights Reserved
    </div>
  </footer>
);

export default Footer;