import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="ml-auto flex aspect-square h-full items-center justify-center md:hidden"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Open navigation bar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={() => setIsOpen((open) => !open)}
          >
            <motion.nav
              className="absolute right-0 top-0 flex h-lvh w-[180px] min-w-[40%] flex-col gap-2 bg-secondary-200 px-6 py-4 text-lg font-bold md:hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
              <a href="#solution" className="hover:text-gray-300">
                Solution
              </a>
              <a href="#costs" className="hover:text-gray-300">
                Costs
              </a>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
