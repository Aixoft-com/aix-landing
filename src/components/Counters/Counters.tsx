import React from 'react';
import { Counter } from '../Counter/Counter';

export const Counters: React.FC<Record<string, unknown>> = () => {
    return (
        <section className="dark-bg text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <Counter label="Complete Projects" countTo={150} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <Counter label="Lines of code" countTo={175} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <Counter label="Coffe Cup" countTo={344} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <Counter label="Happy Clients" countTo={125} />
                    </div>
                </div>
            </div>
        </section>
    );
};
