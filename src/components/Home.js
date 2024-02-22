import {Icon} from "@iconify/react";
import Avatar from "../images/avatar.png";
import {HashLink} from "react-router-hash-link";

export default function Home() {
  return (
    <div className="bg-secondary py-20 md:py-32 p-3">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center lg:text-start">
          <div className="mb-2">
            <p className="text-sm text-gray-600">- Software developer</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
            Hi, I'm <span className="text-red-500">Elias</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Welcome to my portfolio! Here, you'll find a detailed display of my
            work. Explore the projects I've worked on to get a better
            understanding of my professional journey and skills.
          </p>
          <HashLink
            to="#about"
            className="bg-primary hover:bg-opacity-60 transition-colors duration-300 px-4 py-2 inline-block rounded-md text-white font-semibold leading-tight">
            Learn more About me
          </HashLink>
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-5">
            <SocialLink
              href="https://www.linkedin.com/in/elias-grinwis-plaat-stultjes-86bb43220/"
              icon="mdi:linkedin"
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/EliasGrinwis"
              icon="mdi:github"
              label="GitHub"
            />
            <SocialLink
              href="https://twitter.com/EliasGrinwis"
              icon="mdi:twitter"
              label="Twitter"
            />
          </div>
        </div>
        <div>
          <img
            src={Avatar}
            alt="Elias's Avatar"
            className="w-64 lg:w-full rounded-full md:max-w-lg mx-auto lg:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function SocialLink({href, icon, label}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-primary text-white rounded-full p-2 inline-block hover:bg-opacity-60 transition-colors duration-300"
      aria-label={label}>
      <Icon className="w-9 h-9" icon={icon} />
    </a>
  );
}
