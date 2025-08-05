import { ArrowRight, Github, GithubIcon, Linkedin } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <div className="mt-20 mb-16 px-4">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Ready to Explore My Work?
        </h1>
        <p className="text-lg text-gray-300 text-center leading-relaxed mb-10 max-w-2xl">
          Discover my projects, learn about my journey, and let's connect to
          discuss opportunities.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center justify-center">
          <button
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 
                           text-white px-6 py-3 rounded-lg font-semibold
                           transition-all duration-300 hover:scale-105 
                           shadow-lg hover:shadow-xl group"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            className="border border-gray-600 hover:border-blue-500 
                           text-white px-6 py-3 rounded-lg font-semibold
                           hover:bg-gray-800 transition-all duration-300 
                           hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-12">
          <a
            href="https://github.com/Zain4391"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-600 hover:border-gray-400-500 
               text-gray-400 hover:text-white hover:bg-gray-800
               transition-all duration-300 hover:scale-110 
               shadow-lg hover:shadow-xl group"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/zain-rasool-hashmi-947bb424b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-600 hover:border-gray-400 
               text-gray-400 hover:text-white hover:bg-gray-800
               transition-all duration-300 hover:scale-110 
               shadow-lg hover:shadow-xl group"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
