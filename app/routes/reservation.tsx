import { useState } from "react";
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
  X,
} from "lucide-react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adult: "",
    roomType: "Standard Room",
  });

  const [showReceipt, setShowReceipt] = useState(false);

  const rooms = {
    "Standard Room": {
      title: "Standard Room",
      category: "Luxury Room",
      price: 150,
      image1: "/images/home/rd1-img1.jpg",
      image2: "/images/home/rd1-img2.jpg",
      image3: "/images/home/rd1-img3.jpg",
      image4: "/images/home/rd1-img4.jpg",
      bed: "1 Bed",
      bath: "1 Bath",
      size: "300 sqft",
      guests: "2 Guests",
      overview:
        "Enjoy a comfortable stay in our Standard Room, designed with modern amenities, elegant decor, and a relaxing atmosphere for couples or solo travelers.",
    },
    "Family Room": {
      title: "Family Room",
      category: "Family Suite",
      price: 250,
      image1: "/images/home/fr1.png",
      image2: "/images/home/fr2.png",
      image3: "/images/home/fr3.png",
      image4: "/images/home/fr4.png",
      bed: "2 Beds",
      bath: "2 Baths",
      size: "500 sqft",
      guests: "4 Guests",
      overview:
        "Our Family Room is perfect for families or groups, offering more space, extra beds, and a comfortable environment for a relaxing stay together.",
    },
  };

  const selectedRoom =
    rooms[formData.roomType as keyof typeof rooms] || rooms["Standard Room"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookNow = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.checkIn ||
      !formData.checkOut ||
      !formData.adult ||
      !formData.roomType
    ) {
      alert("Please fill all booking information.");
      return;
    }

    setShowReceipt(true);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

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
                src={selectedRoom.image1}
                alt={selectedRoom.title}
                className="w-full h-[300px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Side Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <img
                src={selectedRoom.image2}
                alt="Room Detail"
                className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition"
              />

              <img
                src={selectedRoom.image3}
                alt="Bathroom"
                className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition"
              />

              <img
                src={selectedRoom.image4}
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
                      {selectedRoom.title}
                    </h2>

                    <span className="bg-primary-1 text-white text-xs font-medium px-4 py-1.5 rounded-full hidden sm:block">
                      {selectedRoom.category}
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
                    ${selectedRoom.price}
                  </span>

                  <span className="text-text-light">/ night</span>
                </div>

                <hr className="border-gray-100 mb-6" />

                <div className="flex flex-wrap items-center gap-8 text-sm text-text-dark font-medium">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-accent" />
                    {selectedRoom.bed}
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-accent" />
                    {selectedRoom.bath}
                  </div>

                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-accent" />
                    {selectedRoom.size}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    {selectedRoom.guests}
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-4">
                  Overview
                </h3>

                <p className="text-text-light leading-relaxed">
                  {selectedRoom.overview}
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  />

                  <select
                    name="adult"
                    value={formData.adult}
                    onChange={handleChange}
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  >
                    <option value="">Adult</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>

                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                  >
                    <option value="Standard Room">Standard Room</option>
                    <option value="Family Room">Family Room</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleBookNow}
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

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 print:bg-white">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative print:shadow-none print:rounded-none">
            <button
              type="button"
              onClick={() => setShowReceipt(false)}
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
                  <span>{formData.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Phone:</span>
                  <span>{formData.phone}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Room Type:</span>
                  <span>{selectedRoom.title}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Check In:</span>
                  <span>{formData.checkIn}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Check Out:</span>
                  <span>{formData.checkOut}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Adults:</span>
                  <span>{formData.adult}</span>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Room Price:</span>
                  <span>${selectedRoom.price} / night</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-primary-2">
                  <span>Total:</span>
                  <span>${selectedRoom.price}</span>
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

      <Footer />
    </>
  );
}