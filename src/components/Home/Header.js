import React from "react"
import mockup from "../../assets/images/mockup6.png"

function header(props) {
  return (
    <header class="header">
      <nav class="nav">
        <div class="nav-container">
          <div class="nav-inner">
            <div class="nav-icon-container">
              <span class="nav-icon">V</span>
            </div>
          </div>
          <div class="nav-toggle">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="nav-desktop">
            <a class="nav-link mr-10" href="">
              Services
            </a>
            <a class="nav-link mr-10" href="">
              Portfolio
            </a>
            <a class="nav-link btn--blue" href="">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div class="header-container">
        <div class="header-description">
          <h1 class="title-heading flex-block">
            <span class="mr-20-dx">Virtualize</span>
            <span class="mr-20-dx">your</span>
            <span>business</span>
          </h1>
          <p class="header-text">
            Give your business an online presence - whether you're looking to
            start with a fresh website or looking to give yourself a brand new
            look. V Designs will bring you online, at a fraction of the cost of
            a big agency and with site speeds that leave WordPress/pagebuilders
            in the dust.
          </p>
        </div>
        <div class="header-CTA">
          <a class="btn btn--orange" href="">
            Let's Talk
          </a>
        </div>
      </div>
      <div class="v-shape-container">
        <div class="header-image-container">
          <img class="header-image" src={mockup} alt="iphone" />
        </div>
        <div class="v-shape-left">
          <div class="v-shape-1"></div>
          <div class="v-shape-2"></div>
        </div>
        <div class="v-shape-right">
          <div class="v-shape-1"></div>
          <div class="v-shape-2"></div>
        </div>
      </div>
    </header>
  )
}

export default header
