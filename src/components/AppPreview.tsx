'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AppPreviewProps {
  screenshots: string[];
}

export default function AppPreview({ screenshots }: AppPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Main Display */}
      <div className="flex items-center justify-center gap-8 lg:gap-16">
        {/* Left Phone - Previous */}
        <motion.div
          className="hidden md:block relative w-48 lg:w-64"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden shadow-2xl opacity-50 transform scale-90">
            <Image
              src={screenshots[currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1]}
              alt="Previous screenshot"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Center Phone - Current */}
        <motion.div
          className="relative w-64 sm:w-72 lg:w-80"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl" />
            
            {/* Screen */}
            <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden m-3 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screenshots[currentIndex]}
                    alt={`App Screenshot ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Notch */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full" />
          </div>
        </motion.div>

        {/* Right Phone - Next */}
        <motion.div
          className="hidden md:block relative w-48 lg:w-64"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden shadow-2xl opacity-50 transform scale-90">
            <Image
              src={screenshots[currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1]}
              alt="Next screenshot"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all"
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all"
        aria-label="Next screenshot"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary-orange'
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}