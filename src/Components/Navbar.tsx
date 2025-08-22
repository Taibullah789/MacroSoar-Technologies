import React, { useState } from 'react'
import logo from '../assets/MacroSoar-Technologies-Logo.png'
import { Link } from 'react-router-dom';
import './styleCss/Nav.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/' },
    { path: '/about-us', label: 'About' },
    { path: '/our-services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/contact-us', label: 'Inquiry' }
  ];

  return (
    <nav className="bg-white p-4  top-0 z-50">
      <div className="w-3/5 mx-auto relative">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="MacroSoar Technologies" 
              className="h-17 logo w-auto group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Centered Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8 navbarGap">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-6 py-2 navMargin rounded-lg font-medium ml-5 text-black hover:text-gray hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Empty div for balance */}
          <div className="w-12"></div>
        </div>

        {/* Mobile menu button - positioned at browser right edge */}
        <div className="md:hidden absolute right-0 top-4" style={{ right: 'calc(-50vw + 50%)' }}>
          <button
            onClick={toggleMenu}
            className="text-black p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg mt-2">
            <div className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-3 text-black  hover:bg-gray-100 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar