"use client";

import { FC, ReactNode, useState } from "react";
import Burger from "./Burger";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "@/hooks/useOutsideClick";

interface BurgerMenu {
  children: ReactNode;
}

const BurgerMenu: FC<BurgerMenu> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <>
      <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            className="absolute top-[67px] left-0 w-full flex flex-col items-center justify-center bg-gray-900"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
