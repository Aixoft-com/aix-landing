import React from 'react';
import './App.css';
import { TitlePage } from './components/TitlePage/TitlePage';
import TopBar from './components/TopBar/TopBar';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { Footer } from './components/Footer/Footer';
import { ServiceDescription } from './components/ServiceDescription/ServiceDescription';

class App extends React.PureComponent {
    render(): JSX.Element {
        return (
            <div className="page-wrapper">
                <TopBar />
                <TitlePage />
                <AboutUsPage />
                <ServiceDescription />
                <ContactPage />
                <Footer />
            </div>
        );
    }
}

export default App;
