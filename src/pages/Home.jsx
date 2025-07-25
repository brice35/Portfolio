import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-inter px-4 bg-[#fff7ed] py-16">
      {/* Intro */}
      <h2 className="text-2xl font-bold text-[#1e1e1e] mb-6 text-center font-satoshi max-w-2xl mx-auto mt-24">
        Hello! I'm Brice MAMANG. Welcome to my portfolio, where you can find all my work and services
      </h2>

      {/* Grille projets */}
      <div className="grid grid-cols-6 gap-6 w-full max-w-7xl px-4">
        
        {/* Projet 1 - Dwesta */}
        <Link
          to="/projets/projet1"
          className="col-span-6 sm:col-span-4 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/dwesta1.webp"
            alt="Projet 1"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-black">
            <h3 className="text-2xl font-bold font-satoshi">Dwesta</h3>
          </div>
        </Link>

        {/* Projet 2 - Modélisation 3D Intérieur */}
        <Link
          to="/projets/projet2"
          className="col-span-6 sm:col-span-2 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/3d0.png"
            alt="Projet 2"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold font-satoshi">Modélisation 3D intérieur</h3>
          </div>
        </Link>

        {/* Projet 3 - Modélisation 3D fiole */}
        <Link
          to="/projets/projet3"
          className="col-span-6 sm:col-span-3 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/3d1.png"
            alt="Projet 3"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold font-satoshi">Modélisation 3D fiole</h3>
          </div>
        </Link>

        {/* Projet 4 - Adobe Illustrator placé à côté du projet 3 */}
        <Link
          to="/projets/projet4"
          className="col-span-6 sm:col-span-3 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/logo_ribec (1).svg"
            alt="Projet 4"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-black">
            <h3 className="text-2xl font-bold font-satoshi">Adobe Illustrator Image Vectorielle</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Work;
