import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-inter px-4 bg-[#fff7ed] py-16">
      <div className="max-w-7xl w-full px-4">
        </div>
      {/* Titre et intro */}
       <h2 className="text-2xl font-bold text-[#1e1e1e] mb-6 text-center font-satoshi max-w-2xl mx-auto mt-24">
          Hello! I'm Brice MAMANG. Welcome to my portfolio, where you can find all my work and services
        </h2>

      {/* Grille asymétrique */}
      <div className="grid grid-cols-6 gap-6 w-full max-w-7xl px-4">
        {/* Projet 1 - grand horizontal */}
        <Link
          to="/projets/projet1"
          className="col-span-6 sm:col-span-4 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/projet1.jpg"
            alt="Projet 1"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold font-satoshi">Projet 1</h3>
           
          </div>
        </Link>

        {/* Projet 2 - vertical */}
        <Link
          to="/projets/projet2"
          className="col-span-6 sm:col-span-2 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/projet1.jpg"
            alt="Projet 2"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold font-satoshi">Projet 2</h3>
            
          </div>
        </Link>

        {/* Projet 3 - carré ou large */}
        <Link
          to="/projets/projet3"
          className="col-span-6 sm:col-span-3 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/projet1.jpg"
            alt="Projet 3"
            className="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold font-satoshi">Projet 3</h3>
            
          </div>
        </Link>

        {/* Projet 4 - horizontal plein */}
        <Link
          to="/projets/projet4"
          className="col-span-6 row-span-2 rounded-xl overflow-hidden group relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src="/projets/projet1.jpg"
            alt="Projet 4"
            className="w-full h-[350px] object-cover group-hover:opacity-90 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold font-satoshi">Projet 4</h3>
            
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work;
