import React from 'react';
import './App.css';
import { TitlePage } from './components/TitlePage/TitlePage';
import { TopBar } from './components/TopBar/TopBar';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';
import { ContactPage } from './components/ContactPage/ContactPage';

function App() {
    return (
        <div>
            <TopBar title="hello" />
            <TitlePage />
            <AboutUsPage />
            <ContactPage />
        </div>
    );
}

export default App;
