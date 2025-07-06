// src/components/blog/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  completion: number;
  label?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  size?: 'small' | 'medium' | 'large';
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  completion,
  label,
  color = 'blue',
  size = 'medium',
  showPercentage = true,
  animated = true,
  className = ''
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-500',
          lightBg: 'bg-green-100',
          text: 'text-green-700'
        };
      case 'red':
        return {
          bg: 'bg-red-500',
          lightBg: 'bg-red-100',
          text: 'text-red-700'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500',
          lightBg: 'bg-yellow-100',
          text: 'text-yellow-700'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          lightBg: 'bg-purple-100',
          text: 'text-purple-700'
        };
      default:
        return {
          bg: 'bg-blue-500',
          lightBg: 'bg-blue-100',
          text: 'text-blue-700'
        };
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'h-2';
      case 'large':
        return 'h-6';
      default:
        return 'h-4';
    }
  };

  const colorConfig = getColorClasses(color);
  const sizeClasses = getSizeClasses(size);

  // Ensure completion is between 0 and 100
  const normalizedCompletion = Math.min(Math.max(completion, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <span className={`text-sm font-semibold ${colorConfig.text}`}>
              {normalizedCompletion}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full ${colorConfig.lightBg} rounded-full ${sizeClasses} overflow-hidden`}>
        <div
          className={`${colorConfig.bg} ${sizeClasses} rounded-full transition-all duration-1000 ease-out ${animated ? 'animate-pulse' : ''}`}
          style={{ width: `${normalizedCompletion}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;