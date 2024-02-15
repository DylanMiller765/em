import React, { useState, useEffect, useCallback } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    let difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [targetDate, calculateTimeLeft]); // Include targetDate and calculateTimeLeft in dependency array

  if (Object.keys(timeLeft).length === 0) {
    return <div className="mt-8 text-center">Countdown expired!</div>;
  }

  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Countdown to Our Special Moment:</h2>
      <p className="font-semibold text-lg">
        {Object.entries(timeLeft).map(([unit, value]) => `${value} ${unit}`).join(', ')}
      </p>
    </div>
  );
};

export default CountdownTimer;
