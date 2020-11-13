import React from 'react';
import './TitlePage.css';
import manImage from './man.webp';

export const TitlePage: React.FC<Record<string, unknown>> = () => {
    return (
        <div className="page-wrapper">
            <section className="fullscreen-banner o-hidden p-0 text-left box-shadow banner">
                <div className="align-end">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <ul className="list-inline bnr-list mb-2">
                                    <li className="list-inline-item">Java</li>
                                    <li className="list-inline-item">Spring</li>
                                    <li className="list-inline-item">Cloud</li>
                                </ul>
                                <h1 className="cd-headline letters scale mb-2">
                                    <span className="d-block text-theme">Hi, We are</span>
                                    <span className="cd-words-wrapper text-black">
                                        <b className="is-visible">Aixoft</b>
                                        <b>Team of Java Devs</b>
                                    </span>
                                </h1>
                                <p className="text-black lead mb-3">
                                    We are here to help you develop your business, let`s Build Something
                                    <br />
                                    Providing solutions for your company
                                </p>
                                <a className="btn btn-theme btn-radius" href="#contact-us">
                                    <span>Hire Us</span>
                                </a>
                                <a className="btn btn-dark btn-radius page-scroll" href="#about">
                                    <span>Learn More</span>
                                </a>
                            </div>
                            <div className="col-lg-5 col-md-12 text-right md-mt-5">
                                <img className="img-center" src={manImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
