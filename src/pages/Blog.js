import styled from 'styled-components';

const BlogContainer = styled.div`
  .blog-post {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--primary);
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(10px);
      background: rgba(0, 255, 0, 0.05);
    }
  }

  .post-date {
    color: var(--primary);
    font-size: 0.9rem;
  }

  .post-title {
    margin: 0.5rem 0;
    color: var(--text);
  }

  .post-excerpt {
    color: #888;
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <div className="blog-post">
        <div className="post-date">April 15, 2024</div>
        <h2 className="post-title">Blog Post Title</h2>
        <p className="post-excerpt">
          Short excerpt from the blog post...
        </p>
        <a href="#blog-post" className="read-more">Read more →</a>
      </div>
      {/* Add more blog posts */}
    </BlogContainer>
  );
};

export default Blog; 