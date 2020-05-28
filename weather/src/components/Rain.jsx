import { ReactComponent as HeavyRain } from '../store/svgSource/hr.svg';
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
    color: #36d;
    .hr-rain{
        animation: ${fall} infinite 600ms linear;
    }
    .hr-cloud{
      color: #ddd;
      &:hover{
        color: #fff;
      }
    }
`

export default Rain