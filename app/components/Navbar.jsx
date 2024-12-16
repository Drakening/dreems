'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Palette, Briefcase, User, DollarSign, Star, HelpCircle, Mail, Zap } from 'lucide-react';
import Image from 'next/image';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navItems = [
    { label: 'Home', target: 'home', icon: Home },
    { label: 'Designs', target: 'designs', icon: Palette },
    { label: 'About', target: 'about', icon: User },
    { label: 'Pricing', target: 'pricing', icon: DollarSign },
    { label: 'Testimonials', target: 'testimonials', icon: Star }
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = e.currentTarget;
      const targetId = target.hash.replace('#', '');
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white h-20 w-full shadow-md">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src='/images/logo.png'
            alt="logo of company" 
            width={40} 
            height={40} 
            className="w-10 h-10"
          />
          <span className="ml-2 text-xl font-bold text-[#04091e]">DreemScape</span>
        </div>
        <div 
          className="md:hidden cursor-pointer z-[1000]" 
          onClick={handleShowNavbar}
        >
          {showNavbar ? (
            <X className="w-8 h-8 text-[#04091e]" />
          ) : (
            <Menu className="w-8 h-8 text-[#04091e]" />
          )}
        </div>

        <div 
          className={`
            fixed md:static 
            right-0 top-0 bottom-0 
            md:flex md:items-center 
            w-full md:w-auto 
            h-screen md:h-auto 
            bg-white/95 md:bg-transparent 
            backdrop-blur-lg md:backdrop-blur-none 
            transition-all duration-500 ease-in-out 
            ${showNavbar ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            md:flex
            flex items-center justify-center
          `}
        >
          <ul 
            className="
              flex flex-col md:flex-row 
              items-center justify-center 
              h-full md:h-auto 
              space-y-6 md:space-y-0 
              md:space-x-6
              w-full
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li 
                  key={item.target} 
                  className="
                    w-full md:w-auto 
                    text-center 
                    transform transition-all duration-300
                    hover:scale-105
                  "
                  onClick={() => {
                    setShowNavbar(false);
                  }}
                >
                  <Link
                    href={`#${item.target}`}
                    className={`
                      flex items-center justify-center md:justify-start
                      text-[#04091e] 
                      font-semibold 
                      text-2xl md:text-base 
                      capitalize 
                      cursor-pointer 
                      hover:text-[#009ddc] 
                      transition-colors
                      ${pathname === `/#${item.target}` ? 'text-[#009ddc]' : ''}
                    `}
                  >
                    <Icon className="w-6 h-6 mr-2 md:w-4 md:h-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div 
          className="
            hidden md:flex 
            items-center
            bg-[#009ddc] 
            text-white 
            text-xs 
            uppercase 
            py-2 px-4
            rounded-full 
            cursor-pointer 
            tracking-wider 
            hover:bg-[#007bb3] 
            transition-colors
          "
        >
          <Link href="#contact" className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

