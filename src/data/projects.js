import encriptadorImg from '../assets/projects/encriptador_texto.png';
import turquesa from "../assets/projects/turquesa_travel.webp";
import jhoelImg from "../assets/projects/soyjhoelfernandez.webp";
import psicoImg from "../assets/projects/psicocontigo.webp";

const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "Turquesa Travel",
    description: "Sitio web corporativo para una agencia de viajes, enfocado en mostrar paquetes turísticos y mejorar la presencia digital del negocio. Incluye diseño responsive, personalización con WordPress y optimización SEO básica para mejorar visibilidad y experiencia del usuario.",
    image: turquesa,
    buttonIcon: "/sprite.svg#right",
    buttonText: "Visitar",
    codeUrl: "https://turquesa-travel.com/",
    technologies: ["WordPress", "Elementor", "CSS", "JavaScript", "SEO"],
  },
  {
    id: 2,
    category: "Frontend",
    title: "Text Encryptor",
    description: "Aplicación web desarrollada como parte del Challenge ONE de Alura Latam, enfocada en la lógica de programación con JavaScript. Permite cifrar y descifrar texto mediante reglas definidas, reforzando conceptos de manipulación de strings, eventos y estructura básica de aplicaciones frontend.",
    image: encriptadorImg,
    buttonIcon: "/sprite.svg#github",
    buttonText: "Codigo",
    codeUrl: "https://github.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    category: "Frontend",
    title: "Soy Jhoel Fernández",
    description: "Sitio web de marca personal desarrollado en colaboración con una agencia digital. Participé en la maquetación del diseño desde Figma a WordPress, implementación con Elementor, ajustes UX/UI responsive y creación de artículos de blog optimizados para SEO on-page.",
    image: jhoelImg,
    buttonIcon: "/sprite.svg#right",
    buttonText: "Visitar",
    codeUrl: "https://soyjhoelfernandez.com/",
    technologies: ["WordPress", "Elementor", "CSS", "SEO"],
  },
  {
    id: 4,
    category: "Frontend",
    title: "PsicoContigo Perú",
    description: "Sitio web institucional para servicios psicológicos, desarrollado en colaboración con una agencia digital. Participé en la maquetación del diseño proporcionado a web utilizando Elementor, adaptación responsive y soporte en la estructura de contenidos y blog.",
    image: psicoImg,
    buttonIcon: "/sprite.svg#right",
    buttonText: "Visitar",
    codeUrl: "https://psicocontigoperu.com/",
    technologies: ["WordPress", "Elementor", "SEO"],
  }
];

export default projects;