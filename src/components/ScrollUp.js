import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class ScrollUp extends Component {

  scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  render() {
    return(
      <Content>
        <UpLink to="/#top" >
          <StyledIcon icon={faAngleUp} onClick={this.scrollToTop} />        
        </UpLink>
      </Content>
    );
  }

}

export default ScrollUp;

const Content = styled.div`
  position: fixed;
  right: 53px;
  bottom: 33px;
`

const UpLink = styled(props => <Link {...props} />)`
  display: block;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #EF75BE;
  text-align: center;
  animation: bounce 2s infinite;
`

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  font-size: 48px;
  color: #FFFFFF;
  margin-top: 8px;
`
