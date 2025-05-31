import React, { useEffect, useState } from "react";
import './About.css';
import Marquee from "react-fast-marquee";
import { GraduationCap, MapPin } from "lucide-react";

import javaLogo from '../../public/icons/java.png';
import webLogo from '../../public/icons/web.png';
import pythonLogo from '../../public/icons/python.png';
import sqlLogo from '../../public/icons/sql.png';
import html from "../../public/icons/html.png";
import css from "../../public/icons/css.png";
import java from "../../public/icons/java.png";
import javaScript from "../../public/icons/javaScript.png";
import react from "../../public/icons/react.png";
import bootstrap from "../../public/icons/Bootstrap.png";
import tailwind from "../../public/icons/tailwindcss.png";
import wordpress from "../../public/icons/wordpress.png";
import vscode from "../../public/icons/vscode.png";

const About = ({ islightmode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll animation visibility using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const card = document.querySelector("#college-card");
    if (card) observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  const techStack = [
    { src: html, alt: "html" },
    { src: css, alt: "css" },
    { src: javaScript, alt: "javaScript" },
    { src: java, alt: "java" },
    { src: pythonLogo, alt: "python" },
    { src: react, alt: "react" },
    // { src: "/public/icons/node.png", alt: "Node.js" },
    // { src: "/public/icons/express.png", alt: "Express" },
    { src: bootstrap, alt: "bootstrap" },
    { src: tailwind, alt: "tailwind_css" },
    { src: vscode, alt: "vscode" },
    { src: sqlLogo, alt: "sql" },
    { src: wordpress, alt: "wordpress" },
  ];

  return (
    <div
      id="about"
      className={`transition-colors ease-linear duration-700 min-h-screen py-10 px-6 md:px-20 ${islightmode ? "text-black bg-gray-200" : "text-white bg-black"
        }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 animate-gradient-x">
          About Me
        </h2>

        {/* About Text + College Card */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <div className=" lg:w-2/3 space-y-6  text-base sm:text-md md:text-lg leading-relaxed tracking-wide text-justify transition-colors ease-linear duration-700 text-gray-600 dark:text-gray-500">
            <p>
              Hi, I'm <strong>Sayan Haldar</strong>, a passionate Software
              Developer dedicated to building efficient and scalable web
              applications. I have expertise in front-end, focusing on delivering smooth and intuitive user
              experiences.
              <br />
              My skill set includes <strong>React.js</strong>,{" "}
              <strong>JavaScript</strong>, {" "}
              <strong>WordPress</strong> and other
              modern technologies. I’m passionate about building scalable solutions and continuously learning emerging technologies to optimize performance and maintainability.
              <br />
              Besides, I enjoy collaborating with fellow
              developers, mentoring aspiring programmers, and actively
              contributing to fun activities.
            </p>
          </div>

          {/* College Card */}
          <div className="lg:w-1/3 flex justify-center self-start  mx-auto">
            <div
              id="college-card"
              className={`border rounded-2xl shadow-xl p-6 w-full max-w-sm
    transition-colors ease-linear duration-700 
    ${islightmode
                  ? "bg-gray-100 border-gray-300 text-gray-600"
                  : "bg-neutral-900 border-neutral-700 text-gray-300"
                }
    ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
            >
              <div className="flex  items-center gap-3 mb-4">
                <GraduationCap size={28} className="text-blue-500" />
                <h3 className="text-2xl font-semibold">My College</h3>
              </div>
              <p className="mb-2">
                <strong>College of Engineering & Management, Kolaghat</strong>
              </p>
              <p className="text-sm mb-2">
                Bachelor of Technology (B.Tech) in Information Technology
                <br />
                <span className="text-gray-500 dark:text-gray-400">
                  2020 – 2024
                </span>
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                Purba Medinipur, Kolaghat
              </div>
            </div>
          </div>
        </div>

        {/* what I can do */}

        {/* Web/Desktop View: Normal List */}
        <section className="service hidden md:flex">
          <h3 className="h3 service-title article-title"><strong>What I Can Do</strong></h3>
          <ul className="service-list">
            {/* java */}
            <li className="service-item">
              <div className="service-icon-box">
                <img src={javaLogo} alt="Java icon" width="70" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Java Development</h4>
                <p className="service-item-text">
                  The most modern and high performance programming language.
                </p>
              </div>
            </li>
            {/* web */}
            <li className="service-item">
              <div className="service-icon-box">
                <img src={webLogo} alt="Web development icon" width="65" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web Development</h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>
          </ul>
        </section>


        {/* Mobile/Tablet View: Carousel */}
        {/* <section className="md:hidden">
          <div id="default-carousel" className="relative w-full mt-6" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 -->
              <div className="duration-700 ease-in-out service" data-carousel-item>
                <div className="service-item-mobile">
                  <div className="service-icon-box">
                    <img src={webLogo} alt="Web development icon" width="65" />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web Development</h4>
                    <p className="service-item-text">
                      High-quality development of sites at the professional level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>


          {/* <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={pythonLogo} alt="Python icon" width="80" height="65" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Python Development</h4>
                <p className="service-item-text">
                  A dynamic, interpreted (bytecode-compiled) language.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={sqlLogo} alt="Database icon" width="70" height="80" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Database Management</h4>
                <p className="service-item-text">
                  Designing and optimizing databases for efficient data management.
                </p>
              </div>
            </li>
          </ul>
        </section> */}


        {/* Tech Stack Marquee */}
        <div className="relative transition-colors ease-linear duration-700 overflow-hidden mt-16">
          <Marquee
            speed={50}
            gradient={true}
            gradientWidth={60}
            gradientColor={islightmode ? [226, 232, 240] : [23, 23, 23]}
            className="no-scrollbar pointer-events-none"
          >
            {techStack.map((icon, index) => (
              <div
                key={index}
                className={`mx-4 p-4 rounded-xl flex items-center justify-center w-24 h-24 transition-all duration-700 ease-in-out hover:scale-110 pointer-events-auto ${islightmode
                  ? "bg-gray-100 hover:bg-gray-300"
                  : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-12 w-12 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
