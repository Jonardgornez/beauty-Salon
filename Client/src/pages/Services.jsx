import { useState } from 'react';
import GlobalFooter from './GlobalFooter'; // Make sure the path matches your filename

// --- DATA CONFIGURATION ---
const servicesData = [
  {
    id: 1,
    title: "Full Body Waxing",
    category: "Waxing Services",
    description: "Smooth, silky skin with our professional waxing treatments using gentle, high-quality wax.",
    price: "$120",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "RF Microneedling Face",
    category: "RF Microneedling",
    description: "Advanced skin rejuvenation stimulating collagen to reduce fine lines and acne scars.",
    price: "$250",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "RF Body Contouring",
    category: "RF Cavitation",
    description: "Non-invasive body sculpting to break down fat cells and tighten loose skin.",
    price: "$180",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hydra-Glow Facial",
    category: "Facial Services",
    description: "Deep cleansing, exfoliating, and hydrating treatment for an instant radiant glow.",
    price: "$95",
    image: "https://images.unsplash.com/photo-1570174006282-ba300676a6d6?q=80&w=2067&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Gel Manicure & Pedicure",
    category: "Manicure & Pedicure",
    description: "Premium nail care with long-lasting gel polish and relaxing hand massage.",
    price: "$85",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Classic Eyelash Extensions",
    category: "Eyelash Services",
    description: "Natural looking individual lash extensions to enhance your eyes.",
    price: "$110",
    image: "https://images.unsplash.com/photo-1583001931096-959e9ad7b535?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Advanced RF Skin Tightening",
    category: "Upgraded RF",
    description: "The latest RF technology for superior skin tightening results on face or body.",
    price: "$300",
    image: "https://images.unsplash.com/photo-1598209279122-8541213a0383?q=80&w=1935&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Volume Lash Set",
    category: "Eyelash Services",
    description: "Full, dramatic lashes for a bold and beautiful look.",
    price: "$150",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop",
  },
];

// List of categories for the buttons
const categories = [
  "All",
  "Waxing Services",
  "RF Microneedling",
  "RF Cavitation",
  "Upgraded RF",
  "Facial Services",
  "Manicure & Pedicure",
  "Eyelash Services"
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // --- LOGIC: FILTERING ---
  const filteredServices = servicesData.filter((service) => {
    // 1. Check Category
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    // 2. Check Search Text (case insensitive)
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-10 flex flex-col justify-between">
      <div className="container mx-auto px-4 mb-20">

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-gray-500 text-lg">
            Explore our full range of beauty treatments and find your perfect pampering experience
          </p>
        </div>

        {/* --- FILTERS & SEARCH SECTION --- */}
        <div className="flex flex-col xl:flex-row gap-8 mb-12 items-start xl:items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full xl:w-96 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#9CA3AF" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E49EA9] focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Buttons - WRAPPED (No Scroll) */}
          <div className="w-full">
            <div className="flex flex-wrap gap-3 justify-center xl:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-[#E49EA9] text-white border-[#E49EA9] shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#E49EA9] hover:text-[#E49EA9]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Tag overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#E49EA9] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[#E49EA9] font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                    {service.description}
                  </p>

                  <button className="w-full py-3 rounded-xl border border-[#E49EA9] text-[#E49EA9] font-semibold hover:bg-[#E49EA9] hover:text-white transition-all duration-300">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(""); setActiveCategory("All");}}
              className="mt-4 text-[#E49EA9] hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
      
      {/* --- GLOBAL FOOTER --- */}
      <GlobalFooter />
      
    </div>
  );
};

export default Services;