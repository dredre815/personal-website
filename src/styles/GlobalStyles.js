import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #00ff00;
    --background: #000000;
    --text: #ffffff;
    --hover: #32CD32;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: 'Courier New', Courier, monospace;
    line-height: 1.6;
  }

  a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export default GlobalStyles; 