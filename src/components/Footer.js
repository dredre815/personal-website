import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 0.5rem;
  text-align: center;
  border-top: 1px solid var(--primary);
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 0.9rem;

  .quote-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: min-content;
    padding: 0 1rem;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .quote {
    font-style: italic;
    white-space: nowrap;
    flex-shrink: 0;
    font-size: 1rem;

    &:before {
      content: '"';
      color: var(--primary);
    }

    &:after {
      content: '"';
      color: var(--primary);
    }
  }

  .author {
    color: var(--primary);
    white-space: nowrap;
    flex-shrink: 0;
    font-size: 1rem;

    &:before {
      content: "- ";
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="quote-container">
        <div className="quote">
          Success is not final, failure is not fatal: it is the courage to continue that counts.
        </div>
        <div className="author">Winston Churchill</div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
