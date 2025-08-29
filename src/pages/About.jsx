import { Link } from "react-router-dom";
// Import de l'image Profil.webp depuis le dossier assets
import Profil from "../assets/Profil.webp";

function About() {
  return (
    <div className="min-h-screen flex justify-center items-start px-6 py-12 font-inter bg-[#fff7ed]">
      <div className="w-full max-w-6xl mt-24">

        {/* Contenu aligné en deux colonnes */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">

          {/* Texte à gauche */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1e1e1e] mb-6 font-satoshi">
              Je suis un étudiant passionné par le design d’interface.
            </h2>

            <div className="space-y-6 text-[#1e1e1e] text-lg text-justify mb-8">
              <p>
                Je suis passionné par le design d’interface, avec plusieurs années d’expérience dans la création d’interfaces utilisateur intuitives, modernes et efficaces. 
                J’ai travaillé sur différents projets, allant d’applications web à des plateformes mobiles, en cherchant toujours à allier esthétique et fonctionnalité.
              </p>
              <p>
                En dehors du design, j’ai une véritable passion pour le dessin et l’illustration. 
                Je crée également des vidéos autour de sujets visuels et narratifs sur ma chaîne YouTube, mêlant narration, montage et production audiovisuelle pour exprimer ma vision artistique.
              </p>
              <p>
                Envie d’échanger ? N’hésitez pas à me contacter ou à partager un café !
              </p>
            </div>

            <div className="mb-8">
              <Link
                to="/contact"
                className="inline-block bg-[#dc2626] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
              >
                Me contacter
              </Link>
            </div>
          </div>

          {/* Image à droite */}
          <div className="flex-1 max-w-md w-full shadow-md rounded-lg overflow-hidden h-110">
            <img
              src={Profil}
              alt="Photo de profil"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Clients */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-satoshi">
            Clients sélectionnés
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
            <li>DWESTA SAS</li>
            <li>Université Lumière Lyon 2</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;
