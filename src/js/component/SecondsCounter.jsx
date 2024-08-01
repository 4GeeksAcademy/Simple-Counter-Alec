// src/components/SecondsCounter.jsx
import React, { useState, useEffect } from 'react';
import '/workspaces/Simple-Counter-Alec/src/styles/index.css'

const SecondsCounter = ({ seconds }) => {
    const [currentSeconds, setCurrentSeconds] = useState(seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const secondsString = currentSeconds.toString().padStart(6, '0');

    return (
        <div className="seconds-counter">
            <i className="clock fa-regular fa-clock"></i>
            {secondsString.split('').map((digit, index) => (
                <div key={index} className="digits">
                    {digit}
                </div>
                
            ))}
        </div>
    );
};

export default SecondsCounter;


