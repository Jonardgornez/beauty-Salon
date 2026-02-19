import React, { useState } from 'react';
import GlobalFooter from './GlobalFooter';

const Calendar = () => {
  // --- STATE MANAGEMENT ---
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Dummy state to simulate "No services selected"
  const [hasServicesSelected, setHasServicesSelected] = useState(false); 

  // --- CONFIGURATION ---
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
    "04:00 PM", "04:30 PM", "05:00 PM"
  ];

  // --- CALENDAR LOGIC ---
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
    
    const days = [];
    // Add empty slots
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const isPastDate = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between pt-10">
      
      <div className="container mx-auto px-4 mb-20">
        
        {/* --- HEADER --- */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Select Date & Time
          </h1>
          <p className="text-gray-500">
            Choose your preferred appointment date and time slot
          </p>
        </div>

        {/* --- WARNING BANNER --- */}
        {!hasServicesSelected && (
          <div className="bg-[#FFF5F7] border border-[#fcefed] rounded-xl p-6 mb-10 flex flex-col gap-3">
             <div className="flex items-center gap-2 text-gray-800 font-medium">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#E49EA9" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
               </svg>
               No services selected
             </div>
             <p className="text-gray-500 text-sm pl-7">
               Please add services to your bag before booking
             </p>
             <div className="pl-7">
                <button 
                  onClick={() => setHasServicesSelected(true)}
                  className="bg-[#E49EA9] hover:bg-[#d08994] text-white text-sm font-semibold py-2 px-6 rounded-lg transition-all"
                >
                  Browse Services
                </button>
             </div>
          </div>
        )}

        {/* --- MAIN CONTENT: GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          
          {/* --- LEFT: CALENDAR WIDGET --- */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <h3 className="text-lg font-serif font-bold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              
              <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 mb-4 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-2 gap-x-1">
              {days.map((day, index) => {
                if (!day) return <div key={`empty-${index}`} />; 

                const isSelected = isSameDay(day, selectedDate);
                const isPast = isPastDate(day);
                const isToday = isSameDay(day, new Date());

                return (
                  <button
                    key={day.toString()}
                    disabled={isPast}
                    onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                    className={`
                      h-10 w-10 mx-auto rounded-full text-sm font-medium flex items-center justify-center transition-all duration-200
                      ${isSelected 
                        ? 'bg-[#E49EA9] text-white shadow-md' 
                        : isPast 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-[#FDF2F4] hover:text-[#E49EA9]'
                      }
                      ${isToday && !isSelected ? 'border border-[#E49EA9] text-[#E49EA9]' : ''}
                    `}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-6">
              * Can only book up to March 31, 2026
            </p>
          </div>


          {/* --- RIGHT: TIME SLOTS --- */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 min-h-100">
            <div className="flex items-center gap-2 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#E49EA9" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <h3 className="text-lg font-serif font-bold text-gray-900">Select a time</h3>
            </div>

            {selectedDate ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fadeIn">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-2 px-3 rounded-lg text-sm font-medium border transition-all duration-200
                      ${selectedTime === time 
                        ? 'bg-[#E49EA9] text-white border-[#E49EA9] shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#E49EA9] hover:text-[#E49EA9]'
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="h-64 flex flex-col items-center justify-center text-gray-400 text-center">
                <p>Please select a date to see available time slots</p>
              </div>
            )}
          </div>

        </div>

      </div>

      <GlobalFooter />
    </div>
  );
};

export default Calendar;