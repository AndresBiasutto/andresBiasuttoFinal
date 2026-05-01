import { useState } from "react";

export const useMenuState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };
};

export default useMenuState;