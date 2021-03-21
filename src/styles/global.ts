import { createGlobalStyle } from 'styled-components';

import './css/animations.module.css';

export default createGlobalStyle`

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  :root {
    --white: #fff;
    --background: ${(props) => props.theme.colors.background};
    --gray-line: ${(props) => props.theme.colors.grayLine};
    --text: ${(props) => props.theme.colors.text};
    --text-highlight: ${(props) => props.theme.colors.textHighlight};
    --title: ${(props) => props.theme.colors.title};
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953b8;
    --blue-light: #B2B9FF;
    --blue-twitter: #2AA9E0;
    --shape: ${(props) => props.theme.colors.shape};

    --invert-white: ${(props) => props.theme.colors.invertWhite};
    --invert-black: ${(props) => props.theme.colors.invertBlack};
    --overlay: ${(props) => props.theme.colors.overlay};

    --clockBackgroundBorder: ${(props) =>
      props.theme.colors.clockBackgroundBorder};
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body, #root {
      height: 100%;
    }

    body {
      -webkit-font-smoothing: antialiased !important;
      background-color: var(--background);
      color: var(--text);
      transition: all 300ms ease;
    }

    body, input, button, textarea {
      font: 400 1rem 'Inter', Arial, Helvetica, sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
      /* font-weight: 600; */
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    .loading {
      align-items: center;
      background: var(--background);
      display: flex;
      height: 100vh;
      justify-content: center;
      opacity: 0.75;
      transform: scale(2);
      width: 100%;
    }

    .c-loader {
      animation: is-rotating 1s infinite;
      border-radius: 50%;
      border-top-color: var(--green);
      border: 6px solid var(--gray-line);
      height: 50px;
      width: 50px;
    }

    @keyframes is-rotating {
    to {
      transform: rotate(1turn);
      transform: scale(1.2);
    }
  }
`;
