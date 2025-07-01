
import React, { useState, useEffect } from 'react';

interface CounterComponentProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CounterComponent = ({ end, suffix = '', duration = 2000 }: CounterComponentProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span id={`counter-${end}`} className="animate-counter">
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

export default CounterComponent;
