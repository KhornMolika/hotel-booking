"use client";

import { Download, X } from "lucide-react";
import { useState } from "react";

const bookings = [
  {
    id: 1,
    hotelName: "Seaside Paradise Resort",
    checkIn: "2024-06-15",
    checkOut: "2024-06-20",
    nights: 5,
    totalPrice: 1500,
    status: "Completed",
    imageColor: "from-blue-400 to-blue-600",
    bookingNumber: "NY123456789",
  },
  {
    id: 2,
    hotelName: "Mountain Peak Hotel",
    checkIn: "2024-07-01",
    checkOut: "2024-07-08",
    nights: 7,
    totalPrice: 2100,
    status: "Completed",
    imageColor: "from-purple-400 to-purple-600",
    bookingNumber: "NY123456789",
  },
  {
    id: 3,
    hotelName: "Urban Luxury Suites",
    checkIn: "2024-08-10",
    checkOut: "2024-08-15",
    nights: 5,
    totalPrice: 1800,
    status: "Upcoming",
    imageColor: "from-pink-400 to-pink-600",
    bookingNumber: "NY123456789",
  },
];

const data = {
  name: "John Doe",
  phone: "+1 (555) 123-4567",
  checkIn: "2024-07-01",
  checkOut: "2024-07-05",
  adult: 2,
  price: 200,
  roomType: "Deluxe Suite",
};

export default function BookingHistory() {

  const [showReceipt, setShowReceipt] = useState(false);

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          onClick={() => setShowReceipt(true)}
          className="bg-card border border-primary-1 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex flex-col md:flex-row">
            {/* Hotel Image */}
            <div
              className={`w-full md:w-48 h-40 bg-gradient-to-br ${booking.imageColor} flex-shrink-0`}
            />

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {booking.hotelName}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Check-in</p>
                    <p className="font-medium text-foreground">
                      {new Date(booking.checkIn).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Check-out</p>
                    <p className="font-medium text-foreground">
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Nights</p>
                    <p className="font-medium text-foreground">
                      {booking.nights}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-primary-1">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Price
                  </p>
                  <p className="text-2xl font-bold text-primary-1">
                    ${booking.totalPrice}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Booking Number
                  </p>
                  <p className="font-medium text-primary-1">
                    {booking.bookingNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {showReceipt && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 print:bg-white">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative print:shadow-none print:rounded-none">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevents refiring card click
                setShowReceipt(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 print:hidden"
            >
              <X className="w-5 h-5" />
            </button>

            <div id="receipt" className="text-text-dark">
              <h2 className="text-3xl font-serif font-bold text-primary-2 text-center mb-2">
                Booking Receipt
              </h2>

              <p className="text-center text-text-light text-sm mb-6">
                Thank you for your booking
              </p>

              <div className="border-t border-b border-gray-200 py-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Customer Name:</span>
                  <span>{data.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Phone:</span>
                  <span>{data.phone}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Room Type:</span>
                  <span>{data.roomType}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Check In:</span>
                  <span>{data.checkIn}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Check Out:</span>
                  <span>{data.checkOut}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Adults:</span>
                  <span>{data.adult}</span>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Room Price:</span>
                  <span>${data.price} / night</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-primary-2">
                  <span>Total:</span>
                  <span>${data.price}</span>
                </div>
              </div>

              <p className="text-center text-xs text-text-light mt-6">
                Please show this receipt when checking in.
              </p>
            </div>

            <button
              type="button"
              onClick={handlePrintReceipt}
              className="w-full mt-6 bg-primary-1 text-white py-3 rounded-xl font-bold hover:bg-primary-2 transition print:hidden"
            >
              Print Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}