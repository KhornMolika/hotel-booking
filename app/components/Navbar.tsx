import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  User,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import facebookLogo from "../../public/images/logo/facebook-logo.svg";
import twitterLogo from "../../public/images/logo/twitter-logo.svg";
import linkedinLogo from "../../public/images/logo/linkedin-logo.svg";
import youtubeLogo from "../../public/images/logo/youtube-logo.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const cycleTheme = () => {
    const themes: Array<"light" | "dark" | "system"> = [
      "light",
      "dark",
      "system",
    ];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

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

  const getLinkClasses = (path: string, sizeClass: string) =>
    `navbar-link ${sizeClass} font-medium transition-colors hover:text-accent ${
      isActive(path)
        ? "navbar-link-active text-accent font-bold"
        : "text-text-dark"
    }`;

//   const baseLinkClasses = `
//   relative inline-block text-sm font-medium tracking-wide
//   text-gray-700
//   transition-colors duration-300
//   hover:text-primary-1
//   after:content-['']
//   after:block
//   after:absolute after:left-0 after:-bottom-1
//   after:h-[2px] after:bg-primary-1
//   after:w-full
//   after:scale-x-0
//   after:origin-left
//   after:transition-transform after:duration-300 ease-out

//   hover:after:scale-x-100
// `;
//   const activeLinkClasses = "text-primary-1 font-semibold after:scale-x-100";

  return (
    <div
      className="fixed top-0 z-50 w-full shadow-sm "
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between px-15 py-2.5 bg-primary-2 text-white text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            <span>(201) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-accent" />
            <span>royellehotel@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span>Royal Hotel Street442 Phnom Pen</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-accent">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-75 transition flex items-center justify-center"
            aria-label="Facebook"
          >
            <img src={facebookLogo} alt="Facebook" className="h-4 w-4" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-75 transition flex items-center justify-center"
            aria-label="Twitter"
          >
            <img
              src={twitterLogo}
              alt="Twitter"
              className="h-4 w-4 translate-y-0.5"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-75 transition flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-75 transition mr-4 flex items-center justify-center"
            aria-label="YouTube"
          >
            <img src={youtubeLogo} alt="YouTube" className="h-4 w-4" />
          </a>
          <button
            onClick={cycleTheme}
            className="hover:text-white transition font-medium cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" && <Moon className="h-4 w-4" />}
            {theme === "dark" && <Monitor className="h-4 w-4" />}
            {theme === "system" && <Sun className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between h-20 bg-white px-5 lg:px-15">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/nav-logo.png"
            alt="Royal Hotel Logo"
            className="w-20 h-20 object-cover "
          />
          <span className="font-serif text-xl  font-bold text-primary-1 hidden sm:block">
            Royal Hotel
          </span>
        </Link>

        <ul className="hidden lg:flex items-center justify-center gap-8">
          <li>
            <Link to="/" className={getLinkClasses("/", "text-base")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className={getLinkClasses("/rooms", "text-base")}>
              Rooms & Suites
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClasses("/about", "text-base")}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={getLinkClasses("/events", "text-base")}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={getLinkClasses("/contact", "text-base")}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-1 text-primary-1 transition hover:bg-primary-1 hover:text-white"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>

        <div
          className="lg:hidden flex w-10 h-10 items-center justify-center cursor-pointer text-primary-1"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "max-h-100 border-t border-gray-100" : "max-h-0"}`}
      >
        <ul className="flex flex-col items-center py-5 gap-4">
          <li>
            <Link
              to="/"
              className={getLinkClasses("/", "text-base")}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className={getLinkClasses("/rooms", "text-base")}
              onClick={toggleMenu}
            >
              Rooms & Suites
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={getLinkClasses("/about", "text-base")}
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={getLinkClasses("/events", "text-base")}
              onClick={toggleMenu}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={getLinkClasses("/contact", "text-base")}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={getLinkClasses("/login", "text-base")}
              onClick={toggleMenu}
            >
              Profile
            </Link>
          </li>
          <div className="border-t border-gray-200 pt-4 w-full px-4">
            <p className="text-sm font-medium text-text-dark mb-3">Theme</p>
            <button
              onClick={() => {
                cycleTheme();
                toggleMenu();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary-1 text-primary-2 rounded transition hover:bg-primary-1 hover:text-white"
            >
              {theme === "light" && <Moon className="h-4 w-4" />}
              {theme === "dark" && <Monitor className="h-4 w-4" />}
              {theme === "system" && <Sun className="h-4 w-4" />}
              <span>Click to switch mode</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
