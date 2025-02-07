import React from "react";
import { FileSpreadsheet, Download, Eye, Code, Calculator } from "lucide-react";
export const Excel = () => {
  const excelExamples = [{
    title: "Data Integration with VLOOKUP",
    complexity: "Intermediate",
    description: "Demonstrating efficient data matching and integration across multiple sheets using VLOOKUP functions",
    features: ["Multiple VLOOKUP implementations", "Error handling with IFERROR", "Data validation techniques", "Automated data matching across sheets"],
    technicalDetails: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
=IFERROR(VLOOKUP(A2, Database!$A$2:$D$1000, 4, FALSE), "Not Found")`,
    useCase: "Merging customer data from multiple sources while handling missing values and ensuring data accuracy",
    screenshot: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    exampleFile: "customer_data_integration.xlsx"
  }, {
    title: "Advanced Pivot Table Analysis",
    complexity: "Advanced",
    description: "Complex data analysis using Pivot Tables with calculated fields and custom grouping",
    features: ["Dynamic Pivot Tables", "Calculated fields and items", "Custom grouping and sorting", "Conditional formatting in Pivot Tables", "Slicer integration"],
    technicalDetails: "Implementation includes calculated fields, custom grouping, and dynamic range references",
    useCase: "Sales performance analysis with dynamic filtering and multi-level reporting capabilities",
    screenshot: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    exampleFile: "sales_analysis_pivot.xlsx"
  }, {
    title: "Multi-Condition Lookup System",
    complexity: "Expert",
    description: "Advanced lookup system combining INDEX, MATCH, and array formulas",
    features: ["Multiple condition matching", "Array formulas", "Dynamic range references", "Automated data validation", "Custom error handling"],
    technicalDetails: `=INDEX(return_array, MATCH(1, (criteria1=range1)*(criteria2=range2), 0))
=AGGREGATE(15, 6, (database_range)/((criteria1=range1)*(criteria2=range2)), 1)`,
    useCase: "Complex inventory management system with multiple classification criteria and dynamic updates",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    exampleFile: "inventory_management.xlsx"
  }, {
    title: "Automated Reporting with VBA",
    complexity: "Expert",
    description: "Macro-enabled workbook with automated data processing and report generation",
    features: ["VBA automation scripts", "Dynamic report generation", "Automated data cleaning", "Custom user forms", "Scheduled refresh capabilities"],
    technicalDetails: "Includes VBA modules for automated data processing, custom functions, and user interface elements",
    useCase: "Automated monthly reporting system with data validation, processing, and formatted output generation",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    exampleFile: "automated_reporting.xlsm"
  }];
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Intermediate":
        return "text-blue-500";
      case "Advanced":
        return "text-yellow-500";
      case "Expert":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Excel & Data Analysis Expertise
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Advanced Excel implementation showcasing VLOOKUP, Pivot Tables, and
            VBA automation
          </p>
        </div>
        <div className="space-y-12">
          {excelExamples.map((example, index) => <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-6 w-6 text-green-500 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      {example.title}
                    </h2>
                  </div>
                  <span className={`text-sm font-medium ${getComplexityColor(example.complexity)}`}>
                    {example.complexity} Level
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{example.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {example.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                    </ul>
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        Use Case:
                      </h3>
                      <p className="text-gray-600">{example.useCase}</p>
                    </div>
                    {example.technicalDetails && <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">
                          Technical Implementation:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                          {example.technicalDetails}
                        </pre>
                      </div>}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        Preview:
                      </h3>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img src={example.screenshot} alt={example.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">
                          {example.exampleFile}
                        </span>
                      </div>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        Download Example
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};