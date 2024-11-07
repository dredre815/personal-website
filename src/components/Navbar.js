import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid var(--primary);
  font-size: 1.2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  
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
  
  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid var(--primary);
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0.5rem;
  font-size: 1.3rem;
  
  &:before {
    content: '>';
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
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

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">Zijun Zhang</Logo>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '☰'}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/research" className={location.pathname === '/research' ? 'active' : ''}>
          Research
        </NavLink>
        <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/cv" className={location.pathname === '/cv' ? 'active' : ''}>
          CV
        </NavLink>
        <NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
          Blog
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 