import React, { useEffect, useState } from "react";
import './About.css';
import Marquee from "react-fast-marquee";
import { GraduationCap, MapPin } from "lucide-react";

import javaLogo from '../../public/icons/java.png';
import webLogo from '../../public/icons/web.png';
import pythonLogo from '../../public/icons/python.png';
import sqlLogo from '../../public/icons/sql.png';

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
    { src: "/icons/html.png", alt: "HTML" },
    { src: "/icons/css.png", alt: "css" },
    { src: "/icons/JavaScript.png", alt: "JavaScript" },
    { src: "/icons/java.png", alt: "Java" },
    { src: "/icons/python.png", alt: "python" },
    { src: "/icons/react.png", alt: "React" },
    // { src: "/icons/node.png", alt: "Node.js" },
    // { src: "/icons/express.png", alt: "Express" },
    { src: "/icons/BootStrap.png", alt: "BootStrap" },
    { src: "/icons/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/icons/vscode.png", alt: "vscode" },
    { src: "/icons/sql.png", alt: "sql" },
    { src: "/icons/wordpress.png", alt: "wordpress" },
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
        <section className="service">
          <h3 className="h3 service-title article-title"><strong>What I Can Do</strong></h3>
          <ul className="service-list">
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
          </ul> */}
        </section>

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
