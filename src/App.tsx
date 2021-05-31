import React from 'react';
import {NavBar} from "./layout/NavBar/NavBar";
import {TitlePage} from "./layout/TitlePage/TitlePage";
import {AboutUs} from "./layout/AboutUs/AboutUs";
import {Services} from "./layout/Services/Services";
import {ContactUs} from "./layout/ContactUs/ContactUs";
import {Footer} from "./layout/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <TitlePage />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
