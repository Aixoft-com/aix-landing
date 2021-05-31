import React from "react";
import "./TitlePage.scss"
import man from "./man.webp"

export const TitlePage: React.FC<{}> = () => {
    return (
      <section id="home" className="titlePage">
        <div className="titlePage-text">
          <h2>
            Hi, we are  &nbsp;
            <span>Aixoft</span>
          </h2>
          <h3>Providing solutions for your company</h3>

        </div>
        <div className="titlePage-image">
          <img src={man} alt="man" />
        </div>
      </section>
    )
}
