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
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    color: #ccc;
    line-height: 1.6;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-family: 'Courier New', monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    background: var(--primary);
    color: var(--background);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2rem;
    background: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid var(--primary);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-family: 'Courier New', monospace;
    color: var(--primary);
    z-index: 1;
  }
  
  &:after {
    content: '$ cat CV.pdf';
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }
`;

const PDFEmbed = styled.embed`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;

const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--primary);
  font-family: 'Courier New', monospace;
  animation: blink 1s infinite;
  
  @keyframes blink {
    50% { opacity: 0; }
  }
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
        <p>$ cat README.txt<br />
        Here you can view and download my complete CV. The document outlines my educational background, professional experience, technical skills, and achievements.</p>
        <DownloadButton href="/CV.pdf" download>
          <span>📥</span> wget CV.pdf
        </DownloadButton>
      </CVHeader>
      
      <PreviewContainer>
        {isLoading ? (
          <LoadingText>Loading CV.pdf...</LoadingText>
        ) : (
          <PDFEmbed src="/CV.pdf" type="application/pdf" />
        )}
      </PreviewContainer>
    </CVContainer>
  );
};

export default CV; 