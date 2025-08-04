"use client";

import React, { useEffect, useState } from "react";

const TypeWriter = () => {
  const texts: string[] = [
    "Software Developer",
    "Aspiring Data Scientist",
    "CS Student",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText: string = texts[currentTextIndex];

    if (!isDeleting && currentText.length < currentFullText.length) {
      setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, 100);
    } else if (!isDeleting && currentText.length === currentFullText.length) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && currentText.length > 0) {
      setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, 50);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentText, currentTextIndex, isDeleting]);

  return (
    <div className="text-xl text-white font-mono">
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypeWriter;
