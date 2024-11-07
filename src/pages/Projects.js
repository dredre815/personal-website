import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  .project-card {
    border: 1px solid var(--primary);
    padding: 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2);
    }

    h3 {
      color: var(--primary);
      margin-bottom: 1rem;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Description of your project...</p>
        <a href="#project-details" className="view-more">GitHub Link →</a>
      </div>
      {/* Add more project cards */}
    </ProjectsContainer>
  );
};

export default Projects; 