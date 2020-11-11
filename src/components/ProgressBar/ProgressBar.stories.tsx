import React from 'react';
import { ProgressBar } from './ProgressBar';

export default {
    title: 'Progress Bar',
    component: ProgressBar,
};

export const ExampleProgressBar = () => <ProgressBar percent={34} label="Java" />;
