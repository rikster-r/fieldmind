import { useState } from "react";

export default function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="ml-auto h-full aspect-square md:hidden flex justify-center items-center"
        onClick={() => setIsOpen((open) => !open)}
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
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setIsOpen((open) => !open)}
        >
          <nav className="absolute right-0 top-0 flex h-lvh w-[180px] min-w-[40%] flex-col gap-2 bg-secondary-200 px-6 py-4 text-lg font-bold md:hidden">
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
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
