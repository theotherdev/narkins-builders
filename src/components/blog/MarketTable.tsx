// src/components/blog/MarketTable.tsx
import React from 'react';

interface MarketTableProps {
  data: Array<{
    area: string;
    avgPrice: string;
    growth: string;
  }>;
  title?: string;
  className?: string;
}

const MarketTable: React.FC<MarketTableProps> = ({
  data,
  title = "Market Analysis Overview",
  className = ''
}) => {
  return (
    <div className={`overflow-x-auto my-8 shadow-lg rounded-lg ${className}`}>
      <h4 className="text-xl font-semibold mb-4 text-gray-900 px-2">{title}</h4>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg bg-white">
        <thead className="bg-gradient-to-r from-green-50 to-green-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-green-900 uppercase tracking-wider">
              Area/Property Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-green-900 uppercase tracking-wider">
              Price Range
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-green-900 uppercase tracking-wider">
              Growth/ROI
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data && data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {row.area}
              </td>
              <td className="px-6 py-4 text-sm text-blue-600 font-semibold">
                {row.avgPrice}
              </td>
              <td className="px-6 py-4 text-sm text-green-600 font-bold">
                {row.growth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;