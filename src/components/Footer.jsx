import { Instagram, Youtube, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 text-center flex flex-col items-center gap-3 font-[Satoshi]">
      <p>© 2025 Motion Design Site. All rights reserved.</p>

      <div className="flex gap-4 mt-2">
        <a
          href="https://www.instagram.com/mkb_rbrice"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="http://www.youtube.com/@briceiudex1058"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
        >
          <Youtube size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/brice-mamang-aa96a8224" // ← Remplace par ton vrai lien
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
