import React from "react"
import { Link } from "gatsby"

import "../utils/base.css"
import "../utils/animations.css"
import "../utils/styles.css"

import Head from "../components/head"
import Home from "../components/Home/Home"

const IndexPage = () => {
  return (
    <>
      <Head title="Home" />
      <Home />
    </>
  )
}

export default IndexPage
