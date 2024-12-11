import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate, Link } from 'react-router-dom';

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

const ReadMoreButton = styled.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
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

const BlogNavigation = styled.div`
  margin-bottom: 2rem;
  color: ${props => props.theme.researchCardSecondary};
  font-family: 'Courier New', monospace;
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
  }
`;

const BlogNavigationBottom = styled(BlogNavigation)`
  margin-top: 3rem;
  margin-bottom: 0;
  display: block;
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
  opacity: 0.7;
`;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [blogContent, setBlogContent] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();
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
        slug: "llms-blockchain-security"
      },
      {
        id: 2,
        title: "What is Ethereum?",
        date: "14/11/2024",
        excerpt: 
          "A comprehensive guide to Ethereum, exploring its evolution from Bitcoin's limitations to becoming a revolutionary platform for smart contracts, DeFi, NFTs, and DAOs. Discover how this 'world computer' is shaping the future of decentralized technology.",
        readingTime: 10,
        filename: "blog2.md",
        slug: "what-is-ethereum"
      },
      {
        id: 1,
        title: "What is Bitcoin?",
        date: "9/11/2024",
        excerpt:
          "Discover Bitcoin's revolutionary approach to digital payments, exploring how it eliminates intermediaries through blockchain technology and cryptographic proof. Learn about its core concepts, security mechanisms, and potential to transform the future of money.",
        readingTime: 8,
        filename: "blog1.md",
        slug: "what-is-bitcoin"
      }
    ];
    
    const sortedBlogs = fetchedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    setBlogs(sortedBlogs);

    // If there's a slug in the URL, find and select the corresponding blog
    if (slug) {
      const matchingBlog = sortedBlogs.find(blog => blog.slug === slug);
      if (matchingBlog) {
        setSelectedBlog(matchingBlog);
      } else {
        navigate('/blog'); // Redirect to blog list if slug is invalid
      }
    } else {
      setSelectedBlog(null);
    }
  }, [slug, navigate]);

  useEffect(() => {
    if (selectedBlog) {
      fetch(`/${selectedBlog.filename}`)
        .then(response => response.text())
        .then(text => {
          setBlogContent(text);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        })
        .catch(error => console.error('Error loading blog post:', error));
    }
  }, [selectedBlog]);

  const handleBack = () => {
    const currentBlogId = selectedBlog.id;
    navigate('/blog');
    
    setTimeout(() => {
      if (blogRefs.current[currentBlogId]) {
        blogRefs.current[currentBlogId].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  if (selectedBlog) {
    return (
      <BlogContainer>
        <BlogPost>
          <BlogNavigation onClick={handleBack}>
            ← Back to Blog List
          </BlogNavigation>
          <BlogTitle>{selectedBlog.title}</BlogTitle>
          <BlogDate>{selectedBlog.date}</BlogDate>
          <ReadingTime>
            📚 {selectedBlog.readingTime} min read
          </ReadingTime>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogContent}
          </ReactMarkdown>
          <BlogNavigationBottom onClick={handleBack}>
            ← Back to Blog List
          </BlogNavigationBottom>
        </BlogPost>
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
            ref={(el) => (blogRefs.current[blog.id] = el)}
          >
            <BlogCounter>Blog {index + 1}/{blogs.length}</BlogCounter>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDate>{blog.date}</BlogDate>
            <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
            <ReadingTime>📚 {blog.readingTime} min read</ReadingTime>
            <Link 
              to={`/blog/${blog.slug}`} 
              style={{ textDecoration: 'none' }}
            >
              <ReadMoreButton>
                {"< Read More />"}
              </ReadMoreButton>
            </Link>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 