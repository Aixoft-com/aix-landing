import React from 'react';
import logo from './logo.png';

export const Footer: React.FC<Record<string, unknown>> = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row text-center text-white">
                    <div className="col-md-12">
                        <div className="logo">
                            <img className="img-center" src="{ logo }" alt="" />
                        </div>
                        <div className="social-icon my-4">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-skype" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
