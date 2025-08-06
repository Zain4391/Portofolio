import { ExternalLink, Github } from "lucide-react";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ title, description, url }: ProjectProps) => {
  return (
    <div
      className="flex flex-col p-6 bg-gray-800/50 rounded-xl border border-gray-700 
                    hover:border-blue-500 hover:bg-gray-800/70 
                    transition-all duration-300 hover:scale-105 
                    shadow-lg hover:shadow-xl group h-full"
    >
      <div className="flex-grow">
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-white 
                     transition-colors duration-300 group/link"
        >
          <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
          <span className="text-sm font-medium">View Code</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
