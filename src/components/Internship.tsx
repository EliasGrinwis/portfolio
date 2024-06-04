import Image from "next/image";
import {useHoverPosition} from "@/lib/hooks";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AnimatedTitle from "./animations/AnimatedTitle";
import AnimatedBody from "./animations/AnimatedBody";

export default function Internship() {
  const {mousePosition, handleMouseOver} = useHoverPosition(); // custom hook

  function handleDownload(documentType: string) {
    const anchor = document.createElement("a");
    anchor.href =
      documentType === "Project Plan"
        ? "/project_plan.pdf"
        : documentType === "Realistatie"
        ? "/realisatie.pdf"
        : "";
    anchor.download = documentType;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <div
      id="stage"
      className="py-24 bg-primary max-w-7xl mx-auto border-b border-secondary min-h-screen relative z-10 flex flex-col items-center justify-center">
      <div className="container mx-auto hidden-fade p-3 xl:p-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block border-b-4 border-orange pb-4">
              <h1 className="text-center text-[#e4ded7]">STAGE</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden">
            <div
              onMouseMove={handleMouseOver}
              style={
                {
                  "--mouse-x": `${mousePosition.x}px`,
                  "--mouse-y": `${mousePosition.y}px`,
                } as React.CSSProperties
              }
              className="card bg-secondary p-6 rounded-xl">
              <section className="mb-8 text-justify">
                <AnimatedTitle
                  text={"Projectomschrijving"}
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
                  className={
                    "text-[14px] font-bold uppercase md:text-[16px] text-white lg:text-[18px] "
                  }
                />
                <AnimatedBody
                  text="Tijdens mijn stage bij Team4Talent heb ik gewerkt aan twee
                        bestaande applicaties: Talent Manager en de MyPortal
                        applicatie. Mijn focus lag voornamelijk op het implementeren
                        van een nieuwe feature genaamd course management."
                  className={"mt-4 text-[16px] font-semibold text-[#95979D] "}
                />
                <AnimatedBody
                  text="De MyPortal applicatie is specifiek ontwikkeld voor
                  consultants. Hier kunnen zij inloggen en al hun gegevens
                  raadplegen. Als onderdeel van mijn stageopdracht moest ik
                  ervoor zorgen dat consultants een overzicht konden krijgen van
                  alle beschikbare cursussen binnen de applicatie. Ze moesten
                  zich kunnen inschrijven voor cursussen, hun inschrijvingen
                  kunnen volgen en na het voltooien van een cursus een review
                  kunnen achterlaten. Daarnaast moest ik ook de mogelijkheid
                  implementeren voor consultants om zelf een cursus aan te
                  vragen."
                  className={"mt-4 text-[16px] font-semibold text-[#95979D] "}
                />
                <AnimatedBody
                  text=" In de Talent Manager applicatie wordt het beheer van alle
                  cursussen en gerelateerde gegevens afgehandeld. Dit omvat
                  onder andere het beheer van cursussen, inschrijvingen en
                  reviews. Deze taken worden uitgevoerd door HR-medewerkers en
                  field managers."
                  className={"mt-4 text-[16px] font-semibold text-[#95979D] "}
                />
              </section>

              <ol>
                <li className="block sm:flex gap-10 ">
                  <p className="text-white w-28 font-semibold">Project Plan:</p>
                  <div
                    className="text-gray-400 hover:text-orange z-50 cursor-pointer flex items-center gap-3"
                    onClick={() => handleDownload("Project Plan")}>
                    <AnimatedBody
                      text="Plan van aanpak stage"
                      className={"text-[16px] font-semibold "}
                    />
                    <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
                  </div>
                </li>
                <li className="block sm:flex gap-10">
                  <p className="text-white w-28 font-semibold">Realisatie:</p>
                  <div
                    className="text-gray-400 hover:text-orange z-50 cursor-pointer flex items-center gap-3"
                    onClick={() => handleDownload("Realistatie")}>
                    <AnimatedBody
                      text="Documentatie van de realisatiefase"
                      className={"text-[16px] font-semibold"}
                    />
                    <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
                  </div>
                </li>
                <li className="block sm:flex gap-10">
                  <p className="text-white w-28 font-semibold">Reflectie:</p>

                  <div className="text-gray-400 hover:text-orange z-50 cursor-pointer flex items-center gap-3">
                    <AnimatedBody
                      text="Reflectie over de stageperiode"
                      className={"text-[16px] font-semibold"}
                    />
                    <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-12 lg:mt-0">
              <Image
                src={"/team4talent.webp"}
                loading="lazy"
                alt="Team4Talent logo"
                className="w-96 mx-auto rounded-lg shadow-lg mb-4 grayscale hover:grayscale-0 transition duration-300"
                width="384"
                height="384"
              />
            </div>
          </div>

          <div className="mt-20">
            <AnimatedBody
              text="In deze demo presenteer ik mijn werkzaamheden tijdens mijn stage"
              className="mb-12 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
            />

            <iframe
              width="384"
              height="315"
              src="https://www.youtube.com/embed/vzJS67CeiAs?si=qowJjR6pX_lasqKh"
              title="YouTube video player"
              allowFullScreen
              className="w-full h-[315px] lg:h-[560px] rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
