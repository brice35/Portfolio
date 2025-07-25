import { Instagram, Youtube, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#ea580c] text-[#1e1e1e] py-6 px-4 text-center flex flex-col items-center gap-3 font-[Satoshi]">
      <p>© 2025 Motion Design Site. All rights reserved.</p>

      <div className="flex gap-4 mt-2">
        <a
          href="https://www.instagram.com/mkb_rbrice"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f43f5e] transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="http://www.youtube.com/@briceiudex1058"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#dc2626] transition"
        >
          <Youtube size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/brice-mamang-aa96a8224"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563eb] transition"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
