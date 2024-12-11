import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--nav-background);
  border-bottom: 1px solid var(--border-color);
  font-size: 1.2rem;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  color: ${props => props.theme.background === '#000000' ? '#ffffff' : props.theme.researchCardTitle};
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--nav-background);
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0.5rem;
  font-size: 1.3rem;
  color: ${props => props.theme.background === '#000000' ? '#ffffff' : props.theme.researchCardTitle};
  transition: color 0.3s ease;
  
  &:before {
    content: '>';
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: var(--primary);
  }
  
  &:hover {
    color: var(--primary);
    &:before {
      opacity: 1;
    }
  }
  
  &.active {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    border-bottom: 1px solid rgba(0, 255, 0, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const ThemeSwitcherWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.background === '#000000' ? '#ffffff' : props.theme.researchCardTitle};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <LogoContainer>
        <Logo to="/" onClick={closeMenu}>Zijun Zhang</Logo>
      </LogoContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '☰'}
      </MenuButton>
      <NavLinks $isOpen={isOpen}>
        <NavLink 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''} 
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink 
          to="/research" 
          className={location.pathname === '/research' ? 'active' : ''} 
          onClick={closeMenu}
        >
          Research
        </NavLink>
        <NavLink 
          to="/projects" 
          className={location.pathname === '/projects' ? 'active' : ''} 
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/cv" 
          className={location.pathname === '/cv' ? 'active' : ''} 
          onClick={closeMenu}
        >
          CV
        </NavLink>
        <NavLink 
          to="/blog" 
          className={location.pathname === '/blog' ? 'active' : ''} 
          onClick={closeMenu}
        >
          Blog
        </NavLink>
        <ThemeSwitcherWrapper>
          <ThemeSwitcher />
        </ThemeSwitcherWrapper>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 