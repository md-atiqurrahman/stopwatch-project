import React, { useEffect, useState } from 'react';
import './StopWatch.css';

const StopWatch = () => {
    const [active, setActive] = useState(false);
    const [paused, setPaused] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (active && paused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10)
            }, 10)
        }

        return () => {
            clearInterval(interval)
        }

    }, [active, paused]);

    const handleStart = () => {
        setActive(true);
        setPaused(false);
    };

    const handleReset = () => {
        setTime(0);
        setActive(false);
        setPaused(false);
    };

    const handleStop = () => {
        setPaused(true)
    }

    return (
        <div className='page-container'>
            <div className="stopwatch-container">
                <div className='display-time'>
                    <div className='title'>
                        <p>Stop Watch</p>
                    </div>
                    <div className='time-counter'>
                        <h1>{('0' + (Math.floor(time / 3600000) % 24)).slice(-2)}</h1>
                        <h1>{('0' + (Math.floor(time / 60000) % 60)).slice(-2)}</h1>
                        <h1>{('0' + (Math.floor(time / 1000) % 60)).slice(-2)}</h1>
                        <h1>{('0' + (Math.floor(time / 10) % 100)).slice(-2)}</h1>
                    </div>
                </div>
                <div className='buttons-container'>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleStop}>Stop</button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;