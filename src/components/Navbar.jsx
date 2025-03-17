import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logoo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white border-b border-gray-300 shadow-md">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-15 w-14 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-gray-900">
              Zorbiads
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-900 hover:text-blue-600 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-gray-900">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50 shadow-md"
          >
            <button
              onClick={toggleNavbar}
              className="absolute top-5 right-5 text-gray-900"
            >
              <X />
            </button>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="text-gray-900 hover:text-blue-600 transition"
                    onClick={() => setMobileDrawerOpen(false)} // Close menu on click
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border border-gray-400 rounded-md text-gray-900 hover:bg-gray-100 transition"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-indigo-800 text-white hover:opacity-90 transition"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
