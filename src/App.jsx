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

      {/* Hero text */}
      <div
        className="fixed inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4"
        style={{
          filter: `blur(${blurAmount}px)`,
          transition: 'filter 0.2s ease',
        }}
      >
        <h1 className="font-extrabold leading-none text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
          Prateek
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl">
          Your one-stop freelancer for Web Dev, Video Editing, Social Media Management.
        </p>
      </div>

      {/* Spacer */}
      <div className="h-screen"></div>

      {/* Main content */}
      <main className="flex-1 p-6 sm:p-10 space-y-20">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-start md:space-x-10 space-y-6 md:space-y-0">
          <img
            src={Photo1}
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
          <div>
            <p className="relative bg-white border border-gray-400 rounded-4xl p-6 sm:p-8 shadow-md max-w-xl text-lg sm:text-xl leading-relaxed">
              I’m Prateek, a passionate and detail-oriented web developer specializing
              in building responsive, user-friendly, and performance-driven websites.
              With a strong foundation in modern front-end technologies and a
              commitment to clean, maintainable code, I create digital experiences
              that are both functional and visually engaging.
              {/* Left arrow */}
              <span className="absolute top-8 -left-4 sm:-left-6 w-0 h-0 border-t-[12px] sm:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[16px] border-b-transparent border-r-[14px] sm:border-r-[20px] border-r-white drop-shadow-md"></span>
              {/* Button */}
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  Learn More
                </a>
              </div>
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-start md:space-x-10 space-y-6 md:space-y-0">
          <img
            src={Photo2}
            alt="Profile 2"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
          <div>
            <p className="relative bg-white border border-gray-400 rounded-4xl p-6 sm:p-8 shadow-md max-w-xl text-lg sm:text-xl leading-relaxed">
              I can also help with video editing and VFX, bringing your raw footage to life using my expert editing and storytelling skills. Whether it's for YouTube, social media, or personal projects, I ensure your videos are polished, engaging, and ready to captivate your audience.
              {/* Right arrow */}
              <span className="absolute top-8 -right-4 sm:-right-6 w-0 h-0 border-t-[12px] sm:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[16px] border-b-transparent border-l-[14px] sm:border-l-[20px] border-l-white drop-shadow-md"></span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
