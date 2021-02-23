import { createGlobalStyle } from 'styled-components';

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
    --background: #F2F3F5;
    --gray-line: #dcdde0;
    --text: #666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953b8;
    --blue-twitter: #2AA9E0;
  }

  * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *:focus {
      outline: 0;
    }

    html, body, #root {
      height: 100%;
    }

    body {
      -webkit-font-smoothing: antialiased !important;
      background-color: var(--background);
      color: var(--text);
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
`;
