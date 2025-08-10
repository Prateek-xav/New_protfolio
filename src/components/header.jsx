import React from 'react';
import './header.css';

export default function Header() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[#1f2937] rounded-2xl text-white shadow-md h-auto py-2">
      <div className="container mx-auto flex justify-center">
        <nav
          className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-3xl border-[2px] border-transparent 
                         hover:border-[#FFEBE9] hover:text-[#FFEBE9] 
                         transition-all duration-300 text-sm sm:text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
