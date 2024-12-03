import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogCard = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.researchCardBorder};
  background: ${props => props.theme.researchCardBackground};
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: ${props => props.theme.researchCardShadow};
  margin-bottom: 2rem;
  
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

const BlogPost = styled.article`
  background: ${props => props.theme.researchCardBackground};
  border: 1px solid ${props => props.theme.researchCardBorder};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  backdrop-filter: blur(5px);
  box-shadow: ${props => props.theme.researchCardShadow};
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  h3, h4 {
    color: ${props => props.theme.researchCardTitle};
    margin: 1.5rem 0 1rem;
    font-family: 'Courier New', monospace;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
    color: ${props => props.theme.researchCardText};
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
    color: ${props => props.theme.researchCardText};
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: ${props => props.theme.researchCardHighlight};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    overflow-x: auto;
    display: block;
  }

  th, td {
    border: 1px solid ${props => props.theme.researchCardBorder};
    padding: 0.5rem;
    text-align: left;
    white-space: nowrap;
    color: ${props => props.theme.researchCardText};
  }

  th {
    background: ${props => props.theme.researchCardTag.background};
    color: ${props => props.theme.researchCardTag.text};
  }
`;

const BlogTitle = styled.h2`
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

  ${BlogCard}:hover &:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BlogDate = styled.div`
  color: ${props => props.theme.researchCardSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
`;

const BlogExcerpt = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: ${props => props.theme.researchCardText};
`;

const ReadMoreLink = styled.div`
  color: ${props => props.theme.researchCardHighlight};
  margin-top: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
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
      content: '$ ls ~/blog/';
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

const BackButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${props => props.theme.researchCardBackground};
  border: 1px solid ${props => props.theme.researchCardHighlight};
  color: ${props => props.theme.researchCardHighlight};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(5px);
  z-index: 100;
  box-shadow: ${props => props.theme.researchCardShadow};
  
  &:hover {
    background: ${props => props.theme.researchCardHighlight};
    color: ${props => props.theme.researchCardBackground};
    transform: scale(1.05);
    box-shadow: ${props => props.theme.researchCardHoverShadow};
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const ReadingTime = styled.span`
  color: ${props => props.theme.researchCardSecondary};
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const BlogCounter = styled.div`
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

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [blogContent, setBlogContent] = useState('');
  const blogRefs = useRef({});
  
  useEffect(() => {
    // Initialize blogs with your data
    const fetchedBlogs = [
      {
        id: 3,
        title: "LLMs in Blockchain Security: A Deep Dive",
        date: "17/11/2024",
        excerpt: 
          "Explore how Large Language Models are revolutionizing blockchain security through automated smart contract analysis. Learn about the technical approaches, challenges, and future possibilities in combining AI with blockchain technology to create more secure decentralized systems.",
        readingTime: 12,
        filename: "blog3.md",
      },
      {
        id: 2,
        title: "What is Ethereum?",
        date: "14/11/2024",
        excerpt: 
          "A comprehensive guide to Ethereum, exploring its evolution from Bitcoin's limitations to becoming a revolutionary platform for smart contracts, DeFi, NFTs, and DAOs. Discover how this 'world computer' is shaping the future of decentralized technology.",
        readingTime: 10,
        filename: "blog2.md",
      },
      {
        id: 1,
        title: "What is Bitcoin?",
        date: "9/11/2024",
        excerpt:
          "Discover Bitcoin's revolutionary approach to digital payments, exploring how it eliminates intermediaries through blockchain technology and cryptographic proof. Learn about its core concepts, security mechanisms, and potential to transform the future of money.",
        readingTime: 8,
        filename: "blog1.md",
      },
    ];
    // Sort blogs by date in descending order (newest first)
    const sortedBlogs = fetchedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    setBlogs(sortedBlogs);
  }, []);

  useEffect(() => {
    if (selectedBlog) {
      fetch(`/${selectedBlog.filename}`)
        .then(response => response.text())
        .then(text => setBlogContent(text))
        .catch(error => console.error('Error loading blog post:', error));
    }
  }, [selectedBlog]);

  const handleBack = () => {
    const currentBlogId = selectedBlog.id;
    setSelectedBlog(null);
    setBlogContent('');
    
    // Wait for the blog list to render before scrolling
    setTimeout(() => {
      if (blogRefs.current[currentBlogId]) {
        blogRefs.current[currentBlogId].scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 0);
  };

  if (selectedBlog) {
    const blogTags = {
      3: [
        "Blockchain Security",
        "LLMs",
        "Smart Contracts",
        "AI in Blockchain",
        "DeFi",
      ],
      2: [
        "Ethereum",
        "Smart Contracts",
        "DeFi",
        "NFTs",
        "DAOs",
      ],
      1: [
        "Bitcoin",
        "Blockchain",
        "Digital Currency",
        "Peer-to-Peer",
        "Mining",
      ],
    };

    return (
      <BlogContainer>
        <BlogPost>
          <BlogTitle>{selectedBlog.title}</BlogTitle>
          <BlogDate>{selectedBlog.date}</BlogDate>
          <TagContainer>
            {blogTags[selectedBlog.id].map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogContent}
          </ReactMarkdown>
        </BlogPost>
        <BackButton onClick={handleBack}>
          ← Back to Blog List
        </BackButton>
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      <Header>
        <h1>Blog</h1>
        <div className="subtitle">
          ✨ Random thoughts from a programmer who talks to computers more than
          humans 💻
        </div>
      </Header>
      <BlogGrid>
        {blogs.map((blog, index) => (
          <BlogCard 
            key={blog.id} 
            onClick={() => setSelectedBlog(blog)}
            ref={el => blogRefs.current[blog.id] = el}
          >
            <BlogCounter>
              Blog {index + 1}/{blogs.length}
            </BlogCounter>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDate>{blog.date}</BlogDate>
            <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
            <ReadingTime>{blog.readingTime} min read</ReadingTime>
            <ReadMoreLink>Read More →</ReadMoreLink>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 