import React from "react";
import { Database, BarChart2, Shield } from "lucide-react";
export const SkillsOverview = () => {
  const skills = [{
    title: "SQL Development",
    description: "Complex queries, database optimization, and data analysis",
    icon: Database
  }, {
    title: "Tableau Visualization",
    description: "Interactive dashboards and insightful data visualization",
    icon: BarChart2
  }, {
    title: "Cybersecurity",
    description: "CISA certified with expertise in information systems auditing",
    icon: Shield
  }];
  return <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Core Skills</h2>
          <p className="mt-4 text-xl text-gray-500">
            Expertise in data analysis, visualization, and security
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(skill => <div key={skill.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <skill.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {skill.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};