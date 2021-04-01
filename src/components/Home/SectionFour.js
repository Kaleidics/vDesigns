import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"

import team from "../../assets/animations/design.json"

const SectionFour = () => {
  let animationContainer5 = createRef()

  useEffect(() => {
    const anim5 = lottie.loadAnimation({
      container: animationContainer5.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: team,
    })
    return () => {
      anim5.destroy()
    }
  }, [])
  return (
    <section class="section z-index-10-mx">
      <div class="flex-block">
        <div class="flex-container expand-to-left">
          <h2 class="section-heading vertical-text">
            <span>
              <span class="primary-color">Mobile</span> First,
            </span>
            <span>
              <span class="primary-color">Custom</span> design,
            </span>
            <span>
              Web <span class="primary-color">development</span>
            </span>
          </h2>
          <p class="normal-text text-center center-to-left">
            We specialize in custom web design and development for small
            businesses. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We code from
            scratch, from mobile to desktop - ensuring that no matter what
            device your customers are on, they're getting the best experience.
          </p>
          <a class="page-link" href="#">
            Get in touch<span class="arr-right">&raquo;</span>
          </a>
        </div>
        <div
          id="blob"
          class="flex-container-image mobile-hidden flex-start"
          ref={animationContainer5}
        ></div>
      </div>
    </section>
  )
}

export default SectionFour
