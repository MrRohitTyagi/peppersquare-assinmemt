"use client"; // Required for interactive components in Next.js 14

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface FullscreenCarouselProps {
  images: string[];
  onClose: () => void;
}

const FullscreenCarousel: React.FC<FullscreenCarouselProps> = ({
  images,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      {/* Image Container */}
      <div className="relative w-full max-w-4xl px-4">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={800}
          height={500}
          className="w-full max-h-[80vh] object-contain rounded-lg"
          priority
        />

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
          onClick={prevSlide}
        >
          <ChevronLeft size={36} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
          onClick={nextSlide}
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
};

export default FullscreenCarousel;
