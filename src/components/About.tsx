import Image from "next/image";
import Team from "../assets/team.png";
import { motion } from "motion/react";

const teamList = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const teamMember = {
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  hidden: { opacity: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-secondary-200 px-4 py-10 text-primary-100 md:pb-20 lg:px-32"
    >
      <div className="mx-auto max-w-[1300px]">
        <motion.h2
          className="outline-title outline-rise font-raleway text-5xl font-black uppercase tracking-wide md:mt-10 md:text-left md:text-8xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Team
        </motion.h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <motion.div
            className="mx-1 mt-4 flex min-h-full flex-col gap-3 md:mt-6 md:gap-8 md:text-[19pt] md:leading-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={teamList}
          >
            <motion.div variants={teamMember}>
              <p>Orazbay Nurkhan</p>
              <p>- developer, programmer</p>
            </motion.div>
            <motion.div variants={teamMember}>
              <p>Bukhanova Elmira</p>
              <p>- UI/UX designer</p>
            </motion.div>
            <motion.div variants={teamMember}>
              <p>Akanov Farhad</p>
              <p>- manager and analyst</p>
            </motion.div>
            <motion.div variants={teamMember} className="mt-6 md:mt-auto">
              <p>Zarina Almabekovna </p>
              <p>- Head, PhD in Drones</p>
            </motion.div>
          </motion.div>
          <div className="flex flex-col md:w-1/2">
            <div className="relative z-0 ml-auto mt-4 aspect-square w-full max-w-[500px] md:mt-0">
              <div className="absolute left-0 top-0 z-10 aspect-square w-[85%]">
                <Image
                  src={Team}
                  alt="Team image"
                  layout="fill"
                  className="h-full w-full"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 z-0 aspect-square w-1/2"
                id="x-fill"
              ></div>
            </div>
            <button className="ml-auto mt-4 w-max text-nowrap border-[3px] border-primary-100 px-4 py-2 text-center text-sm font-extrabold uppercase tracking-wide text-primary-100 hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:text-lg md:mt-12 md:border-4 md:px-5 md:py-3">
              View portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
