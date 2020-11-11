import React from 'react';

interface CounterProps {
    label: string;
    countTo: number;
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
    return (
        <div className="counter text-white">
            <span className="count-number" data-to="175" data-speed="10000">
                175
            </span>
            <label>{props.label}</label>
        </div>
    );
};
