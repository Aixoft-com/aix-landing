import React from 'react';
import CountUp from 'react-countup';

interface CounterProps {
    label: string;
    countTo: number;
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
    return (
        <div className="counter text-white">
            <span className="count-number">
                <CountUp delay={1} end={props.countTo} />
            </span>
            <label>{props.label}</label>
        </div>
    );
};
