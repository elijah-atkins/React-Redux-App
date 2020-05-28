import { ReactComponent as SVGt } from '../../store/svgSource/t.svg';
import styled, { keyframes } from 'styled-components'

const lighting = keyframes`
0%{ opacity: 1}
3%{ opacity: 0}
10%{ opacity: 1}
22% { opacity: 1}
25%{ opacity: 0}
32%{opacity: 1}
78%{ opacity: 1}
80%{ opacity: 0}
88%{ opacity: 1}
100% {opacity: 1}
`;

const T = styled(SVGt)`
    display:block;
    margin:auto;
    .t-cloud{
        color: #ddd;
    }
    .t-bolt{
        color: #ee6;
        animation: ${lighting} infinite 1000ms linear;

    }
`

export default T