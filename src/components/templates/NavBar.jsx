import ThemeToggle from "../atoms/ThemeToggle";
import logo from "../../assets/icons/logo.png";
import { useState } from "react";
import smoothScroll from "../../libs/smoothScroll";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const buttonBehavior= (id)=>{
    smoothScroll(id)
    toggleMenu()
  }
  return (
    <div className=" z-40 fixed top-0 left-0 w-full h-20 md:h-10 lg:h-10 bg-light-secondary/80 dark:bg-dark-secondary/80 border-b border-b-light-lightBackground dark:border-b-dark-darkBackground">
      <div className=" z-20 absolute top-0 left-0 px-1 flex flex-row h-full w-full justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <button onClick={() => smoothScroll("inicio")}>
            <img src={logo} className=" h-9 w-14 hover:-rotate-12 transition" />
          </button>
        </div>
        <button
          className=" flex items-center justify-center md:hidden lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`w-10 h-10 flex flex-col justify-center items-center ${
              showMenu ? "gap-0" : "gap-2"
            } transition-all border-2 border-double border-light-accent dark:border-dark-accent bg-light-lightBackground hover:bg-light-background dark:bg-dark-darkBackground dark:hover:bg-dark-darkBackground`}
          >
            <div className="h-1 w-5/6 border-2 border-double border-light-accent dark:border-dark-accent bg-light-lightBackground hover:bg-light-background dark:bg-dark-darkBackground dark:hover:bg-dark-darkBackground"></div>
            <div className="h-1 w-5/6 border-2 border-double border-light-accent dark:border-dark-accent bg-light-lightBackground hover:bg-light-background dark:bg-dark-darkBackground dark:hover:bg-dark-darkBackground"></div>
            <div className="h-1 w-5/6 border-2 border-double border-light-accent dark:border-dark-accent bg-light-lightBackground hover:bg-light-background dark:bg-dark-darkBackground dark:hover:bg-dark-darkBackground"></div>
          </div>
        </button>
        <div className="flex flex-row items-center justify-center gap-2">
          <nav
            className={` absolute right-0 ${
              showMenu ? "top-20" : "-top-96"
            } transition-all flex flex-col w-full bg-light-secondary/80 dark:bg-dark-secondary/80 md:bg-transparent border-b-light-lightBackground dark:border-b-dark-darkBackground  md:static md:flex md:flex-row md:items-center md:justify-center gap-4`}
          >
            <button
              onClick={() => buttonBehavior("inicio")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md text-2xl`}
            >
              Inicio
            </button>
            <button
              onClick={() => buttonBehavior("about")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md text-2xl`}
            >
              sobre mi
            </button>
            <button
              onClick={() => buttonBehavior("portfolio")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md text-2xl`}
            >
              porfolio
            </button>
            <button
              onClick={() => buttonBehavior("contact")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md text-2xl`}
            >
              Contacto
            </button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
