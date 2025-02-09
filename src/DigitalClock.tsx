import React, { useState, useEffect } from 'react';

interface TimeZone {
  label: string;
  tz: string;
}

const timeZones: TimeZone[] = [
  { label: 'Local Time', tz: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { label: 'New York', tz: 'America/New_York' },
  { label: 'London', tz: 'Europe/London' },
  { label: 'Tokyo', tz: 'Asia/Tokyo' },
  { label: 'South Africa', tz: 'Africa/Johannesburg' }
];

const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      {timeZones.map((zone) => (
        <div 
          key={zone.tz} 
          className="clock-card"
          role="region"
          aria-label={`Current time in ${zone.label}`}
        >
          <h3 className="clock-label">{zone.label}</h3>
          <p className="clock-time">
            {currentTime.toLocaleTimeString('en-US', {
              timeZone: zone.tz,
              hour12: false
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DigitalClock;