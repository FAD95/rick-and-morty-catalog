import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 html{ 
     box-sizing: border-box;
     font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
 }
 *, *:before, *:after{
     box-sizing: inherit
 }
 ul,li,h1,h2,h3,p,button{
     margin: 0;
     padding: 0;
 }
 ul{ list-style:none}
 button{
     background: transparent;
     border: 0;
     outline: 0;
 }
 body{ 
     background: #fefefe;
     height: 100vh;
     margin: 0 auto;
     max-width: 500px;
     overscroll-behavior: none;
     width: 100%;
 }
 #app{
     box-shadow: 0 0 10px rgba(0,0,0,0.05);
     overflow-x:hidden;
     min-height: 100vh;
     padding-bottom: 10px;
 }

 /* Make clicks pass-through */
#nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: #29d;
  
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
  
    width: 100%;
    height: 2px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1.0;
  
    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }
  
  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }
  
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
  
    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;
  
    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
`
