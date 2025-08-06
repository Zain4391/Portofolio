"use client";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import ProjectsType from "../../types/ProjectType";

export default function Projects() {
  const projects: ProjectsType[] = [
    {
      title: "Solemate Microservices",
      description: "E-commerce Shoe store built on microservices Architecture",
      gitHub: "https://github.com/Zain4391/solemate-microservices",
    },
    {
      title: "Future Fit",
      description:
        "Analyzes resume based on AI replacement factor and suggests certifications and degree programs + tools for enhancement",
      gitHub: "https://github.com/Zain4391/FutureFit",
    },
    {
      title: "MERN Stack Authentication",
      description:
        "A full stack authentication system built using JWT and cookies",
      gitHub: "https://github.com/Zain4391/MERN_AUTH",
    },
    {
      title: "Brain Tumor Classification",
      description:
        "A brain tumor classification system built using PyTorch. Trained on Kaggle dataset",
      gitHub: "https://github.com/Zain4391/BrainTumor_Classification.py",
    },
    {
      title: "Face Recognition System",
      description:
        "A face recognition system built using C# and FaceSharp Open source library",
      gitHub: "https://github.com/Zain4391/Face_Recognition",
    },
    {
      title: "Clinic Booking System",
      description:
        "Clinic Booking system developed using ASP.NET Core and PostgreSQL",
      gitHub: "https://github.com/Zain4391/CLINICBOOKINGSYSTEM",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my technical skills and creative problem-solving
            through various projects
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <ProjectCard
                  title={proj.title}
                  description={proj.description}
                  url={proj.gitHub}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-gray-400 text-lg">
            More projects coming soon! Check back for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
