import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Courier New', monospace;
  color: var(--primary);
  animation: ${blink} 1s infinite;
`;

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading; 