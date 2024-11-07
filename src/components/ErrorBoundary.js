import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: var(--primary);
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 