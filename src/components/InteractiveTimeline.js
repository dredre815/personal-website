import styled from 'styled-components';
import { useState, useEffect } from 'react';

const TimelineContainer = styled.div`
  margin: 2rem 0 1rem;
  padding: 4rem 2rem;
  background: ${props => props.theme.timelineBackground};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  min-height: 1200px;
  border: 1px solid ${props => props.theme.timelineEventBorder};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const TimelinePath = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--primary),
    transparent
  );
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineEvent = styled.div`
  position: absolute;
  left: ${props => props.side === 'left' ? '0' : '50%'};
  width: 45%;
  margin: ${props => props.side === 'left' ? '0 0 0 2rem' : '0 2rem 0 0'};
  padding: 2rem 1.5rem 1.5rem;
  background: ${props => props.theme.timelineEventBackground};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.timelineEventBorder};
  backdrop-filter: blur(5px);
  transform: translateY(${props => props.active ? '0' : '20px'});
  opacity: ${props => props.active ? 1 : 0};
  transition: all 0.5s ease;
  cursor: pointer;
  box-shadow: 0 2px 10px ${props => props.theme.timelineEventShadow};

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 5px 15px ${props => props.theme.timelineEventShadow};
    transform: translateY(${props => props.active ? '-5px' : '15px'});
  }

  @media (max-width: 768px) {
    position: relative;
    left: 40px;
    width: calc(100% - 60px);
    margin: 2rem 0;
    top: auto !important;
  }
`;

const EventDot = styled.div`
  position: absolute;
  left: 50%;
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 50%;
  transform: translate(-50%, 50%);
  box-shadow: 0 0 20px var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, 50%) scale(1.2);
    box-shadow: 0 0 30px var(--primary);
  }

  @media (max-width: 768px) {
    left: 20px;
    
    &:hover {
      transform: translate(-50%, 50%) scale(1.2);
    }
  }
`;

const EventTitle = styled.h3`
  color: var(--primary);
  margin: 1.5rem 0 1rem;
  font-size: 1.4rem;
`;

const EventContent = styled.p`
  color: ${props => props.theme.timelineTextColor};
  margin: 0;
  line-height: 1.6;
`;

const EventDate = styled.span`
  position: absolute;
  top: 0.7rem;
  ${props => props.side === 'left' ? 'right: 1rem' : 'left: 1rem'};
  color: var(--primary);
  font-family: 'Courier New', monospace;
  background: ${props => props.theme.timelineEventBackground};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.timelineEventBorder};

  @media (max-width: 768px) {
    left: 1rem;
  }
`;

const InteractiveTimeline = () => {
  const [activeEvents, setActiveEvents] = useState([]);

  const events = [
    {
      id: 1,
      date: 'March 2021',
      title: 'Started University Journey',
      content: 'Enrolled in Bachelor of Science at the University of Melbourne, majoring in Computing and Software Systems.',
      side: 'left'
    },
    {
      id: 2,
      date: 'June 2022',
      title: 'Blockchain Enlightenment',
      content: 'First exposure to blockchain technology through reading the Bitcoin whitepaper, which sparked my interest in decentralized systems.',
      side: 'right'
    },
    {
      id: 3,
      date: 'December 2022',
      title: 'First Industry Experience',
      content: 'Joined ICBC Melbourne Branch as an Information Security intern, gaining practical experience in banking security.',
      side: 'left'
    },
    {
      id: 4,
      date: 'October 2023',
      title: 'First Full-Stack Project',
      content: 'Developed and deployed a comprehensive website for the Lyonville region of Victoria, marking my first full-stack development project.',
      side: 'right'
    },
    {
      id: 5,
      date: 'March 2024',
      title: 'Academic Milestone',
      content: 'Completed Bachelor\'s degree and continued the academic journey by enrolling in Master of Computer Science at the University of Melbourne.',
      side: 'left'
    },
    {
      id: 6,
      date: 'July 2024',
      title: 'Blockchain Security Focus',
      content: 'Started blockchain development journey with WTF Academy while simultaneously studying blockchain security with SlowMist.',
      side: 'right'
    },
    {
      id: 7,
      date: 'September 2024',
      title: 'AI Security Research',
      content: 'Began specializing in AI for Security, with a particular focus on adversarial machine learning.',
      side: 'left'
    },
    {
      id: 8,
      date: 'Beyond',
      title: 'The Adventure Unfolds',
      content: 'Every end is just a new beginning. Excited to push the boundaries where blockchain meets AI security, creating safer digital landscapes for tomorrow.',
      side: 'right'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveEvents(prev => [...prev, parseInt(entry.target.dataset.id)]);
          }
        });
      },
      { 
        threshold: window.innerWidth <= 768 ? 0.1 : 0.5,
        rootMargin: window.innerWidth <= 768 ? '50px' : '0px'
      }
    );

    document.querySelectorAll('[data-id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <TimelineContainer>
      <TimelinePath />
      {events.map((event, index) => (
        <div key={event.id}>
          <TimelineEvent
            side={event.side}
            active={activeEvents.includes(event.id)}
            data-id={event.id}
            style={{ 
              ...(window.innerWidth > 768 && { top: `${index * 11}%` })
            }}
          >
            <EventDate side={event.side}>{event.date}</EventDate>
            <EventTitle>{event.title}</EventTitle>
            <EventContent>{event.content}</EventContent>
          </TimelineEvent>
          <EventDot 
            style={{ 
              ...(window.innerWidth > 768 && { top: `${index * 10.8}%` })
            }} 
          />
        </div>
      ))}
    </TimelineContainer>
  );
};

export default InteractiveTimeline; 