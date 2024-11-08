import Hero from "../components/templates/Hero";
import About from "../components/templates/About";
import Contact from "../components/templates/Contact";
import Portfolio from "../components/templates/Portfolio";
import SideButtons from "../components/organisms/SideButtons";

const Main = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <SideButtons />
    </div>
  );
};

export default Main;
