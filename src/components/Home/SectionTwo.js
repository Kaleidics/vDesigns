import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"

import team from "../../assets/animations/team.json"

const SectionTwo = () => {
  let animationContainer4 = createRef()

  useEffect(() => {
    const anim4 = lottie.loadAnimation({
      container: animationContainer4.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: team,
    })
    return () => {
      anim4.destroy()
    }
  }, [])
  return (
    <section class="section z-index-10-mx">
      <div class="flex-block row-reverse">
        <div class="flex-container expand-to-left">
          <h2 class="section-heading vertical-text">
            <span>
              <span class="primary-color">$0</span> down,
            </span>
            <span>
              <span class="primary-color">Flexible</span> plan,
            </span>
            <span>
              No minimum <span class="primary-color">contract</span>
            </span>
          </h2>
          <p class="normal-text text-center center-to-left">
            Sounds too good to be true? Well, we started with the singular
            mission to help bring small businesses online. We'll work with you
            to launch a website that fits your needs without breaking the bank.
          </p>
          <a class="page-link" href="#">
            Learn more<span class="arr-right">&raquo;</span>
          </a>
        </div>
        <div
          class="flex-container-image mobile-hidden flex-start"
          ref={animationContainer4}
        ></div>
      </div>
    </section>
  )
}

export default SectionTwo
