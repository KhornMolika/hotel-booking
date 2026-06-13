'use client'

import { useState } from 'react'
import { Save, X } from 'lucide-react'

interface UserInfo {
  username: string
  email: string
  phone: string
}

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  })

  const [formData, setFormData] = useState<UserInfo>(userInfo)

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setUserInfo(formData)
    setIsEditing(false)
    setIsSaving(false)
  }

  const handleCancel = () => {
    setFormData(userInfo)
    setIsEditing(false)
  }

  return (
    <div className="bg-card border border-primary-1 rounded-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Account Information</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:text-primary-1 transition-opacity font-medium"
          >
            Edit
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Username
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full px-4 py-2 border border-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 text-foreground bg-background"
              placeholder="Enter username"
            />
          ) : (
            <p className="text-foreground text-lg">{userInfo.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Email Address
          </label>
          {isEditing ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 text-foreground bg-background"
              placeholder="Enter email"
            />
          ) : (
            <p className="text-foreground text-lg">{userInfo.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Phone Number
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-2 border border-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 text-foreground bg-background"
              placeholder="Enter phone number"
            />
          ) : (
            <p className="text-foreground text-lg">{userInfo.phone}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex gap-3 mt-8 pt-8 border-t border-primary-1">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:text-primary-1 transition-opacity font-medium disabled:opacity-60"
          >
            <Save size={18} />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 px-6 py-2 border border-primary-1 text-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            <X size={18} />
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
