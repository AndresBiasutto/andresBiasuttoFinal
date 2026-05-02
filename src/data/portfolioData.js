import imgUrls from "./imgUrls";

const portfolioData = [
  {
    name: "Campus Virtual",
    img: imgUrls.portfolio.campusVirtual,
    type: "Proyecto personal",
    description: "Esta app permite crear y gestionar cursos de manera ágil. Profesores comparten texto, videos, archivos y crean examenes fácilmente usando IA, mientras alumnos interactúan en tiempo real. Con una interfaz intuitiva, simplifica la administración y el acceso a contenido educativo. Sesiones",
    technologies: [
      "Java Script",
      "React",
      "Redux",
      "Node",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind",
    ],
    links:["https://monosapiens.vercel.app/", "https://github.com/AndresBiasutto/studyApp"],
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
  }
];
export default portfolioData;
