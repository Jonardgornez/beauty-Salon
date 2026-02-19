import  { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// --- DATA CONFIGURATION ---
// Replace these URLs with your actual images.
// The design works best with landscape-oriented, high-quality images.
const slidesData = [
  {
    id: 1,
    // Using a placeholder close to the original image
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Woman with elegant light pink manicure",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Close up of luxurious nail art",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1610992015732-2449b86f267c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Pampering hand treatment session",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1610992015732-2449b86f267c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Pampering hand treatment session",
  },
];

const HeroCarousel = () => {
    const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideIntervalTime = 5000; // 5 seconds

  // --- NAVIGATION FUNCTIONS ---

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Wrapped in useCallback so it's stable for the useEffect dependency array
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // --- AUTO SLIDE FUNCTIONALITY ---
  useEffect(() => {
    // Set up the interval to move to the next slide
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideIntervalTime);

    // Clear the interval when the component unmounts or when the currentIndex changes
    // This resets the timer whenever the user manually interacts with the carousel
    return () => clearInterval(slideInterval);
  }, [currentIndex, nextSlide]);


  // Ensure data exists before rendering
  if (!slidesData || slidesData.length === 0) {
    return <div className="h-96 w-full bg-gray-200 flex items-center justify-center">No slides available</div>;
  }

  return (
    // Main Container: fixed height, relative for absolute children, group for hover effects
    <div className="relative h-150 w-full m-auto overflow-hidden group bg-gray-100">

      {/* --- BACKGROUND IMAGE --- */}
      {/* We use inline styles to set the background image based on current index */}
      <div
        style={{ backgroundImage: `url(${slidesData[currentIndex].image})` }}
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-all duration-700 ease-in-out"
        role="img"
        aria-label={slidesData[currentIndex].alt}
      >
        {/* Optional Overlay: If your text is hard to read on bright images, uncomment below */}
        {/* <div className="absolute inset-0 bg-white/10"></div> */}
      </div>


      {/* --- CONTENT OVERLAY --- */}
      {/* Centered text content and button */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4 drop-shadow-sm">
          Luxurious Nail Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light mb-8 drop-shadow-sm">
          Beautiful hands, beautiful you
        </p>
        <button className="bg-[#E49EA9] hover:bg-[#d08994] text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors duration-300 shadow-md" 
        onClick={()=> navigate("/services")}>
          Explore Services
          {/* Right Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>


      {/* --- NAVIGATION ARROWS --- */}
      {/* Left Arrow - Hidden by default, shown on group hover */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-3 bg-white/70 text-gray-600 hover:bg-white hover:text-gray-900 cursor-pointer z-20 transition-all duration-300 shadow-sm"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Arrow - Hidden by default, shown on group hover */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-3 bg-white/70 text-gray-600 hover:bg-white hover:text-gray-900 cursor-pointer z-20 transition-all duration-300 shadow-sm"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>


      {/* --- DOTS INDICATORS --- */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slidesData.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            // Dynamic classes: If active, it's a long pink bar. If inactive, a small gray dot.
            className={`transition-all duration-500 ease-in-out cursor-pointer rounded-full ${
              currentIndex === slideIndex ? "w-10 h-3 bg-[#E49EA9]" : "w-3 h-3 bg-gray-300/80 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default HeroCarousel;