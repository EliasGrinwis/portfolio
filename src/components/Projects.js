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
      "Barometer is an innovative project designed to revolutionize office management. By utilizing advanced algorithms and real-time data analysis, Barometer predicts office occupancy, providing valuable insights to streamline workflow and optimize resource allocation. Developed with cutting-edge technologies such as React, MySQL, Tailwind CSS, and ASP.NET, Barometer ensures accuracy and efficiency in its predictions, enhancing productivity and workplace satisfaction. Experience the future of office management with Barometer today!",
    imageUrl: barometerImage,
    tags: ["React", "MySQL", "Tailwind CSS", "ASP.NET"],
    demoLink: "https://app.teameclypse.be/",
    promotionalVideo: "https://www.youtube.com/watch?v=lN8ehgiOM3Q&t=7s",
    isNew: true, // Marking this project as new
  },
  {
    title: "TripPlanner",
    description:
      "Embark on unforgettable journeys with TripPlanner, the ultimate travel companion. Whether you're a solo explorer or planning a group adventure, TripPlanner simplifies the trip planning process, allowing you to create personalized itineraries effortlessly. Powered by Angular, MySQL, Tailwind CSS, ASP.NET, and Firebase, TripPlanner offers seamless integration and unparalleled convenience. Start crafting your dream vacation with TripPlanner now!",
    imageUrl: tripPlannerImage,
    tags: ["Angular", "MySQL", "Tailwind CSS", "ASP.NET", "Firebase"],
    demoLink: "https://trip-planner-46730.web.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "Indulge your passion for music with the Spotify Clone project. Immerse yourself in a familiar yet enhanced music streaming experience, meticulously crafted to deliver premium audio content. Leveraging the latest in technology, including React, MySQL, Tailwind CSS, ASP.NET, Firebase, and Azure, the Spotify Clone offers seamless navigation, personalized recommendations, and a vast library of songs to explore. Join the music revolution and discover your favorite tracks with Spotify Clone!",
    imageUrl: spotifyImage,
    tags: ["React", "MySQL", "Tailwind CSS", "ASP.NET", "Firebase", "Azure"],
    demoLink: "https://spotify-ab8ac.web.app/",
    githubLink: "https://github.com/EliasGrinwis/spotify-clone",
  },
  // Add more projects as needed
];

const ProjectCard = ({project}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const openDescriptionModal = () => {
    setShowDescriptionModal(true);
  };

  const closeDescriptionModal = () => {
    setShowDescriptionModal(false);
  };

  return (
    <div className="shadow-md rounded-lg relative p-2 flex flex-col">
      <div className="relative">
        <img
          className="w-full h-56 object-cover object-center rounded-lg"
          src={project.imageUrl}
          alt={project.title}
        />
        <button
          onClick={openDescriptionModal}
          className="absolute bottom-0 right-0 bg-black bg-opacity-90 text-white px-4 py-2 rounded-lg">
          Show Description
        </button>
      </div>

      <div className="px-4 py-2  flex-1 flex flex-col">
        <h3 className="text-xl text-white font-semibold mb-2">
          {project.title}
        </h3>

        <div className="flex-1 flex flex-col justify-between">
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
          <div className="flex gap-3">
            {project.demoLink && (
              <button
                onClick={() => window.open(project.demoLink, "_blank")}
                className="bg-red-500 hover:bg-opacity-60 text-white font-bold py-2 px-4 rounded"
                style={{minWidth: "100px"}}>
                Demo
              </button>
            )}
            {project.githubLink && (
              <button
                onClick={() => window.open(project.githubLink, "_blank")}
                className="bg-gray-500 hover:bg-opacity-60 text-white font-bold py-2 px-4 rounded"
                style={{minWidth: "100px"}}>
                Source Code
              </button>
            )}
            {project.promotionalVideo && (
              <button
                onClick={openVideoModal}
                className="bg-gray-500 hover:bg-opacity-60 text-white font-bold py-2 px-4 rounded"
                style={{minWidth: "100px"}}>
                Watch Video
              </button>
            )}
          </div>
        </div>
      </div>
      {showVideoModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-3">
          <div className="bg-secondary p-6 rounded-md relative text-center w-full max-w-xl">
            <ReactPlayer url={project.promotionalVideo} width="100%" controls />
            <button className="mt-4 text-sm" onClick={closeVideoModal}>
              Close window
            </button>
          </div>
        </div>
      )}

      {showDescriptionModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-3">
          <div className="bg-white p-6 rounded-md relative max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-800 mb-6">{project.description}</p>
            <button
              className="block w-full bg-primary text-white rounded-md py-2 hover:bg-opacity-80 transition duration-300 ease-in-out"
              onClick={closeDescriptionModal}>
              Close Description
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
