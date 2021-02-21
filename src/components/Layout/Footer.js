import React from "react"
import Nform from "../Nform"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background-container-right mobile-hide"></div>
      <div className="footer-container flex-block">
        <div className="footer-container-left">
          <h2 className="footer-title">Get in touch!</h2>
          <p className="footer-text">
            Send us a message and well get back to you as soon as possible!
          </p>
        </div>
        <Nform />
      </div>
    </footer>
  )
}

export default Footer
