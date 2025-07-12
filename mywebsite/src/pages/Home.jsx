import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import heroImg1 from '../assets/hero_img_1.avif';
import heroImg2 from '../assets/hero_img_2.avif';
import heroImg3 from '../assets/hero_img_1.avif';
import Services from '../components/Services';

const backgroundImages = [heroImg1, heroImg2, heroImg3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto change image every 5 seconds
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] text-white flex items-center justify-center px-4 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-green-50-400 bg-opacity-40 z-0 transition-opacity duration-500" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-blue-500">Innovative IT Solutions</span> for<br />
            <span className="text-white">Your Business Growth</span>
          </h1>
          <p className="mt-4 text-gray-200 text-sm md:text-base">
            Accelerate your digital transformation with our cutting-edge AI solutions, MVP development,
            digital marketing expertise, and staffing services.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
              Explore Services →
            </button>
            <button className="border border-blue-400 text-blue-400 px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white transition">
              View Latest Ideas
            </button>
            <button className="border border-blue-400 text-blue-400 px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white transition">
              Available Resources →
            </button>
          </div>
        </div>

        {/* Manual Controls */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {backgroundImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white scale-110' : 'bg-gray-500'
              }`}
            ></span>
          ))}
        </div>
      </section>
      <Services />
    </>
  );
};

export default Home;
