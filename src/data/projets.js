// ✅ Imports d’images (à adapter selon l'emplacement de ton fichier "projets.js")
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

const projets = [
  {
    id: "projet1",
    title: "Dwesta",
    description:
      "Dwesta is a full-stack platform developed with a robust MVC architecture. This project integrates a relational database for dynamic data management, as well as an external API to add advanced features. This work demonstrates my comprehensive mastery of the web development cycle, from back-end to user interface (dwesta.com).",
    images: [dwesta1, dwesta2, dwesta3, dwesta4, dwesta5],
  },
  {
    id: "projet2",
    title: "3D Interior Modeling",
    description:
      "This university project highlights my creativity and skills in 3D modeling using Blender. I explored innovative shapes and volumes to design a realistic and aesthetic interior, working on lighting and textures to enhance the visual atmosphere. This work illustrates the balance between technical skills and artistic expression in 3D design.",
    images: [d3d0],
  },
  {
    id: "projet3",
    title: "3D Flask Modeling",
    description:
      "A university project focused on creativity in 3D modeling, realized with Blender. I designed a detailed flask by playing with shapes, materials, and lighting effects to make the object as realistic as possible. This project reflects my ability to combine creativity and technical mastery in a professional 3D environment.",
    images: [d3d2, d3d3, d3d4, d3d5, d3d6],
  },
  {
    id: "projet4",
    title: "Adobe Illustrator Vector Image",
    description:
      "This creative project showcases my expertise in using Adobe Illustrator to create precise and expressive vector images. I utilized the software’s advanced tools to produce dynamic graphic compositions, combining creativity, precision, and technical skills for a professional and aesthetic result.",
    images: [logoRibec],
  },
];

export default projets;
