import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  MapPin,
  Star,
  BedDouble,
  Bath,
  Maximize,
  Users,
  Monitor,
  Wifi,
  Shield,
  Volume2,
  Coffee,
  CheckCircle2,
} from "lucide-react";

export default function Reservation() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-[116px] bg-whitesmoke">
        {/* Banner Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center h-72 relative">
          <div className="absolute inset-0 bg-primary-2/70 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl lg:text-5xl font-serif mb-4 font-bold">
              Room Details
            </h1>

            <div className="flex items-center text-sm font-medium">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>

              <span className="mx-3">|</span>

              <span className="text-accent">Room Details</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-5 lg:px-15 max-w-7xl mx-auto">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
            {/* Main Image */}
            <div className="lg:col-span-3 overflow-hidden rounded-2xl group">
              <img
                src="/images/home/rd1-img1.jpg"
                alt="Luxury Room"
                className="w-full h-[300px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Side Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <img
                src="/images/home/rd1-img2.jpg"
                alt="Room Detail"
                className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition"
              />

              <img
                src="/images/home/rd1-img3.jpg"
                alt="Bathroom"
                className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition"
              />

              <img
                src="/images/home/rd1-img4.jpg"
                alt="Room View"
                className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition col-span-2 lg:col-span-1"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Content */}
            <div className="lg:w-2/3">
              {/* Room Info */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-serif font-bold text-primary-2">
                      Standard Rooms
                    </h2>

                    <span className="bg-primary-1 text-white text-xs font-medium px-4 py-1.5 rounded-full hidden sm:block">
                      Luxury Rooms
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-text-dark font-medium">
                    <Star className="text-accent w-5 h-5" fill="currentColor" />
                    4.9

                    <span className="text-text-light font-normal">
                      (245 Review)
                    </span>
                  </div>
                </div>

                <p className="flex items-center gap-2 text-text-light text-sm mb-6">
                  <MapPin className="w-4 h-4 text-accent" />
                  2464 Royal Ln. Mesa, New Jersey 45463
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-serif font-bold text-primary-2">
                    $150
                  </span>

                  <span className="text-text-light">/ night</span>
                </div>

                <hr className="border-gray-100 mb-6" />

                <div className="flex flex-wrap items-center gap-8 text-sm text-text-dark font-medium">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-accent" />
                    1 Bed
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-accent" />
                    1 Bath
                  </div>

                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-accent" />
                    300 sqft
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    2 Guests
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-4">
                  Overview
                </h3>

                <p className="text-text-light leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-4">
                  Room Amenities
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-3 text-text-dark font-medium">
                    <Coffee className="text-gray-400 w-5 h-5" />
                    Air Conditioning
                  </div>

                  <div className="flex items-center gap-3 text-text-dark font-medium">
                    <Monitor className="text-gray-400 w-5 h-5" />
                    Flat-Screen TV
                  </div>

                  <div className="flex items-center gap-3 text-text-dark font-medium">
                    <Wifi className="text-gray-400 w-5 h-5" />
                    High-Speed Wi-Fi
                  </div>

                  <div className="flex items-center gap-3 text-text-dark font-medium">
                    <Shield className="text-gray-400 w-5 h-5" />
                    Electronic Safe
                  </div>

                  <div className="flex items-center gap-3 text-text-dark font-medium">
                    <Volume2 className="text-gray-400 w-5 h-5" />
                    Sound System
                  </div>

                  <div className="flex items-center gap-3 text-text-dark font-medium">
                    <Bath className="text-gray-400 w-5 h-5" />
                    Bathtub
                  </div>
                </div>
              </div>

              {/* Booking Rules */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-6">
                  Booking Rules
                </h3>

                <div className="flex flex-col md:flex-row gap-10">
                  {/* Check In */}
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-4">
                      Check In
                    </h4>

                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-text-light">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        From 14:00
                      </li>

                      <li className="flex items-center gap-3 text-text-light">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        ID Required
                      </li>

                      <li className="flex items-center gap-3 text-text-light">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Credit Card Required
                      </li>
                    </ul>
                  </div>

                  {/* Check Out */}
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-4">
                      Check Out
                    </h4>

                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-text-light">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Until 12:00
                      </li>

                      <li className="flex items-center gap-3 text-text-light">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Late Check-out available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 lg:sticky lg:top-36">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-6">
                  Book Room
                </h3>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <input
                    type="date"
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <input
                    type="date"
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <select className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50">
                    <option>Adult</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>

                  <select className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50">
                    <option>Room Type</option>
                    <option>Standard Room</option>
                    <option>Family Room</option>
                  </select>

                  <button
                    type="button"
                    className="w-full mt-4 bg-primary-1 text-white py-4 rounded-xl text-base font-bold hover:bg-primary-2 transition"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}