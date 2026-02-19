import React from 'react';
import GlobalFooter from './GlobalFooter';
import CTASection from './CTASection';

const FooterSection = () => {
  return (
    <footer>
      
      {/* --- CTA SECTION (Ready to Glow) --- */}
      {/* This sits just above the footer, usually inside the main layout or part of the footer wrapper */}
       <CTASection/>

      {/* --- BOTTOM BAR --- */}
      <div className="border-t border-gray-100 bg-white py-8 px-4">
         <GlobalFooter/>
       
      </div>
    </footer>
  );
};

export default FooterSection;