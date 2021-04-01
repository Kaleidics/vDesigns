import React, { useEffect, createRef } from "react"

import Header from "./Header"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import Footer from "../Layout/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <main class="main">
        <SectionFour />
        {/* <SectionOne /> */}
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </>
  )
}

export default Home
