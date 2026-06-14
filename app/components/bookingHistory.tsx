"use client";

import { X, CalendarDays, MoonStar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import type React from "react";

const API_BASE = "https://api-hotel-booking.molika.app";

const CARD_COLORS = [
  "from-blue-400 to-blue-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-teal-400 to-teal-600",
];

type RoomType = {
  id: number;
  name: string;
  price: number;
  capacity: number;
};

type Room = {
  id: number;
  roomNumber: string;
  roomType: RoomType;
};

type Reservation = {
  id: number;
  room: Room;
  checkinDate: string;
  checkoutDate: string;
  adultAmount: number;
  childAmount: number;
  status: string;
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const calcNights = (checkIn: string, checkOut: string) =>
  Math.max(
    1,
    Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

export default function BookingHistory() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("accessToken");
    if (!userId || !token) {
      setLoading(false);
      return;
    }

    fetch(`${API_BASE}/api/reservation/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data: Reservation[]) => setReservations(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handlePrintReceipt = () => window.print();

  if (loading) {
    return (
      <div className="flex justify-center py-16 text-text-light">
        Loading reservations...
      </div>
    );
  }

  if (reservations.length === 0) {
    return (
      <div className="flex justify-center py-16 text-text-light">
        No reservations found.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {reservations.map((booking, i) => {
        const nights = calcNights(booking.checkinDate, booking.checkoutDate);
        const totalPrice = nights * (booking.room?.roomType?.price ?? 0);
        const color = CARD_COLORS[i % CARD_COLORS.length];
        const statusLabel =
          booking.status?.charAt(0).toUpperCase() +
          booking.status?.slice(1).toLowerCase();
        const isCompleted =
          booking.status?.toLowerCase() === "completed" ||
          new Date(booking.checkoutDate) < new Date();

        return (
          <article
            key={booking.id}
            onClick={() => setSelectedBooking(booking)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-100 hover:ring-primary-1/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div
                className={`relative sm:w-60 h-44 sm:h-auto bg-gradient-to-br ${color} flex-shrink-0 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center font-serif text-7xl font-bold text-white/20 select-none">
                  {booking.room?.roomType?.name?.charAt(0) ?? "R"}
                </span>
                <span
                  className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide backdrop-blur-md bg-white/85 ${
                    isCompleted ? "text-green-700" : "text-blue-700"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isCompleted ? "bg-green-500" : "bg-blue-500"
                    }`}
                  />
                  {statusLabel}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between gap-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-2 leading-snug group-hover:text-primary-1 transition-colors">
                    {booking.room?.roomType?.name ?? "Room"}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-text-light tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    Booking #{booking.id}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Stat
                    icon={<CalendarDays className="w-3.5 h-3.5 text-accent" />}
                    label="Check-in"
                    value={formatDate(booking.checkinDate)}
                  />
                  <Stat
                    icon={<CalendarDays className="w-3.5 h-3.5 text-accent" />}
                    label="Check-out"
                    value={formatDate(booking.checkoutDate)}
                  />
                  <Stat
                    icon={<MoonStar className="w-3.5 h-3.5 text-accent" />}
                    label="Nights"
                    value={`${nights} nights`}
                  />
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-dashed border-gray-200">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-text-light">
                    Total paid
                  </span>
                  <p className="font-serif text-3xl font-bold text-primary-1 leading-none">
                    ${totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {selectedBooking && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4 print:bg-white print:backdrop-blur-none">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative print:shadow-none print:rounded-none">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedBooking(null);
              }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-red-500 transition print:hidden"
            >
              <X className="w-4 h-4" />
            </button>

            <div id="receipt" className="text-text-dark p-8 sm:p-10">
              <div className="text-center mb-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-2">
                  Voco Hotel
                </p>
                <h2 className="font-serif text-3xl font-bold text-primary-2">
                  Booking Receipt
                </h2>
                <p className="text-text-light text-sm mt-1">
                  Thank you for your stay
                </p>
              </div>

              <div className="border-y border-dashed border-gray-300 py-5 space-y-3.5 text-sm">
                <Row label="Booking ID" value={`#${selectedBooking.id}`} />
                <Row label="Room type" value={selectedBooking.room?.roomType?.name ?? "—"} />
                <Row label="Room number" value={selectedBooking.room?.roomNumber ?? "—"} />
                <Row label="Check in" value={formatDate(selectedBooking.checkinDate)} />
                <Row label="Check out" value={formatDate(selectedBooking.checkoutDate)} />
                <Row label="Adults" value={selectedBooking.adultAmount} />
                <Row label="Children" value={selectedBooking.childAmount} />
              </div>

              <div className="mt-5 space-y-2.5 text-sm">
                <div className="flex justify-between text-text-light">
                  <span>Room price</span>
                  <span>${selectedBooking.room?.roomType?.price ?? 0} / night</span>
                </div>
                <div className="flex justify-between text-text-light">
                  <span>Nights</span>
                  <span>{calcNights(selectedBooking.checkinDate, selectedBooking.checkoutDate)}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="font-serif text-lg font-bold text-primary-2">Total</span>
                  <span className="font-serif text-2xl font-bold text-primary-1">
                    ${(
                      calcNights(selectedBooking.checkinDate, selectedBooking.checkoutDate) *
                      (selectedBooking.room?.roomType?.price ?? 0)
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-center text-xs text-text-light mt-7 leading-relaxed">
                Please show this receipt when checking in.
              </p>
            </div>

            <div className="px-8 sm:px-10 pb-8 print:hidden">
              <button
                type="button"
                onClick={handlePrintReceipt}
                className="w-full bg-primary-1 text-white py-3.5 rounded-2xl font-semibold tracking-wide hover:bg-primary-2 active:scale-[0.99] transition"
              >
                Print receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-3.5">
      <div className="flex items-center gap-1.5 text-gray-400 mb-1.5">
        {icon}
        <span className="text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <p className="font-semibold text-gray-800 text-xs">{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-medium text-gray-400 shrink-0">{label}</span>
      <span className="flex-1 border-b border-dashed border-gray-200" />
      <span className="font-semibold text-gray-800 text-right shrink-0">{value}</span>
    </div>
  );
}
