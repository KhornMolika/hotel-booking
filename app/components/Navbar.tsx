import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const baseLinkClasses = "text-md font-medium transition-colors hover:text-accent text-text-dark tracking-wider";
  const activeLinkClasses = "text-md text-accent font-bold";

  return (
    <div className="fixed top-0 z-50 w-full shadow-sm">
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between px-15 py-2.5 bg-primary-2 text-white text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            <span>(000) 000-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-accent" />
            <span>example@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-accent">
          <span className="cursor-pointer hover:text-white transition font-medium">FB</span>
          <span className="cursor-pointer hover:text-white transition font-medium">TW</span>
          <span className="cursor-pointer hover:text-white transition font-medium">IN</span>
          <span className="cursor-pointer hover:text-white transition font-medium">YT</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between h-20 bg-white px-5 lg:px-15">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-1 text-white flex items-center justify-center font-serif text-xl font-bold">
            R
          </div>
          <span className="font-serif text-xl font-bold text-primary-1 hidden sm:block">Royelle Hotel</span>
        </Link>
        
        <ul className="hidden lg:flex items-center justify-center gap-8">
          <li><Link to="/" className={`${baseLinkClasses} ${isActive("/") ? activeLinkClasses : ""}`}>Home</Link></li>
          <li><Link to="/rooms" className={`${baseLinkClasses} ${isActive("/rooms") ? activeLinkClasses : ""}`}>Rooms & Suites</Link></li>
          <li><Link to="/about" className={`${baseLinkClasses} ${isActive("/about") ? activeLinkClasses : ""}`}>About Us</Link></li>
          <li><Link to="/events" className={`${baseLinkClasses} ${isActive("/events") ? activeLinkClasses : ""}`}>Events</Link></li>
          <li><Link to="/contact" className={`${baseLinkClasses} ${isActive("/contact") ? activeLinkClasses : ""}`}>Contact Us</Link></li>
        </ul>

        <div className="hidden lg:flex items-center">
          <Link to="/reservation" className="bg-primary-1 text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-2 transition-transform hover:-translate-y-0.5 shadow-md shadow-primary-1/20">
            Book Now
          </Link>
        </div>

        <div className="lg:hidden flex w-10 h-10 items-center justify-center cursor-pointer text-primary-1" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "max-h-100 border-t border-gray-100" : "max-h-0"}`}
      >
        <ul className="flex flex-col items-center py-5 gap-4">
          <li><Link to="/" className={`text-base font-medium hover:text-accent ${isActive("/") ? "text-primary-1" : "text-text-dark"}`} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/rooms" className={`text-base font-medium hover:text-accent ${isActive("/rooms") ? "text-primary-1" : "text-text-dark"}`} onClick={toggleMenu}>Rooms & Suites</Link></li>
          <li><Link to="/about" className={`text-base font-medium hover:text-accent ${isActive("/about") ? "text-primary-1" : "text-text-dark"}`} onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/events" className={`text-base font-medium hover:text-accent ${isActive("/events") ? "text-primary-1" : "text-text-dark"}`} onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/contact" className={`text-base font-medium hover:text-accent ${isActive("/contact") ? "text-primary-1" : "text-text-dark"}`} onClick={toggleMenu}>Contact Us</Link></li>
          <li>
            <Link to="/reservation" className="bg-primary-1 text-white px-6 py-2.5 rounded-full text-sm font-medium mt-2 block shadow-md shadow-primary-1/20" onClick={toggleMenu}>
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
