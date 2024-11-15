import BurgerNav from "./BurgerNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[50px] w-full justify-end bg-secondary-200 text-white md:px-4 md:py-4">
      <nav className="mr-10 hidden gap-8 font-bold md:flex">
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
      </nav>
      <BurgerNav />
    </header>
  );
}
