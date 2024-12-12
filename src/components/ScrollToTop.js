import React, { useState, useEffect, useCallback } from 'react';
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
  opacity: ${props => props.$show ? '0.7' : '0'};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
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
  const [show, setShow] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const hideButton = useCallback(() => {
    setShow(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      setShow(true);
      
      // 清除之前的定时器
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // 设置新的定时器，3秒后隐藏按钮
      const newTimeoutId = setTimeout(hideButton, 3000);
      setTimeoutId(newTimeoutId);
    } else {
      setIsVisible(false);
      setShow(false);
    }
  }, [timeoutId, hideButton]);

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
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [toggleVisibility, timeoutId]);

  return (
    <>
      {isVisible && (
        <ScrollButton 
          onClick={scrollToTop} 
          $show={show}
          onMouseEnter={() => {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            setShow(true);
          }}
          onMouseLeave={() => {
            const newTimeoutId = setTimeout(hideButton, 3000);
            setTimeoutId(newTimeoutId);
          }}
        >
          <FaArrowUp size={20} />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop; 