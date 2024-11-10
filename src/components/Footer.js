import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background: rgba(0, 0, 0, 0.9);
  border-top: 1px solid var(--primary);
  width: 100%;
  font-size: 0.9rem;
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
    color: var(--primary);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:before {
      content: '>';
      color: var(--primary);
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
    border: 1px solid rgba(0, 255, 0, 0.2);
    border-radius: 4px;
    background: rgba(0, 255, 0, 0.05);
    position: relative;
    
    &:before {
      content: '"';
      color: var(--primary);
      font-size: 1.5rem;
      position: absolute;
      left: 0.5rem;
      top: 0.5rem;
    }
    
    &:after {
      content: '"';
      color: var(--primary);
      font-size: 1.5rem;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
    }
  }
  
  .author {
    color: var(--primary);
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
    color: var(--text);
    transition: all 0.3s ease;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 4px;
    
    &:hover {
      color: var(--primary);
      transform: translateY(-2px);
      border-color: var(--primary);
      background: rgba(0, 255, 0, 0.05);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 255, 0, 0.1);
  color: #666;
  font-size: 0.8rem;
  
  .heart {
    color: var(--primary);
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
  color: var(--primary);
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
