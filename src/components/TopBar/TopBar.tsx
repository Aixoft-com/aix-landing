import React from 'react';
import logo from './logo.png';

interface TopBarProps {
    title: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title }: TopBarProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand logo" href="index.html">
                            <img src={logo} />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        <span>HOME</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        <span>About</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contactus">
                                        <span>Contact us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
