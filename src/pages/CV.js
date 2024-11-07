import styled from 'styled-components';

const CVContainer = styled.div`
  .cv-section {
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--primary);
    padding-bottom: 0.5rem;
  }

  .download-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    margin-bottom: 2rem;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary);
      color: var(--background);
    }
  }
`;

const CV = () => {
  return (
    <CVContainer>
      <a href="/path-to-your-cv.pdf" className="download-btn" download>
        Download CV
      </a>
      <div className="cv-section">
        <h2>Education</h2>
        {/* Add education details */}
      </div>
      <div className="cv-section">
        <h2>Experience</h2>
        {/* Add experience details */}
      </div>
      {/* Add more sections */}
    </CVContainer>
  );
};

export default CV; 