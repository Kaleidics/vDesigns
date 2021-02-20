import React, { useEffect, createRef } from "react"

import Header from "./Header"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import Footer from "../Layout/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <main class="main">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </>
  )
}

export default Home
