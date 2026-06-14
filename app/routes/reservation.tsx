"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
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

const API_BASE = "https://api-hotel-booking.molika.app";

type RoomType = {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
};

const STATIC_ROOM_DATA: Record<string, {
  category: string;
  image1: string; image2: string; image3: string; image4: string;
  bed: string; bath: string; size: string;
}> = {
  "Deluxe Room": {
    category: "Luxury Room",
    image1: "/images/home/rd1-img1.jpg", image2: "/images/home/rd1-img2.jpg",
    image3: "/images/home/rd1-img3.jpg", image4: "/images/home/rd1-img4.jpg",
    bed: "1 Bed", bath: "1 Bath", size: "300 sqft",
  },
  "Family room": {
    category: "Family Suite",
    image1: "/images/home/fr1.png", image2: "/images/home/fr2.png",
    image3: "/images/home/fr3.png", image4: "/images/home/fr4.png",
    bed: "2 Beds", bath: "2 Baths", size: "500 sqft",
  },
};

const DEFAULT_STATIC = STATIC_ROOM_DATA["Deluxe Room"];

export default function Reservation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roomTypeId: "",
    checkIn: "",
    checkOut: "",
    adult: "1",
    children: "0",
  });

  const [roomTypes, setRoomTypes] = useState<RoomType[]>([]);
  const [roomTypesLoading, setRoomTypesLoading] = useState(true);
  const [roomTypesError, setRoomTypesError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${API_BASE}/api/roomType`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        const list: RoomType[] = Array.isArray(data)
          ? data
          : Array.isArray(data?.content)
          ? data.content
          : [];
        setRoomTypes(list);
        if (list.length > 0) {
          setFormData((prev) => ({ ...prev, roomTypeId: String(list[0].id) }));
        } else {
          setRoomTypesError(true);
        }
      })
      .catch(() => setRoomTypesError(true))
      .finally(() => setRoomTypesLoading(false));
  }, [navigate]);

  const selectedRoomType = roomTypes.find((r) => String(r.id) === formData.roomTypeId);
  const staticData = STATIC_ROOM_DATA[selectedRoomType?.name ?? ""] ?? DEFAULT_STATIC;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookNow = async () => {
    if (!formData.checkIn || !formData.checkOut || !formData.roomTypeId) {
      alert("Please fill all booking information.");
      return;
    }

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("accessToken");

    if (!userId || !token) {
      navigate("/login");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const roomsRes = await fetch(`${API_BASE}/api/room`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const rooms = await roomsRes.json();
      const room = rooms.find(
        (r: { id: number; roomType?: { id: number } }) =>
          r.roomType?.id === Number(formData.roomTypeId)
      );

      if (!room) {
        setError("No available room for the selected type.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE}/api/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          roomId: room.id,
          userId: Number(userId),
          checkinDate: `${formData.checkIn}T14:00:00.000+00:00`,
          checkoutDate: `${formData.checkOut}T12:00:00.000+00:00`,
          adultAmount: Number(formData.adult),
          childAmount: Number(formData.children),
        }),
      });

      if (!res.ok) throw new Error("Booking failed. Please try again.");

      navigate("/profile");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-[116px] min-h-[calc(100vh-116px)] bg-whitesmoke">
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
            <div className="lg:col-span-3 overflow-hidden rounded-2xl group">
              <img
                src={staticData.image1}
                alt={selectedRoomType?.name}
                className="w-full h-[300px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <img src={staticData.image2} alt="Room Detail" className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition" />
              <img src={staticData.image3} alt="Bathroom" className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition" />
              <img src={staticData.image4} alt="Room View" className="w-full h-[160px] lg:h-[156px] object-cover rounded-2xl hover:opacity-90 transition col-span-2 lg:col-span-1" />
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
                      {selectedRoomType?.name}
                    </h2>

                    <span className="bg-primary-1 text-white text-xs font-medium px-4 py-1.5 rounded-full hidden sm:block">
                      {staticData.category}
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
                    ${selectedRoomType?.price ?? "—"}
                  </span>

                  <span className="text-text-light">/ night</span>
                </div>

                <hr className="border-gray-100 mb-6" />

                <div className="flex flex-wrap items-center gap-8 text-sm text-text-dark font-medium">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-accent" />
                    {staticData.bed}
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-accent" />
                    {staticData.bath}
                  </div>

                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-accent" />
                    {staticData.size}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    {selectedRoomType?.capacity ?? "—"} Guests
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary-2 mb-4">
                  Overview
                </h3>

                <p className="text-text-light leading-relaxed">
                  {selectedRoomType?.description}
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
                  <div>
                    <label className="block text-xs font-medium text-text-light mb-1.5">Room Type</label>
                    <select
                      name="roomTypeId"
                      value={formData.roomTypeId}
                      onChange={handleChange}
                      disabled={roomTypesLoading || roomTypesError}
                      className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50 disabled:opacity-60"
                    >
                      {roomTypesLoading && <option value="">Loading...</option>}
                      {roomTypesError && <option value="">Failed to load room types</option>}
                      {!roomTypesLoading && !roomTypesError && roomTypes.map((rt) => (
                        <option key={rt.id} value={String(rt.id)}>{rt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-light mb-1.5">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-light mb-1.5">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-light mb-1.5">Adults</label>
                    <select
                      name="adult"
                      value={formData.adult}
                      onChange={handleChange}
                      className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-light mb-1.5">Children</label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full p-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3+</option>
                    </select>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="button"
                    onClick={handleBookNow}
                    disabled={loading}
                    className="w-full mt-4 bg-primary-1 text-white py-4 rounded-xl text-base font-bold hover:bg-primary-2 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Booking..." : "Book Now"}
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