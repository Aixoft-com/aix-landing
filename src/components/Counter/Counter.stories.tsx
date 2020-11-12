import React from 'react';
import { Counter } from './Counter';

export default {
    title: 'Counter',
    component: Counter,
};

export const ExampleCounter = () => {
    return (
        <section className="dark-bg text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <Counter countTo={34} label="Example Label" />
                    </div>
                </div>
            </div>
        </section>
    );
};
