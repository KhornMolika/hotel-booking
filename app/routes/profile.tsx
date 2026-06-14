"use client";

import { useState } from "react";
import ProfileTabs from "../components/profileTap";
import BookingHistory from "../components/bookingHistory";
import PersonalInfo from "../components/personalInfo";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function Page() {
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <>
      <Link to="/" className="font-semibold text-primary-1">
        <ArrowLeft className="absolute top-4 left-4 text-foreground hover:text-accent cursor-pointer" />
      </Link>
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              My Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your bookings and account information
            </p>
          </div>

          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="mt-8">
            {activeTab === "booking" && <BookingHistory />}
            {activeTab === "personal" && <PersonalInfo />}
          </div>
        </div>
      </div>
    </>
  );
}
