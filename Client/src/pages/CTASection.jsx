import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-white px-4 pt-10 pb-20">
      <div className="container mx-auto">
        <div className="bg-[#FDF2F4] rounded-3xl p-12 md:p-16 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Ready to Glow?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book your appointment today and experience the ultimate beauty transformation.
          </p>
          <button className="bg-[#E49EA9] hover:bg-[#d08994] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto">
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;