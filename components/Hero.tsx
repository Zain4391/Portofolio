"use client";
import React from "react";
import TypeWriter from "./TypeWriter";
import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  const handleProjectClick = () => {
    router.push("/projects");
  };
  return (
    <section className="hero-section bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Curiosity. Passion. Mastery
        </h1>

        <div className="text-2xl md:text-3xl text-blue-300 min-h-[3rem] mb-8">
          <TypeWriter />
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-shadow-gray-400">
          Final Semester BSCS student at FAST NUCES Karachi. Skilled in building
          Full-stack end to end applications as well as scaleable backend APIs.
        </p>

        {/* Your buttons here */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ArrowDown className="w-10 h-10 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
