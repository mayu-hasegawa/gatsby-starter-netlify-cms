import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const WorksImg = ({ data }) => {
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt=""
    />
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "output01.png" }) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default WorksImg