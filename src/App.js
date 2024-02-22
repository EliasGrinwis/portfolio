import {Icon} from "@iconify/react";
import Avatar from "./images/avatar.png";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-between container mx-auto">
        <div>
          <h1 className="text-5xl font-semibold mb-5">
            Hi, I'am <span className="text-red-500">Elias</span> Web Designer
          </h1>
          <div className="flex items-center">
            <button className="px-8 py-2 bg-primary text-white rounded-md flex items-center">
              About me
            </button>
          </div>

          <div className="flex items-center gap-5 mt-5">
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

        <img src={Avatar} alt="avatar" />
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
