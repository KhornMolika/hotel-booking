import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MapPin, Star, BedDouble, Bath, Maximize, Users, Monitor, Wifi, Shield, Volume2, Coffee, CheckCircle2 } from "lucide-react";

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
            <h1 className="text-4xl lg:text-5xl font-serif mb-4 font-bold">Room Details</h1>
            <div className="flex items-center text-sm font-medium">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-3">|</span>
              <span className="text-accent">Room Details</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-5 lg:px-15 max-w-7xl mx-auto">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12 h-auto lg:h-[500px]">
            <div className="hidden lg:flex flex-col gap-4 h-full col-span-1">
              <img src="/images/s3-image2.jpg" alt="" className="w-full h-1/3 object-cover rounded-xl shadow-sm" />
              <img src="/images/s3-image3.jpg" alt="" className="w-full h-1/3 object-cover rounded-xl shadow-sm" />
              <img src="/images/s3-image4.jpg" alt="" className="w-full h-1/3 object-cover rounded-xl shadow-sm" />
            </div>
            <div className="lg:col-span-3 h-[300px] lg:h-full">
              <img src="/images/s3-image1" alt="" className="w-full h-full object-cover rounded-xl shadow-sm" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Content */}
            <div className="lg:w-2/3">
              {/* Header Info */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-serif font-bold text-primary-2">Standard Rooms</h2>
                    <span className="bg-primary-1 text-white text-xs font-medium px-4 py-1.5 rounded-full hidden sm:block">Luxury Rooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-dark font-medium">
                    <Star className="text-accent w-5 h-5" fill="currentColor" /> 4.9 <span className="text-text-light font-normal">(245 Review)</span>
                  </div>
                </div>
                
                <p className="flex items-center gap-2 text-text-light text-sm mb-6">
                  <MapPin className="w-4 h-4 text-accent" /> 2464 Royal Ln. Mesa, New Jersey 45463
                </p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-serif font-bold text-primary-2">$150</span>
                  <span className="text-text-light">/ night</span>
                </div>

                <hr className="border-gray-100 mb-6" />

                <div className="flex flex-wrap items-center gap-8 text-sm text-text-dark font-medium">
                  <div className="flex items-center gap-2"><BedDouble className="w-5 h-5 text-accent" /> 1 Bed</div>
                  <div className="flex items-center gap-2"><Bath className="w-5 h-5 text-accent" /> 1 Bath</div>
                  <div className="flex items-center gap-2"><Maximize className="w-5 h-5 text-accent" /> 300 sqft</div>
                  <div className="flex items-center gap-2"><Users className="w-5 h-5 text-accent" /> 2 Guests</div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-4">Overview</h3>
                <p className="text-text-light leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-4">Room Amenities</h3>
                <p className="text-text-light leading-relaxed mb-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-3 text-text-dark font-medium"><Coffee className="text-gray-400 w-5 h-5" /> Air Conditioning</div>
                  <div className="flex items-center gap-3 text-text-dark font-medium"><Monitor className="text-gray-400 w-5 h-5" /> Flat-Screen TV</div>
                  <div className="flex items-center gap-3 text-text-dark font-medium"><Wifi className="text-gray-400 w-5 h-5" /> High-Speed Wi-Fi</div>
                  <div className="flex items-center gap-3 text-text-dark font-medium"><Shield className="text-gray-400 w-5 h-5" /> Electronic Safe</div>
                  <div className="flex items-center gap-3 text-text-dark font-medium"><Volume2 className="text-gray-400 w-5 h-5" /> Sound System</div>
                  <div className="flex items-center gap-3 text-text-dark font-medium"><Bath className="text-gray-400 w-5 h-5" /> Bathtub</div>
                </div>
              </div>

              {/* Booking Rules */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-6">Booking Rules</h3>
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-4">Check In</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-text-light"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> From 14:00</li>
                      <li className="flex items-center gap-3 text-text-light"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> ID Required</li>
                      <li className="flex items-center gap-3 text-text-light"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> Credit Card Required</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-4">Check Out</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-text-light"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> Until 12:00</li>
                      <li className="flex items-center gap-3 text-text-light"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> Late Check-out available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 lg:sticky lg:top-36">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-6">Book Room</h3>
                
                <form className="space-y-5">
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-text-dark mb-2">Your Name *</label>
                    <input type="text" placeholder="Ex. John Doe" className="w-full p-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-text-dark mb-2">Phone Number *</label>
                    <input type="tel" placeholder="Enter Phone Number" className="w-full p-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-text-dark mb-2">Check-in Date *</label>
                    <input type="date" className="w-full p-3.5 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-text-dark mb-2">Check-out Date *</label>
                    <input type="date" className="w-full p-3.5 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50" />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-text-dark mb-2">Adult *</label>
                    <select className="w-full p-3.5 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50 appearance-none">
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-text-dark mb-2">Room Type *</label>
                    <select className="w-full p-3.5 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50 appearance-none">
                      <option>Select</option>
                      <option>Standard Room</option>
                      <option>Family Room</option>
                    </select>
                  </div>
                  
                  <button type="button" className="w-full mt-4 bg-primary-1 text-white py-4 rounded-xl text-base font-bold transition-transform hover:bg-primary-2 hover:-translate-y-0.5 shadow-lg shadow-primary-1/30">
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
