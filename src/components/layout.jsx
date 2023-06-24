import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Footer from './footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});


const Layout = ({ children }) => {
  const Home = {
    title: "Amr Abdelhady",
    description: "Welcome to my portfolio website! I am a full-stack developer specializing in React.js, Next.js, PHP (Laravel), Tailwind CSS, and TypeScript. Explore my projects, skills, and experience to see how I can help you build robust and scalable web applications. Contact me to discuss your project requirements and collaborate on innovative solutions.",
    keywords: "Full-Stack Developer, Portfolio, React.js, Next.js, PHP, Laravel, Tailwind CSS, TypeScript, Web Developer, Front-end Developer, Back-end Developer, UI/UX Design, Web Applications, Responsive Websites, Scalable Solutions, Innovative Solutions, Collaboration, Project Development, JavaScript, HTML, CSS, API Integration, Database Management, Git, Version Control, Agile Development, Test-Driven Development, Continuous Integration, Deployment Automation, Performance Optimization, Cross-Browser Compatibility, Responsive Design, Mobile-Friendly, SEO, Accessibility, CMS, Content Management System, E-commerce Development, Payment Gateways, Security Best Practices, Code Review, Technical Documentation, Client Communication, Problem Solving, Debugging, Software Architecture, Software Development Life Cycle, Agile Methodologies, Team Collaboration, Remote Work, Cloud Computing, AWS, Azure, Google Cloud, Serverless Architecture, Microservices, RESTful APIs, GraphQL, Docker, Kubernetes, DevOps, CI/CD, Scalability, Performance Tuning, Unit Testing, Integration Testing, UI Testing, User Experience, Wireframing, Prototyping, Project Management, Time Management, Freelance Developer, Consulting, Freelancing",
    url: "https://amr-abdelhady-portfolio.vercel.app/",
  };
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light ${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>{Home.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={Home.description} />
        <meta name="keywords" content={Home.keywords} />

        <link rel="icon" sizes="192x192" href="/ic_logo1.svg"></link>
        <link rel="shortcut icon" href="/ic_logo1.svg" />
        <link rel="canonical" href={Home.url} />
        <link rel="apple-touch-icon" href="/ic_logo1.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={Home.title} />
        <meta property="og:description" content={Home.description} />
        <meta property="og:url" content={Home.url} />
        <meta property="og:site_name" content={Home.title} />

        <meta property="article:tag" content="Ecom Store" />
        <meta property="article:section" content="Online Store Application" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={Home.title} />
        <meta name="twitter:description" content={Home.description} />
        <meta name="twitter:url" content={Home.url} />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='px-32'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout