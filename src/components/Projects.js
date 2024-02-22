import React, {useState} from "react";
import ReactPlayer from "react-player";
import {Icon} from "@iconify/react";

import barometerImage from "../images/projects/thumbnailBarometer.png";
import tripPlannerImage from "../images/projects/thumbnailTripPlanner.png";
import spotifyImage from "../images/projects/thumbnailSpotify.png";

const projects = [
  {
    title: "Barometer",
    description:
      "The aim in this project was to create a barometer that predicts how busy the office will be.",
    imageUrl: barometerImage,
    tags: ["React", "MySQL", "Tailwind CSS", "ASP.NET"],
    demoLink: "https://app.teameclypse.be/",
    promotionalVideo: "https://www.youtube.com/watch?v=lN8ehgiOM3Q&t=7s",
    isNew: true, // Marking this project as new
  },
  {
    title: "TripPlanner",
    description:
      "In this project the goal was to create a trip planner application. So people can easily plan the perfect trip together.",
    imageUrl: tripPlannerImage,
    tags: ["Angular", "MySQL", "Tailwind CSS", "ASP.NET", "Firebase"],
    demoLink: "https://trip-planner-46730.web.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "In this project i created a Spotify clone. I tried to make it as good as possible.",
    imageUrl: spotifyImage,
    tags: ["React", "MySQL", "Tailwind CSS", "ASP.NET", "Firebase", "Azure"],
    demoLink: "https://spotify-ab8ac.web.app/",
  },
  // Add more projects as needed
];

const ProjectCard = ({project}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative p-2">
      <img
        className="w-full h-56 object-cover object-center rounded-lg"
        src={project.imageUrl}
        alt={project.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        {/* Adjusted positioning for the buttons */}
        <div className="absolute bottom-4 flex justify-between">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline mr-3">
              Demo
            </a>
          )}
          {project.promotionalVideo && (
            <button
              className="text-red-500 hover:underline"
              onClick={openVideoModal}>
              Watch Video
            </button>
          )}
        </div>
      </div>
      {showVideoModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md relative text-center">
            <ReactPlayer
              url={project.promotionalVideo}
              width="560px"
              height="315px"
              controls
            />
            <button className="mt-4 text-sm" onClick={closeVideoModal}>
              Close window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <div id="projects" className="bg-primary">
    <div className="mx-auto container lg:h-screen py-20 p-3 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-primary p-2 rounded-xl mr-3">
          <Icon className="w-10 h-10 text-white" icon="fa-solid:laptop-code" />
        </div>
        <h2 className="text-4xl font-semibold text-white text-center">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
