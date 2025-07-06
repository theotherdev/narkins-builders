// src/components/blog/AnimatedCounter.tsx
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  label,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div 
      id={`counter-${label.replace(/\s+/g, '-')}`}
      className={`inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-lg border border-blue-200 ${className}`}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm text-gray-700 font-medium">{label}</div>
      </div>
    </div>
  );
};

export default AnimatedCounter;