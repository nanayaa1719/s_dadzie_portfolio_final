import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
export const Hero = () => {
  return <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm Samantha
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Data Analyst • Cybersecurity Professional • CISA Certified
          </p>
          <div className="mt-5 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>;
};