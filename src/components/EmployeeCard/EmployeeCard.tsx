import React from 'react';
import './EmployeeCard.css';

interface EmployeeCardProps {
    name: string;
    description: string;
    image: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = (props: EmployeeCardProps) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};
