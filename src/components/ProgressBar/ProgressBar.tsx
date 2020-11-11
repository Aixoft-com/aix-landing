import React from 'react';

interface ProgressBarProps {
    label: string;
    percent: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
    return (
        <div className="ht-progress-bar">
            <h4>{props.label}</h4>
            <div className="progress" data-value={props.percent}>
                <div className="progress-bar progress-bar-striped progress-bar-animated">
                    <div className="progress-parcent">
                        <span>{props.percent}</span>%
                    </div>
                </div>
            </div>
        </div>
    );
};
