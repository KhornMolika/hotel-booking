import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Star, BedDouble, Bath, Maximize } from "lucide-react";

export default function Rooms() {
  const [selectedCategory, setSelectedCategory] = useState("All Rooms");

  const features = [
    "Breakfast Included",
    "Swimming Pool",
    "High Speed Wifi",
    "Spa & Wellness",
  ];

  const categories = [
    "All Rooms",
    "Luxury Rooms",
    "Family Rooms",
    "Standard Rooms",
  ];

  const rooms = [
    {
      img: "/images/home/s3-image1.jpg",
      category: "Standard Rooms",
      tag: "Standard Room",
      price: "150",
      rating: "4.9",
      title: "Standard Rooms",
      beds: "1",
      baths: "1",
      sqft: "300",
    },
    {
      img: "/images/home/s3-image2.jpg",
      category: "Luxury Rooms",
      tag: "Luxury Room",
      price: "250",
      rating: "5.0",
      title: "Deluxe Rooms",
      beds: "1",
      baths: "2",
      sqft: "400",
    },
    {
      img: "/images/home/fr5.png",
      category: "Family Rooms",
      tag: "Family Room",
      price: "350",
      rating: "4.9",
      title: "Family Room",
      beds: "3",
      baths: "2",
      sqft: "650",
    },
    {
      img: "/images/home/s3-image4.jpg",
      category: "Standard Rooms",
      tag: "Standard Room",
      price: "450",
      rating: "4.9",
      title: "The Pearl Room",
      beds: "2",
      baths: "2",
      sqft: "700",
    },
    {
      img: "/images/home/s3-image5.jpg",
      category: "Standard Rooms",
      tag: "Standard Room",
      price: "550",
      rating: "4.9",
      title: "Golden Horizon Room",
      beds: "3",
      baths: "3",
      sqft: "800",
    },
    {
      img: "/images/home/s3-image1.jpg",
      category: "Luxury Rooms",
      tag: "Luxury Room",
      price: "300",
      rating: "5.0",
      title: "The Haven Room",
      beds: "2",
      baths: "2",
      sqft: "750",
    },
    {
      img: "/images/home/s3-image2.jpg",
      category: "Luxury Rooms",
      tag: "Luxury Room",
      price: "450",
      rating: "5.0",
      title: "The Executive Deluxe",
      beds: "4",
      baths: "3",
      sqft: "950",
    },
    {
      img: "/images/home/s3-image3.jpg",
      category: "Luxury Rooms",
      tag: "Luxury Room",
      price: "550",
      rating: "5.0",
      title: "The Prestige Room",
      beds: "5",
      baths: "4",
      sqft: "1200",
    },
    {
      img: "/images/home/s3-image4.jpg",
      category: "Standard Rooms",
      tag: "Standard Room",
      price: "600",
      rating: "5.0",
      title: "Royal Room",
      beds: "4",
      baths: "3",
      sqft: "825",
    },
    {
      img: "/images/home/fr1.png",
      category: "Family Rooms",
      tag: "Family Room",
      price: "750",
      rating: "5.0",
      title: "Family Suites",
      beds: "5",
      baths: "4",
      sqft: "950",
    },
  ];

  const filteredRooms =
    selectedCategory === "All Rooms"
      ? rooms
      : rooms.filter((room) => room.category === selectedCategory);

  const RoomCard = ({
    img,
    tag,
    price,
    rating,
    title,
    beds,
    baths,
    sqft,
  }: any) => (
    <div
      className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="relative h-64">
        <img src={img} alt={title} className="w-full h-full object-cover" />

        <div className="absolute bottom-3.5 left-5 bg-primary-1 text-white text-xs font-medium px-4 py-1.5 rounded-full z-10 shadow-md">
          {tag}
        </div>
      </div>

      <div className="p-6 pt-8 bg-white relative">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-serif font-bold text-primary-2">
              ${price}
            </span>
            <span className="text-sm text-text-light">/night</span>
          </div>

          <div className="flex items-center gap-1 text-text-dark font-medium">
            <Star className="text-accent w-4 h-4" fill="currentColor" />
            {rating}
          </div>
        </div>

        <h3 className="font-serif text-xl font-bold text-text-dark mb-4">
          {title}
        </h3>

        <hr className="border-gray-100 mb-4" />

        <div className="flex items-center justify-between text-sm text-text-light">
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-accent" /> {beds} Bed
          </div>

          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-accent" /> {baths} Bath
          </div>

          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-accent" /> {sqft} sqft
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-29">
        {/* Banner Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-[calc(100vh-116px)] relative">
          <div className="bg-black/45 h-full">
            <div className="flex flex-col items-center justify-center h-full w-full text-white relative">
              <h1 className="text-4xl lg:text-7xl font-serif mb-4 font-bold">
                Rooms & Suites
              </h1>

              <div className="flex items-center text-lg font-medium">
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <span className="mx-3">|</span>
                <span className="text-accent">Rooms & Suites</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-20 px-5 lg:px-15 flex flex-col items-center">
          <div
            className="text-center mb-10"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3 flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-accent"></span>
              ROOMS & SUITES
              <span className="w-10 h-px bg-accent"></span>
            </p>

            <h1 className="text-4xl lg:text-5xl font-serif text-primary-2 font-bold">
              Luxury Rooms & Suites
            </h1>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-1 text-white shadow-md"
                    : "bg-white text-primary-2 border border-gray-200 hover:bg-primary-1 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Room Cards */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
              <RoomCard
                key={index}
                img={room.img}
                tag={room.tag}
                price={room.price}
                rating={room.rating}
                title={room.title}
                beds={room.beds}
                baths={room.baths}
                sqft={room.sqft}
              />
            ))}
          </div>
        </section>

        {/* Feature Bar */}
        <div className="bg-primary-1 text-white py-6 px-5 lg:px-15 overflow-hidden shadow-inner">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 lg:gap-6">
                <span className="font-serif text-lg tracking-wide">
                  {feature}
                </span>

                {i !== features.length - 1 && (
                  <Star
                    className="text-accent w-5 h-5 hidden lg:block"
                    fill="currentColor"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}