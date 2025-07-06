// src/components/blog/ConfidenceMeter.tsx
import React from 'react';

interface ConfidenceMeterProps {
  level: number;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  showLevel?: boolean;
  className?: string;
}

const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({
  level,
  label = 'Confidence Level',
  size = 'medium',
  showLevel = true,
  className = ''
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return {
          container: 'w-16 h-16',
          text: 'text-xs',
          strokeWidth: '6'
        };
      case 'large':
        return {
          container: 'w-32 h-32',
          text: 'text-lg',
          strokeWidth: '4'
        };
      default:
        return {
          container: 'w-24 h-24',
          text: 'text-sm',
          strokeWidth: '5'
        };
    }
  };

  const getConfidenceColor = (level: number) => {
    if (level >= 90) return '#10B981'; // Green
    if (level >= 75) return '#3B82F6'; // Blue
    if (level >= 60) return '#F59E0B'; // Yellow
    if (level >= 40) return '#EF4444'; // Red
    return '#6B7280'; // Gray
  };

  const sizeConfig = getSizeClasses(size);
  const color = getConfidenceColor(level);
  
  // Normalize level to 0-100
  const normalizedLevel = Math.min(Math.max(level, 0), 100);
  
  // Calculate circle properties
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (normalizedLevel / 100) * circumference;

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className={`relative ${sizeConfig.container}`}>
        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={sizeConfig.strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth={sizeConfig.strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {showLevel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-bold ${sizeConfig.text}`} style={{ color }}>
              {normalizedLevel}%
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className={`mt-2 text-center text-gray-700 font-medium ${sizeConfig.text}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default ConfidenceMeter;