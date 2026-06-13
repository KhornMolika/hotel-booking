'use client'

import { Calendar, User } from 'lucide-react'

interface ProfileTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
  const tabs = [
    {
      id: 'booking',
      label: 'Booking History',
      icon: Calendar,
    },
    {
      id: 'personal',
      label: 'Personal Information',
      icon: User,
    },
  ]

  return (
    <div className="flex gap-1 border-b border-border">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all relative ${
              isActive
                ? 'text-primary-1 font-bold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon size={20} />
            {tab.label}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-1" />
            )}
          </button>
        )
      })}
    </div>
  )
}
