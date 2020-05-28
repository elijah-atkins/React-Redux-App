import { ReactComponent as SVGlr } from '../../store/svgSource/lr.svg';
import styled, { keyframes } from 'styled-components'

const lrFall = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(22px);
  }
`;

const LR = styled(SVGlr)`
    display:block;
    margin:auto;
    .lr-rain-drop {
      color: #36d;
    }
    .lr-rain{

        animation: ${lrFall} infinite 700ms linear;
    }  

    .lr-cloud {
      color: #ddd;
    }
`

export default LR