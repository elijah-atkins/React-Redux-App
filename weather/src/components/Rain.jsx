import React, { Component } from 'react';
import { ReactComponent as HeavyRain } from '../svgSource/hr.svg';
import styled, { keyframes } from 'styled-components'

const fall = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
`;

const Rain = styled(HeavyRain)`
    height:25rem;
    width:25rem;
    display:block;
    margin:auto;
    .hr-rain{
        animation: ${fall} infinite 1s linear;
    }
`

export default Rain