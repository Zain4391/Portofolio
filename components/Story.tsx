import React from "react";

const Story = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 h-full">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-white text-2xl font-bold mb-2">My Story</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"></div>
        </div>

        <div className="flex-grow">
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            I'm a passionate Computer Science student with a deep love for
            problem-solving and creating innovative solutions through
            technology. My journey in programming began in high school, and
            since then, I've been fascinated by the endless possibilities that
            code can unlock.
          </p>

          <p className="text-gray-300 leading-relaxed text-base mb-4">
            Currently pursuing my Bachelor's degree in Computer Science, I’ve
            built a strong foundation in programming, with hands-on experience
            across multiple languages and frameworks. My interests lie at the
            intersection of full-stack development and data science—where I
            enjoy creating seamless user experiences backed by intelligent,
            data-driven systems. Whether it’s designing responsive frontends,
            architecting scalable APIs, or uncovering insights from data, I
            thrive on building solutions that are both functional and insightful
          </p>

          <p className="text-gray-300 leading-relaxed text-base">
            When I'm not coding, you can find me exploring the latest tech
            trends, contributing to open-source projects, or mentoring fellow
            students. I believe in the power of technology to make a positive
            impact on the world, and I'm excited to be part of that change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
