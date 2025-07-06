// src/components/blog/MissingComponents.tsx
import React from 'react';
import CallNowButton from './CallNowButton';
import ProgressBar from './ProgressBar';

// AmenitiesMap Component
export const AmenitiesMap: React.FC<{
  categories: Array<{
    category: string;
    facilities: string[];
    count: number;
  }>;
}> = ({ categories }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Community Amenities Overview</h4>
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((category, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-4">
          <h5 className="font-medium text-blue-600 mb-2">{category.category}</h5>
          <div className="text-sm text-gray-600 mb-2">{category.count} facilities available</div>
          <ul className="text-sm text-gray-700 space-y-1">
            {category.facilities.map((facility, fIndex) => (
              <li key={fIndex} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {facility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// BudgetCalculator Component
export const BudgetCalculator: React.FC<{
  title: string;
  userType?: string;
  defaultValues?: {
    monthlyIncome: number;
    maxDebtRatio: number;
    downPaymentPercent: number;
    additionalCosts: number;
  };
  consultationCTA: string;
}> = ({ title, defaultValues, consultationCTA }) => {
  const defaults = defaultValues || {
    monthlyIncome: 100000,
    maxDebtRatio: 0.4,
    downPaymentPercent: 25,
    additionalCosts: 0.05
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
      <h4 className="font-semibold text-blue-900 mb-4">{title}</h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (PKR)</label>
            <input 
              type="number" 
              defaultValue={defaults.monthlyIncome}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter monthly income"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment %</label>
            <input 
              type="number" 
              defaultValue={defaults.downPaymentPercent}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="25"
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded border">
          <h5 className="font-medium text-gray-900 mb-3">Estimated Budget</h5>
          <div className="text-lg font-bold text-blue-600 mb-2">
            PKR {(defaults.monthlyIncome * defaults.maxDebtRatio * 12 * 20 / 100000).toFixed(1)} - {(defaults.monthlyIncome * defaults.maxDebtRatio * 12 * 25 / 100000).toFixed(1)} Lakh
          </div>
          <div className="text-sm text-gray-600 mb-4">
            Based on {defaults.maxDebtRatio * 100}% debt-to-income ratio
          </div>
          <CallNowButton phone={consultationCTA} text="Get Detailed Budget Plan" />
        </div>
      </div>
    </div>
  );
};

// BuyingProcessTimeline Component
export const BuyingProcessTimeline: React.FC<{
  phases: Array<{
    phase: string;
    duration: string;
    tasks: string[];
    documents: string[];
  }>;
}> = ({ phases }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-6">Property Buying Process Timeline</h4>
    <div className="space-y-6">
      {phases.map((phase, index) => (
        <div key={index} className="flex">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <div className="ml-4 flex-1">
            <h5 className="font-medium text-gray-900">{phase.phase}</h5>
            <p className="text-sm text-gray-600 mb-2">Duration: {phase.duration}</p>
            <div className="text-sm">
              <div className="mb-2"><strong>Tasks:</strong> {phase.tasks.join(', ')}</div>
              <div><strong>Documents:</strong> {phase.documents.join(', ')}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// InvestmentComparison Component
export const InvestmentComparison: React.FC<{
  factors: Array<{
    factor: string;
    score: number;
    description: string;
  }>;
}> = ({ factors }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Investment Factors Analysis</h4>
    <div className="space-y-4">
      {factors.map((factor, index) => (
        <div key={index} className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{factor.factor}</span>
            <span className="text-sm font-semibold text-green-600">{factor.score}/100</span>
          </div>
          <ProgressBar completion={factor.score} size="small" showPercentage={false} />
          <p className="text-sm text-gray-600 mt-2">{factor.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// RiskIndicator Component
export const RiskIndicator: React.FC<{
  level: 'low' | 'medium' | 'high' | 'minimal';
  color?: string;
}> = ({ level, color }) => {
  const getRiskConfig = (level: string) => {
    switch (level) {
      case 'low':
        return { color: 'text-green-600', bg: 'bg-green-100', text: 'Low Risk' };
      case 'medium':
        return { color: 'text-yellow-600', bg: 'bg-yellow-100', text: 'Medium Risk' };
      case 'high':
        return { color: 'text-red-600', bg: 'bg-red-100', text: 'High Risk' };
      case 'minimal':
        return { color: 'text-blue-600', bg: 'bg-blue-100', text: 'Minimal Risk' };
      default:
        return { color: 'text-gray-600', bg: 'bg-gray-100', text: 'Unknown' };
    }
  };

  const config = getRiskConfig(level);

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
      {config.text}
    </span>
  );
};

// Additional placeholder components that might be referenced
export const FirstTimeBuyerIndicator: React.FC<{
  status: string;
  message: string;
}> = ({ status, message }) => (
  <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
    <div className="flex">
      <div className="flex-shrink-0">
        <span className="text-green-400 text-xl">🏠</span>
      </div>
      <div className="ml-3">
        <p className="text-sm text-green-700">
          <strong>First-Time Buyer Status:</strong> {status}
        </p>
        <p className="text-sm text-green-600 mt-1">{message}</p>
      </div>
    </div>
  </div>
);

export const TargetBuyerAnalysis: React.FC<{
  segments: Array<{
    type: string;
    percentage: number;
    needs: string[];
    income: string;
  }>;
}> = ({ segments }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Target Buyer Segments</h4>
    <div className="grid md:grid-cols-2 gap-6">
      {segments.map((segment, index) => (
        <div key={index} className="border rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h5 className="font-medium text-blue-600">{segment.type}</h5>
            <span className="text-sm font-semibold">{segment.percentage}%</span>
          </div>
          <div className="text-sm text-gray-600 mb-2">Income: {segment.income}</div>
          <ul className="text-sm text-gray-700 space-y-1">
            {segment.needs.map((need, nIndex) => (
              <li key={nIndex} className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                {need}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export const FloorPlanViewer: React.FC<{
  layouts: Array<{
    type: string;
    totalArea: string;
    rooms: Record<string, string>;
    suitableFor: string;
  }>;
}> = ({ layouts }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Floor Plan Options</h4>
    <div className="space-y-6">
      {layouts.map((layout, index) => (
        <div key={index} className="border rounded p-4">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-medium text-blue-600">{layout.type}</h5>
            <span className="text-sm text-gray-600">{layout.totalArea}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            {Object.entries(layout.rooms).map(([room, size]) => (
              <div key={room} className="text-sm">
                <strong>{room}:</strong> {size}
              </div>
            ))}
          </div>
          <div className="text-sm text-green-600">
            <strong>Best for:</strong> {layout.suitableFor}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const LayoutOptimizer: React.FC<{
  title: string;
  factors: string[];
  consultationCTA: string;
}> = ({ title, factors, consultationCTA }) => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-blue-900 mb-4">{title}</h4>
    <p className="text-blue-700 mb-4">Consider these factors when choosing your layout:</p>
    <ul className="list-disc list-inside text-sm text-blue-600 mb-4 space-y-1">
      {factors.map((factor, index) => (
        <li key={index}>{factor}</li>
      ))}
    </ul>
    <CallNowButton phone={consultationCTA} text="Get Layout Consultation" />
  </div>
);

export const ROICalculator: React.FC<{
  title: string;
  apartmentType: string;
  sizeRange: string;
  marketSegment: string;
  consultationRequired: boolean;
}> = ({ title, apartmentType, sizeRange, marketSegment, consultationRequired }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-green-900 mb-4">{title}</h4>
    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div><strong>Type:</strong> {apartmentType}</div>
      <div><strong>Size:</strong> {sizeRange}</div>
      <div><strong>Segment:</strong> {marketSegment}</div>
      <div><strong>Status:</strong> {consultationRequired ? 'Consultation Required' : 'Available'}</div>
    </div>
    <CallNowButton phone="+923203243970" text="Get ROI Analysis" />
  </div>
);

export const PerformanceChart: React.FC<{
  data: Array<{
    year: number;
    appreciation: number;
    rental: string;
    activity: string;
  }>;
  title: string;
  focus: string;
}> = ({ data, title, focus }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
    <p className="text-sm text-gray-600 mb-4">Focus: {focus}</p>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Appreciation</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Rental Yield</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Activity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-sm text-gray-900">{item.year}</td>
              <td className="px-4 py-2 text-sm text-green-600 font-semibold">{item.appreciation}%</td>
              <td className="px-4 py-2 text-sm text-blue-600">{item.rental}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);