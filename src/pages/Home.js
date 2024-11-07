import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import InteractiveTimeline from '../components/InteractiveTimeline';

const HomeContainer = styled.div`
  .typing-text {
    white-space: nowrap;
    overflow: hidden;
    font-size: 2rem;
    margin-bottom: 0.5rem;
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
  }

  .social-link {
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: var(--primary);
      color: var(--background);
      transform: translateY(-3px);
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
  }

  .section-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--secondary);
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
      subtitle: 'System.out.println("Just your average code poet with a bug-fixing addiction");',
      content: [
        "🤖 Greetings, humans and bots! I'm your friendly neighborhood code wizard, currently mastering the dark arts of Computer Science at the University of Melbourne.",
        "🎮 When I'm not trying to convince my compiler that my code is actually working, I'm diving deep into the rabbit holes of AI (teaching machines to be as confused as I am), Security (because who doesn't love staying up all night paranoid about cyber threats?), and Blockchain (still explaining to my mom that no, I'm not mining Bitcoin in the basement).",
        "🚀 Think of me as a digital explorer with a keyboard as my compass and ChatGPT as my best friend. Currently seeking opportunities to turn coffee into code and bugs into features!"
      ]
    },
    {
      title: "$ history | grep \"plot_twist\"",
      subtitle: 'Warning: This timeline contains traces of caffeine, determination, and occasional moments of "It works! But why?" 🎢'
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
        threshold: 0.2,
        rootMargin: '0px'
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
            {sections[0].content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <h2 className="section-title">{sections[1].title}</h2>
          <div className="section-subtitle">{sections[1].subtitle}</div>
          <InteractiveTimeline />
        </div>

        <div className="animate-on-scroll">
          <h2 className="section-title">{sections[2].title}</h2>
          <div className="section-subtitle">{sections[2].subtitle}</div>
          <div className="social-links">
            <a
              href="mailto:zijuzhang1@student.unimelb.edu.au"
              className="social-link"
            >
              <span>📧</span> sudo mail -s "Hello!"
            </a>
            <a
              href="https://twitter.com/Romanticism_02"
              className="social-link"
            >
              <span>🐦</span> Tweet.post("Hi!")
            </a>
            <a href="https://github.com/dredre815" className="social-link">
              <span>👨‍💻</span> git pull request
            </a>
            <a
              href="https://www.linkedin.com/in/zijunzhang2002/"
              className="social-link"
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