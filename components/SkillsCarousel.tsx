"use client";
import React, { useEffect, useState } from "react";
import TechStack from "../types/TechStack";
import { languages, databases, frameworks, tools } from "../utils/TechSTack";

const SkillsCarousel = () => {
  const sections = [
    { name: "Languages", skills: languages },
    { name: "Databases", skills: databases },
    { name: "Frameworks & Libraries", skills: frameworks },
    { name: "Tools & Platforms", skills: tools },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 mb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Tech Stack
        </h2>
        <p className="text-gray-400 text-lg mb-12">Technologies I work with</p>

        <h3 className="text-2xl font-semibold text-gray-400 mb-8 transition-all duration-500">
          {sections[currentIndex].name}
        </h3>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            {sections[currentIndex].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 
                           bg-gray-800/50 rounded-xl border border-gray-700 
                           hover:border-blue-500 hover:bg-gray-800/70
                           transition-all duration-300 hover:scale-105
                           shadow-lg hover:shadow-xl group"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                </div>
                <p className="text-white text-sm md:text-base font-medium text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
