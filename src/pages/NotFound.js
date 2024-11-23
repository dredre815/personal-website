import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  color: var(--primary);
  font-size: 8rem;
  margin: 0;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px var(--primary);
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ErrorMessage = styled.div`
  margin: 2rem 0;
  font-size: 1.2rem;
  
  .terminal {
    font-family: 'Courier New', monospace;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

const HomeLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: var(--background);
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>
        <div className="terminal">
          $ Error: Page not found<br />
          $ System: Directory does not exist
        </div>
        The page you're looking for seems to have been moved or deleted.
      </ErrorMessage>
      <HomeLink to="/">Return to Home Base</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;
