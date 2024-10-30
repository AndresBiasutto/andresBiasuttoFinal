import imgUrls from "./imgUrls";

const portfolioData = [
  {
    name: "Social Media Lab app",
    img: imgUrls.portfolio.sml,
    type: "Contrato de prácticas",
    description: "app cuyo objetivo es clasificar y completar la información de los clientes. Mi trabajo fue crear crear el sistema de autenticación, asignación de roles de usuario y protección de rutas, tanto en el back-end como en el front-end",
    technologies: [
      "Java Script",
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Cloudinary",
      "Tailwind",
    ],
    links:["https://demo.com", "https://github.com/Smlappadm/sml-app"],
    state: "Finish"
  },
  {
    name: "Campus Virtual",
    img: imgUrls.portfolio.campusVirtual,
    type: "Proyecto personal",
    description: "Esta app l permite crear y gestionar cursos de manera ágil. Profesores comparten videos y archivos fácilmente, mientras alumnos interactúan en tiempo real. Con una interfaz intuitiva, simplifica la administración y el acceso a contenido educativo.",
    technologies: [
      "Java Script",
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Cloudinary",
      "Tailwind",
    ],
    links:["https://demo.com", "https://github.com/AndresBiasutto/freeCampus"],
    state: "In progress"
  },
  {
    name: "lds",
    img: imgUrls.portfolio.lds,
    type: "Proyecto personal",
    description: "El objetivo de esta pequeña app es consultar y comparar precios de los productos de tres cadenas de supermercados. Muy popular entre mis amigos",
    technologies: [
      "Java Script",
      "CSS",
      "React",
      "Redux",
      "Node",
      "Express",
      "puppeteer"
    ],
    links:["https://demo.com", "https://github.com/AndresBiasutto/comparador-precios"],
    state: "In progress"
  },
  {
    name: "Shami ",
    img: imgUrls.portfolio.shamiUOS,
    type: "Proyecto personal",
    description: "El objetivo de esta pequeña app es consultar y comparar precios de los productos de tres cadenas de supermercados. Muy popular entre mis amigos",
    technologies: [
      "Java Script",
      "CSS",
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    links:["https://demo.com", "https://github.com/AndresBiasutto/comparador-precios"],
    state: "In progress"
  },
];
export default portfolioData;
