// src/components/blog/CallNowButton.tsx
import React from 'react';

interface CallNowButtonProps {
  phone: string;
  text?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const CallNowButton: React.FC<CallNowButtonProps> = ({
  phone,
  text = 'Call Now',
  size = 'small',
  variant = 'primary',
  className = ''
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'px-3 py-1 text-sm';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white';
      case 'outline':
        return 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-white';
      default:
        return 'bg-green-600 hover:bg-green-700 text-white';
    }
  };

  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant);

  return (
    <a
      href={`tel:${phone}`}
      className={`inline-flex items-center space-x-2 ${sizeClasses} ${variantClasses} rounded-lg font-medium transition-colors duration-200 no-underline ${className}`}
    >
      <span>📞</span>
      <span>{text}</span>
    </a>
  );
};

export default CallNowButton;