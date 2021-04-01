import React from "react"
import { Link } from "gatsby"

import mockup from "../../assets/images/mockup6.png"
import testimage from "../../assets/images/sol_insr.jpg"

function header(props) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-inner">
            <div className="nav-icon-container">
              <span className="nav-icon">V</span>
            </div>
          </div>
          <div className="nav-toggle">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="nav-desktop">
            <Link className="nav-link mr-10" to="/services">
              Services
            </Link>
            <Link className="nav-link mr-10" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link btn--blue-outline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="header-container">
        <div className="header-description">
          <h1 className="title-heading flex-block">
            <span className="mr-20-dx">Virtualize</span>
            <span className="mr-20-dx">Your</span>
            <span>Business</span>
          </h1>
          <p className="header-text">
            Give your business an online presence - whether you're looking to
            start with a fresh website or looking to give yourself a brand new
            look. V Designs will bring you online, at a fraction of the cost of
            a big agency and with site speeds that leave WordPress/pagebuilders
            in the dust.
          </p>
        </div>
        <div className="header-CTA">
          <a className="btn btn--orange" href="">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="v-shape-container">
        <div className="header-image-container">
          <img className="header-image" src={testimage} alt="iphone" />
        </div>
        <div className="v-shape-left">
          <div className="v-shape-1"></div>
          <div className="v-shape-2"></div>
        </div>
        <div className="v-shape-right">
          <div className="v-shape-1"></div>
          <div className="v-shape-2"></div>
        </div>
      </div>
    </header>
  )
}

export default header
