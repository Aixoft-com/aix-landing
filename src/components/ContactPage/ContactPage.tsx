import React from 'react';

export const ContactPage: React.FC<Record<string, unknown>> = () => {
    return (
        <section id="contact-us">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                        <div className="section-title">
                            <h2 className="title">
                                Lets <span>Contact Us</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-box">
                            <div className="row">
                                <div className="col-md-12 text-center md-mt-5">
                                    <div className="col-md-12 text-center md-mt-5">
                                        <ul className="contact-info list-unstyled">
                                            <li>
                                                <i className="flaticon-email"></i>
                                                <span>Email</span>
                                                <a href="mailto:contact@aixoft.com">contact@aixoft.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
