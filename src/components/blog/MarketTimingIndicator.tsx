// src/components/blog/MarketTimingIndicator.tsx
import React from 'react';

interface MarketTimingIndicatorProps {
  status: 'optimal' | 'good' | 'moderate' | 'wait' | 'peak-opportunity';
  message: string;
  className?: string;
}

const MarketTimingIndicator: React.FC<MarketTimingIndicatorProps> = ({
  status,
  message,
  className = ''
}) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'optimal':
        return {
          color: 'bg-green-500',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          icon: '🎯',
          pulse: true
        };
      case 'peak-opportunity':
        return {
          color: 'bg-emerald-500',
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-800',
          icon: '🚀',
          pulse: true
        };
      case 'good':
        return {
          color: 'bg-blue-500',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-800',
          icon: '👍',
          pulse: false
        };
      case 'moderate':
        return {
          color: 'bg-yellow-500',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          icon: '⏰',
          pulse: false
        };
      case 'wait':
        return {
          color: 'bg-red-500',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          icon: '⚠️',
          pulse: false
        };
      default:
        return {
          color: 'bg-gray-500',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-800',
          icon: 'ℹ️',
          pulse: false
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className={`my-6 ${className}`}>
      <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-lg p-4 relative overflow-hidden`}>
        {config.pulse && (
          <div className={`absolute inset-0 ${config.color} opacity-20 animate-pulse`}></div>
        )}
        <div className="relative z-10 flex items-center space-x-3">
          <div className={`${config.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${config.pulse ? 'animate-pulse' : ''}`}>
            <span>{config.icon}</span>
          </div>
          <div className="flex-1">
            <div className={`font-semibold ${config.textColor} uppercase text-sm tracking-wide`}>
              Market Timing: {status.replace('-', ' ').toUpperCase()}
            </div>
            <div className={`${config.textColor} mt-1`}>
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTimingIndicator;