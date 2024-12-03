import { useState } from 'react';
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
  width: 100%;
  border: 1px solid var(--primary);
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2);
    background: rgba(0, 0, 0, 0.4);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 255, 0, 0.05),
      transparent
    );
    transform: rotate(45deg);
    animation: scan 10s linear infinite;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes scan {
    from {
      transform: translateY(-50%) rotate(45deg);
    }
    to {
      transform: translateY(50%) rotate(45deg);
    }
  }
`;

const ResearchTitle = styled.h2`
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  ${ResearchCard}:hover &:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    display: block;
    margin-top: 0.5rem;
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
    position: static;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.75rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
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

const ProjectDetails = styled.div`
  margin-top: ${props => props.isOpen ? '1rem' : '0'};
  max-height: ${props => props.isOpen ? '2000px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.5s ease;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  position: relative;
  padding-bottom: ${props => props.isOpen ? '3.5rem' : '0'};
  z-index: 1;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  
  li {
    margin-bottom: 0.5rem;
    &:before {
      content: '>';
      color: var(--primary);
      margin-right: 0.5rem;
    }
  }
`;

const DetailsButton = styled.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  position: ${props => props.isOpen ? 'absolute' : 'relative'};
  bottom: ${props => props.isOpen ? '1.2rem' : 'auto'};
  left: ${props => props.isOpen ? '1.2rem' : 'auto'};
  overflow: hidden;
  margin-top: ${props => props.isOpen ? '0' : '1rem'};
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--background);
      &:before {
        width: 300%;
        height: 300%;
      }
    }
  }

  &:active {
    color: var(--background);
    &:before {
      width: 300%;
      height: 300%;
    }
  }

  &:focus {
    outline: none;
  }

  @media (hover: none) {
    &:focus {
      background: none;
      color: var(--primary);
      &:before {
        width: 0;
        height: 0;
      }
    }
  }
`;

const Research = () => {
  const [openDetails, setOpenDetails] = useState({
    blockchain: false,
    adversarial: false
  });

  const toggleDetails = (research) => {
    setOpenDetails(prev => ({
      ...prev,
      [research]: !prev[research]
    }));
  };

  return (
    <ResearchContainer>
      <Header>
        <h1>Research</h1>
        <div className="subtitle">
          🤖 Teaching machines to think, while they teach me to debug! AI &
          Security & Blockchain adventures 🔍
        </div>
      </Header>

      <ResearchGrid>
        <ResearchCard>
          <StatusBadge>Active Research</StatusBadge>
          <ResearchTitle>Enhancing Blockchain Security with LLMs</ResearchTitle>
          <ResearchDate>November 2024 - Present</ResearchDate>

          <ResearchDescription>
            Investigating the integration of Large Language Models (LLMs) with
            blockchain security mechanisms to create more robust and intelligent
            security tools.
          </ResearchDescription>

          <TagContainer>
            <Tag>Blockchain</Tag>
            <Tag>LLMs</Tag>
            <Tag>Smart Contracts</Tag>
            <Tag>Security Analytics</Tag>
            <Tag>GPT Models</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("blockchain")} isOpen={openDetails.blockchain}>
            {openDetails.blockchain ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails isOpen={openDetails.blockchain}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Research Focus:
            </h4>
            <FeatureList>
              <li>
                Automated vulnerability detection in smart contracts using
                GPT-based models
              </li>
              <li>Development of intelligent security assessment frameworks</li>
              <li>Implementation of NLP-based security audit automation</li>
              <li>Pattern recognition in blockchain security threats</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Methodologies:
            </h4>
            <FeatureList>
              <li>Integration of LLMs with blockchain security mechanisms</li>
              <li>Development of custom security assessment tools</li>
              <li>
                Implementation of automated vulnerability detection systems
              </li>
              <li>Analysis of smart contract security patterns</li>
            </FeatureList>
          </ProjectDetails>
        </ResearchCard>

        <ResearchCard>
          <StatusBadge>Active Research</StatusBadge>
          <ResearchTitle>Adversarial Machine Learning</ResearchTitle>
          <ResearchDate>September 2024 - Present</ResearchDate>

          <ResearchDescription>
            Exploring the robustness of machine learning models against
            adversarial attacks and developing effective defense mechanisms.
          </ResearchDescription>

          <TagContainer>
            <Tag>PyTorch</Tag>
            <Tag>CNN</Tag>
            <Tag>LSTM</Tag>
            <Tag>Deep Learning</Tag>
            <Tag>Security</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("adversarial")} isOpen={openDetails.adversarial}>
            {openDetails.adversarial ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails isOpen={openDetails.adversarial}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Research Areas:
            </h4>
            <FeatureList>
              <li>
                Development and analysis of adversarial examples for neural
                networks
              </li>
              <li>
                Implementation of novel defense strategies against various
                attack vectors
              </li>
              <li>
                Comprehensive evaluation of model vulnerabilities across
                architectures
              </li>
              <li>Quantitative impact analysis of adversarial perturbations</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Approach:
            </h4>
            <FeatureList>
              <li>Systematic experimentation with CNN and LSTM models</li>
              <li>Implementation of various adversarial attack methods</li>
              <li>Development of robust defense mechanisms</li>
              <li>Quantitative analysis of model vulnerability patterns</li>
            </FeatureList>
          </ProjectDetails>
        </ResearchCard>
      </ResearchGrid>
    </ResearchContainer>
  );
};

export default Research;