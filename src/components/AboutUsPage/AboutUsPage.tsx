import React from 'react';
import manSmilingImage from './man-smiling.jpg';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const AboutUsPage: React.FC<Record<string, unknown>> = () => {
    const cardData = {
        name: 'Willimson',
        description: 'Some quick example text to build on the card title and make up the bulk of the cars content',
        image: manSmilingImage,
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
                        <EmployeeCard name={cardData.name} description={cardData.description} image={cardData.image} />
                    </div>
                    <div className="col-md-4">
                        <EmployeeCard name={cardData.name} description={cardData.description} image={cardData.image} />
                    </div>
                    <div className="col-md-4">
                        <EmployeeCard name={cardData.name} description={cardData.description} image={cardData.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};
