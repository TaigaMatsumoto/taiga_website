import React from 'react'
import styled from 'styled-components'
const Arrow = () => <ArrowWrapper />

const ArrowWrapper = styled.div`
  display: inline-block;
  height: 1vh;
  width: 1.5vw;
  background-color: black;
  position: relative;
  top: 40px;
  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.7vw 0 0.7vw 1.5vw;
    border-color: transparent transparent transparent black;

    left: 1.7vw;
    top: -0.5vw;
  }
`

export default Arrow
