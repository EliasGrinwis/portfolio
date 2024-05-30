"use client";

import {ProjectProps, projects} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faArrowRight,
  faLink,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import AnimatedTitle from "./animations/AnimatedTitle";
import AnimatedBody from "./animations/AnimatedBody";
import {useHoverPosition} from "@/lib/hooks";
import {useState} from "react";

export const ProjectCardSmall = ({
  id,
  name,
  shortDescription,
  longDescription,
  technologies,
  github,
  demo,
  youtubeVideo,
  image,
  conclusion,
  available,
  type,
}: ProjectProps) => {
  const {mousePosition, handleMouseOver} = useHoverPosition(); // custom hook

  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseOver}
      className="card z-10 relative flex h-[430px] w-full  flex-col items-center justify-start rounded-2xl">
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]">
        <div className="h-[60%] w-full md:h-[56%]">
          <Image
            src={image}
            alt={name}
            width={1600}
            height={840}
            className="h-full w-full rounded-lg bg-contain bg-center object-cover"
          />
        </div>

        <h3 className="mt-5 break-all uppercase leading-[1em] tracking-tight line-clamp-2 text-accent">
          {name}
        </h3>
      </div>

      <div className="absolute bottom-0 mb-5 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]">
        <p>{type}</p>
        <Link
          href={{
            pathname: "/project",
            query: {
              id: id,
              name: name,
              shortDescription: shortDescription,
              longDescription: longDescription,
              technologies: technologies,
              github: github,
              demo: demo,
              youtubeVideo: youtubeVideo,
              image: image,
              conclusion: conclusion,
              available: available,
              type: type,
            },
          }}
          className="rounded-full z-50">
          <FontAwesomeIcon
            icon={faArrowRight}
            className=" w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px] hover:bg-accent transition-all duration-300 hover:text-primary"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export const ProjectCard = ({
  id,
  name,
  shortDescription,
  longDescription,
  technologies,
  github,
  demo,
  youtubeVideo,
  image,
  conclusion,
  available,
  type,
}: ProjectProps) => {
  const {mousePosition, handleMouseOver} = useHoverPosition(); // custom hook

  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseOver}
      className={`card relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate">
      <Image
        src={image}
        alt={name}
        width={1920}
        height={1080}
        className={`absolute rounded-2xl -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 flex  items-center justify-center gap-4 lg:mt-10`}>
        {available ? (
          <>
            {github && (
              <Link
                href={github}
                target="_blank"
                className="rounded-full z-50"
                aria-label="Open GitHub Repository">
                <FontAwesomeIcon
                  icon={faGithub}
                  className=" w-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                />
              </Link>
            )}
            {demo && (
              <Link
                href={demo}
                target="_blank"
                className="z-50"
                aria-label="Open Live Demo">
                <FontAwesomeIcon
                  icon={faLink}
                  className=" w-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                />
              </Link>
            )}
            <Link
              href={{
                pathname: "/project",
                query: {
                  id: id,
                  name: name,
                  shortDescription: shortDescription,
                  longDescription: longDescription,
                  technologies: technologies,
                  github: github,
                  demo: demo,
                  youtubeVideo: youtubeVideo,
                  image: image,
                  conclusion: conclusion,
                  available: available,
                  type: type,
                },
              }}
              className="z-50">
              <FontAwesomeIcon
                icon={faInfo}
                className=" w-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              />
            </Link>
          </>
        ) : (
          <div className=" flex items-center justify-center gap-4">
            <Link
              href={{
                pathname: "/project",
                query: {
                  id: id,
                  name: name,
                  shortDescription: shortDescription,
                  longDescription: longDescription,
                  technologies: technologies,
                  github: github,
                  demo: demo,
                  youtubeVideo: youtubeVideo,
                  image: image,
                  conclusion: conclusion,
                  available: available,
                  type: type,
                },
              }}
              className="z-50">
              <FontAwesomeIcon
                icon={faInfo}
                className=" w-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              />
            </Link>
            <div className=" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                Binnenkort beschikbaar
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute text-white  ${
          !(id % 2 === 0)
            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
        } mb-10  md:mb-16 lg:mb-14 `}>
        <AnimatedTitle
          text={name}
          className={
            "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={shortDescription}
          className={
            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
          }
        />
        <div className="mt-9 flex gap-4">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] "
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [filter, setFilter] = useState("all");
  const [gridLayout, setGridLayout] = useState("grid-cols-1");

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div id="projects" className="bg-primary py-24 p-3 w-full">
      <div className="mx-auto max-w-7xl container hidden-fade">
        <div className="text-center mb-8">
          <div className="inline-block border-b-4 border-orange pb-4">
            <h1 className="text-center text-[#e4ded7]">PROJECTEN</h1>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center flex-wrap gap-5">
            <button
              className={`  rounded-lg p-1 w-24 hover:bg-accent transition-all duration-300 hover:text-black ${
                filter === "all"
                  ? "bg-accent text-black"
                  : "text-white bg-secondary"
              }`}
              onClick={() => handleFilterChange("all")}>
              Alle
            </button>
            <button
              className={`  rounded-lg p-1 w-24 hover:bg-accent transition-all duration-300 hover:text-black ${
                filter === "Persoonlijk Project"
                  ? "bg-accent text-black"
                  : "text-white bg-secondary"
              }`}
              onClick={() => handleFilterChange("Persoonlijk Project")}>
              Persoonlijk
            </button>
            <button
              className={`  rounded-lg p-1 w-24 hover:bg-accent transition-all duration-300 hover:text-black ${
                filter === "Groeps Project"
                  ? "bg-accent text-black"
                  : "text-white bg-secondary"
              }`}
              onClick={() => handleFilterChange("Groeps Project")}>
              Groeps
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className={`p-2  ${
                gridLayout === "grid-cols-1"
                  ? "bg-accent text-black"
                  : "bg-secondary text-white"
              } hover:bg-accent  hover:text-black transition-all rounded-lg flex items-center justify-center duration-300`}
              onClick={() => setGridLayout("grid-cols-1")}
              title="Change to single column layout">
              <FontAwesomeIcon icon={faThList} className="w-5 h-5" />
            </button>

            <button
              className={`p-2 ${
                gridLayout === "grid-cols-3"
                  ? "bg-accent text-black"
                  : "bg-secondary text-white"
              } hover:bg-accent hover:text-black transition-all rounded-lg flex items-center justify-center duration-300`}
              onClick={() => setGridLayout("grid-cols-3")}
              title="Change to three columns layout">
              <FontAwesomeIcon icon={faThLarge} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 w-full transition-all duration-500 ${gridLayout}`}>
          {projects
            .filter((project) => filter === "all" || project.type === filter)
            .map((project: ProjectProps) => (
              <>
                {gridLayout !== "grid-cols-1" ? (
                  <ProjectCardSmall
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    shortDescription={project.shortDescription}
                    longDescription={project.longDescription}
                    technologies={project.technologies}
                    github={project.github || ""}
                    demo={project.demo || ""}
                    youtubeVideo={project.youtubeVideo || ""}
                    image={project.image}
                    conclusion={project.conclusion}
                    available={project.available}
                    type={project.type}
                  />
                ) : (
                  <ProjectCard
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    shortDescription={project.shortDescription}
                    longDescription={project.longDescription}
                    technologies={project.technologies}
                    github={project.github || ""}
                    demo={project.demo || ""}
                    youtubeVideo={project.youtubeVideo || ""}
                    image={project.image}
                    conclusion={project.conclusion}
                    available={project.available}
                    type={project.type}
                  />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
