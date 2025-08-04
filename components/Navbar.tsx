"use client";

import NavLink from "../types/NavLinks";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navlinks: NavLink[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Me",
      href: "/contact",
    },
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-6 right-6 bg-transparent"
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Code className="w-7 h-7 rounded-full" onClick={handleClick} />
        </div>
        <ul className="flex space-x-6">
          {navlinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="text-white hover:text-gray-300 font-medium px-3 py-2 rounded-md transition-all duration-300"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
