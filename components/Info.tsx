import Image from "next/image";
import React from "react";
import { MapPinned, Calendar, User } from "lucide-react";

const Info = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 h-full flex flex-col justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full blur opacity-75"></div>
          <Image
            src="/PFP.png"
            alt="Profile Image"
            width={150}
            height={150}
            className="relative rounded-full border-4 border-gray-800"
          />
        </div>

        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-2">
            Software Developer
          </h3>
          <p className="text-gray-300 text-sm">CS Student & Tech Enthusiast</p>
        </div>

        <div className="space-y-4 w-full">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 border border-gray-600">
            <MapPinned className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span className="text-white text-sm">Karachi, Sindh, Pakistan</span>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 border border-gray-600">
            <Calendar className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-white text-sm">
              Available for opportunities
            </span>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 border border-gray-600">
            <User className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <span className="text-white text-sm">FAST NUCES Student</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
