import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CVContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CVHeader = styled.div`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    &:before {
      content: '$ cat ~/cv/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    color: #ccc;
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.9rem 1.8rem;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 1.1rem;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
  }
  
  &:hover {
    background: var(--primary);
    color: var(--background);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.15);
    
    span {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 255, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    padding: 0.9rem 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    > span {
      width: 24px;
      justify-content: center;
    }
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--primary);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;
  
  .title-bar {
    height: 2.5rem;
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const PDFEmbed = styled.embed`
  width: 100%;
  height: calc(100% - 2.5rem);
  background: white;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--primary);
  font-family: 'Courier New', monospace;
`;

const CV = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CVContainer>
      <CVHeader>
        <h1>Curriculum Vitae</h1>
        <div className="subtitle">
          📄 The story of how I turned caffeine into software solutions!
          <br />
          <br />
          Last updated: 23/11/2024
        </div>
        <ButtonContainer>
          <ActionButton href="/CV.pdf" download>
            <span>⬇️</span>
            <span style={{ width: "auto" }}>Download CV</span>
          </ActionButton>
          <ActionButton href="/CV.pdf" target="_blank">
            <span>🔍</span>
            <span style={{ width: "auto" }}>View Full Screen</span>
          </ActionButton>
        </ButtonContainer>
      </CVHeader>

      <PreviewContainer>
        <div className="title-bar">CV.pdf - Preview</div>
        {isLoading ? (
          <LoadingContainer>Loading CV...</LoadingContainer>
        ) : (
          <PDFEmbed src="/CV.pdf" type="application/pdf" />
        )}
      </PreviewContainer>
    </CVContainer>
  );
};

export default CV;