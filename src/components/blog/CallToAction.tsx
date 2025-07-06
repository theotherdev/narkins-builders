// src/components/blog/CallToAction.tsx
import React from 'react';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  phone?: string;
  features?: string[];
  variant?: 'default' | 'gradient' | 'bordered';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  phone = '+923203243970',
  features = [],
  variant = 'gradient',
  size = 'medium',
  className = ''
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return {
          container: 'p-6',
          title: 'text-xl',
          description: 'text-base',
          button: 'px-6 py-2 text-sm'
        };
      case 'large':
        return {
          container: 'p-10',
          title: 'text-3xl',
          description: 'text-lg',
          button: 'px-8 py-4 text-lg'
        };
      default:
        return {
          container: 'p-8',
          title: 'text-2xl',
          description: 'text-lg',
          button: 'px-8 py-3 text-base'
        };
    }
  };

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'bordered':
        return 'bg-white border-2 border-blue-200';
      case 'default':
        return 'bg-blue-50 border border-blue-200';
      default:
        return 'bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200';
    }
  };

  const sizeConfig = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant);

  return (
    <div className={`${variantClasses} rounded-lg ${sizeConfig.container} my-8 ${className}`}>
      <div className="text-center">
        <h3 className={`${sizeConfig.title} font-semibold text-blue-900 mb-3`}>
          {title}
        </h3>
        <p className={`text-blue-700 mb-6 ${sizeConfig.description}`}>
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center text-sm text-blue-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={buttonLink}
            className={`inline-flex items-center justify-center bg-blue-600 text-white ${sizeConfig.button} rounded-lg hover:bg-blue-700 transition-colors font-medium no-underline`}
          >
            {buttonText}
          </a>
          <a
            href={`tel:${phone}`}
            className={`inline-flex items-center justify-center bg-green-600 text-white ${sizeConfig.button} rounded-lg hover:bg-green-700 transition-colors font-medium no-underline`}
          >
            <span className="mr-2">📞</span>
            Call: {phone}
          </a>
          <a
            href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center bg-green-500 text-white ${sizeConfig.button} rounded-lg hover:bg-green-600 transition-colors font-medium no-underline`}
          >
            <span className="mr-2">💬</span>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;