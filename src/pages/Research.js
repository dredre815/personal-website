import styled from 'styled-components';

const ResearchContainer = styled.div`
  .research-item {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--primary);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(10px);
      background: rgba(0, 255, 0, 0.05);
    }
  }

  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

const Research = () => {
  return (
    <ResearchContainer>
      <h2>Research Interests</h2>
      <div className="research-item">
        <h3>Research Area 1</h3>
        <p>Description of your research area and interests...</p>
      </div>
      {/* Add more research items */}
    </ResearchContainer>
  );
};

export default Research; 