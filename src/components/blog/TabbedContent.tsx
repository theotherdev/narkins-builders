// src/components/blog/TabbedContent.tsx
import React, { useState } from 'react';

interface TabbedContentProps {
  tabs: string[];
  children: React.ReactNode;
  className?: string;
}

const TabbedContent: React.FC<TabbedContentProps> = ({
  tabs,
  children,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Convert children to array and filter out invalid elements
  const childrenArray = React.Children.toArray(children).filter(child => 
    React.isValidElement(child)
  );

  return (
    <div className={`my-8 ${className}`}>
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
              activeTab === index
                ? 'text-blue-600 border-blue-600 bg-blue-50'
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {childrenArray.length > activeTab ? (
          <div className="animate-fadeIn">
            {childrenArray[activeTab]}
          </div>
        ) : (
          <div className="text-gray-500 italic">
            Content for "{tabs[activeTab]}" not available
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedContent;