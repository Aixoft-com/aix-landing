import React from 'react';

export const ServiceDescription: React.FC<Record<string, unknown>> = () => {
    return (
        <section id="services" className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                        <div className="section-title">
                            <h2 className="title">
                                Awesome <span>Service</span>
                            </h2>
                            <p className="mb-0">
                                At Aixoft we are aware that creating client-oriented software takes a mixture of
                                technical excellence and clear communication and our firm is here to ensure you receive
                                both. We know that every client is unique and we strive to deliver an individual,
                                innovative and affordable proposal every time and to follow it through with an
                                outstanding delivery which is both on time and within budget.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
