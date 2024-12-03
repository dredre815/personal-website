import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background: ${props => props.theme.researchCardBackground};
  border-top: 1px solid ${props => props.theme.researchCardBorder};
  width: 100%;
  font-size: 0.9rem;
  box-shadow: 0 -4px 6px ${props => props.theme.researchCardShadow};
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.researchCardTitle};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:before {
      content: '>';
      color: ${props => props.theme.researchCardHighlight};
    }
    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

const QuoteSection = styled(FooterSection)`
  .quote {
    font-style: italic;
    margin-bottom: 0.5rem;
    line-height: 1.6;
    padding: 1rem;
    border: 1px solid ${props => props.theme.researchCardBorder};
    border-radius: 4px;
    background: ${props => props.theme.researchCardTag.background};
    position: relative;
    color: ${props => props.theme.researchCardText};
    
    &:before {
      content: '"';
      color: ${props => props.theme.researchCardHighlight};
      font-size: 1.5rem;
      position: absolute;
      left: 0.2rem;
      top: 0.5rem;
    }
    
    &:after {
      content: '"';
      color: ${props => props.theme.researchCardHighlight};
      font-size: 1.5rem;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
    }
  }
  
  .author {
    color: ${props => props.theme.researchCardHighlight};
    margin-top: 1rem;
    text-align: right;
    
    &:before {
      content: "- ";
    }
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const ConnectSection = styled(FooterSection)`
  .connect-text {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-family: 'Courier New', monospace;
    color: ${props => props.theme.researchCardText};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  a {
    color: ${props => props.theme.researchCardText};
    transition: all 0.3s ease;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 4px;
    
    &:hover {
      color: ${props => props.theme.researchCardHighlight};
      transform: translateY(-2px);
      border-color: ${props => props.theme.researchCardHighlight};
      background: ${props => props.theme.researchCardTag.background};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.researchCardBorder};
  color: ${props => props.theme.researchCardSecondary};
  font-size: 0.8rem;
  
  .heart {
    color: ${props => props.theme.researchCardHighlight};
    display: inline-block;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const TerminalPrompt = styled.div`
  color: ${props => props.theme.researchCardHighlight};
  font-family: 'Courier New', monospace;
  margin-bottom: 0.5rem;
  opacity: 0.7;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <QuoteSection>
          <h3>Quote of the Day</h3>
          <TerminalPrompt>$ echo "wisdom.quote"</TerminalPrompt>
          <div className="quote">
            Success is not final, failure is not fatal: it is the courage to continue that counts.
          </div>
          <div className="author">Winston Churchill</div>
        </QuoteSection>
        
        <ConnectSection>
          <h3>Connect</h3>
          <TerminalPrompt>$ ssh user@zijun2002.com</TerminalPrompt>
          <div className="connect-text">
            Feel free to reach out and connect with me on any platform. I'm always open to interesting conversations and collaborations!
          </div>
          <SocialLinks>
            <a href="mailto:zijuzhang1@student.unimelb.edu.au" title="Email">
              📧
            </a>
            <a href="https://twitter.com/Romanticism_02" target="_blank" rel="noopener noreferrer" title="Twitter">
              🐦
            </a>
            <a href="https://github.com/dredre815" target="_blank" rel="noopener noreferrer" title="GitHub">
              👨‍💻
            </a>
            <a href="https://www.linkedin.com/in/zijunzhang2002/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              👤
            </a>
          </SocialLinks>
        </ConnectSection>
      </FooterGrid>
      
      <Copyright>
        <TerminalPrompt>$ whoami</TerminalPrompt>
        © {new Date().getFullYear()} Zijun Zhang. All rights reserved. | Built with React <span className="heart">💚</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
