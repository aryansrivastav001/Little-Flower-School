'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, X } from 'react-bootstrap-icons';

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Location", href: "/location" },
    { title: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Current URL path ko get karein

  useEffect(() => {
    const handleScroll = () => {
      // Agar 50px se zyada scroll kiya hai to true set karein
      setIsScrolled(window.scrollY > 50);
    };

    // Scroll event listener add karein
    window.addEventListener('scroll', handleScroll);

    // Component unmount hone par listener remove karein
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="text-white text-2xl font-bold">
             <img src="images/logo.png"className='fluid' style={{width:"80px",marginTop:"45px"}} />
            </Link>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.title} href={link.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={30} /> : <List size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-canvas Menu */}
      <div className={`fixed inset-0 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        {/* Off-canvas content */}
        <div className="absolute right-0 w-64 h-full bg-white shadow-lg">
          {/* Off-canvas Header */}
          <div className="flex items-center justify-between p-4 bg-blue-900">
            <Link href="/" className="text-white text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>
               <img src="images/logo.png"className='fluid' style={{width:"80px"}}/>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={30} />
            </button>
          </div>

          {/* Off-canvas Body */}
          <div className="p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.title} href={link.href} onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-gray-200 text-blue-900' : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
