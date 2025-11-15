import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import NeuralNetworkPlayground from '../components/NeuralNetworkPlayground';

const HomeContainer = styled.div`
  .typing-text {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      white-space: normal;
      word-wrap: break-word;
      line-height: 1.4;
    }
  }

  .scroll-hint {
    white-space: nowrap;
    overflow: hidden;
    font-size: 1rem;
    margin-bottom: 2rem;
    color: var(--secondary);
    opacity: 0.8;
  }

  .content {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s ease forwards;
    animation-delay: 2s;
  }

  .intro {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.8;

    p {
      margin-bottom: 1.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .skills-placeholder {
    height: 600px;
    margin: 2rem 0;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    color: var(--primary);
    font-size: 1.2rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }
  }

  .social-link {
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    color: var(--primary);

    @media (max-width: 768px) {
      justify-content: center;
    }

    /* Glitch effect layers */
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
    }

    &::before {
      color: #ff00ff;
      z-index: 1;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }

    &::after {
      color: #00ffff;
      z-index: 2;
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }

    &:hover {
      background: var(--primary);
      color: var(--background);
      transform: translateY(-3px);
      box-shadow: 0 4px 15px ${props => props.theme.primary}50;
      animation: glitchShake 0.3s ease;

      &::before {
        opacity: 0.8;
        animation: glitchBefore 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
      }

      &::after {
        opacity: 0.8;
        animation: glitchAfter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
      }
    }

    @keyframes glitchShake {
      0%, 100% {
        transform: translateY(-3px);
      }
      25% {
        transform: translate(-2px, -3px);
      }
      50% {
        transform: translate(2px, -5px);
      }
      75% {
        transform: translate(-1px, -2px);
      }
    }

    @keyframes glitchBefore {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      100% {
        transform: translate(0);
      }
    }

    @keyframes glitchAfter {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(2px, -2px);
      }
      40% {
        transform: translate(2px, 2px);
      }
      60% {
        transform: translate(-2px, -2px);
      }
      80% {
        transform: translate(-2px, 2px);
      }
      100% {
        transform: translate(0);
      }
    }
  }

  .section-title {
    color: var(--primary);
    font-size: 2.5rem;
    margin: 2rem 0 1rem;
    font-family: 'Courier New', monospace;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        to right,
        var(--primary),
        transparent
      );
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--secondary);
    white-space: pre-line;
  }

  .transition-text {
    font-size: 1.3rem;
    margin-top: 2.5rem;
    margin-bottom: 0;
    padding: 1.2rem 1.5rem;
    background: linear-gradient(135deg, 
      ${props => props.theme.timelineEventBackground}40,
      ${props => props.theme.primary}20);
    border-left: 4px solid var(--primary);
    border-radius: 8px;
    color: var(--primary);
    font-weight: 500;
    font-style: italic;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
      0%, 100% {
        transform: translateX(0);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }
      50% {
        transform: translateX(5px);
        box-shadow: 0 6px 20px ${props => props.theme.primary}30;
      }
    }
  }

  .supervisor-link {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    font-weight: 600;
    position: relative;
    display: inline-block;

    &::after {
      content: '🔗';
      position: absolute;
      right: -25px;
      opacity: 0;
      transform: translateX(-10px) rotate(-45deg);
      transition: all 0.4s ease;
      font-size: 0.9em;
    }

    &:hover {
      border-bottom-color: var(--primary);
      text-shadow: 0 0 8px ${props => props.theme.primary}80;
      padding-right: 25px;
      
      &::after {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
        animation: linkBounce 0.6s ease;
      }
    }

    @keyframes linkBounce {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-3px) rotate(-10deg);
      }
      50% {
        transform: translateY(0) rotate(5deg);
      }
      75% {
        transform: translateY(-2px) rotate(-5deg);
      }
    }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Home = () => {
  const textRef = useRef(null);
  const scrollHintRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  const sections = [
    {
      title: "$ whoami",
      subtitle: 'System.out.println("PhD student by day, bug whisperer by night");',
      content: [
        "🤖 Greetings, humans and bots! I'm a PhD student at the University of Melbourne, diving deep into the fascinating (and occasionally terrifying) world of Trustworthy ML/AI. My research focuses on making AI systems that won't plot world domination... hopefully.",
        "🎓 Under the wise guidance of my supervisors A/Prof Xingliang Yuan and Dr Shangqi Lai, I'm exploring how to make machine learning models more secure, private, and trustworthy. Think of it as teaching AI to be a good citizen of the digital world!",
        "🧠 When I'm not debugging neural networks or reading papers at 2 AM, you'll find me experimenting with new security techniques, building cool visualizations (like the one below), and occasionally questioning my life choices when my model refuses to converge.",
        "🚀 Fun fact: I believe the key to solving AI safety lies somewhere between rigorous mathematics, creative engineering, and an unhealthy amount of caffeine. Currently on a quest to make AI systems that even my paranoid security researcher friends would trust!"
      ],
      transition: "Speaking of neural networks... let me show you what I've been playing with! 👇"
    },
    {
      title: "$ ./visualize_nn.sh",
      subtitle: 'Initializing neural network visualization... \nClick neurons to trigger activation | Drag to paint signals | Right-click for chain reactions 🧠✨'
    },
    {
      title: "$ ping -c 1 marshall",
      subtitle: '64 bytes from marshall: icmp_seq=1 ttl=42 time=0.42ms (Response: "Let\'s create some digital magic together! 🪄")'
    }
  ];

  useEffect(() => {
    setShowContent(false);
    const text = "Hello, I'm Zijun (Marshall) Zhang";
    const scrollHint = "Scroll down to explore 👇";
    let i = 0;
    let j = 0;
    
    const textElement = textRef.current;
    const scrollHintElement = scrollHintRef.current;
    
    const typing = setInterval(() => {
      if (textElement) {
        textElement.textContent = text.slice(0, i);
        i++;
        if (i > text.length) {
          if (scrollHintElement) {
            scrollHintElement.textContent = scrollHint.slice(0, j);
            j++;
            if (j > scrollHint.length) {
              clearInterval(typing);
              setShowContent(true);
            }
          }
        }
      }
    }, 30);

    return () => {
      clearInterval(typing);
      if (textElement) textElement.textContent = '';
      if (scrollHintElement) scrollHintElement.textContent = '';
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: window.innerWidth <= 768 ? 0.1 : 0.2,
        rootMargin: window.innerWidth <= 768 ? '30px' : '0px'
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showContent]);

  return (
    <HomeContainer>
      <div className="typing-text" ref={textRef}></div>
      <div className="scroll-hint" ref={scrollHintRef}></div>
      <div className="content">
        <div className="animate-on-scroll">
          <h2 className="section-title">{sections[0].title}</h2>
          <div className="section-subtitle">{sections[0].subtitle}</div>
          <div className="intro">
            {sections[0].content.map((paragraph, pIndex) => {
              // Special handling for the paragraph with supervisor names
              if (paragraph.includes('A/Prof Xingliang Yuan') && paragraph.includes('Dr Shangqi Lai')) {
                const parts = paragraph.split(/(\bA\/Prof Xingliang Yuan\b|\bDr Shangqi Lai\b)/);
                return (
                  <p key={pIndex}>
                    {parts.map((part, idx) => {
                      if (part === 'A/Prof Xingliang Yuan') {
                        return (
                          <a
                            key={idx}
                            href="https://xyuancs.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="supervisor-link"
                          >
                            {part}
                          </a>
                        );
                      } else if (part === 'Dr Shangqi Lai') {
                        return (
                          <a
                            key={idx}
                            href="https://shangqi-lai.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="supervisor-link"
                          >
                            {part}
                          </a>
                        );
                      }
                      return <span key={idx}>{part}</span>;
                    })}
                  </p>
                );
              }
              return <p key={pIndex}>{paragraph}</p>;
            })}
          </div>
          {sections[0].transition && (
            <div className="transition-text">{sections[0].transition}</div>
          )}
        </div>

        <div className="animate-on-scroll">
          <h2 className="section-title">{sections[1].title}</h2>
          <div className="section-subtitle">{sections[1].subtitle}</div>
          <NeuralNetworkPlayground />
        </div>

        <div className="animate-on-scroll">
          <h2 className="section-title">{sections[2].title}</h2>
          <div className="section-subtitle">{sections[2].subtitle}</div>
          <div className="social-links">
            <a
              href="mailto:zijuzhang1@student.unimelb.edu.au"
              className="social-link"
              data-text='📧 sudo mail -s "Hello!"'
            >
              <span>📧</span> sudo mail -s "Hello!"
            </a>
            <a
              href="https://twitter.com/Romanticism_02"
              className="social-link"
              data-text='🐦 Tweet.post("Hi!")'
            >
              <span>🐦</span> Tweet.post("Hi!")
            </a>
            <a 
              href="https://github.com/dredre815" 
              className="social-link"
              data-text='👨‍💻 git pull request'
            >
              <span>👨‍💻</span> git pull request
            </a>
            <a
              href="https://www.linkedin.com/in/zijunzhang2002/"
              className="social-link"
              data-text='👤 /connect --professional'
            >
              <span>👤</span> /connect --professional
            </a>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;