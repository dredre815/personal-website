import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid var(--primary);
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Quote = styled.div`
  font-style: italic;
  font-size: 1rem;
  text-align: center;

  &:before {
    content: '"';
    color: var(--primary);
  }

  &:after {
    content: '"';
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

const Author = styled.div`
  color: var(--primary);
  font-size: 1rem;

  &:before {
    content: "- ";
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <QuoteContainer>
        <Quote>
          Success is not final, failure is not fatal: it is the courage to continue that counts.
        </Quote>
        <Author>Winston Churchill</Author>
      </QuoteContainer>
    </FooterContainer>
  );
};

export default Footer;
