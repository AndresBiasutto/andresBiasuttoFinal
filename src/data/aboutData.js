import imgUrls from "./imgUrls";

const {javaScript, ts, html, css, react, redux, express, tailwind, sql, mongoDb, Mongoose, nodeJs,  sequelize} = imgUrls.icons

export const languages = [
    { src: javaScript, label: "JavaScript" },
    { src: ts, label: "TypeScript" },
    { src: html, label: "HTML5" },
    { src: css, label: "CSS3" },
  ];

  export const frameworks = [
    { src: react, label: "React" },
    { src: redux, label: "Redux" },
    { src: express, label: "Express" },
    { src: tailwind, label: "Tailwind" },
    { src: nodeJs, label: "Tailwind" },
  ];

  export const databases = [
    { src: sql, label: "SQL" },
    { src: mongoDb, label: "MongoDB" },
  ];
  export const orm = [
    { src: sequelize, label: "Sequelize" },
    { src: Mongoose, label: "Mongoose" },
  ];

