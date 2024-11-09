import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  backdrop-filter: blur(5px);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: rgba(0, 255, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogPost = styled.article`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  h3, h4 {
    color: var(--primary);
    margin: 1.5rem 0 1rem;
    font-family: 'Courier New', monospace;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: var(--primary);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    overflow-x: auto;
    display: block;
  }

  th, td {
    border: 1px solid var(--primary);
    padding: 0.5rem;
    text-align: left;
    white-space: nowrap;
  }

  th {
    background: rgba(0, 255, 0, 0.1);
  }
`;

const BlogTitle = styled.h2`
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ReadingTime = styled.div`
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-style: italic;
`;

const BlogDate = styled.div`
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const BackButton = styled.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--background);
  }
`;

const BlogExcerpt = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: #ccc;
`;

const ReadMoreLink = styled.div`
  color: var(--primary);
  margin-top: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');
  
  const blogs = [
    {
      id: 1,
      title: "What is Bitcoin?",
      date: "9 November 2024",
      excerpt:
        "An exploration of how Bitcoin and blockchain technology are reshaping our understanding of financial systems and trust in the digital age.",
      readingTime: 5,
      filename: "blog1.md",
    },
  ];

  useEffect(() => {
    if (selectedBlog) {
      fetch(`/${selectedBlog.filename}`)
        .then(response => response.text())
        .then(text => setBlogContent(text))
        .catch(error => console.error('Error loading blog post:', error));
    }
  }, [selectedBlog]);

  if (selectedBlog) {
    return (
      <BlogContainer>
        <BackButton onClick={() => setSelectedBlog(null)}>
          ← Back to Blogs
        </BackButton>
        <BlogPost>
          <BlogTitle>{selectedBlog.title}</BlogTitle>
          <BlogDate>{selectedBlog.date}</BlogDate>
          <ReadingTime>{selectedBlog.readingTime} min read</ReadingTime>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{blogContent}</ReactMarkdown>
        </BlogPost>
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      <BlogTitle>Blog Posts</BlogTitle>
      {blogs.map(blog => (
        <BlogCard key={blog.id} onClick={() => setSelectedBlog(blog)}>
          <BlogDate>{blog.date}</BlogDate>
          <BlogTitle>{blog.title}</BlogTitle>
          <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
          <ReadingTime>{blog.readingTime} min read</ReadingTime>
          <ReadMoreLink>Read More →</ReadMoreLink>
        </BlogCard>
      ))}
    </BlogContainer>
  );
};

export default Blog; 