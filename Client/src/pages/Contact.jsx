import React, { useState } from 'react';
import GlobalFooter from './GlobalFooter';

const Contact = () => {
  // --- STATE FOR FORM FIELDS ---
  // Ready to be sent to your backend
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your backend API call here
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between pt-10">
      
      <div className="container mx-auto px-4 mb-20 max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 text-lg">
            Have questions or want to book an appointment? We'd love to hear from you!
          </p>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: GET IN TOUCH --- */}
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>

            {/* Facebook */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#E49EA9] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Facebook</h3>
                <p className="text-[#E49EA9] font-medium">@LashAndBeautyStudioPH</p>
                <p className="text-gray-500 text-sm mt-1">Message us for inquiries</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#E49EA9] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Phone Numbers</h3>
                <p className="text-[#E49EA9] font-medium">+63 917 123 4567</p>
                <p className="text-[#E49EA9] font-medium">+63 2 8123 4567</p>
                <p className="text-gray-500 text-sm mt-1">Available during business hours</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#E49EA9] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-[#E49EA9] font-medium">hello@lashandbeauty.ph</p>
                <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#E49EA9] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">
                  123 Beauty Lane<br />
                  Makati City, Metro Manila<br />
                  <span className="text-gray-400 text-sm">Near Greenbelt Mall</span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#E49EA9] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400 text-sm mt-1">Closed on Sundays and Holidays</p>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: FORM --- */}
          <div className="bg-[#FFF9FA] border border-[#fcefed] rounded-3xl p-8 lg:p-10 shadow-sm h-fit">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Row: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E49EA9] focus:border-transparent bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E49EA9] focus:border-transparent bg-white"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="09171234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E49EA9] focus:border-transparent bg-white"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E49EA9] focus:border-transparent bg-white"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E49EA9] focus:border-transparent bg-white resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="mt-2 bg-[#E49EA9] hover:bg-[#d08994] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>

      <GlobalFooter />
    </div>
  );
};

export default Contact;