import { ReactComponent as SVGsn } from '../../store/svgSource/sn.svg';
import styled, { keyframes } from 'styled-components'

const snowfall = keyframes`
  0% {
    transform: translateX(0px) translateY(-30px);
  }
  10% {
    transform: translateX(10px) translateY(-20px);
  }
  20% {
    transform: translateX(0px) translateY(-10px);
  }
  30%{
    transform: translateX(-10px) translateY(0px);
  }
  40% {
    transform: translateX(0px) translateY(10px);
  }
  50% {
    transform: translateX(10px) translateY(20px);
  }
  60% {
    transform: translateX(0px) translateY(30px);
  }
  70%{
    transform: translateX(-10px) translateY(40px);
  }
  80% {
    transform: translateX(0px) translateY(50px);
  }
  90%{
    transform: translateX(10px) translateY(60px);
  }
  100% {
    transform: translateX(10px) translateY(70px);
  }
`;

const SN = styled(SVGsn)`
    display:block;
    margin:auto;
    .sn-flake{
        animation: ${snowfall} infinite 5000ms linear;
    }
`

export default SN;