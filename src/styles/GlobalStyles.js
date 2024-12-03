import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${props => props.theme.primary};
    --background: ${props => props.theme.background};
    --text: ${props => props.theme.text};
    --hover: ${props => props.theme.hover};
    --nav-background: ${props => props.theme.navBackground};
    --border-color: ${props => props.theme.borderColor};
    --card-background: ${props => props.theme.cardBackground};
    --box-shadow: ${props => props.theme.boxShadow};
    --hover-shadow: ${props => props.theme.hoverShadow};
    --text-shadow: ${props => props.theme.textShadow};
    --input-background: ${props => props.theme.inputBackground};
    --input-border: ${props => props.theme.inputBorder};
    --button-hover: ${props => props.theme.buttonHoverBackground};
    --link-color: ${props => props.theme.linkColor};
    --link-hover: ${props => props.theme.linkHover};
    --divider: ${props => props.theme.dividerColor};
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
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary);
    margin: 1.5rem 0 1rem;
    line-height: 1.2;
    text-shadow: var(--text-shadow);
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: var(--link-hover);
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: var(--link-hover);
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }

  button {
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    background: var(--input-background);
    color: var(--text);
    padding: 0.5rem 1rem;
    border-radius: 4px;

    &:hover {
      background: var(--button-hover);
      border-color: var(--primary);
      transform: translateY(-1px);
      box-shadow: var(--hover-shadow);
    }
  }

  input, textarea {
    font-family: 'Courier New', Courier, monospace;
    padding: 0.5rem;
    border: 1px solid var(--input-border);
    border-radius: 4px;
    background: var(--input-background);
    color: var(--text);
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px var(--button-hover);
    }
  }

  /* Card styles */
  .card {
    background: var(--card-background);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 0;
    border: 1px solid var(--border-color);
    box-shadow: var(--box-shadow);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: var(--hover-shadow);
      transform: translateY(-2px);
    }
  }

  /* Animation keyframes */
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

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
    
    &:hover {
      background: var(--hover);
    }
  }

  /* Selection styling */
  ::selection {
    background: var(--primary);
    color: var(--background);
  }
`;

export default GlobalStyles; 