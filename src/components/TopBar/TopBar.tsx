import React from 'react';

interface TopBarProps {
    title: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title }: TopBarProps) => {
    return <header>Top Bar with titles: {title}</header>;
};
