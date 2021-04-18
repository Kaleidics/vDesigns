import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"

import mobile from "../../assets/animations/mobile.json"
import coding from "../../assets/animations/coding.json"
import optimize from "../../assets/animations/optimize.json"

const SectionOne = () => {
  let animationContainer = createRef()
  let animationContainer2 = createRef()
  let animationContainer3 = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: mobile,
    })

    const anim2 = lottie.loadAnimation({
      container: animationContainer2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: coding,
    })

    const anim3 = lottie.loadAnimation({
      container: animationContainer3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: optimize,
    })

    return () => {
      anim.destroy()
      anim2.destroy()
      anim3.destroy()
    }
  }, [])

  return (
    <section class="section">
      <div class="flex-block">
        <div class="flex-container align-center mw-320">
          <div class="card-icon" ref={animationContainer}></div>
          <p class="section-heading fs-16">Mobile First Design</p>
          <p class="normal-text">
            Mobile devices account for over 50% of all internet traffic. We
            develop the website with a mobile first approach to ensure it runs
            well on any device.
          </p>
        </div>
        <div class="flex-container align-center mw-320">
          <div class="card-icon" ref={animationContainer2}></div>
          <p class="section-heading fs-16">Custom Development</p>
          <p class="normal-text">
            The truth is most websites you'll find are WordPress templates -
            repurposed, rebranded and sold to you at up to 10 times the cost.
            But not here.{" "}
            <a href="#" class="normal-text">
              Learn more
            </a>
          </p>
        </div>
        <div class="flex-container align-center mw-320">
          <div class="card-icon" ref={animationContainer3}></div>
          <p class="section-heading fs-16">Web Services</p>
          <p class="normal-text">
            Web search rankings have gotten complicated over the years. We'll
            handle the hosting, SEO, and analytics to ensure the best search
            results for your website.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
