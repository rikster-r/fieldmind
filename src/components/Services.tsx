import marsRover from "../assets/marsRover.png";
import Image from "next/image";
import SparkleBlock from "./SparkleBlock";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-secondary-200 px-4 py-10 text-primary-100 md:pb-20 lg:px-32"
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="font-raleway text-5xl font-black uppercase tracking-wide md:mt-10 md:text-left md:text-7xl">
          What we do
        </h2>
        <div className="flex flex-col md:gap-16 lg:flex-row lg:justify-between">
          <div className="">
            <p className="mt-4 leading-normal md:mt-16 md:text-[23pt]">
              -creation of a universal platform that can be upgraded and adapted
              to solve various tasks
            </p>
            <div className="relative z-0 ml-auto mt-10 h-[200px] w-[200px] md:mr-16 md:h-[350px] md:w-[300px]">
              <Image
                src={marsRover}
                alt="Drone image"
                layout="fill"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <SparkleBlock text="monitoring the environmental condition of territories" />
            <SparkleBlock text="infrastructure control" />
            <SparkleBlock text="rescue operations" />
          </div>
        </div>
      </div>
    </section>
  );
}
