import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const themes = {
  light: {
    primary: '#1a8917',
    background: '#f8f9fa',
    text: '#2c3e50',
    hover: '#27ae60',
    navBackground: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#1a8917',
    cardBackground: '#ffffff',
    cardBoxBackground: '#ffffff',
    cardBoxBorder: 'rgba(26, 137, 23, 0.2)',
    cardBoxShadow: 'rgba(26, 137, 23, 0.08)',
    researchCardBackground: '#ffffff',
    researchCardBorder: '#e0f2e9',
    researchCardShadow: '0 4px 6px rgba(26, 137, 23, 0.08)',
    researchCardHoverShadow: '0 8px 12px rgba(26, 137, 23, 0.12)',
    researchCardTitle: '#0e5c0b',
    researchCardText: '#2c3e50',
    researchCardSecondary: '#4a6f47',
    researchCardHighlight: '#1a8917',
    researchCardExpandedBg: '#ffffff',
    researchCardDivider: '#e0f2e9',
    researchCardTag: {
      background: '#f0f9f0',
      text: '#1a8917',
      border: '#cce8cc'
    },
    timelineBackground: 'rgba(248, 249, 250, 0.8)',
    timelineEventBackground: '#ffffff',
    timelineEventBorder: 'rgba(26, 137, 23, 0.15)',
    timelineEventShadow: 'rgba(26, 137, 23, 0.06)',
    timelineTextColor: '#2c3e50',
    footerBackground: '#ffffff',
    footerBorder: '#1a8917',
    footerText: '#2c3e50',
    footerQuoteBackground: '#f8f9fa',
    footerQuoteBorder: 'rgba(26, 137, 23, 0.2)',
    footerCopyrightText: '#6c757d',
    inputBackground: '#ffffff',
    inputBorder: 'rgba(26, 137, 23, 0.3)',
    buttonHoverBackground: 'rgba(26, 137, 23, 0.1)',
    linkColor: '#1a8917',
    linkHover: '#27ae60',
    dividerColor: 'rgba(26, 137, 23, 0.1)',
    boxShadow: '0 2px 12px rgba(26, 137, 23, 0.08)',
    hoverShadow: '0 4px 20px rgba(26, 137, 23, 0.12)',
    textShadow: 'none'
  },
  dark: {
    primary: '#00ff00',
    background: '#000000',
    text: '#ffffff',
    hover: '#32CD32',
    navBackground: 'rgba(0, 0, 0, 0.9)',
    borderColor: '#00ff00',
    cardBackground: 'rgba(0, 0, 0, 0.95)',
    timelineBackground: 'rgba(0, 0, 0, 0.2)',
    timelineEventBackground: 'rgba(0, 0, 0, 0.3)',
    timelineEventBorder: 'rgba(0, 255, 0, 0.1)',
    timelineEventShadow: 'rgba(0, 255, 0, 0.2)',
    timelineTextColor: '#ffffff',
    footerBackground: 'rgba(0, 0, 0, 0.9)',
    footerBorder: '#00ff00',
    footerText: '#ffffff',
    footerQuoteBackground: 'rgba(0, 255, 0, 0.05)',
    footerQuoteBorder: 'rgba(0, 255, 0, 0.2)',
    footerCopyrightText: '#666666',
    cardBoxBackground: 'rgba(0, 0, 0, 0.3)',
    cardBoxBorder: 'rgba(0, 255, 0, 0.1)',
    cardBoxShadow: 'rgba(0, 255, 0, 0.2)',
    inputBackground: 'rgba(0, 0, 0, 0.3)',
    inputBorder: 'rgba(0, 255, 0, 0.2)',
    buttonHoverBackground: 'rgba(0, 255, 0, 0.1)',
    linkColor: '#00ff00',
    linkHover: '#32CD32',
    dividerColor: 'rgba(0, 255, 0, 0.1)',
    boxShadow: '0 2px 12px rgba(0, 255, 0, 0.1)',
    hoverShadow: '0 4px 20px rgba(0, 255, 0, 0.15)',
    textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
    researchCardBackground: 'rgba(0, 0, 0, 0.3)',
    researchCardBorder: 'rgba(0, 255, 0, 0.1)',
    researchCardShadow: '0 4px 6px rgba(0, 255, 0, 0.1)',
    researchCardHoverShadow: '0 8px 12px rgba(0, 255, 0, 0.2)',
    researchCardTitle: '#00ff00',
    researchCardText: '#ffffff',
    researchCardSecondary: '#a0a0a0',
    researchCardHighlight: '#00ff00',
    researchCardExpandedBg: 'rgba(0, 0, 0, 0.4)',
    researchCardDivider: 'rgba(0, 255, 0, 0.1)',
    researchCardTag: {
      background: 'rgba(0, 255, 0, 0.1)',
      text: '#00ff00',
      border: 'rgba(0, 255, 0, 0.2)'
    }
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themePreference, setThemePreference] = useState('system');

  const [currentTheme, setCurrentTheme] = useState(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemDark ? themes.dark : themes.light;
  });

  useEffect(() => {
    const updateTheme = () => {
      if (themePreference === 'system') {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setCurrentTheme(systemDark ? themes.dark : themes.light);
      } else {
        setCurrentTheme(themePreference === 'dark' ? themes.dark : themes.light);
      }
    };

    updateTheme();
    localStorage.setItem('themePreference', themePreference);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themePreference === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themePreference, setThemePreference }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 