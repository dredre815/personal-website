import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
  position: relative;
`;

const ErrorCode = styled.h1`
  color: var(--primary);
  font-size: 8rem;
  margin: 0;
  font-family: "Courier New", monospace;
  text-shadow: 0 0 20px ${(props) => props.theme.primary}80;
  animation: glitch 2s infinite;

  @keyframes glitch {
    0%,
    90%,
    100% {
      transform: translate(0);
    }
    92% {
      transform: translate(-2px, 2px);
    }
    94% {
      transform: translate(2px, -2px);
    }
    96% {
      transform: translate(-2px, -2px);
    }
    98% {
      transform: translate(2px, 2px);
    }
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const TerminalBox = styled.div`
  background: ${(props) => props.theme.codeBackground || "rgba(0, 0, 0, 0.3)"};
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  font-family: "Courier New", monospace;
  color: var(--primary);
  text-align: left;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 20px ${(props) => props.theme.primary}30;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.85rem;
  }
`;

const TerminalLine = styled.div`
  margin: 0.5rem 0;
  opacity: 0;
  animation: fadeInLine 0.5s ease forwards;
  animation-delay: ${(props) => props.$delay}s;

  @keyframes fadeInLine {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .success {
    color: #00ff00;
  }

  .error {
    color: #ff4444;
  }

  .warning {
    color: #ffaa00;
  }

  .prompt {
    color: var(--primary);
  }
`;

const EasterEggBox = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary}10,
    ${(props) => props.theme.secondary}10
  );
  border: 1px dashed var(--primary);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  max-width: 600px;
  width: 100%;

  .title {
    color: var(--primary);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .hint {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text);
    opacity: 0.9;
  }

  .code {
    font-family: "Courier New", monospace;
    background: ${(props) =>
      props.theme.codeBackground || "rgba(0, 0, 0, 0.2)"};
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    color: var(--primary);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .title {
      font-size: 1rem;
    }

    .hint {
      font-size: 0.85rem;
    }
  }
