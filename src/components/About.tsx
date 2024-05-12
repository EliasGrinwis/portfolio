"use client";

import {useHoverPosition} from "@/lib/hooks";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import AnimatedTitle from "./animations/AnimatedTitle";
import AnimatedBody from "./animations/AnimatedBody";

type SocialLinkProps = {
  href: string;
  icon: any;
  label: string;
  color: string;
};

export default function About() {
  const {mousePosition, handleMouseOver} = useHoverPosition(); // custom hook

  function handleDownload() {
    const anchor = document.createElement("a");
    anchor.href = "/CV_Elias_Grinwis_Plaat_Stultjes.pdf";
    anchor.download = "CV Elias Grinwis Plaat Stultjes";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <div
      id="overmij"
      className="bg-primary max-w-7xl mx-auto border-b border-secondary min-h-screen relative py-24 z-10 flex flex-col items-center justify-center p-3">
      <div className="max-w-7xl mx-auto hidden-fade container">
        <div className="text-center mb-12">
          <div className="inline-block border-b-4 border-orange pb-4">
            <h2 className="text-4xl font-semibold text-white">
              Over<span className="text-orange"> mij</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-rows-3 lg:grid-rows-5 md:grid-flow-col gap-4">
          <div className="row-span-1 md:row-span-2 lg:row-span-5 col-span-1 lg:col-span-2">
            <Image
              src={"/avatar.webp"}
              loading="lazy"
              className="rounded-xl h-full w-full object-cover hover:grayscale transition duration-300"
              alt="Avatar"
              width={500}
              height={500}
            />
          </div>

          <div
            onMouseMove={handleMouseOver}
            style={
              {
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
              } as React.CSSProperties
            }
            className="card row-span-1 md:row-span-2 lg:row-span-4 col-span-1 lg:col-span-3 bg-secondary rounded-xl p-6 flex flex-col justify-between items-start">
            <div className="text-justify">
              <AnimatedTitle
                text={"Wie ben ik?"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
                className={
                  "text-[14px] font-bold uppercase md:text-[16px] text-white lg:text-[18px] "
                }
              />
              <AnimatedBody
                text="Ik ben een 20-jarige student aan de Thomas More hogeschool. Ik
                  heb altijd al interesse gehad in computers en games. Daarom ben
                  ik IT gaan studeren. Momenteel zit ik in mijn laatste jaar van
                  mijn opleiding Application Development. Ik ben gepassioneerd
                  door softwareontwikkeling en sta altijd open voor nieuwe
                  leerkansen."
                className={"mt-4 text-[16px] font-semibold text-[#95979D] "}
              />
            </div>
            <button
              className="z-50 mt-6 px-4 py-2 bg-orange text-black hover:bg-white  transition duration-300 rounded-md flex items-center gap-2"
              onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
              CV Downloaden
            </button>
          </div>
          <div className="col-span-1 row-span-1 h-full rounded-xl mx-auto md:mx-0">
            <div className="flex items-center gap-5 lg:h-full">
              <SocialLink
                href="https://www.linkedin.com/in/elias-grinwis-plaat-stultjes-86bb43220/"
                icon={faLinkedin}
                label="LinkedIn"
                color="#007ebe"
              />

              <SocialLink
                href="https://github.com/EliasGrinwis"
                icon={faGithub}
                label="GitHub"
                color="#FFFFFF"
              />
              <SocialLink
                href="https://twitter.com/EliasGrinwis"
                icon={faTwitter}
                label="Twitter"
                color="#1DA1F2"
              />
              <SocialLink
                href="mailto:eliasgrinwis27@gmail.com"
                icon={faEnvelope}
                label="Mail"
                color="#D14836"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({href, icon, label, color}: SocialLinkProps) {
  return (
    <div className="h-full w-20">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{color: color}}
        className="bg-secondary h-full rounded-xl flex justify-center items-center transform hover:scale-110 p-2 hover:bg-opacity-60 transition-all duration-300"
        aria-label={label}>
        <FontAwesomeIcon icon={icon} className="w-9 h-9" />

        {/* <Icon className="w-9 h-9" icon={icon} /> */}
      </a>
    </div>
  );
}
