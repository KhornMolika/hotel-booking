import { Link, useLocation } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import facebookLogo from "../../public/images/logo/facebook-logo.svg";
import twitterLogo from "../../public/images/logo/twitter-logo.svg";
import linkedinLogo from "../../public/images/logo/linkedin-logo.svg";
import youtubeLogo from "../../public/images/logo/youtube-logo.svg";

export function Footer() {
  const textColor = "text-gray-300";
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const getFooterLinkClasses = (path: string) =>
    `text-md font-light hover:text-accent transition-colors ${
      isActive(path) ? "footer-link-active text-accent font-semibold" : textColor
    }`;
  
  return (
    <footer className="grid grid-rows-[auto_auto] bg-primary-2 py-10 px-5 lg:px-15">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 place-items-center md:place-items-start mb-5">
        <section className="w-full">
          <ul className="flex flex-col items-center md:items-start gap-4 m-0 list-none w-full">
            <li><Link to="/" className={getFooterLinkClasses("/")}>Home</Link></li>
            <li><Link to="/rooms" className={getFooterLinkClasses("/rooms")}>Rooms & Suites</Link></li>
            <li><Link to="/about" className={getFooterLinkClasses("/about")}>About Us</Link></li>
          </ul>
        </section>
        <section className="w-full">
          <ul className="flex flex-col items-center md:items-start gap-4 m-0 list-none w-full">
            <li><Link to="/events" className={getFooterLinkClasses("/events")}>Events</Link></li>
            <li><Link to="/contact" className={getFooterLinkClasses("/contact")}>Contact Us</Link></li>
          </ul>
        </section>
        <section className="flex flex-col items-center md:items-start gap-0 w-full text-center md:text-left">
          <div className={`${textColor} text-md font-light w-full`}>
            <address className="text-white text-md font-semibold not-italic">
              <MapPin size={16} className="text-accent inline mr-2 align-text-bottom" /> Address:
            </address>
            <p className="mt-2 mb-6 text-gray-300 leading-relaxed">2464 Royal Ln. Mesa, New Jersey 45463</p>
          </div>
          <div className={`${textColor} text-md font-light w-full`}>
            <p className="text-white text-md font-semibold"><Phone size={16} className="text-accent inline mr-2 align-text-bottom" /> Phone:</p>
            <p className="mt-2 mb-6 text-gray-300">(201) 123-4567</p>
          </div>
          <div className={`${textColor} text-md font-light w-full`}>
            <p className="text-white text-md font-semibold"><Mail size={16} className="text-accent inline mr-2 align-text-bottom" /> Email:</p>
            <p className="mt-2 mb-6 text-gray-300">royellehotel@gmail.com</p>
          </div>
        </section>
        <section className={`flex flex-col items-center md:items-start ${textColor} w-full`}>
          <label className="mb-5 text-md font-semibold w-full text-center md:text-left text-white">Sign up for our newsletter</label>
          <input type="text" placeholder="Email Address..." className={`p-3 text-white bg-white/10 border-none rounded-md focus:outline-none focus:ring-1 focus:ring-accent w-full text-center md:text-left placeholder-gray-400`} />
          <button className="w-full bg-accent text-white font-medium py-3 rounded-md mt-3 border border-accent hover:bg-white hover:text-accent transition-colors">Subscribe</button>
        </section>
      </section>
      <hr className="border-primary-1 my-8 border-opacity-50" />
      <section className={`flex flex-col md:flex-row items-center justify-between ${textColor} text-sm gap-5 md:gap-0`}>
        <div className="text-center md:text-left">
          Copyright ©{new Date().getFullYear()} All rights reserved | Royelle Hotel
        </div>
        <div className="flex gap-4 text-accent">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-colors flex items-center justify-center" aria-label="Facebook">
            <img src={facebookLogo} alt="Facebook" className="h-4 w-4" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-colors flex items-center justify-center" aria-label="Twitter">
            <img src={twitterLogo} alt="Twitter" className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-colors flex items-center justify-center" aria-label="LinkedIn">
            <img src={linkedinLogo} alt="LinkedIn" className="h-4 w-4" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-colors flex items-center justify-center" aria-label="YouTube">
            <img src={youtubeLogo} alt="YouTube" className="h-4 w-4" />
          </a>
        </div>
      </section>   
    </footer>
  );
}
