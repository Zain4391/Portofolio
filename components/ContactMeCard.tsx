import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

const ContactMeCard = () => {
  return (
    <div
      className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 max-w-md mx-auto
                    hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="flex flex-col space-y-8 items-center">
        {/* Email Section */}
        <div className="flex flex-col space-y-3 items-center">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <div className="text-center space-y-1">
            <a
              href="mailto:zainrasoolhashmi@gmail.com"
              className="block text-gray-300 hover:text-white transition-colors text-sm"
            >
              zainrasoolhashmi@gmail.com
            </a>
            <a
              href="mailto:hashmizainrasool@gmail.com"
              className="block text-gray-300 hover:text-white transition-colors text-sm"
            >
              hashmizainrasool@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex flex-col space-y-3 items-center">
          <div className="p-3 bg-green-500/20 rounded-full">
            <Phone className="w-6 h-6 text-green-400" />
          </div>
          <a
            href="tel:+923390028064"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            +92 3390028064
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 items-center pt-4 border-t border-gray-600">
          <a
            href="https://github.com/Zain4391"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-600 
                       transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/zain-rasool-hashmi-947bb424b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-700/50 rounded-full hover:bg-blue-600 
                       transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMeCard;
