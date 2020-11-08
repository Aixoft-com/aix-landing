import React, { ReactNode } from 'react';
import './LinkButton.css';

interface LinkButtonProps {
    style: string;
    scrollTo: string;
    children: ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ style, scrollTo, children }: LinkButtonProps) => {
    return (
        <a className={`btn btn-radius ${style}`} href={scrollTo}>
            <span>{children}</span>
        </a>
    );
};
