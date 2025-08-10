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
    <header className="bg-[#1f2937] rounded-2xl text-white shadow-md h-14">
      <div className="container mx-auto flex justify-center h-full">
        <nav className="flex justify-between w-full h-full">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="h-full flex items-center px-4 rounded-3xl border-[3px] border-transparent 
                         hover:border-[#FFEBE9] hover:text-[#FFEBE9] 
                         transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
