import React from 'react';
import manSmilingImage from './man-smiling.jpg';

export const AboutUsPage: React.FC<Record<string, unknown>> = () => {
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
                        <div className="ht-progress-bar">
                            <h4>Java</h4>
                            <div className="progress" data-value="95">
                                <div className="progress-bar progress-bar-striped progress-bar-animated">
                                    <div className="progress-parcent">
                                        <span>90</span>%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ht-progress-bar">
                            <h4>Spring</h4>
                            <div className="progress" data-value="90">
                                <div className="progress-bar progress-bar-striped progress-bar-animated">
                                    <div className="progress-parcent">
                                        <span>80</span>%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ht-progress-bar">
                            <h4>Cloud</h4>
                            <div className="progress" data-value="80">
                                <div className="progress-bar progress-bar-striped progress-bar-animated">
                                    <div className="progress-parcent">
                                        <span>75</span>%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={manSmilingImage} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Willimson</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the cars
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={manSmilingImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Willimson</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the cards
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={manSmilingImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Willimson</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the cards
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
