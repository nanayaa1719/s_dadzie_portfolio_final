import React from "react";
import { BarChart2, Filter, Map, PieChart, Table } from "lucide-react";
export const Tableau = () => {
  const tableauExamples = [{
    title: "Basic Sales Analytics Dashboard",
    complexity: "Basic",
    description: "Monthly sales performance visualization with basic metrics",
    features: ["Bar chart showing monthly sales trends", "Summary statistics table", "Simple pie chart for product category distribution"],
    technicalDetails: "Implementation of basic Tableau charts and tables with clean layout and clear data presentation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }, {
    title: "Customer Analysis Dashboard",
    complexity: "Intermediate",
    description: "Interactive customer segmentation and behavior analysis",
    features: ["Customer segmentation scatter plot", "Purchase behavior trends", "Dynamic filtering by customer attributes", "Drill-down capability for detailed analysis"],
    technicalDetails: "Integration of multiple chart types with synchronized filtering and interactive elements",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }, {
    title: "Sales Performance Analytics",
    complexity: "Advanced",
    description: "Comprehensive sales analytics with dynamic filtering and detailed breakdowns",
    features: ["Time series analysis with forecasting", "Product performance matrix", "Dynamic filter controls", "Cross-filtering between visualizations", "Advanced calculated fields"],
    technicalDetails: "Implementation of advanced Tableau features including calculated fields, parameters, and dynamic sets",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }, {
    title: "Geographic Sales Analysis",
    complexity: "Complex",
    description: "Interactive U.S. sales analysis with geographic visualization",
    features: ["Interactive state-level map", "Regional performance metrics", "Territory-based filtering", "Dynamic sales territory analysis", "Drill-down to city level"],
    technicalDetails: "Integration of Tableau's mapping capabilities with complex filtering and drill-down functionality",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }, {
    title: "Executive KPI Dashboard",
    complexity: "Expert",
    description: "Comprehensive executive-level dashboard with advanced analytics",
    features: ["Real-time KPI tracking", "Predictive analytics integration", "Custom calculated metrics", "Multi-level drill-down capability", "Advanced parameter controls", "Custom tooltips and annotations"],
    technicalDetails: "Showcase of advanced Tableau features including custom calculations, parameters, and advanced dashboard actions",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }];
  const getComplexityIcon = (complexity: string) => {
    switch (complexity) {
      case "Basic":
        return <BarChart2 className="h-5 w-5 text-blue-500" />;
      case "Intermediate":
        return <PieChart className="h-5 w-5 text-green-500" />;
      case "Advanced":
        return <Filter className="h-5 w-5 text-yellow-500" />;
      case "Complex":
        return <Map className="h-5 w-5 text-purple-500" />;
      case "Expert":
        return <Table className="h-5 w-5 text-red-500" />;
      default:
        return <BarChart2 className="h-5 w-5 text-gray-500" />;
    }
  };
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau Visualization Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing data visualization expertise from basic to advanced
            implementations
          </p>
        </div>
        <div className="space-y-12">
          {tableauExamples.map((example, index) => <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {getComplexityIcon(example.complexity)}
                    <span className="ml-2 text-sm font-medium text-gray-500">
                      {example.complexity} Level
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {example.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{example.description}</p>
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {example.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Technical Implementation:
                    </h3>
                    <p className="text-gray-600">{example.technicalDetails}</p>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img src={example.image} alt={example.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};