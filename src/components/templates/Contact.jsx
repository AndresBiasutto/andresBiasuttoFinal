import { motion, useScroll, useTransform } from "framer-motion";
import contactData from "../../data/contactData";
import { Link } from "react-router-dom";
import UseViewPortSize from "../../hooks/UseViewPortSize";
import imgUrls from "../../data/imgUrls";

const Contact = () => {
  const { front, city, cloud } = imgUrls.city;
  const { scrollYProgress } = useScroll();

  const backYsm = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const backYlg = useTransform(scrollYProgress, [1, 0], [0, 200]);
  const frontYsm = useTransform(scrollYProgress, [0, 1], [0, 100]); // Moves faster upwards
  const frontYlg = useTransform(scrollYProgress, [1, 0], [0, 500]); // Moves faster upwards
  const backTransform = UseViewPortSize(backYsm, backYlg);
  const frontTransform = UseViewPortSize(frontYsm, frontYlg);

  return (
    <div
      id="contact"
      className=" overflow-hidden h-screen lg:h-[150vh] w-full grid grid-cols-1 relative md:static md:grid-cols-2 bg-light-background dark:bg-dark-background transition"
    >
      <div className=" absolute md:static h-full w-full flex items-center justify-center p-6 overflow-hidden">
        <div className="z-0 relative h-full md:h-full  w-full bg-light-background dark:bg-dark-background transition overflow-hidden border-4 border-double border-light-accent dark:border-dark-accent">
          <img src={cloud} className="z-10 absolute left-0 -top-20 w-full " />
          <motion.img
            src={city}
            style={{ y: backTransform }}
            className="z-10 absolute left-0 bottom-0 md:-top-32 w-full "
          />

          <motion.img
            src={front}
            style={{ y: frontTransform }}
            className="z-20 absolute left-0 bottom-0 md:-top-40 w-full "
          />
        </div>
      </div>
      <div className="absolute md:static  w-full h-full flex flex-col justify-center items-center">
        <ul className=" p-4 h-min scale-75 w-full bg-light-background dark:bg-dark-background flex flex-col justify-center items-center">
          {contactData.map((contact, i) => (
            <li
              key={i}
              className="w-full flex flex-row justify-start items-center gap-2 group  "
            >
              <img
                src={contact.img}
                className="w-9 h-9 rounded-full group-hover:translate-x-5 transition"
              />
              <Link className="link" to={contact.link} target="_blank">
                {contact.link}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
