
import React, { useState, useEffect, useRef } from 'react';

const OrderTimer: React.FC = () => {
  const [timeDisplay, setTimeDisplay] = useState({
    hours: 2,
    minutes: 12
  });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hoursRef = useRef(2);
  const minutesRef = useRef(12);

  useEffect(() => {
    // Set up the timer only once on component mount
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        if (minutesRef.current > 0) {
          minutesRef.current -= 1;
        } else if (hoursRef.current > 0) {
          hoursRef.current -= 1;
          minutesRef.current = 59;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
        }

        // Update the display state only once per minute
        setTimeDisplay({
          hours: hoursRef.current,
          minutes: minutesRef.current
        });
      }, 60000); // Update every minute
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this only runs once

  // Get date 4 days from now
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 4);
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'short' 
  };
  const formattedDate = futureDate.toLocaleDateString('en-US', options);

  return (
    <div className="w-full px-4 text-center my-6 bg-black">
      <p className="font-semibold text-white">Want It By {formattedDate}?</p>
      <div className="flex items-center justify-center">
        <span className="font-semibold text-white mr-2">Order Within</span>
        <span className="font-bold text-gray-400">{timeDisplay.hours} Hours {timeDisplay.minutes} Minutes</span>
      </div>
    </div>
  );
};

export default OrderTimer;
