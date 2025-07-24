import { useState } from "react";

function Gallery() {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Titre :", title);
    console.log("Fichier :", file);
  };

  return (
    <div className="p-8 font-satoshi">
      <h1 className="text-4xl font-bold mb-4 ">Ribec</h1>
      <p className="text-xl mb-8">
        Hello! Welcome to my portfolio, where you can find all my work and services. I'm Brice MAMANG..
      </p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 transition delay-700 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mb-6 px-4 py-2 rounded-md"
      >
        {showForm ? "Annuler" : "Ajouter une création"}
      </button>

      {/* Conteneur flex pour formulaire + placeholder */}
      {showForm && (
        <div className="mt-8 flex flex-col lg:flex-row gap-6">
          {/* Formulaire d'upload */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg "
          >
            <label className="block mb-2 font-medium">Titre de la création</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nom de ton œuvre"
              className="w-full p-2 mb-4 bg-black/10 text-black placeholder-white/100 rounded-md focus:outline-none"
            />

            <label className="block mb-2 font-medium">Fichier (vidéo ou motion design)</label>
            <input
              type="file"
              accept="video/*,.json,.gif"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full p-2 mb-4 bg-black/10 text-white rounded-md"
            />

            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
            >
              Envoyer
            </button>
          </form>

          {/* Placeholder des créations */}
          <div className="flex-1 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-inner ">
            <h2 className="text-2xl font-semibold mb-4">Vos créations</h2>
            <div className="bg-white/10 h-48 rounded-lg flex items-center justify-center text-black/100">
              Aucune création déposée pour l’instant...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
