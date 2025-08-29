import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="min-h-screen flex justify-center items-start px-6 py-12 font-inter">
      <div className="w-full max-w-6xl">

        {/* Titre principal */}
        <h1 className="text-3xl font-bold text-center mb-16 mt-24 text-[#1e1e1e] font-satoshi">
          Mes Services
        </h1>

        {/* Grille des services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* UX Design */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              UX
            </div>
            <h2 className="text-xl font-semibold mb-2">Conception UX</h2>
            <p className="text-gray-700 text-base text-justify">
              Création de parcours utilisateurs intuitifs et adaptés à chaque besoin,
              pour une expérience fluide et agréable.
            </p>
          </div>

          {/* Interface visuelle */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              UI
            </div>
            <h2 className="text-xl font-semibold mb-2">Interface Visuelle</h2>
            <p className="text-gray-700 text-base text-justify">
              Conception d’interfaces esthétiques, modernes et cohérentes,
              alignées sur l’identité visuelle de votre projet.
            </p>
          </div>

          {/* Développement Web */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              💻
            </div>
            <h2 className="text-xl font-semibold mb-2">Développement Web</h2>
            <p className="text-gray-700 text-base text-justify">
              Intégration des maquettes et création de sites dynamiques avec React,
              Firebase et d’autres technologies modernes.
            </p>
          </div>

          {/* Motion & 3D */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition md:col-span-3">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              🎥
            </div>
            <h2 className="text-xl font-semibold mb-2">Motion & 3D</h2>
            <p className="text-gray-700 text-base text-justify">
              Animation avec After Effects et modélisation 3D, pour donner vie à vos idées 
              et créer des expériences visuelles immersives et dynamiques.
            </p>
          </div>
        </div>

        {/* Section Mes Outils */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-16">
          <h2 className="text-2xl font-bold text-[#1e1e1e] mb-6 text-center font-satoshi">
            Mes Outils
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-base font-medium">
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Blender</li>
            <li>After Effect</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Adobe Premiere Pro</li>
          </ul>
        </div>

        {/* Boutons de navigation */}
        <div className="text-center space-x-4 mb-24">
          <Link
            to="/about"
            className="inline-block bg-[#dc2626] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            À propos de moi
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-[#1e1e1e] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Contact
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Services;
