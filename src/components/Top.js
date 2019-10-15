import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"
import { Link } from 'gatsby'
import TopProfile from './TopProfile'
import SelfIntro from './SelfIntro'

import topMain from '../img/top_main.jpg'

const Header = () => (
  <Wrapper id="top">
    <Block>
      <Border />
      <TopProfile />
      <SelfIntro />
    </Block>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  background: url(${topMain}) 0 top no-repeat;
  background-size: cover;
  min-height: 430px;
  width: 100%;
  z-index: 0;
  padding: 74px 0 80px 0;
  box-sizing: border-box;
`

const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  ${media.lessThan("medium")`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`

const Border = styled.div`
  position: absolute;
  top: 32%;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  ${media.lessThan("small")`
    top: 29%;
  `}
`