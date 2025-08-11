'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_BG = '#D18B47';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationDropdownOpen, setIsDestinationDropdownOpen] = useState(false);
  const pathname = usePathname();

  const destinations = [
    { name: 'Bali', href: '/destination/bali' },
    { name: 'Vietnam', href: '/destination/vietnam' },
    { name: 'Singapore', href: '/destination/singapore' },
    { name: 'Thailand', href: '/destination/thailand' },
    { name: 'Malaysia', href: '/destination/malaysia' },
    { name: 'Dubai', href: '/destination/dubai' },
    { name: 'Maldives', href: '/destination/maldives' },
    { name: 'Andaman', href: '/destination/andaman' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Destination', href: '/destination', hasDropdown: true },
    { name: 'Romantic Hideaway', href: '/romantic-hideaway' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDestinationDropdown = () => {
    setIsDestinationDropdownOpen(!isDestinationDropdownOpen);
  };

  const closeDestinationDropdown = () => {
    setIsDestinationDropdownOpen(false);
  };

  return (
    <header
      className="w-full shadow-lg sticky top-0 z-50 flex items-center"
      style={{ background: 'linear-gradient(to right, #F1A236 0%, #F9C783 100%)', minHeight: 64 }}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex-shrink-0 mr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-md hover:bg-white/20 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Logo and Brand */}
        <div className="flex items-center flex-shrink-0" style={{ minWidth: 180 }}>
          <Image
            src="/assets/logo.png"
            alt="Tripsee Logo"
            width={150}
            height={80}
            className="w-20 h-10"
            priority
          />
        </div>

        {/* Desktop NavBar Centered */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <div
            className="flex items-center px-8 py-2 rounded-full shadow-lg"
            style={{
              background: NAV_BG,
              boxShadow: '0 4px 16px 0 rgba(0,0,0,0.18)',
              minWidth: 600,
              maxWidth: 900,
            }}
          >
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={toggleDestinationDropdown}
                      onMouseEnter={() => setIsDestinationDropdownOpen(true)}
                      className={`relative text-white font-semibold text-sm px-4 py-1 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                        idx === navItems.length - 1 ? 'mr-0' : 'mr-2'
                      } ${isActive ? 'bg-white/30 scale-105' : ''}`}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {item.name}
                      <svg 
                        className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${isDestinationDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <a
                  href={item.href}
                  className={`relative text-white font-semibold text-sm px-4 py-1 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                    idx === navItems.length - 1 ? 'mr-0' : 'mr-2'
                  } ${isActive ? 'bg-white/30 scale-105' : ''}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {item.name}
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
                </a>
                  )}

                  {/* Destination Dropdown */}
                  {item.hasDropdown && (
                    <div 
                      className={`absolute top-full left-0 mt-2 w-96 bg-amber-100 rounded-lg shadow-xl border border-amber-200 transition-all duration-200 ${
                        isDestinationDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseLeave={() => setIsDestinationDropdownOpen(false)}
                    >
                      <div className="p-6">
                        {/* Two Column Layout for Destinations */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                          {destinations.map((destination) => (
                            <a
                              key={destination.name}
                              href={destination.href}
                              className="flex items-center text-amber-800 hover:text-amber-600 transition-colors duration-200 group"
                              onClick={closeDestinationDropdown}
                            >
                              <span className="text-amber-900 mr-2 group-hover:translate-x-1 transition-transform duration-200">›</span>
                              <span className="font-medium">{destination.name}</span>
                            </a>
                          ))}
                        </div>

                        {/* Temple Image with Text Overlay */}
                        <div className="relative rounded-lg overflow-hidden">
                          <Image
                            src="/Destination/Bali.jpeg"
                            alt="Temple on lake"
                            width={400}
                            height={120}
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute bottom-3 left-3 text-white">
                            <p className="text-sm font-medium">Explore Destination with</p>
                            <p className="text-lg font-bold">Tripsee</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Desktop Contact Us Button */}
        <div className="hidden lg:flex flex-shrink-0 items-center" style={{ minWidth: 160, justifyContent: 'flex-end' }}>
          <button
            className="text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
            style={{
              background: NAV_BG,
              boxShadow: '0 4px 16px 0 rgba(0,0,0,0.18)',
              minWidth: 120,
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={closeMobileMenu}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Tripsee Logo"
                width={120}
                height={60}
                className="w-16 h-8"
              />
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="p-6">
            <div className="space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsDestinationDropdownOpen(!isDestinationDropdownOpen)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                            isActive 
                              ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-500' 
                              : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                          }`}
                        >
                          <span>{item.name}</span>
                          <svg 
                            className={`w-5 h-5 transition-transform duration-200 ${isDestinationDropdownOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Mobile Destination Dropdown */}
                        <div className={`mt-2 ml-4 space-y-2 transition-all duration-200 ${isDestinationDropdownOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                          {destinations.map((destination) => (
                            <a
                              key={destination.name}
                              href={destination.href}
                              onClick={closeMobileMenu}
                              className="block py-2 px-4 text-base text-gray-600 hover:text-orange-600 transition-colors duration-200"
                            >
                              {destination.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                          isActive 
                            ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-500' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                        }`}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Contact Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-600 active:scale-95"
                onClick={closeMobileMenu}
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 
