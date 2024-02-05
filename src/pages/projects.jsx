import React from "react";
import Head from "next/head";
import Animatedtext from "@/components/animatedtext";
import Link from "next/link";
import Image from "next/image";
import ecom from "../../public/images/projects/ecom.png";
import portfolio from "../../public/images/projects/portfolio.png";
import booking from "../../public/images/projects/booking.png";
import meals from "../../public/images/projects/meals.png";
import atyab from "../../public/images/projects/atyab.png";
import portfolioLight from "../../public/images/projects/portfolioLight.png";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/transitioneffect";
import { useStateContext } from "@/context/statecontext";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github, mode }) => {
  return (
    <article
      className={`w-full flex flex-col justify-between rounded-3xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl lg:p-12
     relative ${mode === "dark" ? "shadow-box-light" : "shadow-box"}
     lg:flex-row p-6
     `}
    >
      {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' /> */}

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark text-xl font-medium">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 hidden lg:inline-block font-medium text-dark dark:text-light">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-medium"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, mode }) => {
  return (
    <article
      className={`w-full flex flex-col gap-4 items-center justify-center rounded-2xl border border-dark dark:border-light bg-light dark:bg-dark
     shadow-2xl p-6 relative ${
       mode === "dark" ? "shadow-box-light" : "shadow-box"
     }
     `}
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary dark:text-primaryDark text-xl font-medium">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-medium underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { mode } = useStateContext();

  return (
    <>
      <Head>
        <title>Amr Abdelhady | Projects Page</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-40 flex flex-col items-center justify-center pt-20">
        <Animatedtext
          text="Imagination Trumps Knowledge!"
          className="!text-3xl md:!text-4xl lg:!text-8xl"
        />
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-24 gap-y-32 mt-20">
          <div className="lg:col-span-12 hidden lg:inline-block">
            <FeatureProject
              type="E-commerce Platform"
              title="Ecom Store"
              summary="working on a big e-commerce platform in Kuwait, making two dashboard super for our client and admin
              dashboard for his customers and the admin makes his own store and starts selling with dynamic themes for
              every admin."
              img={ecom}
              link="https://ecom.io/"
              github="https://ecom.io/"
              mode={mode}
            />
          </div>
          <div className="lg:col-span-12 lg:hidden">
            <Project
              type="E-commerce Platform"
              title="Ecom Store"
              img={ecom}
              link="https://ecom.io/"
              github="https://ecom.io/"
              mode={mode}
            />
          </div>
          <div className="lg:col-span-6">
            <Project
              type="Portfolio Website"
              title="NextJS Portfolio Website"
              img={mode === "dark" ? portfolioLight : portfolio}
              link="https://amr-abdelhady-portfolio.vercel.app/"
              github="https://github.com/AmrAbdelhady1/Amr-Abdelhady-Portfolio"
              mode={mode}
            />
          </div>
          <div className="lg:col-span-6">
            <Project
              type="Booking Website"
              title="VueJs Booking Website"
              img={booking}
              link="https://algoriza-internship-fe-05.vercel.app/"
              github="https://github.com/AmrAbdelhady1/algoriza-internship-FE05"
              mode={mode}
            />
          </div>
          <div className="lg:col-span-6">
            <Project
              type="Search Meals Website"
              title="VueJs Search Meals Website"
              img={meals}
              link="https://vue-js-search-meals.vercel.app/"
              github="https://github.com/AmrAbdelhady1/vueJs-search-meals"
              mode={mode}
            />
          </div>
          <div className="lg:col-span-6">
            <Project
              type="Atyab Al Marshoud Website"
              title="NextJS Website"
              img={atyab}
              link="https://atyab-elmarshoud.vercel.app/en"
              github="https://github.com/AmrAbdelhady1/atyab-elmarshoud"
              mode={mode}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
