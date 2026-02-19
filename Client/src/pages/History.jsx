import React, { useState } from 'react';
import GlobalFooter from './GlobalFooter';

// --- MOCK BACKEND DATA ---
// Replace this array with your API response later.
const initialHistory = [
  {
    id: "HIS-2026-001",
    date: "February 6, 2026",
    time: "2:00 PM",
    status: "Fulfilled",
    services: [
      { name: "Volume Lashes", price: 600 },
      { name: "Brow Lamination", price: 299 }
    ],
    currency: "₱"
  },
  {
    id: "HIS-2026-002",
    date: "January 17, 2026",
    time: "11:00 AM",
    status: "Cancelled",
    services: [
      { name: "Brazilian Wax", price: 899 }
    ],
    currency: "₱"
  },
  {
    id: "HIS-2025-098",
    date: "December 20, 2025",
    time: "4:30 PM",
    status: "Fulfilled",
    services: [
      { name: "Gel Manicure", price: 450 },
      { name: "Classic Pedicure", price: 350 },
      { name: "Foot Spa", price: 500 }
    ],
    currency: "₱"
  }
];

const History = () => {
  const [historyData, setHistoryData] = useState(initialHistory);

  // --- HELPER: Calculate Total Price ---
  const calculateTotal = (services) => {
    return services.reduce((total, service) => total + service.price, 0);
  };

  // --- HELPER: Get Status Styles & Icon ---
  const getStatusConfig = (status) => {
    switch (status.toLowerCase()) {
      case 'fulfilled':
        return {
          badgeClass: "bg-[#FDF2F4] text-[#E49EA9] border-[#E49EA9]",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#059669" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          )
        };
      case 'cancelled':
        return {
          badgeClass: "bg-red-50 text-red-400 border-red-200",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#EF4444" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        };
      default:
        return {
          badgeClass: "bg-gray-50 text-gray-500 border-gray-200",
          icon: null
        };
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between pt-10">
      
      <div className="container mx-auto px-4 mb-20 max-w-4xl">
        
        {/* --- HEADER --- */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Appointment History
          </h1>
          <p className="text-gray-500">
            View your past appointments and their status
          </p>
        </div>

        {/* --- HISTORY LIST --- */}
        <div className="flex flex-col gap-6">
          {historyData.length > 0 ? (
            historyData.map((item) => {
              const statusStyle = getStatusConfig(item.status);
              const totalAmount = calculateTotal(item.services);

              return (
                <div key={item.id} className="bg-[#FFF9FA] border border-[#fcefed] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="mt-1">
                        {statusStyle.icon}
                      </div>
                      {/* Date & Time */}
                      <div>
                        <h3 className="text-xl font-serif font-bold text-gray-800">
                          {item.date}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">
                          {item.time}
                        </p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${statusStyle.badgeClass}`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Services List */}
                  <div className="border-t border-b border-gray-200/60 py-4 mb-4 space-y-3">
                    {item.services.map((service, index) => (
                      <div key={index} className="flex justify-between text-gray-600 text-sm md:text-base">
                        <span>{service.name}</span>
                        <span className="font-semibold text-gray-800">
                          {item.currency}{service.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total Footer */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400 font-medium text-sm">Total</span>
                    <span className="text-xl font-bold text-gray-900">
                      {item.currency}{totalAmount}
                    </span>
                  </div>

                </div>
              );
            })
          ) : (
            // Empty State
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-400 mb-4">You haven't booked any appointments yet.</p>
            </div>
          )}
        </div>

      </div>

      <GlobalFooter />
    </div>
  );
};

export default History;