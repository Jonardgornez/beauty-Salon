import HeroCarousel from './HeroCarousel';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import FooterSection from './FooterSection';


const Home = () => {
  return (
      <div className="App">
      {/* You can place the carousel directly at the top of your page */}
      <HeroCarousel />

      {/* The rest of your website content */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Feature 1: Premium Services */}
          <div className="flex flex-col items-center">
            {/* Icon Container */}
            <div className="w-20 h-20 bg-[#FDF2F4] rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E49EA9" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Premium Services</h3>
            <p className="text-gray-600 leading-relaxed px-2">
              Expert treatments using high-quality products for stunning results
            </p>
          </div>

          {/* Feature 2: Easy Booking */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#FDF2F4] rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E49EA9" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Easy Booking</h3>
            <p className="text-gray-600 leading-relaxed px-2">
              Reserve your appointment online in just a few clicks
            </p>
          </div>

          {/* Feature 3: Safe & Hygienic */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#FDF2F4] rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E49EA9" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Safe & Hygienic</h3>
            <p className="text-gray-600 leading-relaxed px-2">
              Your safety is our priority with sanitized equipment
            </p>
          </div>

        </div>
      </div>


      {/** service */}
     <ServicesSection />

     {/* The New Testimonials Section */}
    <TestimonialsSection />
    {/* 5. Footer & Call to Action */}
      <FooterSection />
    
    </div>


  )
}

export default Home
