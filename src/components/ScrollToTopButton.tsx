"use client";

import {useEffect, useState} from "react";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 50,
    opacity: isVisible ? 1 : 0, // Adjust the opacity based on visibility
    transition: "opacity 0.3s ease", // Add smooth transition
    pointerEvents: isVisible ? "auto" : "none", // Disable button clicks when not visible
  };

  return (
    <div style={buttonStyle} onClick={isVisible ? scrollToTop : undefined}>
      <div className="cursor-pointer hover:bg-white  transition duration-300 bg-orange p-2 w-12 h-12 flex items-center justify-center rounded-full">
        <FontAwesomeIcon icon={faArrowUp} className="w-7 h-7 text-black" />
      </div>
    </div>
  );
}
