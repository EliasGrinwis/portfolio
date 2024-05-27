"use client";

import {useEffect, useRef} from "react";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = posX + "px";
        cursorDotRef.current.style.top = posY + "px";

        cursorOutlineRef.current?.animate(
          {
            left: posX + "px",
            top: posY + "px",
          },
          {
            duration: 500,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <NavBar />

      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>

      <main className="flex flex-col items-center justify-center bg-primary">
        <Hero />
        <About />
        <Internship />
        <Project />
        <Contact />
        <Footer />
        <div className="hidden md:block">
          <ScrollToTopButton />
        </div>
      </main>
    </>
  );
}
