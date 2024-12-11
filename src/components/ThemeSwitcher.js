import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../styles/ThemeContext';

const ThemeButton = styled.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--text);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    z-index: 0;
  }

  &:hover {
    color: var(--background);
    transform: rotate(360deg);
    
    &:before {
      width: 150%;
      height: 150%;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 1.4rem;
    background: var(--primary);
    color: var(--background);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.1) rotate(360deg);
    }
  }
`;

const ThemeSwitcher = () => {
  const { themePreference, setThemePreference } = useTheme();

  const cycleTheme = () => {
    const themeOrder = ['system', 'light', 'dark'];
    const currentIndex = themeOrder.indexOf(themePreference);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setThemePreference(themeOrder[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (themePreference) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      default:
        return '🖥️';
    }
  };

  return (
    <ThemeButton 
      onClick={cycleTheme}
      aria-label="Toggle theme"
      title={`Current theme: ${themePreference}`}
    >
      <span>{getThemeIcon()}</span>
    </ThemeButton>
  );
};

export default ThemeSwitcher; 