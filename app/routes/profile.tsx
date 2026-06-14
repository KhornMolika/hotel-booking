"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import BookingHistory from "../components/bookingHistory";
import PersonalInfo from "../components/personalInfo";
import { Calendar, User, LogOut, ChevronRight } from "lucide-react";
import { authService } from "../api/authService";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("booking");
  const [userName, setUserName] = useState("Guest");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserName(user.username || "Guest");
      setUserEmail(user.email || "");
    }
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    window.location.href = "/";
  };

  const tabs = [
    { id: "booking", label: "Booking History", icon: Calendar },
    { id: "personal", label: "Personal Information", icon: User },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-[116px] min-h-[calc(100vh-116px)] bg-whitesmoke">
        {/* Banner Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center h-64 relative">
          <div className="absolute inset-0 bg-primary-2/80 flex flex-col items-center justify-center text-white backdrop-blur-sm">
            <h1 className="text-4xl lg:text-5xl font-serif mb-4 font-bold tracking-wide">
              My Profile
            </h1>
            <div className="flex items-center text-sm font-medium opacity-90">
              <span className="hover:text-accent transition-colors cursor-pointer">Home</span>
              <span className="mx-3">|</span>
              <span className="text-accent">Dashboard</span>
            </div>
          </div>
        </section>

        <section className="py-12 px-5 lg:px-15 max-w-7xl mx-auto -mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/3 xl:w-1/4">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden">
                {/* Profile Summary */}
                <div className="p-8 text-center border-b border-gray-50 bg-gradient-to-b from-primary-1/5 to-white">
                  <div className="w-24 h-24 rounded-full bg-primary-1 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg ring-4 ring-white">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <h2 className="text-xl font-serif font-bold text-primary-2">{userName}</h2>
                  <p className="text-sm text-text-light mt-1">{userEmail}</p>
                </div>

                {/* Navigation Links */}
                <div className="p-4 space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary-1 text-white shadow-md shadow-primary-1/30"
                            : "text-text-dark hover:bg-gray-50 hover:text-primary-1"
                        }`}
                      >
                        <div className="flex items-center gap-3 font-medium">
                          <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                          {tab.label}
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-4 rounded-xl font-medium text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-300 mt-4"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-2/3 xl:w-3/4">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 min-h-[500px]">
                {activeTab === "booking" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                      <h2 className="text-2xl font-serif font-bold text-primary-2">Booking History</h2>
                      <span className="text-sm text-text-light bg-gray-50 px-3 py-1 rounded-full">Recent</span>
                    </div>
                    <BookingHistory />
                  </div>
                )}
                
                {activeTab === "personal" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <PersonalInfo />
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
