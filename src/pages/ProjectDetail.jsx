import { useParams } from "react-router-dom";
import projets from "../data/projets";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projets.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center mt-24">
        <h2 className="text-2xl font-bold">Projet introuvable</h2>
        <p className="text-gray-600">Ce projet n'existe pas ou a été supprimé.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-[#1e1e1e] mb-4 font-satoshi">
        {project.title}
      </h1>
      <p className="text-lg text-gray-700 mb-10">{project.description}</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} - image ${index + 1}`}
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
