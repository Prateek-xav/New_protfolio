import React, { useState, useEffect, useRef } from 'react';
import project1 from '../assets/project1.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projectData = [
    { title: 'Portfolio Website', desc: 'A responsive personal portfolio built with React & Tailwind.', img: project1 },
    { title: 'Ocular Disease Detection', desc: 'AI model to detect eye diseases from images.', img: '/assets/project2.jpg' },
    { title: 'Push-Up Counter', desc: 'Pose estimation to count reps using MediaPipe.', img: project3 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10 overflow-hidden"
    >
      {/* Blur overlay */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-all duration-700 ${
          isVisible ? 'backdrop-blur-md bg-opacity-40' : 'backdrop-blur-0 bg-opacity-0'
        }`}
      ></div>

      <h2 className="text-4xl font-bold mb-10 z-10">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-3 z-10">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 text-gray-300">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
