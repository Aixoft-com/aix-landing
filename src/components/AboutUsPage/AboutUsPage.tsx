import React from 'react';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import tomekPic from './tomek.jpg';
import krystianPic from './krystian.png';
import piotrPic from './piotr.png';

export const AboutUsPage: React.FC<Record<string, unknown>> = () => {
    const tomekProfile = {
        name: 'Tomasz',
        description: 'Some quick example text to build on the card title and make up the bulk of the cars content',
        image: tomekPic,
    };

    const krystianProfile = {
        name: 'Krystian',
        description: 'Some quick example text to build on the card title and make up the bulk of the cars content',
        image: krystianPic,
    };

    const piotrProfile = {
        name: 'Piotr',
        description: 'Some quick example text to build on the card title and make up the bulk of the cars content',
        image: piotrPic,
    };

    return (
        <section id="about" className="pos-r o-hidden">
            <canvas id="confetti"></canvas>
            <canvas id="canvas-1"></canvas>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 mr-auto">
                        <div className="section-title">
                            <h2 className="title">
                                About <span>Us</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-desc">
                            <h5 className="mb-3 font-italic font-weight-bold">Interactive Designer</h5>
                            <p>
                                We are group of three experienced java developers. Each of us has over 6 years of
                                development experience in this area and a wide variety of experience in various domains.
                            </p>
                            <ul className="list-inline mb-4">
                                <li className="list-inline-item">
                                    <i className="flaticon-newsletter"></i>
                                    <a href="mailto:contact@aixoft.com">contact@aixoft.com</a>
                                </li>
                            </ul>
                            <a className="btn btn-border btn-radius" href="#">
                                Hire Us
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 md-mt-5">
                        <ProgressBar label="Java" percent={90} />
                        <ProgressBar label="Spring" percent={80} />
                        <ProgressBar label="Cloud" percent={75} />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-4">
                        <EmployeeCard
                            name={krystianProfile.name}
                            description={krystianProfile.description}
                            image={krystianProfile.image}
                        />
                    </div>
                    <div className="col-md-4">
                        <EmployeeCard
                            name={piotrProfile.name}
                            description={piotrProfile.description}
                            image={piotrProfile.image}
                        />
                    </div>
                    <div className="col-md-4">
                        <EmployeeCard
                            name={tomekProfile.name}
                            description={tomekProfile.description}
                            image={tomekProfile.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
