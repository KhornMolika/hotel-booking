'use client'

import { useState } from 'react'
import ProfileTabs from '../components/profileTap'
import BookingHistory from '../components/bookingHistory'
import PersonalInfo from '../components/personalInfo'

export default function Page() {
  const [activeTab, setActiveTab] = useState('booking')

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your bookings and account information</p>
        </div>

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          {activeTab === 'booking' && <BookingHistory/>}
          {activeTab === 'personal' && <PersonalInfo />}
        </div>
      </div>
    </div>
  )
}
