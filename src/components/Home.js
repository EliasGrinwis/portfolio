import {Icon} from "@iconify/react";
import Avatar from "../images/avatar4.png";
import {HashLink} from "react-router-hash-link";

export default function Home() {
  return (
    <div className="bg-secondary py-20 md:py-32 p-3">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center lg:text-start">
          <div className="mb-2">
            <p className="text-sm text-gray-600">- Softwareontwikkelaar</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
            Hallo, ik ben <span className="text-red-500">Elias</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Welkom op mijn portfolio! Hier vind je een gedetailleerd overzicht
            van mijn werk. Ontdek de projecten waar ik aan heb gewerkt om een
            beter beeld te krijgen van mijn professionele reis en vaardigheden.
          </p>
          <HashLink
            to="#about"
            className="bg-primary hover:bg-opacity-60 transition-colors duration-300 px-4 py-2 inline-block rounded-md text-white font-semibold leading-tight">
            Meer over mij leren
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
            <SocialLink
              href="mailto:eliasgrinwis27@gmail.com"
              icon="material-symbols:mail-outline"
              label="Mail"
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