`;

const HomeLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  transition: all 0.3s ease;
  font-family: "Courier New", monospace;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: var(--background);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${(props) => props.theme.primary}50;

    &::before {
      left: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const NotFound = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEasterEgg(true);
    }, 3000);

    // Console Easter Eggs 🔐
    console.clear();
    console.log(
      "%c🔐 SECURITY ALERT: Unauthorized Access Detected!",
      "color: #ff4444; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #ff4444;"
    );
    console.log(
      "%c...Just kidding! Welcome, curious explorer! 😄",
      "color: #00ff00; font-size: 16px; font-weight: bold;"
    );
    console.log("");
    console.log(
      "%c╔════════════════════════════════════════╗",
      "color: #00ffff; font-family: monospace;"
    );
    console.log(
      "%c║  🎯 Marshall's Console Playground     ║",
      "color: #00ffff; font-family: monospace;"
    );
    console.log(
      "%c╚════════════════════════════════════════╝",
      "color: #00ffff; font-family: monospace;"
    );
    console.log("");
    console.log(
      "%cAvailable Commands:",
      "color: #ffaa00; font-size: 14px; font-weight: bold;"
    );
    console.log(
      "%c  • marshall.whoami()",
      "color: #00ffff; font-family: monospace;"
    );
    console.log("%c    → Learn more about me", "color: #888; font-size: 12px;");
    console.log(
      '%c  • marshall.decrypt("SGVsbG8hIFRoaXMgaXMgYSBoaWRkZW4gbWVzc2FnZSE=")',
      "color: #00ffff; font-family: monospace;"
    );
    console.log(
      "%c    → Decode secret messages",
      "color: #888; font-size: 12px;"
    );
    console.log(
      "%c  • marshall.skills()",
      "color: #00ffff; font-family: monospace;"
    );
    console.log(
      "%c    → View my technical skills",
      "color: #888; font-size: 12px;"
    );
    console.log(
      "%c  • marshall.hack()",
      "color: #00ffff; font-family: monospace;"
    );
    console.log("%c    → ??? Try it and see!", "color: #888; font-size: 12px;");
    console.log(
      "%c  • marshall.contact()",
      "color: #00ffff; font-family: monospace;"
    );
    console.log(
      "%c    → Get my contact information",
      "color: #888; font-size: 12px;"
    );
    console.log("");
    console.log(
      "%c💡 Pro Tip: Type any command above to interact!",
      "color: #ffaa00; font-style: italic;"
    );
    console.log("");

    // Define interactive console commands
    window.marshall = {
      whoami: () => {
        console.log(
          "%c┌─[marshall@security]─[~]",
          "color: #00ffff; font-family: monospace;"
        );
        console.log(
          "%c└──╼ $ whoami",
          "color: #00ffff; font-family: monospace;"
        );
        console.log("");
        console.log(
          "%c👨‍💻 Zijun (Marshall) Zhang",
          "color: #00ff00; font-weight: bold; font-size: 14px;"
        );
        console.log(
          "%c🎓 PhD Student @ University of Melbourne",
          "color: #fff;"
        );
        console.log(
          "%c🔐 Research: Trustworthy ML/AI",
          "color: #fff;"
        );
        console.log("%c🌏 Location: Melbourne, Australia", "color: #fff;");
        console.log("");
        console.log(
          '%c"Security is not a product, but a process." - Bruce Schneier',
          "color: #ffaa00; font-style: italic;"
        );
        return "✅ Command executed successfully";
      },

      decrypt: (encoded) => {
        console.log(
          "%c┌─[marshall@security]─[~]",
          "color: #00ffff; font-family: monospace;"
        );
        console.log(
          `%c└──╼ $ decrypt "${encoded}"`,
          "color: #00ffff; font-family: monospace;"
        );
        console.log("");
        try {
          const decoded = atob(encoded);
          console.log(
            "%c🔓 Decryption successful!",
            "color: #00ff00; font-weight: bold;"
          );
          console.log("%cDecoded message:", "color: #ffaa00;");
          console.log(`%c"${decoded}"`, "color: #fff; font-size: 14px;");
          return decoded;
        } catch (e) {
          console.log(
            "%c❌ Decryption failed: Invalid Base64 encoding",
            "color: #ff4444;"
          );
          console.log(
            "%c💡 Hint: Message must be Base64 encoded",
            "color: #888;"
          );
          return "Error: Invalid encoding";
        }
      },

      skills: () => {
        console.log(
          "%c┌─[marshall@security]─[~]",
          "color: #00ffff; font-family: monospace;"
        );
        console.log(
          "%c└──╼ $ cat skills.json",
          "color: #00ffff; font-family: monospace;"
        );
        console.log("");
        const skills = {
          "Security & Cryptography": [
            "Applied Cryptography",
            "Blockchain Security",
            "Trustworthy Machine Learning",
          ],
          Programming: ["Python", "C/C++", "JavaScript/TypeScript"],
          "ML & AI": [
            "PyTorch",
            "TensorFlow",
            "Transformers",
            "Large Language Models",
            "Machine Unlearning",
          ],
          Tools: ["Git", "Docker", "Linux", "LaTeX", "Burp Suite"],
          Languages: ["English", "Chinese"],
        };
        console.table(skills);
        console.log("%c✅ Skills loaded successfully", "color: #00ff00;");
        return skills;
      },

      hack: () => {
        console.log(
          "%c┌─[marshall@security]─[~]",
          "color: #00ffff; font-family: monospace;"
        );
        console.log(
          "%c└──╼ $ sudo ./hack_the_planet.sh",
          "color: #00ffff; font-family: monospace;"
        );
        console.log("");
        console.log(
          "%c[*] Initializing hacking sequence...",
          "color: #ffaa00;"
        );

        const hackingMessages = [
          "Scanning network... 192.168.1.0/24",
          "Found 42 devices online",
          "Exploiting vulnerabilities...",
          "Buffer overflow detected at 0x7fff5fbff8c0",
          "Privilege escalation in progress...",
          "Access granted: root@mainframe",
          "Downloading secret files...",
          "FBI ALERT: Trace detected!",
          "Deploying anti-forensics...",
          "Clearing logs...",
          "Connection terminated safely",
        ];

        let delay = 0;
        hackingMessages.forEach((msg, i) => {
          setTimeout(() => {
            if (i === hackingMessages.length - 3) {
              console.log(`%c[!] ${msg}`, "color: #ff4444; font-weight: bold;");
            } else if (i === hackingMessages.length - 1) {
              console.log(`%c[✓] ${msg}`, "color: #00ff00;");
              console.log("");
              console.log(
                "%c😂 Just kidding! This is just a fun simulation.",
                "color: #fff; font-size: 14px;"
              );
              console.log(
                "%cRemember: Real hacking is illegal. Stay ethical! 🛡️",
                "color: #ffaa00; font-weight: bold;"
              );
            } else {
              console.log(`%c[*] ${msg}`, "color: #00ffff;");
            }
          }, delay);
          delay += 300;
        });

        return "Hacking sequence initiated... (watch the console!)";
      },

      contact: () => {
        console.log(
          "%c┌─[marshall@security]─[~]",
          "color: #00ffff; font-family: monospace;"
        );
        console.log(
          "%c└──╼ $ cat contact.txt",
          "color: #00ffff; font-family: monospace;"
        );
        console.log("");
        console.log(
          "%c📬 Contact Information:",
          "color: #00ff00; font-weight: bold; font-size: 14px;"
        );
        console.log("");
        console.log("%c📧 Email:", "color: #ffaa00; font-weight: bold;");
        console.log("   zijuzhang1@student.unimelb.edu.au");
        console.log("");
        console.log("%c🐦 Twitter:", "color: #ffaa00; font-weight: bold;");
        console.log("   @Romanticism_02");
        console.log("");
        console.log("%c👨‍💻 GitHub:", "color: #ffaa00; font-weight: bold;");
        console.log("   github.com/dredre815");
        console.log("");
        console.log("%c💼 LinkedIn:", "color: #ffaa00; font-weight: bold;");
        console.log("   linkedin.com/in/zijunzhang2002");
        console.log("");
        console.log(
          "%c✨ Feel free to reach out!",
          "color: #00ffff; font-style: italic;"
        );
        return "✅ Contact information displayed";
      },
    };

    return () => clearTimeout(timer);
  }, []);

  return (
    <NotFoundContainer>
      <ErrorCode>HTTP 404</ErrorCode>

      <TerminalBox>
        <TerminalLine $delay={0}>
          <span className="prompt">┌─[marshall@security]─[~]</span>
        </TerminalLine>
        <TerminalLine $delay={0.3}>
          <span className="prompt">└──╼ $ </span>ls -la /requested_page
        </TerminalLine>
        <TerminalLine $delay={0.6}>
          <span className="error">
            ls: cannot access '/requested_page': No such file or directory
          </span>
        </TerminalLine>
        <TerminalLine $delay={0.9}>
          <span className="prompt">┌─[marshall@security]─[~]</span>
        </TerminalLine>
        <TerminalLine $delay={1.2}>
          <span className="prompt">└──╼ $ </span>grep -r "vulnerability"
          /requested_page
        </TerminalLine>
        <TerminalLine $delay={1.5}>
          <span className="success">[✓] No vulnerabilities found</span>
        </TerminalLine>
        <TerminalLine $delay={1.8}>
          <span className="warning">
            [!] Looks like you found a path traversal... just kidding! 😏
          </span>
        </TerminalLine>
        <TerminalLine $delay={2.1}>
          <span className="prompt">┌─[marshall@security]─[~]</span>
        </TerminalLine>
        <TerminalLine $delay={2.4}>
          <span className="prompt">└──╼ $ </span>echo "Redirecting to home..."
        </TerminalLine>
      </TerminalBox>

      {showEasterEgg && (
        <EasterEggBox>
          <div className="title">
            🎯 Security Researcher Easter Egg Detected!
          </div>
          <div className="hint">
            Since you're here exploring the dark corners of my website, you
            might enjoy checking out the browser console. I've left a few
            surprises for curious minds like yours. Try typing{" "}
            <span className="code">marshall.whoami()</span> or explore the
            source code for more hidden gems! 🔍✨
          </div>
        </EasterEggBox>
      )}

      <HomeLink to="/">$ cd /home && ./explore.sh</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;
