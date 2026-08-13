import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[100%] pl-16 md:w-[60%] md:pl-0 mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-base md:text-xl lg:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary dark:text-primaryDark capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[100%] md:w-[85%] lg:w-[75%] mx-auto relative"
      >
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-3 md:ml-16">
          <Details
            position="Senior Frontend Developer"
            company="Gradion | MENA"
            companyLink="https://www.nfq.com/"
            time="2025-Present"
            address="Cairo, Egypt"
            work="Architected key modules for Laioutr, a modular e-commerce platform, using React, Next.js, Vue, and Nuxt. Built a headless Drupal + Next.js stack for Maalpedia, and shipped 100/100 Lighthouse scores through SSR and code-splitting. Standardized UI with Tailwind, ShadCN, and TypeScript while mentoring junior engineers."
          />
          <Details
            position="Frontend Developer"
            company="CryptDev"
            companyLink="https://cryptdev.com/"
            time="2022-2025"
            address="Remote"
            work="Built dual admin dashboards and a multi-tenant merchant ecosystem for Ecom Payments across Kuwait. Shipped food-ordering and storefronts (Atyab Al Marshoud), plus AI dashboards for Eloquent in Qatar and enterprise sites like Vallix in KSA. Managed complex state with Redux Toolkit, Zustand, and React Query, using React Hook Form and Zod for validation."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
