import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
    from {
        filter:blur(5px);
        opacity:0;
    }
    to {
        filter:blur(0);
        opacity:1;
    }
`

const fromRightKeyframes = keyframes`
    from {
        transform: translateX(200px) scale(.1) skew(30deg, 20deg);
        filter:blur(5px);
        opacity:0;
    }
    to {
        transform: translateX(0) scale(.5) skew(0, 0);
        filter:blur(0);
        opacity:1;        
    }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

  export const fromRight = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fromRightKeyframes} ${type};`