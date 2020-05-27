import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import CouseCart from "../components/Cart/CourseCart"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About us" />4
    <CouseCart courses={data.courses} />
    <Dualinfoblock
      heading="Our Team"
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

    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
