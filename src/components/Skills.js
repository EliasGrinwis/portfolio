import React from "react";
import reactImage from "../images/skills/react.png";
import firebaseImage from "../images/skills/firebase.png";
import flutterImage from "../images/skills/flutter.png";
import tailwindcssImage from "../images/skills/tailwindcss.png";
import bootstrapImage from "../images/skills/bootstrap.png";
import sassImage from "../images/skills/sass.png";
import htmlImage from "../images/skills/html.png";
import cssImage from "../images/skills/css.png";
import javascriptImage from "../images/skills/javascript.png";
import javaImage from "../images/skills/java.png";
import laravelImage from "../images/skills/laravel.png";
import pythonImage from "../images/skills/python.png";
import mysqlImage from "../images/skills/mysql.png";
import aspnetImage from "../images/skills/aspnet.png";
import netlifyImage from "../images/skills/netlify.png";
import azureImage from "../images/skills/azure.png";
import githubImage from "../images/skills/github.png";
import angularImage from "../images/skills/angular.png";

import {Icon} from "@iconify/react";

export default function Skills() {
  // Define an object mapping each skill to its respective fake image URL
  const skillImages = {
    ReactJS: reactImage,
    Angular: angularImage,
    Firebase: firebaseImage,
    Flutter: flutterImage,
    TailwindCSS: tailwindcssImage,
    Bootstrap: bootstrapImage,
    Sass: sassImage,
    HTML5: htmlImage,
    CSS3: cssImage,
    Javascript: javascriptImage,
    Java: javaImage,
    Laravel: laravelImage,
    Python: pythonImage,
    MySQL: mysqlImage,
    "ASP.NET": aspnetImage,
    netlify: netlifyImage,
    Azure: azureImage,
    Github: githubImage,
    // Add more skills and their respective fake image URLs as needed
  };

  // Define an array of skills
  const skills = Object.keys(skillImages);

  return (
    <div
      id="skills"
      className="flex flex-col lg:h-screen justify-center items-center py-20 p-3 bg-secondary">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-primary p-2 rounded-xl mr-3">
          <Icon className="w-10 h-10 text-white" icon="fa-solid:laptop-code" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800">
          Skills & <span className="text-red-500">Abilities</span>
        </h2>
      </div>

      <div className="container mx-auto bg-red">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Map through the skills array and create a card for each skill */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-primary shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
              {/* Image */}
              <img
                className="w-24 h-24 object-contain"
                src={skillImages[skill]}
                alt={skill}
              />
              <div className="px-6 pb-2">
                <h3 className="text-xl text-center font-semibold text-white mb-2">
                  {skill}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
