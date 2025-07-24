import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const location = useLocation();
  const buttonRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      buttonRefs.current,
      { scale: 0.9, rotate: -3 },
      { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [location.pathname]);

  const menuItems = [
    { name: "Work", path: "" },
    { name: "Services", path: "services" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav
      className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 
                 px-6 py-3 shadow-md z-50 flex items-center justify-center 
                 rounded-full border border-white/20 w-[700px] font-[Satoshi]"
    >
      {/* Logo */}
      <Link
        to="/"
        className="absolute left-5 top-1/2 transform -translate-y-1/2"
      >
        <img src="/logo_ribec (1).png" alt="Logo" className="h-10 w-auto" />
      </Link>

      {/* Menu */}
      <ul className="flex justify-center space-x-6 text-white">
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <Link
              ref={(el) => (buttonRefs.current[index] = el)}
              to={`/${item.path}`}
              className={`px-4 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 transform
                ${
                  location.pathname === `/${item.path}`
                    ? "bg-blue-500 text-white shadow-lg scale-105 rotate-2"
                    : "hover:bg-blue-400 hover:text-white hover:scale-110 hover:rotate-1"
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
