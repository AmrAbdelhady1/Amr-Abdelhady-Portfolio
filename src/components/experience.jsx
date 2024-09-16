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
            position="Frontend Developer"
            company="Auto Beam"
            time="2024-Present"
            address="Remote"
            work="Enhance their up and running Apps, add new features and design new pages.
Work with designers for UI/UX.
Coordinate with backend devs for seamless integration.
Improve code performance and compatibility.
Review code, mentor juniors, and ensure best practices.
"
          />
          <Details
            position="Frontend Developer"
            company="SamValley"
            time="2024-Present"
            address="Remote"
            work="Develop user-facing features using React.js and Next.js, Work closely with the design team to implement elegant user interfaces, Utilize RESTful and GraphQL APIs for seamless data integration, Collaborate with backend developers to improve usability and performance of applications, Ensure the technical feasibility of UI/UX designs, Optimize applications for maximum speed and scalability
"
          />
          <Details
            position="Frontend Developer"
            company="CryptDev"
            companyLink="https://cryptdev.com/"
            time="2023-2024"
            address="Remote"
            work="working on a big e-commerce platform in Kuwait, making two dashboard super for our client and admin
                        dashboard for his customers and the admin makes his own store and starts selling with dynamic themes for
                        every admin."
          />
          <Details
            position="Frontend Developer Intern"
            company="Vekelz"
            companyLink="https://www.vekelz.com/"
            time="2022-2023"
            address="Remote"
            work="Worked on a team responsible for developing a new mobile app and new website for Vekelz using ReactJS and NextJS,
                        learned how to use ReactNative and worked on there new apps."
          />
          <Details
            position="Java And Web Developer"
            company="Military Service"
            time="2022-2022"
            address="On Site"
            work="Developed Java desktop App using JSwing for UI interfaces for user experience, Developed a form using native JavaScript Html and CSS and Integrate it with a PHP backend server."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
