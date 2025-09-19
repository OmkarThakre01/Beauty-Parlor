"use client";

import React from "react";
import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white py-10 md:py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] leading-tight mb-6">
          Where <span className="text-pink-600">Tranquility</span> Meets{" "}
          <span className="text-pink-600">Transformation</span>.
        </h1>

        {/* Subheadline */}
        {/* <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          We show your <span className="font-semibold text-gray-800">skin</span>,{" "}
          <span className="font-semibold text-gray-800">hair</span>, and{" "}
          <span className="font-semibold text-gray-800">body</span> the care and
          attention they truly deserve. Step into elegance, leave with confidence.
        </p> */}

        {/* Call to Action */}
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/book" className="px-8 py-3 text-lg">
            Book Now
          </Button>
          <Button
            href="/services"
            variant="outline"
            className="px-8 py-3 text-lg"
          >
            Explore Services
          </Button>
        </div> */}
      </div>

      {/* Decorative Circle Background */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse" />
    </section>
  );
};

export default Hero;
