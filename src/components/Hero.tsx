import Link from "next/link";
import Image from "next/image";
import {monaSans} from "../app/fonts/monaSans";
import {motion} from "framer-motion";
import {imageAnimation, bodyAnimation} from "./animations/animations";
import AnimatedWords from "./animations/AnimatedWords";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate">
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="/CV_Elias_Grinwis_Plaat_Stultjes.pdf"
            target="_blank"
            aria-label="View Resume">
            <motion.button
              className="hidden rounded-md border-2 border-accent hover:bg-accent hover:text-black transition-all duration-300 py-2 px-4 text-[14px] font-semibold text-accent sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}>
              CV BEKIJKEN
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/EliasGrinwis"
            target="_blank"
            aria-label="View GitHub Profile">
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}>
              <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/elias-grinwis-plaat-stultjes-86bb43220/"
            target="_blank"
            aria-label="View LinkedIn Profile">
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}>
              <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com/eliasgrinwis"
            target="_blank"
            aria-label="View Twitter Profile">
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}>
              <FontAwesomeIcon icon={faTwitter} className="w-7 h-7 " />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 w-full ">
        <div
          className={`relative flex flex-col items-center justify-center  w-full ${monaSans.className} `}>
          <AnimatedWords
            title="ELIAS GRINWIS"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}>
            <Image
              src={"/avatar.webp"}
              width={245}
              height={245}
              priority
              alt="Victor's headshot"
              data-blobity-tooltip="Fine boy"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale transition-all duration-300 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}>
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Welkom op mijn portfolio! Hier vind je een gedetailleerd overzicht
            van mijn werk en stage.
          </p>
        </motion.div>

        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}>
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Ontdek de projecten waar ik aan gewerkt heb om een beter beeld te
            krijgen van mijn professionele vaardigheden.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
