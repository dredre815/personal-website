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
    color: ${props => props.theme.researchCardSecondary};
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
  border: 1px solid ${props => props.theme.researchCardBorder};
  background: ${props => props.theme.researchCardBackground};
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: ${props => props.theme.researchCardShadow};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.researchCardHoverShadow};
    background: ${props => props.theme.researchCardExpandedBg};
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
      ${props => props.theme.researchCardHighlight}10,
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
  color: ${props => props.theme.researchCardTitle};
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
    background: ${props => props.theme.researchCardHighlight};
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
  color: ${props => props.theme.researchCardSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
`;

const ResearchDescription = styled.div`
  color: ${props => props.theme.researchCardText};
  line-height: 1.8;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.researchCardSecondary};
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
    color: ${props => props.theme.researchCardText};
    
    &:before {
      content: '>';
      position: absolute;
      left: 0;
      color: ${props => props.theme.researchCardHighlight};
      opacity: 0.7;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: ${props => props.theme.researchCardTag.background};
  color: ${props => props.theme.researchCardTag.text};
  padding: 0.3rem 0.6rem;
  border: 1px solid ${props => props.theme.researchCardTag.border};
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.researchCardHighlight};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const ProjectDetails = styled.div`
  margin-top: ${props => props.$isOpen ? '1rem' : '0'};
  max-height: ${props => props.$isOpen ? '2000px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.5s ease;
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  position: relative;
  padding-bottom: ${props => props.$isOpen ? '3.5rem' : '0'};
  z-index: 1;
  border-top: ${props => props.$isOpen ? `1px solid ${props.theme.researchCardDivider}` : 'none'};
  margin-top: ${props => props.$isOpen ? '1rem' : '0'};
  padding-top: ${props => props.$isOpen ? '1rem' : '0'};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  
  li {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.researchCardText};
    
    &:before {
      content: '>';
      color: ${props => props.theme.researchCardHighlight};
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
  position: ${props => props.$isOpen ? 'absolute' : 'relative'};
  bottom: ${props => props.$isOpen ? '1.2rem' : 'auto'};
  left: ${props => props.$isOpen ? '1.2rem' : 'auto'};
  overflow: hidden;
  margin-top: ${props => props.$isOpen ? '0' : '1rem'};
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

const ResearchCounter = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--primary);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 1;
  text-shadow: ${props => props.theme.background === '#000000' ? '0 0 8px var(--primary)' : 'none'};
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

  const researchProjects = [
    {
      id: "blockchain",
      title: "Enhancing Blockchain Security with LLMs",
      date: "November 2024",
      description: "Investigating the integration of Large Language Models (LLMs) with blockchain security mechanisms to create more robust and intelligent security tools.",
      tags: ["Blockchain", "LLMs", "Smart Contracts", "Security Analytics", "GPT Models"],
      details: {
        focus: [
          "Automated vulnerability detection in smart contracts using GPT-based models",
          "Development of intelligent security assessment frameworks",
          "Implementation of NLP-based security audit automation",
          "Pattern recognition in blockchain security threats"
        ],
        methodologies: [
          "Integration of LLMs with blockchain security mechanisms",
          "Development of custom security assessment tools",
          "Implementation of automated vulnerability detection systems",
          "Analysis of smart contract security patterns"
        ]
      }
    },
    {
      id: "adversarial",
      title: "Adversarial Machine Learning",
      date: "September 2024",
      description: "Exploring the robustness of machine learning models against adversarial attacks and developing effective defense mechanisms.",
      tags: ["PyTorch", "CNN", "LSTM", "Deep Learning", "Security"],
      details: {
        areas: [
          "Development and analysis of adversarial examples for neural networks",
          "Implementation of novel defense strategies against various attack vectors",
          "Comprehensive evaluation of model vulnerabilities across architectures",
          "Quantitative impact analysis of adversarial perturbations"
        ],
        approach: [
          "Systematic experimentation with CNN and LSTM models",
          "Implementation of various adversarial attack methods",
          "Development of robust defense mechanisms",
          "Quantitative analysis of model vulnerability patterns"
        ]
      }
    }
  ];

  const sortedProjects = [...researchProjects].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

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
        {sortedProjects.map((project, index) => (
          <ResearchCard key={project.id}>
            <ResearchCounter>Research {index + 1}/{sortedProjects.length}</ResearchCounter>
            <ResearchTitle>{project.title}</ResearchTitle>
            <ResearchDate>{project.date} - Present</ResearchDate>

            <ResearchDescription>
              {project.description}
            </ResearchDescription>

            <TagContainer>
              {project.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>

            <DetailsButton 
              onClick={() => toggleDetails(project.id)} 
              $isOpen={openDetails[project.id]}
            >
              {openDetails[project.id] ? "< Less Details />" : "< More Details />"}
            </DetailsButton>

            <ProjectDetails $isOpen={openDetails[project.id]}>
              {project.details.focus && (
                <>
                  <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
                    Research Focus:
                  </h4>
                  <FeatureList>
                    {project.details.focus.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </FeatureList>
                </>
              )}

              {project.details.methodologies && (
                <>
                  <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
                    Methodologies:
                  </h4>
                  <FeatureList>
                    {project.details.methodologies.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </FeatureList>
                </>
              )}

              {project.details.areas && (
                <>
                  <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
                    Research Areas:
                  </h4>
                  <FeatureList>
                    {project.details.areas.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </FeatureList>
                </>
              )}

              {project.details.approach && (
                <>
                  <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
                    Technical Approach:
                  </h4>
                  <FeatureList>
                    {project.details.approach.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </FeatureList>
                </>
              )}
            </ProjectDetails>
          </ResearchCard>
        ))}
      </ResearchGrid>
    </ResearchContainer>
  );
};

export default Research;