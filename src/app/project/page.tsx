"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useRef} from "react";

export default function ProjectDetail({
  searchParams,
}: {
  searchParams: {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string[];
    technologies: string[];
    github: string;
    demo: string;
    youtubeVideo: string;
    image: string;
    conclusion: string;
    available: boolean;
    type: string;
  };
}) {
  console.log(searchParams.name);
  const router = useRouter();

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
    <div className="bg-primary min-h-screen overflow-hidden">
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>

      <div className="container mx-auto max-w-6xl p-6 lg:p-6 z-10">
        {searchParams.youtubeVideo ? (
          <iframe
            className="w-full h-full"
            src={searchParams.youtubeVideo}
            title={searchParams.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        ) : (
          <Image
            src={searchParams.image}
            alt={searchParams.name}
            width={1152}
            height={604}
            unoptimized={true}
            className="object-cover mx-auto w-full h-auto lg:h-[604px] rounded-xl"
          />
        )}

        <h1 className="text-center text-white mt-4 mb-6">
          {searchParams.name}
        </h1>

        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center justify-center gap-3">
            {searchParams.technologies.map((tech, id) => (
              <p
                key={id}
                className="text-white text-center outline outline-accent outline-2 px-2 py-1">
                {tech}
              </p>
            ))}
          </div>
          <div>
            <p className="text-white text-center outline outline-accent outline-2 px-2 py-1">
              {searchParams.type}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-[14px] font-bold uppercase md:text-[16px] text-white lg:text-[18px]">
            Project Beschrijving
          </h2>
          <div className="mt-4 text-[16px] font-semibold text-[#95979D]">
            {searchParams.longDescription.map((desc, id) => (
              <p key={id} className="mt-4">
                {desc}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-[14px] font-bold uppercase md:text-[16px] text-white lg:text-[18px]">
            Conclusie
          </h2>
          <p className="mt-4 text-[16px] font-semibold text-[#95979D]">
            {searchParams.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
}
