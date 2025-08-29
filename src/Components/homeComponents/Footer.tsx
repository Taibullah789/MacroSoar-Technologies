import React from "react";
import "../styleCss/Footer.css";

const Footer: React.FC = () => (
  <footer className="bg-[#0a0e2a] section text-white flex items-center flex-wrap  pt-16 pb-8 px-6 footerHeight">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Macro Soar</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-5"></div>
        <p className="text-gray-300 leading-relaxed max-w-md">
          We hope you enjoy our services as much as we enjoy offering them to
          you. If you have any questions or comments, please don’t hesitate and
          feel free to contact us.
        </p>
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Contact Info</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mb-5"></div>
        <ul className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">Location:</span> Office #19, 2nd
              Floor, Huzaifa Plaza, I-8 Markaz, Islamabad, Pakistan
            </span>
          </li>
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@macrosoar.com"
                className="hover:text-orange-400 transition"
              >
                info@macrosoar.com
              </a>
            </span>
          </li>
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+92518899135"
                className="hover:text-orange-400 transition"
              >
                +92 51 8899135
              </a>
            </span>
          </li>
          <li>
            <span className="text-orange-400 mr-2">■</span>
            <span>
              <span className="font-semibold">WhatsApp:</span>
              <div className="ml-6">
                <a
                  href="https://wa.me/923355135135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-400 transition"
                >
                  +92 335 5135135
                </a>
                <a
                  href="https://wa.me/923455237716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-400 transition"
                >
                  +92 345 5237716
                </a>
              </div>
            </span>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="https://facebook.com/macrosoar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com/macrosoar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/company/macrosoar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://wa.me/923355135135"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} MacroSoar Technologies, All Rights Reserved
    </div>
  </footer>
);

export default Footer;
