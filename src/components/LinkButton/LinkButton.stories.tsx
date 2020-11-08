import React from 'react';
import { LinkButton } from './LinkButton';

export default {
    title: 'Link Button',
    component: LinkButton,
};

export const HireUs = () => (
    <LinkButton style={'btn-theme'} scrollTo="contact-us">
        Hire Us
    </LinkButton>
);
export const LearnMore = () => (
    <LinkButton style={'btn-dark'} scrollTo="about">
        Learn More
    </LinkButton>
);
