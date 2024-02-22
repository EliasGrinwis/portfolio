import {Icon} from "@iconify/react";
import Avatar from "./images/avatar.png";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import {HashLink} from "react-router-hash-link";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-center md:justify-between container mx-auto p-3 lg:p-0">
        <div>
          <h1 className="text-center text-3xl sm:text-4xl xl:text-5xl font-semibold mb-5">
            Hi, I'm <span className="text-red-500">Elias</span> Web Designer
          </h1>
          <div className="flex items-center">
            <HashLink
              smooth
              to="#about"
              className="px-8 py-2 bg-primary text-white rounded-md flex items-center mx-auto md:mx-0">
              About me
            </HashLink>
          </div>

          <div className="flex items-center justify-center md:justify-normal gap-5 mt-5">
            <a
              href="https://www.linkedin.com/in/elias-grinwis-plaat-stultjes-86bb43220/"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-2 rounded-full cursor-pointer">
              <Icon className="w-10 h-10 text-white" icon="mdi:linkedin" />
            </a>
            <a
              href="https://github.com/EliasGrinwis"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-2 rounded-full cursor-pointer">
              <Icon className="w-10 h-10 text-white" icon="mdi:github" />
            </a>
            <a
              href="https://twitter.com/EliasGrinwis"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-2 rounded-full cursor-pointer">
              <Icon className="w-10 h-10 text-white" icon="mdi:twitter" />
            </a>
          </div>
        </div>

        <img
          src={Avatar}
          alt="avatar"
          class="w-48 sm:w-64 xl:w-96 rounded-full"
        />
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
