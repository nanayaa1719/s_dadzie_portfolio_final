import React from "react";
export const SQL = () => {
  const sqlExamples = [{
    title: "Basic SQL Query - Customer Order Analysis",
    description: "Query to find all customers who made purchases above $1000 in 2023",
    code: `SELECT 
  customer_name,
  order_date,
  total_amount
FROM 
  customer_orders
WHERE 
  total_amount > 1000
  AND YEAR(order_date) = 2023
ORDER BY 
  total_amount DESC;`,
    explanation: "This query demonstrates basic SQL operations including SELECT, FROM, WHERE conditions, and ORDER BY clause."
  }, {
    title: "Intermediate SQL Query - Sales Performance Analysis",
    description: "Analysis of sales performance by region with customer categorization",
    code: `SELECT 
  region,
  COUNT(DISTINCT customer_id) as total_customers,
  SUM(sales_amount) as total_sales,
  CASE 
    WHEN SUM(sales_amount) > 1000000 THEN 'High Performance'
    WHEN SUM(sales_amount) > 500000 THEN 'Medium Performance'
    ELSE 'Low Performance'
  END as performance_category,
  AVG(sales_amount) as avg_sale_amount
FROM 
  sales_data
WHERE 
  YEAR(sale_date) = 2023
GROUP BY 
  region
HAVING 
  COUNT(DISTINCT customer_id) > 100
ORDER BY 
  total_sales DESC;`,
    explanation: "This query showcases aggregation functions, CASE statements, GROUP BY, and HAVING clauses for advanced analysis."
  }, {
    title: "Advanced SQL Query - Customer Retention Analysis",
    description: "Complex analysis of customer retention using CTEs",
    code: `WITH CustomerPurchaseHistory AS (
  SELECT 
    customer_id,
    MIN(purchase_date) as first_purchase,
    MAX(purchase_date) as last_purchase,
    COUNT(*) as total_purchases
  FROM 
    purchases
  GROUP BY 
    customer_id
),
CustomerSegments AS (
  SELECT 
    customer_id,
    CASE 
      WHEN DATEDIFF(day, first_purchase, last_purchase) > 365 
        AND total_purchases > 10 THEN 'Loyal'
      WHEN DATEDIFF(day, first_purchase, last_purchase) > 180 THEN 'Regular'
      ELSE 'New'
    END as customer_segment
  FROM 
    CustomerPurchaseHistory
)
SELECT 
  cs.customer_segment,
  COUNT(*) as customer_count,
  AVG(p.total_spent) as avg_customer_value
FROM 
  CustomerSegments cs
  JOIN customer_profiles p ON cs.customer_id = p.customer_id
GROUP BY 
  cs.customer_segment
ORDER BY 
  avg_customer_value DESC;`,
    explanation: "This advanced query uses Common Table Expressions (CTEs) to perform complex customer segmentation analysis."
  }];
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">SQL Expertise</h1>
        <div className="space-y-12">
          {sqlExamples.map((example, index) => <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {example.title}
                </h2>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
                    {example.code}
                  </pre>
                </div>
                <p className="mt-4 text-gray-600">{example.explanation}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};