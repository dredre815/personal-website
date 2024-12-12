import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  z-index: 1001;
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
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 75%;
    background: ${props => props.theme.researchCardBackground};
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem 2rem;
    gap: 1.5rem;
    transition: right 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
    z-index: 1000;
    backdrop-filter: blur(10px);
    overflow-y: auto;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0.5rem;
  font-size: 1.3rem;
  color: ${props => props.theme.background === '#000000' ? '#ffffff' : props.theme.researchCardTitle};
  transition: all 0.3s ease;
  
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
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
    
    &:before {
      display: none;
    }
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    &:hover:after,
    &.active:after {
      width: 50%;
    }
  }
`;

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    justify-content: center;
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
  z-index: 1001;
  width: 40px;
  height: 40px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    
    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: var(--primary);
      transition: all 0.3s ease;
      
      &:first-child {
        transform: ${props => props.$isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
      }
      
      &:nth-child(2) {
        opacity: ${props => props.$isOpen ? '0' : '1'};
      }
      
      &:last-child {
        transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
      }
    }
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    opacity: ${props => props.$isOpen ? '1' : '0'};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 999;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 防止菜单打开时页面滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Nav>
      <LogoContainer>
        <Logo to="/" onClick={closeMenu}>Zijun Zhang</Logo>
      </LogoContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <Overlay $isOpen={isOpen} onClick={closeMenu} />
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