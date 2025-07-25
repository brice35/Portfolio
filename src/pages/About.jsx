import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen flex justify-center items-start px-6 py-12 font-inter bg-[#fff7ed]">
      <div className="w-full max-w-6xl mt-24">

        {/* Contenu aligné en deux colonnes */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
          
          {/* Texte à gauche */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1e1e1e] mb-6 font-satoshi">
              I’m a passionate interface design student.
            </h2>

            <div className="space-y-6 text-[#1e1e1e] text-lg text-justify mb-8">
              <p>
                I'm passionate about interface design, with several years of experience creating intuitive, modern, and efficient user interfaces. I’ve worked on various projects, from web applications to mobile platforms, always striving to combine aesthetics and functionality.
              </p>
              <p>
                Outside of design, I have a real passion for drawing and illustration. I also create videos on visual and narrative topics on my YouTube channel, blending storytelling, editing, and audiovisual production to express my artistic vision.
              </p>
              <p>
                Want to chat? Feel free to contact me or let’s grab a coffee.
              </p>
            </div>

            <div className="mb-8">
              <Link
                to="/contact"
                className="inline-block bg-[#dc2626] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Image à droite */}
          <div className="flex-1 max-w-md w-full shadow-md rounded-lg overflow-hidden h-110">
            <img
              src="/public/Profil.webp"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Clients */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-satoshi">
            Selected Clients
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
