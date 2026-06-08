import { useState } from "react";
import { Link } from "react-router";
import { Star } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Slider";
import { Testimonials } from "../components/Testimonials";

const sliderImages = [
  "/images/home/s3-image1.jpg",
  "/images/home/s3-image2.jpg",
  "/images/home/s3-image3.jpg",
  "/images/home/s3-image4.jpg",
  "/images/home/s3-image5.jpg",
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("mains");

  const [availabilityForm, setAvailabilityForm] = useState({
    checkIn: "",
    checkOut: "",
    adult: "1",
    children: "0",
  });

  const [availabilityResult, setAvailabilityResult] = useState("");

  const handleAvailabilityChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      "Rooms are available for your selected dates. You can reserve now."
    );
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-[calc(100vh-116px)] relative">
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

        {/* Check Availability Form */}
        <div className="max-w-6xl mx-auto px-5 relative z-20 -mt-24 lg:-mt-16 mb-20">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 lg:p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
              <div className="flex flex-col">
                <label
                  htmlFor="checkIn"
                  className="text-sm font-bold text-text-dark mb-2"
                >
                  Check In
                </label>

                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={availabilityForm.checkIn}
                  onChange={handleAvailabilityChange}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="checkOut"
                  className="text-sm font-bold text-text-dark mb-2"
                >
                  Check Out
                </label>

                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={availabilityForm.checkOut}
                  onChange={handleAvailabilityChange}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="adult"
                  className="text-sm font-bold text-text-dark mb-2"
                >
                  Adults
                </label>

                <select
                  id="adult"
                  name="adult"
                  value={availabilityForm.adult}
                  onChange={handleAvailabilityChange}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50 appearance-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="children"
                  className="text-sm font-bold text-text-dark mb-2"
                >
                  Children
                </label>

                <select
                  id="children"
                  name="children"
                  value={availabilityForm.children}
                  onChange={handleAvailabilityChange}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:border-primary-1 transition-colors bg-gray-50/50 appearance-none"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="flex flex-col md:col-span-2 lg:col-span-1">
                <button
                  type="button"
                  onClick={handleCheckAvailability}
                  className="w-full bg-primary-1 text-white py-3 rounded-lg text-base font-bold transition-transform hover:bg-primary-2 hover:-translate-y-0.5 shadow-md shadow-primary-1/30"
                >
                  Check Availability
                </button>
              </div>
            </form>

            {availabilityResult && (
              <div
                className={`mt-6 p-4 rounded-xl text-sm font-medium ${
                  availabilityResult.includes("available")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                <p>{availabilityResult}</p>

                {availabilityResult.includes("available") && (
                  <Link to="/reservation">
                    <button className="mt-4 bg-primary-1 text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-2 transition">
                      Reserve Now
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Section 2 Welcome */}
        <section className="py-20 px-5 lg:px-15 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-full lg:w-1/2"
            >
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 mb-6">
                  Welcome!
                </h1>

                <p className="text-text-light leading-relaxed mb-8 text-lg">
                  Nestled in a serene corner of the world, our hotel offers a
                  perfect escape from the ordinary. Far from the hustle and
                  bustle, we invite you to unwind and experience unmatched
                  comfort, culinary delights, and breathtaking views. Whether
                  you're here for relaxation or adventure, we have something
                  special for everyone.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="px-8 py-3 bg-primary-1 font-medium text-white rounded-full transition-transform hover:bg-primary-2 hover:-translate-y-0.5 shadow-md">
                    Learn More
                  </button>

                  <p className="text-primary-1 font-semibold flex items-center cursor-pointer hover:text-primary-2 transition-colors">
                    <span className="text-sm font-normal text-text-light mr-3">
                      or
                    </span>{" "}
                    SEE VIDEO
                  </p>
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="relative inline-block">
                <img
                  src="/images/home/s2-image2.avif"
                  alt="Hotel Interior"
                  className="w-full max-w-125 h-100 object-cover rounded-2xl shadow-xl"
                />

                <img
                  src="/images/home/s2-image3.jpg"
                  alt="Poolside"
                  className="absolute -bottom-10 -left-10 lg:-left-16 w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg hidden sm:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 Rooms & Suites */}
        <section className="py-20 px-5 lg:px-15 bg-secondary flex flex-col items-center">
          <div
            className="max-w-3xl text-center mb-16"
            data-aos="fade-down"
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
            data-aos="zoom-in-up"
            data-aos-duration="500"
          >
            {/* Room Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="overflow-hidden h-64">
                <img
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

            {/* Room Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="overflow-hidden h-64">
                <img
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

            {/* Room Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="overflow-hidden h-64">
                <img
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
            data-aos="fade-up"
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

        {/* Section 5 Our Restaurant Menu */}
        <section className="py-20 px-5 lg:px-15 bg-primary-2 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div
              className="max-w-3xl text-center mb-16"
              data-aos="zoom-in"
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
              {activeMenu === "mains" && (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $20.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">
                      Murgh Tikka Masala
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Rich, creamy, and mildly spiced chicken curry served with
                      naan.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $30.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">Fish Moilee</h3>
                    <p className="text-gray-400 text-sm">
                      A fragrant Kerala style fish curry cooked in coconut milk.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $10.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">
                      French Toast Combo
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Classic french toast with fresh berries and maple syrup.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $8.50
                    </h2>
                    <h3 className="text-xl font-bold mb-2">Veggie Omelet</h3>
                    <p className="text-gray-400 text-sm">
                      Fluffy three-egg omelet loaded with seasonal fresh
                      vegetables.
                    </p>
                  </div>
                </div>
              )}

              {activeMenu === "desserts" && (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $11.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">Banana Split</h3>
                    <p className="text-gray-400 text-sm">
                      Classic dessert featuring vanilla, chocolate, and
                      strawberry ice cream.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $12.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">Apple Strudel</h3>
                    <p className="text-gray-400 text-sm">
                      Warm apple strudel served with a scoop of premium vanilla
                      bean ice cream.
                    </p>
                  </div>
                </div>
              )}

              {activeMenu === "drinks" && (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $5.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">Spring Water</h3>
                    <p className="text-gray-400 text-sm">
                      Chilled, pure artisan spring water.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h2 className="text-accent font-serif text-3xl font-bold mb-2">
                      $8.00
                    </h2>
                    <h3 className="text-xl font-bold mb-2">Lemonade</h3>
                    <p className="text-gray-400 text-sm">
                      Freshly squeezed lemonade with a hint of mint.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 6 Testimonials */}
        <section className="py-20 px-5 lg:px-15 bg-whitesmoke text-center overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="500" className="mb-16">
              <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">
                Testimonials
              </p>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2">
                What our customers say!
              </h1>
            </div>

            <Testimonials />
          </div>
        </section>

        {/* Section 7 Events */}
        <section className="py-20 px-5 lg:px-15 bg-white">
          <div className="max-w-7xl mx-auto">
            <div
              className="max-w-3xl mx-auto text-center mb-16"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">
                Blog & News
              </p>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 mb-6">
                Events
              </h1>

              <p className="text-text-light leading-relaxed text-lg">
                Discover exciting and informative events happening at our hotel,
                each designed to enrich your stay. From travel tips to career
                advice.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
                <div className="overflow-hidden h-60">
                  <img
                    src="/images/home/s3-image2.jpg"
                    alt="Event"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-accent text-sm font-bold mb-3 tracking-wider">
                    February 26, 2024
                  </p>

                  <h3 className="font-serif text-xl font-bold text-text-dark mb-3 cursor-pointer hover:text-primary-1 transition-colors">
                    Travel Hacks to Make Your Flight More Comfortable
                  </h3>

                  <p className="text-text-light text-sm flex-1 leading-relaxed">
                    Unlock tips for a smoother and more enjoyable journey with
                    these essential travel hacks.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
                <div className="overflow-hidden h-60">
                  <img
                    src="/images/home/s3-image3.jpg"
                    alt="Event"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-accent text-sm font-bold mb-3 tracking-wider">
                    June 16, 2024
                  </p>

                  <h3 className="font-serif text-xl font-bold text-text-dark mb-3 cursor-pointer hover:text-primary-1 transition-colors">
                    5 Job Types That Allow You To Earn As You Travel
                  </h3>

                  <p className="text-text-light text-sm flex-1 leading-relaxed">
                    Explore career options that let you work while discovering
                    beautiful destinations worldwide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
                <div className="overflow-hidden h-60">
                  <img
                    src="/images/home/s3-image4.jpg"
                    alt="Event"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-accent text-sm font-bold mb-3 tracking-wider">
                    October 20, 2024
                  </p>

                  <h3 className="font-serif text-xl font-bold text-text-dark mb-3 cursor-pointer hover:text-primary-1 transition-colors">
                    30 Great Ideas On Gifts For Travelers
                  </h3>

                  <p className="text-text-light text-sm flex-1 leading-relaxed">
                    Find the perfect presents for the wanderlust in your life
                    with our comprehensive guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 Call to Action */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed py-24 relative">
          <div className="absolute inset-0 bg-primary-2/80"></div>

          <div className="max-w-7xl mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left text-white">
            <h2
              className="text-4xl lg:text-5xl font-serif font-bold"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              A Best Place To Stay. Reserve Now!
            </h2>

            <Link
              to="/reservation"
              data-aos="fade-left"
              data-aos-duration="500"
            >
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