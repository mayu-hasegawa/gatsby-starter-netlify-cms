import React from 'react'
import { Helmet } from 'react-helmet'
import Sns from './Sns'
import Footer from './Footer'
import Top from './Top'
import SectionTitle from './SectionTitle'
import Works from './Works'
import Career from './Career'
import Activity from './Activity'
import './all.sass'
import { withPrefix } from 'gatsby'
import Img from "gatsby-image"

const TemplateWrapper = () => {
  return (
    <div>
      <Top />
      <SectionTitle
        title="WORKS"
        subtitle="制作実績など"
      />
      <Works />
      <Career />
      <SectionTitle
        title="ACTIVITY"
        subtitle="活動"
      />
      <Activity />
      <Sns />
      <Footer />
    </div>
  )
}

export default TemplateWrapper
