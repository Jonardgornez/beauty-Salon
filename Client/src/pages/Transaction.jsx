import React, { useState } from 'react';
import GlobalFooter from './GlobalFooter';

// --- MOCK BACKEND DATA ---
// This structure is designed to be easily replaced by an API response.
const initialTransactions = [
  {
    id: "TRX-1001",
    date: "Wednesday, February 18, 2026",
    time: "10:00 AM",
    status: "Confirmed",
    paymentStatus: "Paid",
    services: [
      { name: "Hydra Facial", quantity: 1, price: 600 }
    ],
    reservationFee: 100, // Amount already paid
    currency: "₱"
  },
  {
    id: "TRX-1002",
    date: "Friday, March 20, 2026",
    time: "02:00 PM",
    status: "Pending",
    paymentStatus: "Unpaid",
    services: [
      { name: "Gel Manicure", quantity: 1, price: 350 },
      { name: "Pedicure", quantity: 1, price: 300 }
    ],
    reservationFee: 0,
    currency: "₱"
  }
];

const Transaction = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  // --- HELPER FUNCTIONS ---
  
  // Calculate total price for a specific transaction
  const calculateTotal = (services) => {
    return services.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  };

  // Handle Cancel Action (Simulated)
  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      // In a real app, you would send a DELETE request to your backend here
      setTransactions(transactions.filter(t => t.id !== id));
    }
  };

  // Dynamic Badge Styling
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'paid': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'cancelled': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between pt-10">
      
      <div className="container mx-auto px-4 mb-20 max-w-4xl">
        
        {/* --- HEADER --- */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Transactions
          </h1>
          <p className="text-gray-500">
            View and manage your reservations and payments
          </p>
        </div>

        {/* --- TRANSACTIONS LIST --- */}
        <div className="flex flex-col gap-6">
          {transactions.length > 0 ? (
            transactions.map((trx) => {
              const totalServiceCost = calculateTotal(trx.services);
              const balanceDue = totalServiceCost - trx.reservationFee;

              return (
                <div key={trx.id} className="bg-[#FFF9FA] border border-[#fcefed] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  
                  {/* Card Header: Date & Status */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900">
                        {trx.date}
                      </h3>
                      <p className="text-[#E49EA9] font-medium">
                        {trx.time}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(trx.status)}`}>
                        {trx.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(trx.paymentStatus)}`}>
                        {trx.paymentStatus}
                      </span>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="border-b border-gray-200/60 pb-6 mb-6">
                    {trx.services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center mb-2 text-gray-700">
                        <span>{service.name} <span className="text-gray-400 text-sm">x{service.quantity}</span></span>
                        <span className="font-medium">{trx.currency}{service.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Financial Summary */}
                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Total Services</span>
                      <span className="font-medium decoration-double">{trx.currency}{totalServiceCost}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Reservation Fee (deducted)</span>
                      <span className="text-red-400">-{trx.currency}{trx.reservationFee}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-800 mt-2 pt-2">
                      <span>Balance Due at Service</span>
                      <span className="text-[#E49EA9]">{trx.currency}{balanceDue}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div>
                    <button 
                      onClick={() => handleCancel(trx.id)}
                      className="px-6 py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 font-medium text-sm transition-colors duration-200"
                    >
                      Cancel Reservation
                    </button>
                  </div>

                </div>
              );
            })
          ) : (
            // Empty State
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-400 mb-4">No transactions found.</p>
              <button className="text-[#E49EA9] font-medium hover:underline">Book a new appointment</button>
            </div>
          )}
        </div>

      </div>

      <GlobalFooter />
    </div>
  );
};

export default Transaction;