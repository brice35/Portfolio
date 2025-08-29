// ✅ Imports d’images
import dwesta1 from "../assets/projets/dwesta1.webp";
import dwesta2 from "../assets/projets/dwesta2.webp";
import dwesta3 from "../assets/projets/dwesta3.png";
import dwesta4 from "../assets/projets/dwesta4.png";
import dwesta5 from "../assets/projets/dwesta5.png";

import d3d0 from "../assets/projets/3d0.png";
import d3d2 from "../assets/projets/3d2.png";
import d3d3 from "../assets/projets/3d3.png";
import d3d4 from "../assets/projets/3d4.png";
import d3d5 from "../assets/projets/3d5.png";
import d3d6 from "../assets/projets/3d6.png";

import logoRibec from "../assets/projets/logo_ribec.png";
import dessin1 from "../assets/projets/dessin1.jpg";
import dessin2 from "../assets/projets/dessin2.jpg";
import dessin3 from "../assets/projets/dessin3.jpg";
import dessin4 from "../assets/projets/dessin4.jpg";
import dessin5 from "../assets/projets/dessin5.jpg";
import dessin6 from "../assets/projets/dessin6.jpg";
import dessin7 from "../assets/projets/dessin7.jpg";

const projets = [
  {
    id: "projet1",
    title: "Dwesta",
    description:
      "Dwesta est une plateforme full-stack développée avec une architecture MVC robuste. Ce projet intègre une base de données relationnelle pour la gestion dynamique des données, ainsi qu’une API externe pour ajouter des fonctionnalités avancées. Ce travail démontre ma maîtrise complète du cycle de développement web, du back-end à l’interface utilisateur (dwesta.com).",
    images: [dwesta1, dwesta2, dwesta3, dwesta4, dwesta5],
  },
  {
    id: "projet2",
    title: "Modélisation 3D d’un intérieur",
    description:
      "Ce projet universitaire met en valeur ma créativité et mes compétences en modélisation 3D avec Blender. J’ai exploré des formes et volumes innovants pour concevoir un intérieur réaliste et esthétique, en travaillant sur l’éclairage et les textures pour renforcer l’ambiance visuelle. Ce travail illustre l’équilibre entre compétences techniques et expression artistique en design 3D.",
    images: [d3d0],
  },
  {
    id: "projet3",
    title: "Modélisation 3D d’une fiole",
    description:
      "Un projet universitaire centré sur la créativité en modélisation 3D, réalisé avec Blender. J’ai conçu une fiole détaillée en jouant sur les formes, les matériaux et les effets lumineux pour rendre l’objet aussi réaliste que possible. Ce projet reflète ma capacité à allier créativité et maîtrise technique dans un environnement 3D professionnel.",
    images: [d3d2, d3d3, d3d4, d3d5, d3d6],
  },

  {
    id: "projet4",
    title: "Mon passe-temps : le dessin",
    description:
      "Le dessin est ma passion. J'aime explorer différentes techniques et styles pour exprimer ma créativité et donner vie à mes idées sur papier ou en numérique.",
    images: [dessin1, dessin2, dessin3, dessin4, dessin5, dessin6, dessin7],
  },

  {
    id: "projet5",
    title: "Illustration vectorielle avec Adobe Illustrator",
    description:
      "Ce projet créatif illustre mon expertise dans l’utilisation d’Adobe Illustrator pour créer des images vectorielles précises et expressives. J’ai exploité les outils avancés du logiciel pour produire des compositions graphiques dynamiques, alliant créativité, précision et savoir-faire technique pour un rendu professionnel et esthétique.",
    images: [logoRibec],
  },
];

export default projets;
