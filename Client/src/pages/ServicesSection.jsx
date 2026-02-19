import React from 'react';

// --- CONFIGURATION ---
// Easily modify, add, or remove services here.
const services = [
  {
    id: 1,
    title: "Waxing Services",
    description: "Smooth, silky skin with our professional waxing treatments.",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "RF Microneedling",
    description: "Advanced skin rejuvenation with radiofrequency microneedling.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "RF Cavitation",
    description: "Non-invasive body contouring and skin tightening.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Facials",
    description: "Deep cleansing and hydrating treatments for a radiant glow.",
    image: "https://images.unsplash.com/photo-1570174006282-ba300676a6d6?q=80&w=2067&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Nail Artistry",
    description: "Custom designs and premium polish for the perfect manicure.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Laser Therapy",
    description: "Safe and effective solutions for long-term hair reduction.",
    image: "https://images.unsplash.com/photo-1598209279122-8541213a0383?q=80&w=1935&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Discover our range of beauty treatments designed to enhance your natural beauty
          </p>
        </div>

        {/* --- SERVICE CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              {/* Image Container with Hover Effect */}
              <div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Card Text */}
              <div className="px-1">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[#E49EA9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <div className="flex justify-center">
          <button className="border border-gray-200 hover:border-[#E49EA9] hover:bg-[#FDF2F4] text-gray-800 hover:text-[#E49EA9] font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2">
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;