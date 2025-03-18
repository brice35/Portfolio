import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const location = useLocation();
  const buttonRefs = useRef([]);

  // Effet d'entrée des boutons au chargement
  useEffect(() => {
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
    );
  }, []);

  // Animation des boutons au changement de page
  useEffect(() => {
    gsap.fromTo(
      buttonRefs.current,
      { scale: 0.9, rotate: -3 },
      { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [location.pathname]);

  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed top-5 w-[95%] mx-8 z-50 flex items-center justify-center rounded-full border border-white/20">
      {/* Logo placé à gauche et centré verticalement */}
      <Link to="/" className="absolute left-5 top-1/2 transform -translate-y-1/2">
        <img src="/logo_ribec (1).png" alt="Logo" className="h-12 w-auto" />
      </Link>

      {/* Menu */}
      <ul className="flex justify-center space-x-6 text-white">
        {["Home", "Gallery", "Contact"].map((page, index) => {
          const path = page.toLowerCase();
          const durations = ["duration-700", "duration-700", "duration-700"]; // Assignation des durées de transition
          return (
            <li key={path}>
              <Link
                ref={(el) => (buttonRefs.current[index] = el)}
                to={`/${path === "home" ? "" : path}`}
                className={`px-5 py-2 rounded-full font-semibold text-lg transition-all duration-300 transform
                  ${
                    location.pathname === `/${path === "home" ? "" : path}`
                      ? "bg-blue-500 text-white shadow-lg scale-105 rotate-3"
                      : "hover:bg-blue-400 hover:text-white hover:scale-110 hover:rotate-2"
                  }`}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
