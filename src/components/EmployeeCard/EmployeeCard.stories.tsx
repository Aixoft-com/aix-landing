import React from 'react';
import { EmployeeCard } from './EmployeeCard';
import examplePicture from '../AboutUsPage/man-smiling.jpg';

export default {
    title: 'Employee Card',
    component: EmployeeCard,
};

const data = {
    name: 'Tomasz',
    description: 'Some quick example text to build on the card title and make up the bulk of the cars content',
    image: examplePicture,
};

export const ExampleEmployee = () => (
    <EmployeeCard name={data.name} description={data.description} image={data.image} />
);
