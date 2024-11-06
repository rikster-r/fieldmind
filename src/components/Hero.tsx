import Image from "next/image";
import Drone from "../assets/drone.png";

export default function Hero() {
  return (
    <section
      className="from-tertiary-100 min-h-[600px] bg-gradient-to-br to-secondary-200 px-4 py-10 text-primary-100 lg:px-32"
      id="home"
    >
      <p className="text-[8px] uppercase tracking-wider md:mt-10 md:text-xl md:tracking-widest">
        drons | ground equipment | Ai
      </p>
      <h1
        className="mt-2 text-3xl font-black uppercase tracking-wide md:text-8xl"
        id="hero-title"
      >
        FIELDMINDE
      </h1>
      <div className="relative ml-auto mt-10 h-[100px] w-[250px] md:h-[250px] md:w-[650px]">
        <Image
          src={Drone}
          alt="Drone image"
          layout="fill"
          className="h-full w-full"
        />
      </div>
      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:mt-20">
        <p className="max-w-none text-3xl md:max-w-[65%] md:text-5xl">
          We create a universal project and expand its potential for various
          applications, allowing the user to adapt the system according to
          specific needs.
        </p>
        <button className="h-[50px] w-max bg-primary-100 px-8 py-1 text-center text-base font-bold uppercase tracking-wide text-secondary-200 hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:text-xl md:h-[60px] md:w-[210px]">
          Get in touch
        </button>
      </div>
    </section>
  );
}
