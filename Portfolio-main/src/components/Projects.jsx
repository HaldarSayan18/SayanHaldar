import React from "react";
import { ExternalLink } from "lucide-react";

import rockpaperscissor from "../../public/images/rockpaperscissor.png";
import todo from "../../public/images/todo.jpg";

const Projects = ({ islightmode }) => {
  const projects = [
    {
      title: "Rock_Paper_Scissor",
      description:
        "Developed an interactive Rock-Paper-Scissor game using HTML5, CSS3, and JavaScript with real-time user input and dynamic UI updates.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://haldarsayan18.github.io/Play_RockPaperScissor/",
      image: rockpaperscissor,
    },
    {
      title: "To-Do List",
      description:
        "Developed a simple todo list using react basics, where there is some data already present and one can add more tasks and can remove those data/tasks individually.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React Js", "Dummy API"],
      link: "https://github.com/HaldarSayan18/ToDo_list",
      image: todo,
    },
  ];

  return (
    <div
      id="projects"
      className={`transition-colors ease-linear duration-700 min-h-screen py-10 px-6 md:px-20 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 animate-gradient-x">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl flex flex-col overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl ${
                islightmode
                  ? "bg-gray-200 text-gray-800"
                  : "bg-neutral-800 text-gray-200"
              }`}
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-contain object-top"
                />
              )}

              {/* Project Details */}
              <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 transition-colors ease-linear duration-700 rounded-full ${
                          islightmode ? "bg-gray-300" : "bg-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-800"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
