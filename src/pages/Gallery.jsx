import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Gallery() {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate("/login", { state: { from: "/gallery" } });
    } else {
      setShowForm(!showForm);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);

    try {
      // 1. Upload fichier
      const storageRef = ref(storage, `creations/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);

      // 2. Enregistrer metadata dans Firestore
      await addDoc(collection(db, "creations"), {
        title,
        fileURL,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      alert("Création envoyée avec succès !");
      setFile(null);
      setTitle("");
      setShowForm(false);
    } catch (err) {
      console.error("Erreur upload :", err);
      alert("Erreur pendant l'envoi.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Galerie</h1>
      <p className="text-xl mb-8">Partage tes créations de motion design !</p>

      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-indigo-500 px-4 py-2 rounded-md transition"
      >
        {showForm ? "Annuler" : "Ajouter une création"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded shadow">
          <label className="block mb-2">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label className="block mb-2">Fichier</label>
          <input
            type="file"
            accept="video/*,.gif,.json"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button
            type="submit"
            disabled={uploading}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            {uploading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Gallery;
