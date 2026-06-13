import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageSkeleton } from "../components/ImageSkeleton";

export default function Events() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-[116px] min-h-[calc(100vh-116px)]">
        {/* Hero Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-[calc(100vh-116px)]">
          <div className="bg-black/45 h-full">
            <div className="flex flex-col items-center justify-center h-full w-full text-white relative">
              <h1 className="text-4xl lg:text-7xl font-serif mb-4 font-bold">
                Events
              </h1>
              <div className="flex items-center text-lg font-medium">
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <span className="mx-3">|</span>
                <span className="text-accent">Events</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 Events */}
        <section className="py-20 px-8 lg:px-16 flex flex-col items-center bg-seecondary">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="text-start w-full h-auto bg-white pb-5 rounded-xl overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.1)]" data-aos="fade-up" data-aos-duration="300">
              <img src="/images/home/s3-image5.jpg" alt="" className="w-full h-64 object-cover" />
              <p className="text-text-light text-sm mt-3.5 mx-2.5 mb-1.5 font-serif">February 26, 2024</p>
              <h3 className="m-2.5 pl-2.5 cursor-pointer text-text-dark transition-colors hover:text-primary-1">Travel Hacks to Make Your Flight More Comfortable</h3>
              <p className="text-primary-2 text-base px-2.5 m-2.5 leading-relaxed">Unlock tips for a smoother and more enjoyable journey, helping you travel with ease.</p>
            </div>
            <div className="text-start w-full h-auto bg-white pb-5 rounded-xl overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.1)]" data-aos="fade-up" data-aos-duration="300">
              <img src="/images/home/s3-image2.jpg" alt="" className="w-full h-64 object-cover" />
              <p className="text-text-light text-sm mt-3.5 mx-2.5 mb-1.5 font-serif">June 16, 2024</p>
              <h3 className="m-2.5 pl-2.5 cursor-pointer text-text-dark transition-colors hover:text-primary-1">5 Job Types That Allow You To Earn As You Travel The World</h3>
              <p className="text-primary-2 text-base px-2.5 m-2.5 leading-relaxed">Explore career options that let you work while discovering new destinations.</p>
            </div>
            <div className="text-start w-full h-auto bg-white pb-5 rounded-xl overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.1)]" data-aos="fade" data-aos-duration="300">
              <ImageSkeleton src="/images/home/s3-image4.jpg" alt="Event" className="w-full h-64 object-cover" />
              <p className="text-text-light text-sm mt-3.5 mx-2.5 mb-1.5 font-serif">October 20, 2024</p>
              <h3 className="m-2.5 pl-2.5 cursor-pointer text-text-dark transition-colors hover:text-primary-1">30 Great Ideas On Gifts For Travelers</h3>
              <p className="text-primary-2 text-base px-2.5 m-2.5 leading-relaxed">Find the perfect presents for the wanderlust in your life with our thoughtful gift ideas.</p>
            </div>
            <div className="text-start w-full h-auto bg-white pb-5 rounded-xl overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.1)]" data-aos="fade-up" data-aos-duration="300">
              <img src="/images/home/s3-image3.jpg" alt="" className="w-full h-64 object-cover" />
              <p className="text-text-light text-sm mt-3.5 mx-2.5 mb-1.5 font-serif">February 26, 2024</p>
              <h3 className="m-2.5 pl-2.5 cursor-pointer text-text-dark transition-colors hover:text-primary-1">Travel Hacks to Make Your Flight More Comfortable</h3>
              <p className="text-primary-2 text-base px-2.5 m-2.5 leading-relaxed">Unlock tips for a smoother and more enjoyable journey, helping you travel with ease.</p>
            </div>
            <div className="text-start w-full h-auto bg-white pb-5 rounded-xl overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.1)]" data-aos="fade-up" data-aos-duration="300">
              <img src="/images/home/s3-image1.jpg" alt="" className="w-full h-64 object-cover" />
              <p className="text-text-light text-sm mt-3.5 mx-2.5 mb-1.5 font-serif">June 16, 2024</p>
              <h3 className="m-2.5 pl-2.5 cursor-pointer text-text-dark transition-colors hover:text-primary-1">5 Job Types That Allow You To Earn As You Travel The World</h3>
              <p className="text-primary-2 text-base px-2.5 m-2.5 leading-relaxed">Explore career options that let you work while discovering new destinations.</p>
            </div>
            <div className="text-start w-full h-auto bg-white pb-5 rounded-xl overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.1)]" data-aos="fade-up" data-aos-duration="300">
              <img src="/images/home/s3-image2.jpg" alt="" className="w-full h-64 object-cover" />
              <p className="text-text-light text-sm mt-3.5 mx-2.5 mb-1.5 font-serif">October 20, 2024</p>
              <h3 className="m-2.5 pl-2.5 cursor-pointer text-text-dark transition-colors hover:text-primary-1">30 Great Ideas On Gifts For Travelers</h3>
              <p className="text-primary-2 text-base px-2.5 m-2.5 leading-relaxed">Find the perfect presents for the wanderlust in your life with our thoughtful gift ideas.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
