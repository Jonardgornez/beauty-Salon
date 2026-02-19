import React from 'react';
import GlobalFooter from './GlobalFooter';

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      
      {/* --- HERO SECTION --- */}
      <div 
        className="relative h-[50vh] md:h-[60vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ 
          // Using a placeholder image that matches the pink salon aesthetic
          backgroundImage: "url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2078&auto=format&fit=crop')" 
        }}
      >
        {/* White Gradient Overlay (Creates the fade effect at the bottom) */}
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/60 to-transparent"></div>

        {/* 'About Us' Title centered in the fade area */}
        <div className="absolute bottom-0 left-0 w-full pb-12 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 drop-shadow-sm">
            About Us
          </h1>
        </div>
      </div>

      {/* --- INTRODUCTION CONTENT --- */}
      <div className="container mx-auto px-4 pt-10 pb-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Sparkle Icon Circle */}
          <div className="w-20 h-20 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#E49EA9] mb-8 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
          </div>

          {/* Subtitle */}
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Lash & Beauty Studio
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Your sanctuary of beauty and relaxation. We are dedicated to helping you look and 
            feel your absolute best through our premium beauty services and personalized care.
          </p>

        </div>
      </div>


      {/** Mission */}
      {/* --- STORY & MISSION SECTION --- */}
      <div className="container mx-auto px-4 py-10 pb-24">
        
        {/* Two Column Text Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20 max-w-6xl mx-auto">
          
          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a passion for beauty and wellness, Lash & Beauty Studio has been serving our community with premium beauty services since our establishment. What started as a small lash studio has grown into a full-service beauty destination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of skilled professionals is committed to staying at the forefront of beauty trends and techniques, ensuring that every client receives the highest quality service in a warm, welcoming environment.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that everyone deserves to feel beautiful and confident. Our mission is to provide exceptional beauty services that enhance your natural beauty while prioritizing your comfort and safety.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through our online appointment system, we aim to make booking your beauty treatments as seamless and convenient as possible, giving you more time to focus on what matters most.
            </p>
          </div>
        </div>

        {/* --- VALUES GRID (4 Cards) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Expert Team */}
          <div className="border border-[#fcefed] bg-[#FFF9FA] rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-[#FDF2F4] text-[#E49EA9] rounded-full flex items-center justify-center mx-auto mb-6">
              {/* Badge/Ribbon Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Expert Team</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Certified professionals with years of experience</p>
          </div>

          {/* Card 2: Premium Products */}
          <div className="border border-[#fcefed] bg-[#FFF9FA] rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-[#FDF2F4] text-[#E49EA9] rounded-full flex items-center justify-center mx-auto mb-6">
              {/* Heart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Premium Products</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Only the best quality products for our clients</p>
          </div>

          {/* Card 3: Hygienic Environment */}
          <div className="border border-[#fcefed] bg-[#FFF9FA] rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-[#FDF2F4] text-[#E49EA9] rounded-full flex items-center justify-center mx-auto mb-6">
              {/* Sparkles Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Hygienic Environment</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Sanitized tools and clean facilities</p>
          </div>

          {/* Card 4: Easy Booking */}
          <div className="border border-[#fcefed] bg-[#FFF9FA] rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-[#FDF2F4] text-[#E49EA9] rounded-full flex items-center justify-center mx-auto mb-6">
              {/* Clock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Easy Booking</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Convenient online reservation system</p>
          </div>

        </div>
      </div>

      {/**  visit us */}
      {/* --- VISIT US SECTION --- */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto border border-[#fcefed] bg-[#FFF9FA] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-md transition-shadow duration-300">
          
          {/* Icon Circle */}
          <div className="w-16 h-16 bg-[#FDF2F4] text-[#E49EA9] rounded-full flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>

          {/* Content - Explicitly set to text-left */}
          <div className="text-left w-full">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Located in the heart of the city, our studio provides a peaceful escape from the daily hustle. 
              We invite you to visit and experience the Lash & Beauty difference.
            </p>
            
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-bold text-gray-900">Address:</span> 123 Beauty Lane, Makati City, Metro Manila
              </p>
              <p>
                <span className="font-bold text-gray-900">Operating Hours:</span> Monday - Saturday, 9:00 AM - 6:00 PM
              </p>
              <p>
                <span className="font-bold text-gray-900">Closed:</span> Sundays and Holidays
              </p>
            </div>
          </div>

        </div>
      </div>

      <GlobalFooter />
    </div>
  );
};

export default About;