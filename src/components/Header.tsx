export default function Header() {
  return (
    <header className="flex sticky top-0 h-[50px] w-full bg-secondary-100 px-4 py-4 text-white ">
        <div className="font-bold ml-auto mr-10 gap-8 hidden md:flex">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#testimonials" className="hover:text-gray-300">
            Testimonials
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <button className="ml-auto md:hidden">
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
    </header>
  );
}
