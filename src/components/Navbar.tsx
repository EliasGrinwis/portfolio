"use client";
import Link from "next/link";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0   mx-auto  flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-accent backdrop-blur-md sm:w-[390.3px] md:p-2 lg:w-[420.3px]">
      <Link
        href="/CV_Elias_Grinwis_Plaat_Stultjes.pdf"
        target="_blank"
        className="flex"
        aria-label="Open my resume">
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
        />
      </Link>

      <Link
        href="#home"
        onClick={handleScroll}
        aria-label="Scroll to Home Section">
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 hover:bg-accent hover:text-black transition-all duration-400">
          Home
        </h4>
      </Link>
      <Link
        href="#overmij"
        onClick={handleScroll}
        aria-label="Scroll to About Section">
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 text-nowrap hover:bg-accent hover:text-black transition-all duration-400">
          Over mij
        </h4>
      </Link>

      <Link
        href="#stage"
        onClick={handleScroll}
        aria-label="Scroll to About Section">
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 hover:bg-accent hover:text-black transition-all duration-400">
          Stage
        </h4>
      </Link>

      <Link
        href="#projects"
        onClick={handleScroll}
        aria-label="Scroll to Contact Section">
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 hover:bg-accent hover:text-black transition-all duration-300">
          Projecten
        </h4>
      </Link>
    </nav>
  );
};

export default NavBar;
