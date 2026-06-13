'use client'

import { useEffect, useState } from 'react'
import { axiosPrivate } from '../api/client'

interface Booking {
  id: number
  roomNumber: string
  checkinDate: string
  checkoutDate: string
  status: string
}

export default function BookingHistory() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosPrivate.get('/api/reservation')
console.log("API RESPONSE:", res.data)
        console.log("API RESPONSE:", res.data)

        setBookings(res.data)
      } catch (error: any) {
        console.error(
          'Error fetching bookings:',
          error.response?.data || error.message
        )
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading bookings...</p>
      </div>
    )
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">No bookings found</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="border rounded-lg p-4 shadow-sm bg-white flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Room: {booking.roomNumber}
            </h2>

            <p className="text-sm text-gray-500">
              Check-in: {booking.checkinDate}
            </p>

            <p className="text-sm text-gray-500">
              Check-out: {booking.checkoutDate}
            </p>
          </div>

          <span
            className={`px-3 py-1 text-sm rounded-full ${
              booking.status === 'CONFIRMED'
                ? 'bg-green-100 text-green-700'
                : booking.status === 'PENDING'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {booking.status}
          </span>
        </div>
      ))}
    </div>
  )
}