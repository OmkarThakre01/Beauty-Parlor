"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Model from "../../../public/images/Model.jpg";

const slides = [
  {
    id: 1,
    title: "Where Tranquility Meets Transformation",
    subtitle:
      "We show your skin, hair, and body the care and attention they deserve.",
    image: Model,
  },
  {
    id: 2,
    title: "Glow With Confidence",
    subtitle: "Luxury skincare & spa treatments designed just for you.",
    image: Model,
  },
  {
    id: 3,
    title: "Your Beauty, Our Passion",
    subtitle: "Experience the art of self-care with our professionals.",
    image: Model,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-[80vh] md:h-[90vh] flex-shrink-0 flex items-center justify-center"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title || "Beauty Parlor Slide"}
              fill
              className="object-cover brightness-75"
              priority
            />

            {/* Overlay Content */}
            <div className="relative z-10 text-center text-white max-w-3xl px-6">
              {slide.title && (
                <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-snug">
                  {slide.title}
                </h1>
              )}
              {slide.subtitle && (
                <p className="text-base md:text-xl mb-6 drop-shadow-md">
                  {slide.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all ${
              i === current ? "bg-pink-600 w-6" : "bg-white/70 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
