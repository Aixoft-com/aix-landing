import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ContactUs.scss"
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export const ContactUs: React.FC<{}> = () => {
    return(
      <>
        <section id="contactus" className="contactUs">
          <h1>
            Contact
            <span>Us</span>
          </h1>

          <span className="contactUs-icon">
            <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
          </span>

          <h2>Email</h2>
          <a href="mailto:contact@aixoft.com">contact@aixoft.com</a>
        </section>

      </>

)
}
