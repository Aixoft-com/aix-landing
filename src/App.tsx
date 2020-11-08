import React from 'react';
import './App.css';
import { TitlePage } from './components/TitlePage/TitlePage';
import { TopBar } from './components/TopBar/TopBar';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { Footer } from './components/Footer/Footer';
import { ServiceDescription } from './components/ServiceDescription/ServiceDescription';
import { Counters } from './components/Counters/Counters';

function App() {
    return (
        <div>
            <TopBar title="hello" />
            <TitlePage />
            <AboutUsPage />
            <ContactPage />
            <ServiceDescription />
            <Counters />
            <Footer />
        </div>
    );
}

export default App;
