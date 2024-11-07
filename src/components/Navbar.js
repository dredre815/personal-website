import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid var(--primary);
  font-size: 1.2rem;
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
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
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
`;

const Navbar = () => {
  const location = useLocation();
  
  return (
    <Nav>
      <Logo to="/">Zijun Zhang</Logo>
      <NavLinks>
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