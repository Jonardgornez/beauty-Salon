import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const testimonials = [
  {
    id: 1,
    name: "Anna M.",
    review: "The best lash extensions I've ever had! The staff is so professional and friendly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sofia R.",
    review: "I love their facial treatments. My skin has never looked better!",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria C.",
    review: "Clean, relaxing atmosphere and amazing nail art. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "Jessica L.",
    review: "Finally found a salon that understands exactly what I want. 10/10 service.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily W.",
    review: "The RF Microneedling results are incredible. I'll definitely be coming back.",
    rating: 4,
  },
  {
    id: 6,
    name: "Rachel G.",
    review: "Such a lovely experience. The booking was easy and the results are stunning.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false); // New state to track hover

  // --- RESPONSIVE LOGIC ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max index for sliding
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  // --- AUTO SLIDE LOGIC ---
  useEffect(() => {
    // If the user is hovering, do not slide
    if (isHovered) return;

    const interval = setInterval(() => {
      // If we are at the end, go back to start (Loop)
      if (currentIndex >= maxIndex) {
        setCurrentIndex(0);
      } else {
        // Otherwise go to next slide
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000); // 5000ms = 5 seconds

    // Clear interval on unmount or when dependencies change
    return () => clearInterval(interval);
  }, [currentIndex, isHovered, maxIndex]);


  // --- MANUAL CONTROLS ---
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop manually too
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="container mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-16">
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        {/* Added mouse handlers to pause/resume auto-slide */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* LEFT BUTTON */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 text-gray-600 hover:text-[#E49EA9] hover:bg-[#FDF2F4] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* TRACK WINDOW */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  {/* CARD */}
                  <div className="bg-[#FFF9FA] p-8 rounded-2xl h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#fcefed]">
                    <div>
                      {/* STARS */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className={`w-5 h-5 ${i < item.rating ? 'text-[#D4AF37]' : 'text-gray-200'}`}
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>

                      {/* REVIEW TEXT */}
                      <p className="text-gray-600 italic mb-6 leading-relaxed">
                        "{item.review}"
                      </p>
                    </div>

                    {/* AUTHOR */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 text-gray-600 hover:text-[#E49EA9] hover:bg-[#FDF2F4] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* DOTS INDICATOR (Optional, helpful for auto-sliders) */}
          <div className="flex justify-center mt-8 gap-2">
            {/* We only create dots for the amount of "pages" available */}
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#E49EA9] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;