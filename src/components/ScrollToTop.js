import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background: ${props => props.theme.researchCardBackground};
  border: 1px solid ${props => props.theme.researchCardHighlight};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.researchCardHighlight};
  opacity: 0.7;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${props => props.theme.researchCardShadow};

  &:hover {
    opacity: 1;
    background: ${props => props.theme.researchCardHighlight};
    color: ${props => props.theme.researchCardBackground};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.researchCardHoverShadow};
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <FaArrowUp size={20} />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop; 