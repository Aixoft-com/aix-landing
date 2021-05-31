import React from "react";
import krystianPhoto from "./krystian.webp";
import piotrPhoto from "./piotr.webp";
import tomaszPhoto from "./tomasz.webp"
import "./AboutUs.scss"
import {ProgressBar} from "../../components/ProgressBar/ProgressBar";
import {AboutCard} from "../../components/AboutCard/AboutCard";

const people = [
    {
        image: krystianPhoto,
        name: "Krystian",
        description: "Solving complicated problems provides me a lot of delight. Due to my strong communication skills I prefer to work in team. Currently I’m joining my technical knowledge with improving my management skills."
    }, {
        image: piotrPhoto,
        name: "Piotr",
        description: "Passionate of creating software that shapes living for the better. Open for new technologies and challenges. Interested in modern software architecture."
    }, {
    image: tomaszPhoto,
        name: "Tomasz",
        description: "Always open to learning new technologies and domains. Eager to explore new solutions for problems. Working within a team gives me possibility to learn and grow."
    }
]

export const AboutUs: React.FC<{}> = () => {
    return (
      <section id="about" className="about">
        <h1>
          About
          <span>Us</span>
        </h1>
        <div className="about-description">
          <div className="about-description-text">
            <h2>Software Developers</h2>
            <p>
              We are group of three experienced java developers. Each of us has over 6 years of development
              experience in this area and a wide variety of experience in various domains.
            </p>
          </div>
          <div className="about-skills">
            <ProgressBar label="Java" percent={90} />
            <ProgressBar label="Spring" percent={80} />
            <ProgressBar label="Cloud" percent={70} />

          </div>
        </div>
        <div className="about-team">
          {people.map(person => {
                return <AboutCard image={person.image} name={person.name} description={person.description} />
            })}
        </div>
      </section>
    )

}
