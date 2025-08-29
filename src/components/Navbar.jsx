import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

// ✅ Import du logo
import logo from "../assets/logo_ribec.png";

const Navbar = () => {
  const location = useLocation();
  const buttonRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  // ⚡ Traduction des éléments du menu
  const menuItems = [
    { name: "Accueil", path: "" },
    { name: "Services", path: "services" },
    { name: "À propos", path: "about" },
    { name: "Contact", path: "contact" },
  ];

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
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#f97316] px-4 md:px-6 py-3 shadow-md z-50 w-full md:w-[700px] flex items-center justify-center rounded-full border border-[#fde68a] font-[Satoshi]">
      
      {/* Logo (toujours à gauche) */}
      <Link
        to="/"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"
      >
        <img src={logo} alt="Logo RIBEC" className="h-10 w-auto" />
        <h1 className="text-2xl font-bold text-white hidden sm:block">RIBEC</h1>
      </Link>

      {/* Menu burger (mobile) */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={10} /> : <Menu size={8} />}
      </button>

      {/* Liens du menu */}
      <ul
        className={`${
          isOpen
            ? "absolute top-[70px] left-1/2 transform -translate-x-1/2 bg-[#f97316] w-11/12 max-w-sm rounded-xl shadow-lg p-6 space-y-4"
            : "hidden"
        } md:flex md:space-x-6 md:relative md:top-0 md:left-0 md:translate-x-0 md:bg-transparent md:p-0 md:space-y-0 md:flex-row md:items-center text-[#1e1e1e] transition-all`}
      >
        {menuItems.map((item, index) => (
          <li key={item.name} className="text-center">
            <Link
              ref={(el) => (buttonRefs.current[index] = el)}
              to={`/${item.path}`}
              className={`block px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform
                ${
                  location.pathname === `/${item.path}`
                    ? "bg-[#ea580c] text-white shadow-lg scale-105 rotate-2"
                    : "hover:bg-[#fde68a] hover:text-[#1e1e1e] hover:scale-110 hover:rotate-1"
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
