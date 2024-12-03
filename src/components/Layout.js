import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout; 