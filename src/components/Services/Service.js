import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About us" />
    <Dualinfoblock
      heading="Our Services"
      cardname="Picture Chnaged"
      imgUrl="https://images.pexels.com/photos/1672637/pexels-photo-1672637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicePage
