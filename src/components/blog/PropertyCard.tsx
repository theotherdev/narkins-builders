// src/components/blog/PropertyCard.tsx
import React from 'react';
import CallNowButton from './CallNowButton';

interface PropertyCardProps {
  title: string;
  priceDisplay?: string;
  price?: string;
  size?: string;
  features?: string[];
  image?: string;
  link?: string;
  completionStatus?: number;
  consultationRequired?: boolean;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  priceDisplay = "Contact for Pricing",
  price,
  size,
  features = [],
  image,
  link,
  completionStatus,
  consultationRequired = true,
  className = ''
}) => {
  const displayPrice = price || priceDisplay;

  return (
    <div className={`bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden my-8 ${className}`}>
      {image && (
        <div className="aspect-[16/9] relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {completionStatus && (
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {completionStatus}% Complete
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-blue-600">{displayPrice}</span>
          {size && <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded">{size}</span>}
        </div>
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
            <ul className="grid grid-cols-1 gap-1 text-gray-600">
              {features.map((feature, index) => (
                <li key={index} className="text-sm flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          {link && (
            <a
              href={link}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium no-underline"
            >
              View Details
            </a>
          )}
          <CallNowButton 
            phone="+923203243970" 
            text={consultationRequired ? 'Get Pricing' : 'Call Now'} 
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;