import Image from "next/image";
import droneTilted from "../assets/droneTilted.png";
import { motion } from "motion/react";

export default function Costs() {
  return (
    <section
      id="costs"
      className="bg-secondary-200 px-4 py-10 text-primary-100 md:pb-20 lg:px-32"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="relative aspect-square size-[330px] max-w-full md:size-[390px] lg:size-[550px]">
            <motion.h2
              className="absolute top-0 z-40 font-raleway text-5xl font-black uppercase tracking-wide md:text-left md:text-7xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Costs
            </motion.h2>
            <div className="absolute bottom-0 right-0 z-0 size-[93%]">
              <Image
                src={droneTilted}
                alt="Team image"
                layout="fill"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-8">
            <motion.p
              className="outline-rise outline-title max-w-[53%] font-raleway text-4xl font-black uppercase tracking-wide sm:max-w-none md:text-left md:text-6xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              4 million tenge
            </motion.p>
            <motion.p
              className="mt-2 max-w-[550px] font-bold uppercase md:text-[16pt] lg:text-[18pt]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
            >
              with a further cost of 7,5 to 12 million tenge. The implementation
              of our system will cost from $1,200 to $5,000, depending on the
              scale of the economy. The annual maintenance will be about 1,199
              dollars
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
