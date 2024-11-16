import Image from "next/image";
import teamContact from "../assets/teamContact.png";
import { motion } from "motion/react";

const contactList = {
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

const contactEntry = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  hidden: { opacity: 0, x: -50 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-tertiary-100 to-secondary-200 px-4 pt-10 text-primary-100 lg:px-32"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
          <div className="md:pb-20">
            <motion.h2
              className="outline-title outline-rise max-w-[600px] px-6 font-raleway text-5xl font-black uppercase tracking-wide md:mt-10 md:px-0 md:text-left md:text-7xl lg:text-8xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Get in touch with us
            </motion.h2>
            <motion.div
              className="mt-8 flex flex-col gap-4 text-nowrap px-6 md:mt-32 md:px-0 lg:mt-48 lg:flex-row lg:gap-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contactList}
            >
              <motion.div variants={contactEntry}>
                <p className="text-[19pt] font-bold uppercase md:text-[27pt]">
                  Phone
                </p>
                <p className="lg:text-[18pt]">+7 771 402 1265</p>
              </motion.div>
              <motion.div variants={contactEntry}>
                <p className="text-[19pt] font-bold uppercase md:text-[27pt]">
                  Email
                </p>
                <p className="lg:text-[18pt]">orazbay006@gmail.com</p>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative z-0 mx-auto mt-auto aspect-square size-[300px] md:absolute md:bottom-0 md:right-14 md:size-[400px] lg:relative lg:right-0 lg:mx-0 lg:size-[600px]">
            <Image
              src={teamContact}
              alt="Team image"
              layout="fill"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
