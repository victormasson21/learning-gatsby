import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <Header headerText="Hello Gatsby!" />
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
