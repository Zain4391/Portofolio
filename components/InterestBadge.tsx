import React from "react";
import BadgeType from "../types/BadgeTypes";
import { Brain, Layers, Server } from "lucide-react";

const InterestBadge = () => {
  const interestBadges: BadgeType[] = [
    {
      title: "Data Science",
      description: "Machine Learning, Data Analytics & Visualization",
      icon: Brain,
    },
    {
      title: "Full Stack Web Development",
      description: "End-to-end Web Application Development",
      icon: Layers,
    },
    {
      title: "Backend Development",
      description: "APIs, Databases, and Server Architecture",
      icon: Server,
    },
  ];
  return (
    <div className="mt-16 px-4">
      <h1 className="text-center text-4xl font-bold mb-10">
        Areas Of Interest
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-6xl">
        {interestBadges.map((badge, index) => {
          const IconName = badge.icon;

          return (
            <div
              key={index}
              className="flex flex-col space-y-2 justify-center items-center rounded-xl 4 bg-gradient-to-br from-slate-800 to-slate-900 
                     p-6 border border-slate-700 hover:border-white
                     transition-all duration-300 hover:scale-105 
                     shadow-lg hover:shadow-xl"
            >
              <div className="flex space-x-2 justify-center items-center">
                <IconName className="w-10 h-10" />
                <h2 className="text-lg font-bold">{badge.title}</h2>
              </div>
              <p className="mt-2 text-md font-semibold text-center leading-relaxed">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InterestBadge;
