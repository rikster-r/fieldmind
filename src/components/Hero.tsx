import Image from "next/image";
import Drone from "../assets/drone.png";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-tertiary-100 to-secondary-200 px-4 py-10 text-primary-100 md:pb-20 lg:px-32"
      id="home"
    >
      <div className="mx-auto max-w-[1300px]">
        <p className="text-[8px] uppercase tracking-wider md:mt-10 md:text-[15pt] md:tracking-widest">
          drons | ground equipment | Ai
        </p>
        <h1 className="outline-title outline-rise mt-2 font-raleway text-3xl font-black uppercase tracking-wide md:text-8xl">
          FIELDMINDE
        </h1>
        <div className="relative z-0 ml-auto mt-10 h-[100px] w-[250px] md:h-[250px] md:w-[650px]">
          <Image
            src={Drone}
            alt="Drone image"
            layout="fill"
            className="h-full w-full"
          />
        </div>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:mt-20">
          <p className="max-w-[90%] text-2xl leading-tight md:max-w-[800px] md:text-[28pt]">
            We create a universal project and expand its potential for various
            applications, allowing the user to adapt the system according to
            specific needs.
          </p>
          <button className="w-max text-nowrap bg-primary-100 px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-secondary-200 hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:text-lg md:px-9 md:py-4">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
