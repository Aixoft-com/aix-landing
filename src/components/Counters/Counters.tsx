import React from 'react';

export const Counters: React.FC<Record<string, unknown>> = () => {
    return (
        <section className="dark-bg text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="counter text-white">
                            <span className="count-number" data-to="150" data-speed="10000">
                                150
                            </span>
                            <label>Complete Project</label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="counter text-white">
                            <span className="count-number" data-to="175" data-speed="10000">
                                175
                            </span>
                            <label>Lines of Code</label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="counter text-white">
                            <span className="count-number" data-to="344" data-speed="10000">
                                344
                            </span>
                            <label>Coffee Cup</label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="counter text-white">
                            <span className="count-number" data-to="125" data-speed="10000">
                                125
                            </span>
                            <label>Happy Clients</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
