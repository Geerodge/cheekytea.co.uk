import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';

const GlobalStyles = createGlobalStyle`
    :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --green: #599b44;
  }
  html {
    background-image: url(${bg});
    background-attachment: fixed;
    font-size: 10px;
  }

  body {
      font-size: 2rem;
  }


  ul, ol {
    padding: 0;
    margin: 0;
  }

  button {
    border: none;
    padding: .8rem 1.2rem;
    border-radius: 2px;
    background-color: var(--green);
    color: var(--white);
    text-transform: uppercase;
    /* text-shadow: rgba(0, 0, 0, 0.2) 0.5px 0.5px 0px; */
    &:hover {
        --cast: 4px;
        cursor: pointer;
        background: var(--black);
        color: var(--white);
        transition: all 0.2s ease-in-out;
    }
  }

  .mark {
    background: var(--green);
    padding: 0px 2px 2px;
    margin: 0px;
    display: inline;
    line-height: 1;
  }
  hr {
        border: 0;
        border-bottom: 1px dashed var(--black);
  }

  a {
        text-decoration: none;
        color: var(--green);
        text-decoration: underline;
        &:hover {
            color: var(--black);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
    }

    h1 {
      font-size: 2.5em;
    }

`;

export default GlobalStyles;