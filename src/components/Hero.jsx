import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[120vh] w-full overflow-hidden"> {/* Increase height to 120% of viewport height */}
      {/* Image Background */}
      <img
        src="Hero/hero3.jpg" // Path to your image
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative min-h-[120vh] flex flex-col items-center justify-center text-white px-4 py-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fade-in">
          Capturing Life's Beautiful Moments
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 animate-fade-in-delay">
          Professional photography that tells your unique story
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 animate-fade-in-delay-2">
          Explore Gallery
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
