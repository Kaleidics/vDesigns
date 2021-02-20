import React from "react"

import check from "../../assets/images/check.svg"

const SectionThree = () => {
  return (
    <div class="background-wrapper">
      <div class="curve-grey"></div>
      <div class="curve-grey-reverse"></div>
      <section class="section margin-top-minus-50" id="test">
        <div class="flex-wrap mw-1080">
          <div class="icon-group">
            <img class="icon-check" src={check} alt="check mark" />
            <div class="mb-auto">
              <p class="section-heading fs-16 text-left">
                Web Design & Development
              </p>
              <p class="normal-text font-ax lh-16">
                We'll design, develop, and test your website until it fits your
                vision.
              </p>
            </div>
          </div>
          <div class="icon-group">
            <img class="icon-check" src={check} alt="check mark" />
            <div class="mb-auto">
              <p class="section-heading fs-16 text-left">SEO Optimization</p>
              <p class="normal-text font-ax lh-16">
                We make sure the website is always running its best in the
                ever-changing standards of the internet.
              </p>
            </div>
          </div>

          <div class="icon-group">
            <img class="icon-check" src={check} alt="check mark" />
            <div class="mb-auto">
              <p class="section-heading fs-16 text-left">Google Analytics</p>
              <p class="normal-text font-ax lh-16">
                We setup Google Analytics for free so we can monitor your site
                traffic and performance.
              </p>
            </div>
          </div>
          <div class="icon-group">
            <img class="icon-check" src={check} alt="check mark" />
            <div class="mb-auto">
              <p class="section-heading fs-16 text-left">
                24/7 Customer Service
              </p>
              <p class="normal-text font-ax lh-16">
                Just give us a call or shoot us an email - we'll be here ready
                and waiting.
              </p>
            </div>
          </div>

          <div class="icon-group">
            <img class="icon-check" src={check} alt="check mark" />
            <div class="mb-auto">
              <p class="section-heading fs-16 text-left">Unlimited Edits</p>
              <p class="normal-text font-ax lh-16">
                Change anything you want at anytime and it will be done that
                day.
              </p>
            </div>
          </div>
          <div class="icon-group">
            <img class="icon-check" src={check} alt="check mark" />
            <div class="mb-auto">
              <p class="section-heading fs-16 text-left">No Random Fees</p>
              <p class="normal-text font-ax lh-16">
                We want to help you bring your business online at a budget that
                works for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionThree
