import styled from 'styled-components';

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

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Content>{children}</Content>
    </MainContainer>
  );
};

export default Layout; 