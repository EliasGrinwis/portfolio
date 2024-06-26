import Link from "next/link";
import Image from "next/image";
import {monaSans} from "../app/fonts/monaSans";
import "../components/animations/animate.css";
import {motion} from "framer-motion";
import heartIcon from "../../public/heart icon.png";
import AnimatedWords2 from "./animations/AnimatedWords2";
import AnimatedBody from "./animations/AnimatedBody";
import AnimatedTitle from "./animations/AnimatedTitle";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {bodyAnimation} from "./animations/animations";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 max-w-7xl flex h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate">
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}>
          <AnimatedWords2
            title={"Contact"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Heb je een vraag, voorstel, project, of wil je samenwerken aan iets?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="flex items-center w-[298px] md:w-[335px] bor der gap-1 md:gap-2.5">
              <Link
                href="mailto:eliasgrinwis27@gmail.com"
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 bor der lg:mt-4">
                <AnimatedBody
                  text={"Stuur een mail"}
                  className={"w-[190px] bor der md:w-[170px] pr-[40px] md:pr-0"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/EliasGrinwis"
              target="_blank"
              aria-label="View GitHub Profile">
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-9 h-9 hover:bg-accent hover:text-black p-2 rounded-full transition-all duration-300"
                />
              </motion.p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/elias-grinwis-plaat-stultjes-86bb43220/"
              target="_blank"
              aria-label="View LinkedIn Profile">
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-9 h-9 hover:bg-accent hover:text-black p-2 rounded-full transition-all duration-300"
                />
              </motion.p>
            </Link>
            <Link
              href="https://twitter.com/eliasgrinwis"
              target="_blank"
              aria-label="View Twitter Profile">
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-9 h-9 hover:bg-accent hover:text-black p-2 rounded-full transition-all duration-300"
                />
              </motion.p>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
