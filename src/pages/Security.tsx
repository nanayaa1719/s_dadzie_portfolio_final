import React from "react";
import { Shield, Users, BarChart, Award, CheckCircle, BoxIcon } from "lucide-react";
export const Security = () => {
  const expertiseAreas = [{
    title: "Risk Assessment & Analysis",
    icon: Shield,
    points: ["Comprehensive risk assessment methodologies", "Security control evaluation and implementation", "Risk mitigation strategy development", "Compliance framework integration"]
  }, {
    title: "Third-Party Risk Management (TPRM)",
    icon: Users,
    points: ["Vendor security assessment", "Third-party compliance monitoring", "Vendor risk scoring and classification", "Due diligence process optimization"]
  }, {
    title: "Operational Risk Management",
    icon: BarChart,
    points: ["Risk metrics development and tracking", "Process vulnerability assessment", "Control effectiveness evaluation", "Risk reporting and documentation"]
  }, {
    title: "Technical Tools Proficiency",
    icon: BoxIcon,
    points: ["Advanced Excel (Pivot Tables, VLOOKUP)", "GRC Tools (Archer)", "Analytics Tools (PowerBI)", "Project Management (JIRA)", "Procurement Systems (Ariba, Coupa)", "CRM (Salesforce)"]
  }];
  const certifications = [{
    name: "CISA (Certified Information Systems Auditor)",
    description: "Expertise in IT audit, control, and security"
  }];
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Cybersecurity & Risk Analysis
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Specialized in Risk Assessment, Vendor Management, and Security
            Analysis
          </p>
        </div>
        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {expertiseAreas.map((area, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <area.icon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {area.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {area.points.map((point, idx) => <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              Certifications
            </h2>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">{cert.name}</h3>
                <p className="text-gray-600 mt-1">{cert.description}</p>
              </div>)}
          </div>
        </div>
        {/* Professional Approach */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Professional Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Communication</h3>
              <p className="text-gray-600">
                Strong verbal and written communication skills, able to convey
                complex security concepts to diverse audiences
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Work Style</h3>
              <p className="text-gray-600">
                Self-motivated professional capable of independent work while
                maintaining strong team collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};