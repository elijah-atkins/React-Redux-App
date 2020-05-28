import { ReactComponent as SVGs } from '../../store/svgSource/s.svg';
import styled, { keyframes } from 'styled-components'

const sFall = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(22px);
  }
`;

const S = styled(SVGs)`
    display:block;
    margin:auto;
        .s-rain{
        animation: ${sFall} infinite 1000ms linear;
    }
`

export default S