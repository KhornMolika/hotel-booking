import { Link } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const textColor = "text-gray-300";
  
  return (
    <footer className="grid grid-rows-[auto_auto] bg-primary-2 py-10 px-5 lg:px-15">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 place-items-center md:place-items-start mb-5">
        <section className="w-full">
          <ul className="flex flex-col items-center md:items-start gap-4 m-0 list-none w-full">
            <li><Link to="/about" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>About Us</Link></li>
            <li><Link to="#" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>Terms & Conditions</Link></li>
            <li><Link to="#" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>Privacy Policy</Link></li>
            <li><Link to="/rooms" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>Rooms</Link></li>
          </ul>
        </section>
        <section className="w-full">
          <ul className="flex flex-col items-center md:items-start gap-4 m-0 list-none w-full">
            <li><Link to="/rooms" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>The Rooms & Suites</Link></li>
            <li><Link to="/about" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>About Us</Link></li>
            <li><Link to="/contact" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>Contact Us</Link></li>
            <li><Link to="#" className={`${textColor} text-sm font-light hover:text-accent transition-colors`}>Restaurant</Link></li>
          </ul>
        </section>
        <section className="flex flex-col items-center md:items-start gap-0 w-full text-center md:text-left">
          <div className={`${textColor} text-sm font-light w-full`}>
            <address className="text-white text-sm font-semibold not-italic">
              <MapPin size={16} className="text-accent inline mr-2 align-text-bottom" /> Address:
            </address>
            <p className="mt-2 mb-6 text-gray-300 leading-relaxed">198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className={`${textColor} text-sm font-light w-full`}>
            <p className="text-white text-sm font-semibold"><Phone size={16} className="text-accent inline mr-2 align-text-bottom" /> Phone:</p>
            <p className="mt-2 mb-6 text-gray-300">(+1) 435 3533</p>
          </div>
          <div className={`${textColor} text-sm font-light w-full`}>
            <p className="text-white text-sm font-semibold"><Mail size={16} className="text-accent inline mr-2 align-text-bottom" /> Email:</p>
            <p className="mt-2 mb-6 text-gray-300">info@domain.com</p>
          </div>
        </section>
        <section className={`flex flex-col items-center md:items-start ${textColor} w-full`}>
          <label className="mb-5 text-sm font-semibold w-full text-center md:text-left text-white">Sign up for our newsletter</label>
          <input type="text" placeholder="Email Address..." className={`p-3 text-white bg-white/10 border-none rounded-md focus:outline-none focus:ring-1 focus:ring-accent w-full text-center md:text-left placeholder-gray-400`} />
          <button className="w-full bg-accent text-white font-medium py-3 rounded-md mt-3 hover:bg-yellow-600 transition-colors">Subscribe</button>
        </section>
      </section>
      <hr className="border-primary-1 my-8 border-opacity-50" />
      <section className={`flex flex-col md:flex-row items-center justify-between ${textColor} text-sm gap-5 md:gap-0`}>
        <div className="text-center md:text-left">
          Copyright ©{new Date().getFullYear()} All rights reserved | Royelle Hotel
        </div>
        <div className="flex gap-5 text-accent font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
          <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
          <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
        </div>
      </section>   
    </footer>
  );
}
