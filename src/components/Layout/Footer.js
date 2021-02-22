import React from "react"
import { Link } from "gatsby"

import Nform from "../Nform"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background-container-right mobile-hide"></div>
      <div className="footer-container flex-block">
        <div className="footer-container-left">
          <div>
            <h2 className="footer-title">Get in touch!</h2>
            <p className="footer-text">
              Send us a message and well get back to you as soon as possible!
            </p>
          </div>
          <div className="footer-links">
            <a
              id="link-email"
              className="footer-link"
              href="mailto: hello@vdesigns.io"
            >
              hello@vdesigns.io
            </a>
            <Link id="link-home" className="footer-link" to="/">
              Home
            </Link>
            <Link id="link-portfolio" className="footer-link" to="/portfolio">
              Portfolio
            </Link>
            <Link
              id="link-services"
              className="footer-link mb-0"
              to="/services"
            >
              Services
            </Link>
          </div>
        </div>
        <Nform />
      </div>
    </footer>
  )
}

export default Footer
