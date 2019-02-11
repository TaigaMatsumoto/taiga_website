import React from 'react'
import styled from 'styled-components'
import linkedInIcon from '../../images/linkedIn_icon.png'
import githubMarkIcon from '../../images/GitHub-Mark-64px.png'
const Footer = () => (
  <FooterWrapperParent>
    <FooterWrapper>
      <IconWrapper>
        <a href="https://www.linkedin.com/in/taiga-matsumoto">
          <Icon src={linkedInIcon} />
        </a>
      </IconWrapper>
      <IconWrapper>
        <a href="https://github.com/taigamatsumoto">
          <Icon src={githubMarkIcon} />
        </a>
      </IconWrapper>
    </FooterWrapper>
  </FooterWrapperParent>
)

const FooterWrapperParent = styled.div`
  width: 100%;
  height: 20vh;
  background-color: rgba(255, 255, 255, 0.7);
`
const FooterWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconWrapper = styled.div`
  width: 5vw;
  height: auto;
`
const Icon = styled.img`
  width: 4vw;
  height: auto;
`

export default Footer
