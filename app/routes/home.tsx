import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Star } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Slider";
import { ImageSkeleton } from "../components/ImageSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const sliderImages = [
  "/images/home/s3-image1.jpg",
  "/images/home/s3-image2.jpg",
  "/images/home/s3-image3.jpg",
  "/images/home/s3-image4.jpg",
  "/images/home/s3-image5.jpg",
];

type ApiMenu = {
  name: string;
  description: string;
  ingredients: string;
  price: number;
  isAvailable: boolean;
  categoryId: number;
};

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("mains");
  const [menus, setMenus] = useState<any[]>([]);

  const [availabilityForm, setAvailabilityForm] = useState({
    checkIn: "",
    checkOut: "",
    adult: "1",
    children: "0",
  });

  const [availabilityResult, setAvailabilityResult] = useState("");

  const oldMenus = [
    {
      img: "/images/home/chickentikka.jpg",
      tab: "mains",
      name: "Murgh Tikka Masala",
      price: 20,
      description: "Creamy Indian chicken curry with naan.",
    },
    {
      img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80",
      tab: "mains",
      name: "Fish Moilee",
      price: 30,
      description: "Kerala coconut fish curry.",
    },
    {
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
      tab: "mains",
      name: "French Toast Combo",
      price: 10,
      description: "Golden toast with berries and syrup.",
    },
    {
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
      tab: "mains",
      name: "Veggie Omelet",
      price: 8.5,
      description: "Soft omelet with fresh vegetables.",
    },
    {
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
      tab: "desserts",
      name: "Banana Split",
      price: 11,
      description: "Ice cream with fruits & chocolate.",
    },
    {
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
      tab: "desserts",
      name: "Apple Strudel",
      price: 12,
      description: "Warm pastry with vanilla ice cream.",
    },
    {
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      tab: "drinks",
      name: "Fresh Lemonade",
      price: 8,
      description: "Cold refreshing lemonade with mint.",
    },
    {
      img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1200&q=80",
      tab: "drinks",
      name: "Spring Water",
      price: 5,
      description: "Pure chilled mineral water.",
    },
  ];

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("https://api-hotel-booking.molika.app/api/menus", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data: ApiMenu[] = await res.json();
        console.log("Menu from Postman/API:", data);

        const getTabByCategoryId = (categoryId: number) => {
          if (categoryId === 1) return "mains";
          if (categoryId === 2) return "desserts";
          if (categoryId === 3) return "drinks";
          return "mains";
        };

        const updatedMenus = data.map((apiMenu, index) => {
          const oldMenu = oldMenus[index % oldMenus.length];


          return {
            ...oldMenu,
            name: apiMenu.name,
            price: apiMenu.price,
            description: apiMenu.description,
            tab: getTabByCategoryId(apiMenu.categoryId),

            // keep your old input image
            img: oldMenu.img,
          };
        });

        setMenus(updatedMenus);
      } catch (error: any) {
        console.error("Fetch menu error:", error.message);

        // if API error, show your old static menu
        setMenus(oldMenus);
      }
    };

    fetchMenus();
  }, []);

  const filteredMenus = menus.filter((menu) => menu.tab === activeMenu);

  const handleAvailabilityChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setAvailabilityForm({
      ...availabilityForm,
      [name]: value,
    });
  };

  const handleCheckAvailability = () => {
    if (!availabilityForm.checkIn || !availabilityForm.checkOut) {
      setAvailabilityResult("Please select check-in and check-out dates.");
      return;
    }

    if (availabilityForm.checkOut <= availabilityForm.checkIn) {
      setAvailabilityResult("Check-out date must be after check-in date.");
      return;
    }

    setAvailabilityResult(
      "Rooms are available for your selected dates. You can reserve now.",
    );
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-[116px] min-h-[calc(100vh-116px)]">
        {/* Hero Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-position-[center_top_-140px] md:bg-top bg-fixed h-[calc(100vh-116px)] relative">
          <div className="bg-black/50 h-full">
            <div className="flex flex-col items-center justify-center h-full w-full text-white text-center px-5">
              <h3 className="mb-4 font-black flex items-center gap-2 text-sm lg:text-base tracking-widest text-accent uppercase">
                Welcome to{" "}
                <span className="flex items-center text-white">
                  <Star
                    className="text-accent w-4 h-4 mr-1"
                    fill="currentColor"
                  />{" "}
                  5 Star
                </span>{" "}
                Hotel
              </h3>

              <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                A Best Place To Stay
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2 Welcome */}
        <section className="py-24 px-5 lg:px-15 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div data-aos="fade" className="w-full lg:w-1/2">
              <div className="text-center lg:text-left">
                <p className="text-primary-1 font-semibold tracking-widest uppercase text-sm mb-3">
                  Welcome to Our Hotel
                </p>

                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 mb-6 leading-tight">
                  Experience True Comfort & Luxury
                </h1>

                <p className="text-text-light leading-relaxed mb-10 text-lg max-w-xl mx-auto lg:mx-0">
                  Nestled in a peaceful destination, our hotel is designed for
                  comfort, relaxation, and unforgettable stays.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                  <button
                    className="px-8 py-3 bg-primary-1 text-white rounded-full font-medium
                    transition-all duration-300 hover:bg-primary-2 hover:-translate-y-0.5
                    shadow-md shadow-primary-1/20"
                  >
                    Learn More
                  </button>


                  <p className="text-primary-1 font-semibold cursor-pointer hover:text-primary-2 transition-colors">
                    SEE VIDEO
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade" className="w-full lg:w-1/2">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                className="rounded-3xl shadow-2xl overflow-hidden"
              >
                <SwiperSlide>
                  <ImageSkeleton
                    src="/images/home/s3-image1.jpg"
                    className="w-full h-[480px] object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ImageSkeleton
                    src="/images/home/s3-image2.jpg"
                    className="w-full h-[480px] object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ImageSkeleton
                    src="/images/home/s3-image3.jpg"
                    className="w-full h-[480px] object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Section 3 Rooms & Suites */}
        <section className="py-20 px-5 lg:px-15 bg-secondary flex flex-col items-center">
          <div
            className="max-w-3xl text-center mb-16"
            data-aos="fade"
            data-aos-duration="500"
          >
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 mb-6">
              Rooms & Suites
            </h1>

            <p className="text-text-light leading-relaxed text-lg">
              Escape to tranquility in our elegantly designed rooms and suites,
              where comfort meets luxury. Tucked away from the world's hustle,
              our accommodations offer a peaceful retreat with stunning views
              and modern amenities.
            </p>
          </div>

          <div
            className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade"
            data-aos-duration="500"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="overflow-hidden h-64">
                <ImageSkeleton
                  src="/images/home/s3-image1.jpg"
                  alt="Single Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                  Single Room
                </h3>

                <p className="text-accent font-semibold text-lg">
                  $90{" "}
                  <span className="text-sm font-normal text-text-light">
                    / per night
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="overflow-hidden h-64">
                <ImageSkeleton
                  src="/images/home/s3-image2.jpg"
                  alt="Family Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                  Family Room
                </h3>


                <p className="text-accent font-semibold text-lg">
                  $120{" "}
                  <span className="text-sm font-normal text-text-light">
                    / per night
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="overflow-hidden h-64">
                <ImageSkeleton
                  src="/images/home/s3-image3.jpg"
                  alt="Presidential Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                  Presidential Suite
                </h3>

                <p className="text-accent font-semibold text-lg">
                  $250{" "}
                  <span className="text-sm font-normal text-text-light">
                    / per night
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 Photos */}
        <section className="py-20 px-5 lg:px-15 bg-white flex flex-col items-center">
          <div
            className="max-w-3xl text-center mb-16"
            data-aos="fade"
            data-aos-duration="500"
          >
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 mb-6">
              Photos Gallery
            </h1>

            <p className="text-text-light leading-relaxed text-lg">
              Explore the beauty of our hotel through stunning images that
              capture the essence of relaxation and luxury. From scenic views to
              cozy interiors, each photo tells the story of a perfect getaway.
            </p>
          </div>

          <Slider images={sliderImages} />
        </section>

        {/* Section 5 Restaurant Menu */}
        <section className="py-20 px-5 lg:px-15 bg-primary-2 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div
              className="max-w-3xl text-center mb-16"
              data-aos="fade"
              data-aos-duration="500"
            >
              <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">
                Culinary Experience
              </p>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Our Restaurant Menu
              </h1>

              <p className="text-gray-300 leading-relaxed text-lg">
                Indulge in a culinary journey like no other. Our menu offers a
                variety of mouthwatering dishes crafted with the finest
                ingredients.
              </p>
            </div>

            <div className="w-full max-w-lg mx-auto mb-16 border-b border-white/20">
              <div className="flex items-center justify-center gap-8 lg:gap-16 pb-4">
                <button
                  onClick={() => setActiveMenu("mains")}
                  className={`text-base lg:text-lg font-bold tracking-wider transition-colors ${
                    activeMenu === "mains"
                      ? "text-accent"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  MAINS
                </button>

                <button
                  onClick={() => setActiveMenu("desserts")}
                  className={`text-base lg:text-lg font-bold tracking-wider transition-colors ${
                    activeMenu === "desserts"
                      ? "text-accent"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  DESSERTS
                </button>


                <button
                  onClick={() => setActiveMenu("drinks")}
                  className={`text-base lg:text-lg font-bold tracking-wider transition-colors ${
                    activeMenu === "drinks"
                      ? "text-accent"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  DRINKS
                </button>
              </div>
            </div>

            <div className="w-full max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-tab-fade">
                {filteredMenus.map((menu, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
                  >
                    <img
                      src={menu.img}
                      className="w-full h-52 object-cover"
                      alt={menu.name}
                    />

                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg">{menu.name}</h3>

                        <span className="text-accent font-bold">
                          ${menu.price}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm">
                        {menu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3">
          {[
            {
              name: "Emily Thompson",
              role: "Travel Blogger",
              img: "/images/home/s6-person1.jpg",
              title: "Amazing Experience!",
              text: "The food was exquisite, and the hotel provided top-notch comfort. A must-visit for luxury relaxation.",
            },
            {
              name: "Michael Rodriguez",
              role: "Executive Chef",
              img: "/images/home/s6-person2.jpg",
              title: "Food and Comfort!",
              text: "Outstanding food and cozy atmosphere. Truly the best place to stay and dine.",
            },
            {
              name: "Sarah Collins",
              role: "Food Critic",
              img: "/images/home/s6-person3.jpg",
              title: "Top-Notch Quality",
              text: "Fantastic hotel experience with incredible food. Perfect for family and relaxation.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="relative bg-white shadow-sm p-7 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-primary-1/10 text-5xl font-serif absolute top-4 right-6">
                “”
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.img}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-1"
                  alt={t.name}
                />

                <div>
                  <h5 className="font-bold text-text-dark leading-tight">
                    {t.name}
                  </h5>

                  <p className="text-sm text-accent">{t.role}</p>
                </div>
              </div>

              <h4 className="font-serif text-lg font-bold text-primary-2 mb-3">
                {t.title}
              </h4>

              <p className="text-text-light text-sm leading-relaxed italic">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Section 8 Call to Action */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed py-24 relative">
          <div className="absolute inset-0 bg-primary-2/80"></div>


          <div className="max-w-7xl mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left text-white">
            <h2
              className="text-4xl lg:text-5xl font-serif font-bold"
              data-aos="fade"
              data-aos-duration="500"
            >
              A Best Place To Stay. Reserve Now!
            </h2>

            <Link to="/reservation" data-aos="fade" data-aos-duration="500">
              <button className="text-lg font-bold text-white py-4 px-10 bg-accent border border-accent rounded-full transition-all hover:bg-white hover:text-accent shadow-lg shadow-black/20">
                Reserve Now
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
