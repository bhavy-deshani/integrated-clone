"use client";

import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map(interval => {
        if (!timeLeft[interval] && interval !== 'days') {
             if (timeLeft.days === 0 && interval === 'hours' && timeLeft.hours === 0 && timeLeft.minutes === 0) {
                // don't hide seconds if it's the last minute
            } else if (timeLeft.days === 0 && interval === 'hours' && timeLeft.hours === 0) {
                // don't hide minutes if it's the last hour
            } else if (timeLeft.days === 0 && interval === 'hours') {
                // don't hide hours if it's the last day
            } else {
                 return null;
            }
        }

        return (
            <div key={interval} className="text-center">
                <span className="text-2xl font-bold text-primary">{String(timeLeft[interval]).padStart(2, '0')}</span>
                <span className="text-xs text-text-secondary uppercase">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex justify-center space-x-4">
            {timerComponents.length ? timerComponents : <span className="text-xl font-bold text-red-600">Bidding Closed</span>}
        </div>
    );
};

export default CountdownTimer;