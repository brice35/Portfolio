import { useState } from "react";

function Gallery() {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Titre :", title);
    console.log("Fichier :", file);
    // Ici tu pourras envoyer les données à ton backend ou les enregistrer dans une base
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Gallery</h1>
      <p className="text-xl mb-8">
        Browse through our collection of motion design projects.
      </p>

      {/* Bouton pour afficher/masquer le formulaire */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition mb-6"
      >
        {showForm ? "Annuler" : "Ajouter une création"}
      </button>

      {/* Formulaire d'upload */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-lg">
          <label className="block mb-2 font-medium text-gray-700">
            Titre de la création
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nom de ton œuvre"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2 font-medium text-gray-700">
            Fichier (vidéo ou motion design)
          </label>
          <input
            type="file"
            accept="video/*,.json,.gif"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Envoyer
          </button>
        </form>
      )}

      {/* Placeholder des créations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-500">
          Aucune création déposée pour l’instant...
        </div>
      </div>
    </div>
  );
}

export default Gallery;

