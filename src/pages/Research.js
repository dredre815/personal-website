import styled from 'styled-components';

const ResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    &:before {
      content: '$ ls ~/research/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
  }
  
  .subtitle {
    color: #ccc;
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ResearchCard = styled.div`
  border: 1px solid var(--primary);
  background: rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.1);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, var(--primary), transparent);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-top: 3.5rem;
  }
`;

const ResearchTitle = styled.h2`
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  padding-right: 100px;
  
  &:before {
    content: '>';
    margin-right: 0.5rem;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-right: 0;
  }
`;

const ResearchDate = styled.div`
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
`;

const ResearchDescription = styled.div`
  color: #fff;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1.5rem;
    color: #ccc;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    color: #fff;
    
    &:before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--primary);
      opacity: 0.7;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }
`;

const ResearchHighlight = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(0, 255, 0, 0.05);
  border-left: 3px solid var(--primary);
  font-family: 'Courier New', monospace;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 0, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: var(--background);
    transform: translateY(-2px);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 255, 0, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  z-index: 1;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    font-size: 0.75rem;
  }
`;

const Research = () => {
  return (
    <ResearchContainer>
      <Header>
        <h1>Research Projects</h1>
        <div className="subtitle">
          Exploring the intersection of AI, blockchain, and security.
        </div>
      </Header>
      
      <ResearchGrid>
        <ResearchCard>
          <StatusBadge>Active Research</StatusBadge>
          <ResearchTitle>
            Enhancing Blockchain Security with LLMs
          </ResearchTitle>
          <ResearchDate>November 2023 - Present</ResearchDate>
          
          <ResearchDescription>
            <ResearchHighlight>
              Investigating the integration of Large Language Models (LLMs) with blockchain security mechanisms 
              to create more robust and intelligent security tools.
            </ResearchHighlight>
            
            <p>Current research focuses on developing innovative approaches in:</p>
            <ul>
              <li>Automated vulnerability detection in smart contracts using GPT-based models</li>
              <li>Development of intelligent security assessment frameworks</li>
              <li>Implementation of NLP-based security audit automation</li>
              <li>Pattern recognition in blockchain security threats</li>
            </ul>
          </ResearchDescription>
          
          <TechStack>
            <TechTag>Blockchain</TechTag>
            <TechTag>LLMs</TechTag>
            <TechTag>Smart Contracts</TechTag>
            <TechTag>Security Analytics</TechTag>
            <TechTag>GPT Models</TechTag>
          </TechStack>
        </ResearchCard>

        <ResearchCard>
          <StatusBadge>Active Research</StatusBadge>
          <ResearchTitle>
            Adversarial Machine Learning
          </ResearchTitle>
          <ResearchDate>September 2023 - Present</ResearchDate>
          
          <ResearchDescription>
            <ResearchHighlight>
              Exploring the robustness of machine learning models against adversarial attacks 
              and developing effective defense mechanisms.
            </ResearchHighlight>
            
            <p>Key research areas include:</p>
            <ul>
              <li>Development and analysis of adversarial examples for neural networks</li>
              <li>Implementation of novel defense strategies against various attack vectors</li>
              <li>Comprehensive evaluation of model vulnerabilities across architectures</li>
              <li>Quantitative impact analysis of adversarial perturbations</li>
            </ul>
          </ResearchDescription>
          
          <TechStack>
            <TechTag>PyTorch</TechTag>
            <TechTag>CNN</TechTag>
            <TechTag>LSTM</TechTag>
            <TechTag>Deep Learning</TechTag>
            <TechTag>Security</TechTag>
          </TechStack>
        </ResearchCard>
      </ResearchGrid>
    </ResearchContainer>
  );
};

export default Research; 