import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
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
                Contact Us
              </h1>
              <div className="flex items-center text-lg font-medium">
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <span className="mx-3">|</span>
                <span className="text-accent">Contact Us</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 Contact Info and Form */}
        <section className="py-20 px-8 lg:px-16 flex flex-col lg:flex-row gap-12 bg-whitesmoke justify-center items-center lg:items-start max-w-7xl mx-auto">
          <div
            className="flex-1 max-w-md w-full"
            data-aos="fade"
            data-aos-duration="300"
          >
            <h2 className="text-3xl mb-10 text-text-dark">
              Contact Information
            </h2>
            <div className="flex items-start gap-5 mb-7">
              <MapPin className="text-primary-1 w-6 h-6 mt-1.5" />
              <div>
                <h3 className="text-lg mb-2.5 text-text-dark">Address</h3>
                <p className="text-text-light leading-relaxed">
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-7">
              <Phone className="text-primary-1 w-6 h-6 mt-1.5" />
              <div>
                <h3 className="text-lg mb-2.5 text-text-dark">Phone</h3>
                <p className="text-text-light leading-relaxed">(+1) 435 3533</p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-7">
              <Mail className="text-primary-1 w-6 h-6 mt-1.5" />
              <div>
                <h3 className="text-lg mb-2.5 text-text-dark">Email Address</h3>
                <p className="text-text-light leading-relaxed">
                  info@domain.com
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex-1 max-w-2xl w-full bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            data-aos="fade"
            data-aos-duration="300"
          >
            <form className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="flex-1 p-3.5 border border-[#e2e8f0] rounded text-text-dark focus:outline-none focus:border-primary-1 font-sans"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="flex-1 p-3.5 border border-[#e2e8f0] rounded text-text-dark focus:outline-none focus:border-primary-1 font-sans"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3.5 border border-[#e2e8f0] rounded text-text-dark focus:outline-none focus:border-primary-1 font-sans"
              />
              <textarea
                placeholder="Message"
                rows={6}
                required
                className="w-full p-3.5 border border-[#e2e8f0] rounded text-text-dark focus:outline-none focus:border-primary-1 font-sans"
              ></textarea>
              <button
                type="button"
                className="bg-primary-1 text-white py-3.5 px-7 border-none rounded-full text-base font-medium cursor-pointer transition-all self-start hover:bg-primary-2 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
