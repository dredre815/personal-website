import React, { useEffect } from 'react';
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

  &:hover {
    background: var(--button-hover);
    transform: rotate(360deg);
  }
`;

const ThemeSwitcher = () => {
  const { themePreference, setThemePreference } = useTheme();

  useEffect(() => {
    // Check if it's mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      setThemePreference('system');
    }

    // Listen for window resize
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        setThemePreference('system');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setThemePreference]);

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
      {getThemeIcon()}
    </ThemeButton>
  );
};

export default ThemeSwitcher; 