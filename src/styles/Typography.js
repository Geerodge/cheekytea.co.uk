import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/SourceSansPro-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: SourceSansPro-Regular;
    src: url(${font});
  }
  html {
    font-family: SourceSansPro-Regular, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
