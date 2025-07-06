// src/components/blog/AdditionalComponents.tsx
import React from 'react';
import CallNowButton from './CallNowButton';
import CallToAction from './CallToAction';
import ProgressBar from './ProgressBar';

// LivePricing Component
export const LivePricing: React.FC<{
  lastUpdated: string;
  marketStatus: string;
  priceMovement: string;
  trend: number;
}> = ({ lastUpdated, marketStatus, priceMovement, trend }) => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
    <h4 className="font-semibold text-blue-900 mb-2">Live Market Data</h4>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div>Last Updated: {lastUpdated}</div>
      <div>Status: {marketStatus}</div>
      <div>Movement: {priceMovement} {trend}%</div>
    </div>
  </div>
);

// LocationDistanceMap Component
export const LocationDistanceMap: React.FC<{
  center: string;
  locations: Array<{ name: string; distance: string; time: string }>;
}> = ({ center, locations }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Distance from {center}</h4>
    <div className="space-y-3">
      {locations.map((loc, index) => (
        <div key={index} className="flex justify-between items-center p-3 bg-white rounded border">
          <span className="font-medium">{loc.name}</span>
          <div className="text-right">
            <div className="text-sm text-gray-600">{loc.distance}</div>
            <div className="text-xs text-blue-600">{loc.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// PriceTrendChart Component
export const PriceTrendChart: React.FC<{
  data: Array<{ year: number; growth: number; activity?: string }>;
  title: string;
}> = ({ data, title }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center p-2 border-b">
          <span>{item.year}</span>
          <span className="font-medium">{item.growth}% Growth</span>
          {item.activity && <span className="text-sm text-gray-600">{item.activity}</span>}
        </div>
      ))}
    </div>
  </div>
);

// AffordabilityCalculator Component
export const AffordabilityCalculator: React.FC<{
  title: string;
  defaultSalary: number;
  maxLoanRatio: number;
}> = ({ title, defaultSalary, maxLoanRatio }) => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-blue-900 mb-4">{title}</h4>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Salary</label>
        <input 
          type="number" 
          defaultValue={defaultSalary}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter monthly salary"
        />
      </div>
      <div className="bg-white p-4 rounded border">
        <div className="text-sm text-gray-600">Estimated Affordability</div>
        <div className="text-lg font-semibold text-blue-600">
          PKR {(defaultSalary * maxLoanRatio * 12 * 20 / 100000).toFixed(1)} Lakh - {(defaultSalary * maxLoanRatio * 12 * 25 / 100000).toFixed(1)} Lakh
        </div>
      </div>
      <CallNowButton phone="+923203243970" text="Get Detailed Calculation" />
    </div>
  </div>
);

// ConsultationBooking Component
export const ConsultationBooking: React.FC<{
  title: string;
  description: string;
  phone: string;
  features: string[];
}> = ({ title, description, phone, features }) => (
  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-green-900 mb-2">{title}</h4>
    <p className="text-green-700 mb-4">{description}</p>
    {features && (
      <ul className="list-disc list-inside text-sm text-green-600 mb-4 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    )}
    <div className="flex gap-3">
      <a href={`tel:${phone}`} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors no-underline">
        📞 Call Now
      </a>
      <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors no-underline">
        💬 WhatsApp
      </a>
    </div>
  </div>
);

// Other components continue with proper React.FC typing...