import ThemeToggle from "../atoms/ThemeToggle";
import logo from "../../assets/icons/logo.png";
import smoothScroll from "../../utils/smoothScroll";
import { useTranslation } from "react-i18next";
import LangButton from "../atoms/LangButton";
import useMenuState from "../../hooks/useMenuState";

const NavBar = () => {
  const { t } = useTranslation();
  const { isOpen, toggleMenu } = useMenuState();

  const handleNavClick = (id) => {
    smoothScroll(id);
    toggleMenu();
  };

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
              isOpen ? "gap-0" : "gap-2"
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
              isOpen ? "top-20" : "-top-96"
            } transition-all flex flex-col w-full bg-light-secondary/80 dark:bg-dark-secondary/80 md:bg-transparent border-b-light-lightBackground dark:border-b-dark-darkBackground  md:static md:flex md:flex-row md:items-center md:justify-center gap-4`}
          >
            <button
              onClick={() => handleNavClick("inicio")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-litext-2ght-secondary md:bg-transparent dark:bg-dark-secondary rounded-md xl`}
            >
              {t("navBarBtns.home")}
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md`}
            >
              {t("navBarBtns.about")}
            </button>
            <button
              onClick={() => handleNavClick("portfolio")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md`}
            >
              {t("navBarBtns.portfolio")}
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`text-light-text dark:text-dark-text px-2  mx-2 bg-light-secondary md:bg-transparent dark:bg-dark-secondary rounded-md`}
            >
              {t("navBarBtns.contact")}
            </button>
          </nav>
          <div className="flex flex-row justify-center items-center gap-2 px-1">
            <ThemeToggle />
            <LangButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
