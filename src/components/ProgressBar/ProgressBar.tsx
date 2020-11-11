import React, { useState } from 'react';

interface ProgressBarProps {
    label: string;
    percent: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
    const [currentPercent, setCurrentPercent] = useState(24);
    requestAnimationFrame(() => {
        setCurrentPercent(props.percent);
    });

    return (
        <div className="ht-progress-bar">
            <h4>{props.label}</h4>
            <div className="progress" data-value={props.percent}>
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: `${currentPercent}%` }}
                >
                    <div className="progress-parcent">
                        <span>{props.percent}</span>%
                    </div>
                </div>
            </div>
        </div>
    );
};
