import React from "react"
import { Link } from "gatsby"

import Nform from "./Nform"

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-background-container-right mobile-hide"></div>
      <div className="contact-form-container flex-block">
        <div className="contact-form-container-left">
          <div>
            <h2 className="contact-form-title">Get in touch!</h2>
            <p className="contact-form-text">
              Send us a message and well get back to you as soon as possible!
            </p>
          </div>
          <div className="contact-form-links">
            <a
              id="link-email"
              className="contact-form-link"
              href="mailto: hello@vdesigns.io"
            >
              hello@vdesigns.io
            </a>
            <Link id="link-home" className="contact-form-link" to="/">
              Home
            </Link>
            <Link
              id="link-portfolio"
              className="contact-form-link"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              id="link-services"
              className="contact-form-link mb-0"
              to="/services"
            >
              Services
            </Link>
          </div>
        </div>
        <Nform />
      </div>
    </div>
  )
}

export default ContactForm
