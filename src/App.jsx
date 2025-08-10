import React, { useState, useEffect } from 'react';
import Header from './components/header.jsx';
import './index.css';
import Photo1 from './assets/Photo1.jpg';
import Photo2 from './assets/Photo2.jpg';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 50, 10);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      {/* Header */}
      <div className="mt-2">
        <Header />
      </div>

      {/* Hero text (fixed & blurred on scroll) */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
        style={{
          filter: `blur(${blurAmount}px)`,
          transition: 'filter 0.2s ease',
        }}
      >
        <h1 className="text-[10rem] font-extrabold leading-none">Prateek</h1>
        <p className="mt-6 text-2xl max-w-3xl mx-auto">
          Your one-stop freelancer for Web Dev, Video Editing, Social Media Management.
        </p>
      </div>

      {/* Spacer to make hero take up full screen height */}
      <div className="h-screen"></div>

      {/* Main content */}
      <main className="flex-1 p-10 space-y-20">
        {/* Section 1 */}
        <div className="flex items-start space-x-10">
          <img
            src={Photo1}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
          <div>
            <p className="relative bg-white border border-gray-400 rounded-4xl p-8 shadow-md max-w-xl text-xl leading-relaxed">
              I’m Prateek, a passionate and detail-oriented web developer specializing
              in building responsive, user-friendly, and performance-driven websites.
              With a strong foundation in modern front-end technologies and a
              commitment to clean, maintainable code, I create digital experiences
              that are both functional and visually engaging.
              {/* Left arrow */}
              <span className="absolute top-8 -left-6 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[20px] border-r-white drop-shadow-md"></span>
              {/* Button */}
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  Hire Me!
                </a>
              </div>
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-start space-x-10 flex-row-reverse">
          <img
            src={Photo2}
            alt="Profile 2"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
          <div>
            <p className="relative bg-white border border-gray-400 rounded-4xl p-8 shadow-md max-w-xl text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              {/* Right arrow */}
              <span className="absolute top-8 -right-6 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[20px] border-l-white drop-shadow-md"></span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
