import React from "react";
import { Mail, Phone, Linkedin, Download, Award, Briefcase, GraduationCap } from "lucide-react";
export const Resume = () => {
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Professional Resume
          </h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            SAMANTHA K. DADZIE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <a href="mailto:samanthadadzie7@gmail.com" className="text-blue-600 hover:text-blue-800">
                samanthadadzie7@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              <a href="tel:6147729443" className="text-blue-600 hover:text-blue-800">
                (614) 772-9443
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 text-gray-400 mr-2" />
              <a href="https://www.linkedin.com/in/" className="text-blue-600 hover:text-blue-800">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        {/* Professional Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            A detailed and diligent Risk Analyst with extensive expertise in
            Risk and Security, specializing in Risk Assessment, Vendor
            Management, Third-Party Risk Management (TPRM), Operational Risk,
            and Data Analytics. Skilled in leveraging technical tools such as
            Advanced Excel (including Pivot Tables and VLOOKUP), Ariba, Coupa,
            PowerBI, Archer, Salesforce, and JIRA to enhance analysis and
            reporting.
          </p>
        </div>
        {/* Professional Experience */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Briefcase className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              Professional Experience
            </h2>
          </div>
          {/* NBN Systems */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                NBN Systems - Ashburn, VA
              </h3>
              <span className="text-sm text-gray-500">Oct 2023 – Present</span>
            </div>
            <p className="font-medium text-gray-700 mb-2">
              Risk / Cybersecurity Analyst
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Contribute to implementing vendor risk management programs to
                effectively identify, measure, and report risks.
              </li>
              <li>
                Plan and perform assessments, control testing, validation and
                support remediation of identified risks and deficiencies
              </li>
              <li>
                Conduct audits to ensure proper controls are in place for
                PCI-DSS and SOX standards.
              </li>
              <li>
                Develop risk reports for outcomes of risk assessments and
                control testing.
              </li>
              <li>
                Used RSA Archer to track and manage risk remediation efforts,
                thereby ensuring compliance across teams.
              </li>
            </ul>
          </div>
          {/* Brightview Enterprise Solutions */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                Brightview Enterprise Solutions - New Albany, OH
              </h3>
              <span className="text-sm text-gray-500">Aug 2022 – Apr 2023</span>
            </div>
            <p className="font-medium text-gray-700 mb-2">Data Administrator</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Utilized SQL, Salesforce and advanced Excel functions (VLOOKUP,
                Pivot Tables) to generate, manage and update daily/weekly
                reports.
              </li>
              <li>
                Migrated critical business data to Power BI, enhancing the
                efficiency of data analysis and reporting.
              </li>
              <li>
                Processed purchase orders and invoices on third party platforms
                ensuring timely submission and payments.
              </li>
              <li>
                Collaborated with internal teams to resolve data discrepancies,
                ensuring data integrity and process accuracy.
              </li>
            </ul>
          </div>
          {/* Previous Experience */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                ECOBANK Ltd – Accra, Ghana
              </h3>
              <span className="text-sm text-gray-500">
                Nov 2008 – Sept 2014
              </span>
            </div>
            <p className="font-medium text-gray-700 mb-2">
              Credit Risk Analyst
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Led a team 5 in conducting quarterly audits to ensure compliance
                with KYC requirements for Non-Performing Accounts (NPA).
              </li>
              <li>
                Developed and presented Non-Performing Loan Reports using data
                visualization in Excel.
              </li>
              <li>
                Collaborated with Internal Audit to assess the effectiveness of
                internal controls.
              </li>
              <li>
                Conducted research and analysis of industry security practices
                to maintain high standards in IT systems security.
              </li>
            </ul>
          </div>
        </div>
        {/* Education */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <GraduationCap className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          </div>
          <ul className="space-y-3">
            <li>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">
                  Master of Science, Cybersecurity
                </span>
                <span className="text-gray-500">In Progress</span>
              </div>
              <p className="text-gray-600">Franklin University</p>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">
                  Bachelor of Science, Physics
                </span>
              </div>
              <p className="text-gray-600">
                Kwame Nkrumah University of Science & Technology
              </p>
            </li>
          </ul>
        </div>
        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Award className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              Certifications
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">
              Certified Information Systems Auditor (CISA)
            </span>
            <span className="text-gray-500">Valid through January 2027</span>
          </div>
        </div>
        {/* Technical Tools */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              Technical Tools
            </h2>
          </div>
          <p className="text-gray-600">
            Microsoft 365 (Word, Excel, Outlook, PowerPoint, Access, Teams,
            SharePoint), SQL, Ariba, Coupa, Corrigo, Archer
          </p>
        </div>
      </div>
    </div>;
};