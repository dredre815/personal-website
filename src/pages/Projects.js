import styled from 'styled-components';
import { useState } from 'react';

const ProjectsContainer = styled.div`
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
      content: '$ ls ~/projects/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    color: ${props => props.theme.researchCardSecondary};
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
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

const ProjectTitle = styled.h3`
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

  ${ProjectCard}:hover &:after {
    width: 100%;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.researchCardText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
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

const ProjectCounter = styled.div`
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

const DetailsButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.researchCardHighlight};
  color: ${props => props.theme.researchCardHighlight};
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
    background: ${props => props.theme.researchCardHighlight};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      color: ${props => props.theme.researchCardBackground};
      &:before {
        width: 300%;
        height: 300%;
      }
    }
  }

  &:active {
    color: ${props => props.theme.researchCardBackground};
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
      color: ${props => props.theme.researchCardHighlight};
      &:before {
        width: 0;
        height: 0;
      }
    }
  }
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

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--primary);
  margin-top: 1rem;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const [openDetails, setOpenDetails] = useState({
    promptOptimizer: false,
    interviewCopilot: false,
    shadowDimension: false,
    pacmanTorusVerse: false,
    processManagement: false,
    rpcSystem: false,
    dictionaryServer: false,
    whiteBoard: false,
    splendorAI: false,
    lyonville: false,
    melbourneDashboard: false
  });

  const totalProjects = Object.keys(openDetails).length;

  const toggleDetails = (project) => {
    setOpenDetails(prev => ({
      ...prev,
      [project]: !prev[project]
    }));
  };

  return (
    <ProjectsContainer>
      <Header>
        <h1>Projects</h1>
        <p className="subtitle">
          🚀 Where bugs become features and coffee becomes code! Check out my
          digital playground 🎮
        </p>
      </Header>

      <ProjectGrid>
        <ProjectCard>
          <ProjectCounter>
            Project {1}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Prompt Optimizer</ProjectTitle>
          <ProjectDescription>
            A modern web application that helps optimize prompts for Large Language Models (LLMs) 
            like GPT-4o and Claude 3.5 Sonnet. Features real-time prompt optimization, secure API 
            key management, and a beautiful responsive UI with dark mode support.
          </ProjectDescription>

          <TagContainer>
            <Tag>Next.js</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>AI</Tag>
            <Tag>OpenAI</Tag>
            <Tag>Anthropic</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("promptOptimizer")} $isOpen={openDetails.promptOptimizer}>
            {openDetails.promptOptimizer ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.promptOptimizer}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Key Features:
            </h4>
            <FeatureList>
              <li>Transform natural language prompts into optimized instructions</li>
              <li>Support for multiple LLM models (GPT-4o and Claude 3.5)</li>
              <li>Beautiful, responsive UI with dark mode support</li>
              <li>Secure local storage of API keys</li>
              <li>Real-time prompt optimization</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>Next.js 14 with modern React patterns</li>
              <li>Tailwind CSS for responsive styling</li>
              <li>OpenAI and Anthropic API integrations</li>
              <li>Secure API key management system</li>
              <li>Real-time optimization feedback</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Development Standards:
            </h4>
            <FeatureList>
              <li>Modern tech stack with Next.js and Tailwind</li>
              <li>Secure API key handling practices</li>
              <li>Responsive design principles</li>
              <li>User-centric interface design</li>
              <li>Performance-optimized implementation</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/prompt-optimizer"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {2}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Interview Copilot</ProjectTitle>
          <ProjectDescription>
            A browser-based application that enhances interview experiences through real-time 
            transcription and AI assistance. Features speech-to-text conversion and ChatGPT 
            integration for intelligent response formulation.
          </ProjectDescription>

          <TagContainer>
            <Tag>React</Tag>
            <Tag>AI</Tag>
            <Tag>WebSocket</Tag>
            <Tag>Speech-to-Text</Tag>
            <Tag>ChatGPT</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("interviewCopilot")} $isOpen={openDetails.interviewCopilot}>
            {openDetails.interviewCopilot ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.interviewCopilot}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Key Features:
            </h4>
            <FeatureList>
              <li>Real-time speech-to-text transcription from any audio source</li>
              <li>AI-powered interview assistance using ChatGPT</li>
              <li>Cross-platform support with responsive design</li>
              <li>Serverless architecture with local storage</li>
              <li>Dark/Light theme support</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>React.js with custom UI components</li>
              <li>WebSocket integration for real-time communication</li>
              <li>Deepgram API for speech recognition</li>
              <li>OpenAI GPT-4 for AI responses</li>
              <li>Local Storage API for secure key management</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Use Cases:
            </h4>
            <FeatureList>
              <li>Online job interviews</li>
              <li>Academic interviews and business meetings</li>
              <li>Language assistance during conversations</li>
              <li>Real-time meeting transcription</li>
              <li>Interview preparation and practice</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/Interview-Copilot"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {3}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Melbourne Urban Mobility Dashboard</ProjectTitle>
          <ProjectDescription>
            An interactive R Shiny dashboard providing comprehensive insights
            into Melbourne's urban mobility patterns, featuring real-time
            updates on pedestrian traffic, public transport utilization, and
            road safety analytics through intuitive visualizations.
          </ProjectDescription>

          <TagContainer>
            <Tag>R</Tag>
            <Tag>Shiny</Tag>
            <Tag>Data Visualization</Tag>
            <Tag>Tableau</Tag>
            <Tag>Urban Analytics</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("melbourneDashboard")} $isOpen={openDetails.melbourneDashboard}>
            {openDetails.melbourneDashboard
              ? "< Less Details />"
              : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.melbourneDashboard}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Key Features:
            </h4>
            <FeatureList>
              <li>Real-time urban mobility statistics tracking</li>
              <li>Interactive pedestrian traffic heat maps</li>
              <li>Public transport utilization analysis</li>
              <li>Road safety incident mapping</li>
              <li>Melbourne facts and insights section</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>R Shiny framework with custom dashboard components</li>
              <li>Integration with Tableau Public visualizations</li>
              <li>Responsive design with custom CSS styling</li>
              <li>Interactive tooltips and modal dialogs</li>
              <li>Real-time data processing and updates</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Data Analytics:
            </h4>
            <FeatureList>
              <li>Pedestrian sensor data analysis</li>
              <li>Public transport schedule optimization</li>
              <li>Traffic incident pattern recognition</li>
              <li>Urban infrastructure utilization metrics</li>
              <li>Temporal and spatial trend analysis</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/MelUrbanDashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {4}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Lyonville Community Website</ProjectTitle>
          <ProjectDescription>
            A modern, responsive community website for the town of Lyonville in
            Victoria, Australia. Features comprehensive information about local
            events, history, and community resources with an emphasis on user
            engagement and cultural preservation.
          </ProjectDescription>

          <TagContainer>
            <Tag>React</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Web Development</Tag>
            <Tag>Community Platform</Tag>
            <Tag>Responsive Design</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("lyonville")} $isOpen={openDetails.lyonville}>
            {openDetails.lyonville ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.lyonville}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Core Features:
            </h4>
            <FeatureList>
              <li>Interactive community event management system</li>
              <li>
                Comprehensive content management for local news and updates
              </li>
              <li>Responsive design for multi-device accessibility</li>
              <li>Cultural acknowledgment and heritage preservation</li>
              <li>Community engagement tools and volunteer management</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>Modern JavaScript with strict coding standards</li>
              <li>Component-based architecture using React</li>
              <li>Modular CSS with responsive layouts</li>
              <li>Git-based version control with standardized commits</li>
              <li>Clean code practices and documentation</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Development Standards:
            </h4>
            <FeatureList>
              <li>Comprehensive Git commit message convention</li>
              <li>Strict JavaScript and React coding standards</li>
              <li>HTML5 and CSS3 best practices</li>
              <li>Modular component architecture</li>
              <li>Collaborative development workflow</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/Lyonville"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {5}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Splendor AI Agent</ProjectTitle>
          <ProjectDescription>
            An advanced AI agent for the board game Splendor using Monte Carlo
            Tree Search (MCTS) with heuristic-guided action selection. Features
            sophisticated decision-making strategies and efficient resource
            management.
          </ProjectDescription>

          <TagContainer>
            <Tag>Python</Tag>
            <Tag>AI</Tag>
            <Tag>MCTS</Tag>
            <Tag>Game Theory</Tag>
            <Tag>Heuristics</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("splendorAI")} $isOpen={openDetails.splendorAI}>
            {openDetails.splendorAI ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.splendorAI}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Core Features:
            </h4>
            <FeatureList>
              <li>Advanced MCTS algorithm with UCB1 formula</li>
              <li>Multi-feature heuristic function for action selection</li>
              <li>Phase-based strategic decision making</li>
              <li>Sophisticated gem and card evaluation system</li>
              <li>Time-aware processing with strict management</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Strategic Components:
            </h4>
            <FeatureList>
              <li>Early game resource collection focus</li>
              <li>Mid game balanced approach strategy</li>
              <li>Late game point acquisition emphasis</li>
              <li>Noble distance evaluation system</li>
              <li>Card and gem diversity management</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>Custom MCTS node class implementation</li>
              <li>Priority queue for efficient action selection</li>
              <li>Game state and action management system</li>
              <li>Interactive mode with multiple display options</li>
              <li>Comprehensive warning and time limit system</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/SplendorAIAgent"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {6}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Collaborative Whiteboard Application</ProjectTitle>
          <ProjectDescription>
            A Java-based collaborative whiteboard application enabling real-time
            multi-user drawing and interaction. Features a comprehensive set of
            drawing tools, user management system, and file operations within a
            client-server architecture.
          </ProjectDescription>

          <TagContainer>
            <Tag>Java</Tag>
            <Tag>Swing GUI</Tag>
            <Tag>Client-Server</Tag>
            <Tag>Real-time</Tag>
            <Tag>Collaboration</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("whiteBoard")} $isOpen={openDetails.whiteBoard}>
            {openDetails.whiteBoard ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.whiteBoard}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Drawing Tools:
            </h4>
            <FeatureList>
              <li>Multiple shape tools (Line, Rectangle, Oval, Circle)</li>
              <li>Free-hand drawing capability</li>
              <li>Text insertion functionality</li>
              <li>Eraser tool for corrections</li>
              <li>Color and coordinate management</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Collaboration Features:
            </h4>
            <FeatureList>
              <li>Real-time multi-user interaction</li>
              <li>Manager/Client role management system</li>
              <li>User join request approval mechanism</li>
              <li>User kick functionality for managers</li>
              <li>Synchronized canvas state across users</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>Client-Server architecture with Java Swing GUI</li>
              <li>Serializable objects for network transmission</li>
              <li>Event-driven drawing system</li>
              <li>File persistence with save/load functionality</li>
              <li>Abstract shape system with multiple implementations</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/DistributedSharedWhiteBoard"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {7}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Dictionary Client-Server Application</ProjectTitle>
          <ProjectDescription>
            A Java-based dictionary application implementing a client-server
            architecture that allows users to query, add, remove, and update
            word definitions through a graphical user interface with
            multi-threaded server capabilities.
          </ProjectDescription>

          <TagContainer>
            <Tag>Java</Tag>
            <Tag>Multi-threading</Tag>
            <Tag>Client-Server</Tag>
            <Tag>GUI</Tag>
            <Tag>File I/O</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("dictionaryServer")} $isOpen={openDetails.dictionaryServer}>
            {openDetails.dictionaryServer
              ? "< Less Details />"
              : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.dictionaryServer}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Core Features:
            </h4>
            <FeatureList>
              <li>
                Multi-threaded server with custom thread pool implementation
              </li>
              <li>Graphical user interface for both client and server</li>
              <li>Persistent storage with file-based dictionary data</li>
              <li>Real-time updates and synchronization</li>
              <li>Thread-safe concurrent dictionary operations</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Architecture Components:
            </h4>
            <FeatureList>
              <li>
                Server with GUI control panel and core dictionary operations
              </li>
              <li>Client interface with comprehensive dictionary management</li>
              <li>Custom protocol for client-server communication</li>
              <li>File handling system for persistent storage</li>
              <li>Thread pool management for client connections</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>16-thread pool for concurrent client handling</li>
              <li>Synchronized dictionary operations for thread safety</li>
              <li>Comprehensive error handling system</li>
              <li>Custom communication protocol implementation</li>
              <li>Persistent data storage with file I/O operations</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/Multi-threadedDictionaryServer"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {8}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Custom RPC System</ProjectTitle>
          <ProjectDescription>
            A sophisticated Remote Procedure Call (RPC) system implemented in C
            that enables distributed computing across multiple machines.
            Features a client-server architecture with support for non-blocking
            operations and robust error handling.
          </ProjectDescription>

          <TagContainer>
            <Tag>C</Tag>
            <Tag>Distributed Systems</Tag>
            <Tag>Network Programming</Tag>
            <Tag>Multi-threading</Tag>
            <Tag>IPC</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("rpcSystem")} $isOpen={openDetails.rpcSystem}>
            {openDetails.rpcSystem ? "< Less Details />" : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.rpcSystem}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Core Features:
            </h4>
            <FeatureList>
              <li>Client-Server architecture with thread pool management</li>
              <li>Non-blocking operations for improved performance</li>
              <li>Robust timeout and error handling mechanisms</li>
              <li>Cross-platform byte order handling</li>
              <li>Dynamic memory management system</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Implementation:
            </h4>
            <FeatureList>
              <li>Custom packet protocol for message handling</li>
              <li>Thread pool with 16 concurrent threads</li>
              <li>Support for 128 simultaneous connections</li>
              <li>IPv6-compatible socket communication</li>
              <li>64-second timeout mechanism</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              System Components:
            </h4>
            <FeatureList>
              <li>Server-side function registration and handling</li>
              <li>Client-side remote function discovery</li>
              <li>Thread synchronization with mutex locks</li>
              <li>Systematic resource cleanup mechanisms</li>
              <li>Graceful shutdown handling with SIGINT</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/RemoteProcedureCall"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {9}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Process Management Simulator</ProjectTitle>
          <ProjectDescription>
            A sophisticated process management system that simulates CPU
            scheduling and memory allocation, supporting both simulated and real
            process management with various scheduling algorithms and memory
            allocation strategies.
          </ProjectDescription>

          <TagContainer>
            <Tag>C</Tag>
            <Tag>Systems Programming</Tag>
            <Tag>CPU Scheduling</Tag>
            <Tag>Memory Management</Tag>
            <Tag>IPC</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("processManagement")} $isOpen={openDetails.processManagement}>
            {openDetails.processManagement
              ? "< Less Details />"
              : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.processManagement}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Scheduling Algorithms:
            </h4>
            <FeatureList>
              <li>Shortest Job First (SJF) with non-preemptive scheduling</li>
              <li>Round Robin (RR) with preemptive scheduling</li>
              <li>Time quantum based execution system</li>
              <li>Fair CPU distribution management</li>
              <li>Process prioritization based on arrival time</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Memory Management:
            </h4>
            <FeatureList>
              <li>Best-Fit allocation strategy implementation</li>
              <li>Dynamic memory block tracking system</li>
              <li>Memory block splitting and merging</li>
              <li>Support for both infinite and best-fit strategies</li>
              <li>Maximum memory capacity of 2048 units</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Features:
            </h4>
            <FeatureList>
              <li>Real process management with IPC mechanisms</li>
              <li>Comprehensive performance statistics tracking</li>
              <li>Configurable quantum time settings</li>
              <li>Process state management system</li>
              <li>Event-based logging and monitoring</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/ProcessManagement"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {10}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>PacMan TorusVerse</ProjectTitle>
          <ProjectDescription>
            An innovative adaptation of the classic PacMan game that combines
            traditional gameplay elements with new features like portals and
            multi-level progression, featuring both a game engine and a custom
            map editor.
          </ProjectDescription>

          <TagContainer>
            <Tag>Java</Tag>
            <Tag>Game Development</Tag>
            <Tag>GUI</Tag>
            <Tag>XML</Tag>
            <Tag>Map Editor</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("pacmanTorusVerse")} $isOpen={openDetails.pacmanTorusVerse}>
            {openDetails.pacmanTorusVerse
              ? "< Less Details />"
              : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.pacmanTorusVerse}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Game Features:
            </h4>
            <FeatureList>
              <li>Multiple levels with ascending difficulty</li>
              <li>Portal system for teleportation mechanics</li>
              <li>Smart AI-powered autoplayer</li>
              <li>Classic PacMan elements (pills, gold, monsters)</li>
              <li>Ice cube obstacles and special tiles</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Map Editor Features:
            </h4>
            <FeatureList>
              <li>Visual GUI for map creation</li>
              <li>Multiple tile types (walls, portals, items)</li>
              <li>Comprehensive map validation system</li>
              <li>XML-based save/load functionality</li>
              <li>Flexible viewport management</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Technical Highlights:
            </h4>
            <FeatureList>
              <li>Event-driven design architecture</li>
              <li>Modular structure for game components</li>
              <li>XML-based map storage system</li>
              <li>Dual-level validation system</li>
              <li>Team collaboration project</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/PacManTorusVerse"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>

        <ProjectCard>
          <ProjectCounter>
            Project {11}/{totalProjects}
          </ProjectCounter>
          <ProjectTitle>Shadow Dimension</ProjectTitle>
          <ProjectDescription>
            A 2D fantasy role-playing game where players control Fae, a
            character on a mission to save her father and hometown from evil
            creatures from another dimension.
          </ProjectDescription>

          <TagContainer>
            <Tag>Java</Tag>
            <Tag>Game Development</Tag>
            <Tag>Bagel Engine</Tag>
            <Tag>2D RPG</Tag>
          </TagContainer>

          <DetailsButton onClick={() => toggleDetails("shadowDimension")} $isOpen={openDetails.shadowDimension}>
            {openDetails.shadowDimension
              ? "< Less Details />"
              : "< More Details />"}
          </DetailsButton>

          <ProjectDetails $isOpen={openDetails.shadowDimension}>
            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Key Features:
            </h4>
            <FeatureList>
              <li>Two distinct game levels with unique challenges</li>
              <li>Dynamic combat system with enemy AI</li>
              <li>Health management and status effects</li>
              <li>Adjustable game speed mechanics</li>
              <li>Object-oriented architecture</li>
            </FeatureList>

            <h4 style={{ color: "var(--primary)", marginTop: "1rem" }}>
              Controls:
            </h4>
            <FeatureList>
              <li>Arrow Keys: Movement</li>
              <li>A: Attack enemies</li>
              <li>L/K: Speed controls</li>
              <li>Space: Start/Next level</li>
              <li>Escape: Exit game</li>
            </FeatureList>

            <ProjectLink
              href="https://github.com/dredre815/ShadowDimension2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </ProjectLink>
          </ProjectDetails>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 