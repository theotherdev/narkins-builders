// src/components/blog/TrendArrow.tsx
import React from 'react';

interface TrendArrowProps {
  direction: 'up' | 'down' | 'stable';
  percentage: number;
  size?: 'small' | 'medium' | 'large';
  showPercentage?: boolean;
  className?: string;
}

const TrendArrow: React.FC<TrendArrowProps> = ({
  direction,
  percentage,
  size = 'medium',
  showPercentage = true,
  className = ''
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const getDirectionConfig = (direction: string) => {
    switch (direction) {
      case 'up':
        return {
          arrow: '↗',
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          symbol: '+'
        };
      case 'down':
        return {
          arrow: '↘',
          color: 'text-red-600',
          bgColor: 'bg-red-100',
          symbol: '-'
        };
      case 'stable':
        return {
          arrow: '→',
          color: 'text-blue-600',
          bgColor: 'bg-blue-100',
          symbol: ''
        };
      default:
        return {
          arrow: '→',
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
          symbol: ''
        };
    }
  };

  const config = getDirectionConfig(direction);
  const sizeClasses = getSizeClasses(size);

  return (
    <span className={`inline-flex items-center space-x-1 ${config.bgColor} px-2 py-1 rounded-full ${className}`}>
      <span className={`${config.color} font-bold ${sizeClasses}`}>
        {config.arrow}
      </span>
      {showPercentage && (
        <span className={`${config.color} font-semibold ${sizeClasses}`}>
          {config.symbol}{percentage}%
        </span>
      )}
    </span>
  );
};

export default TrendArrow;