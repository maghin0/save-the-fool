import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Overview from "../components/Overview"
import Problem from "../components/Problem"
import SocialProof from "../components/SocialProof"
import ProductBenefits from "../components/ProductBenefits"
import Market from "../components/Market"
import ProductFeatures from "../components/ProductFeatures"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Overview />
    <Problem />
    <SocialProof />
    <ProductBenefits />
    <Market />
    <ProductFeatures />
    <Testimonials />
    <CallToAction />
  </Layout>
)

export default IndexPage
