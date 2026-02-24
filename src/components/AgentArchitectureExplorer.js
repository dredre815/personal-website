import styled, { keyframes, css } from "styled-components";
import { useState, useEffect, useRef, useCallback } from "react";

const MODULES = [
  {
    id: "planning",
    name: "Planning",
    short: "Plan",
    icon: "📋",
    x: 25,
    y: 12,
    description:
      "Decomposes complex tasks into manageable sub-tasks and determines execution strategy.",
    techniques: "Task Decomposition, Sub-goal Generation, Plan-and-Solve",
    research: "Robust planning resilient to prompt injection",
  },
  {
    id: "memory",
    name: "Memory",
    short: "Mem",
    icon: "💾",
    x: 75,
    y: 12,
    description:
      "Stores and retrieves context (short-term) and knowledge (long-term) for informed decisions.",
    techniques: "RAG, Vector DB, Context Windows, Episodic Memory",
    research: "Privacy-preserving memory preventing data leakage",
  },
  {
    id: "llm",
    name: "LLM Core",
    short: "LLM",
    icon: "🧠",
    x: 50,
    y: 40,
    description:
      "The central reasoning engine — processes inputs, generates thoughts, and orchestrates all modules.",
    techniques: "Chain-of-Thought, In-Context Learning, Instruction Tuning",
    research: "Trustworthy reasoning under adversarial conditions",
  },
  {
    id: "tools",
    name: "Tools",
    short: "Tools",
    icon: "🔧",
    x: 25,
    y: 68,
    description:
      "Interfaces with external systems — search engines, code interpreters, APIs, and databases.",
    techniques: "Function Calling, API Integration, Code Execution",
    research: "Secure tool use with sandboxing and access control",
  },
  {
    id: "reflection",
    name: "Reflection",
    short: "Reflect",
    icon: "🔍",
    x: 75,
    y: 68,
    description:
      "Self-evaluates outputs for accuracy, safety, and alignment before delivering results.",
    techniques: "Self-Critique, Verification, Constitutional AI, RLHF",
    research: "Automated red-teaming and safety verification",
  },
  {
    id: "environment",
    name: "Environment",
    short: "Env",
    icon: "🌐",
    x: 50,
    y: 92,
    description:
      "The interface between agent and world — receives user inputs and delivers final outputs.",
    techniques: "User Interface, API Gateway, Output Formatting",
    research: "Robustness against adversarial user inputs",
  },
];

const CONNECTIONS = [
  { from: "planning", to: "memory" },
  { from: "planning", to: "llm" },
  { from: "memory", to: "llm" },
  { from: "llm", to: "tools" },
  { from: "llm", to: "reflection" },
  { from: "tools", to: "reflection" },
  { from: "llm", to: "environment" },
];

const SCENARIOS = [
  {
    id: "trust",
    name: "📄 Analyze Paper Trust",
    description: "Evaluate a research paper's methodology and trustworthiness",
    steps: [
      {
        type: "thought",
        text: "I need to analyze this paper's claims, methodology, and reproducibility. Let me plan a systematic evaluation.",
        modules: ["llm", "planning"],
      },
      {
        type: "action",
        text: 'search("trustworthy ML evaluation frameworks, reproducibility checklist 2024")',
        modules: ["llm", "tools"],
      },
      {
        type: "observation",
        text: "Found: TrustML-Bench framework, ML Reproducibility Checklist v2.0, and CRAFT evaluation criteria.",
        modules: ["tools", "memory"],
      },
      {
        type: "thought",
        text: "Cross-referencing experimental setup against frameworks. No adversarial testing was performed.",
        modules: ["llm", "memory", "reflection"],
      },
      {
        type: "action",
        text: 'analyze_methodology(check=["stat_significance", "ablation", "adversarial_tests", "privacy"])',
        modules: ["llm", "tools"],
      },
      {
        type: "observation",
        text: "Statistical tests: ✓ | Ablations: ✓ | Adversarial tests: ✗ missing | Privacy: ✗ absent",
        modules: ["tools", "llm"],
      },
      {
        type: "result",
        text: "Trust Score: 6.5/10 — Solid methodology but missing adversarial robustness and privacy analysis. Recommend adding DP bounds and adversarial test suites.",
        modules: ["llm", "environment", "reflection"],
      },
    ],
  },
  {
    id: "privacy",
    name: "🔒 Debug Privacy Leak",
    description:
      "Identify and fix a model that's leaking private training data",
    steps: [
      {
        type: "thought",
        text: "A model is suspected of leaking private data. I need to quantify exposure via membership inference and gradient leakage attacks.",
        modules: ["llm", "planning"],
      },
      {
        type: "action",
        text: "run_membership_inference(model, shadow_dataset, target_records=1000)",
        modules: ["llm", "tools"],
      },
      {
        type: "observation",
        text: "Membership inference accuracy: 87.3% (baseline: 50%). The model is severely memorizing training data.",
        modules: ["tools", "memory"],
      },
      {
        type: "thought",
        text: "Confirmed memorization. The loss landscape has sharp minima around training points. Differential privacy should smooth this.",
        modules: ["llm", "reflection"],
      },
      {
        type: "action",
        text: 'apply_fix(method="DP-SGD", epsilon=1.0, delta=1e-5, clip_norm=1.0) && rerun_attack()',
        modules: ["llm", "tools"],
      },
      {
        type: "observation",
        text: "DP-SGD applied. New membership inference: 52.1% (near random). Utility drop: only -2.1%.",
        modules: ["tools", "llm"],
      },
      {
        type: "result",
        text: "Privacy leak fixed. DP-SGD (ε=1.0) reduced membership inference from 87.3% → 52.1%. Acceptable utility trade-off: 2.1%.",
        modules: ["llm", "environment", "reflection"],
      },
    ],
  },
  {
    id: "robustness",
    name: "🛡 Plan Robustness Test",
    description:
      "Design an experiment to evaluate AI model robustness across modalities",
    steps: [
      {
        type: "thought",
        text: "I need a comprehensive robustness evaluation. Let me recall existing benchmarks and identify testing gaps.",
        modules: ["llm", "planning", "memory"],
      },
      {
        type: "action",
        text: 'retrieve_knowledge("robustness benchmarks: AutoAttack, RobustBench, adversarial NLP")',
        modules: ["memory", "tools"],
      },
      {
        type: "observation",
        text: "Retrieved 3 benchmark suites. Gap: no unified framework tests both vision and language modalities.",
        modules: ["memory", "llm"],
      },
      {
        type: "thought",
        text: "I'll design a cross-modal robustness test — L∞ perturbations for vision, character-level attacks for text.",
        modules: ["llm", "planning"],
      },
      {
        type: "action",
        text: 'generate_config(modalities=["vision","text"], attacks=["PGD","TextFooler"], metrics=["clean_acc","robust_acc"])',
        modules: ["llm", "tools"],
      },
      {
        type: "observation",
        text: "Config: 12 attack scenarios × 3 architectures × 5 seeds = 180 runs. Est: 340 GPU-hours.",
        modules: ["tools", "llm"],
      },
      {
        type: "thought",
        text: "Let me verify the design covers edge cases and has proper statistical controls.",
        modules: ["llm", "reflection"],
      },
      {
        type: "result",
        text: "Plan ready: cross-modal robustness benchmark — 3 architectures, 12 attacks, certified defenses, significance tests (p<0.05).",
        modules: ["llm", "environment"],
      },
    ],
  },
  {
    id: "explain",
    name: "💡 Explain AI Agents",
    description: "Break down how AI agents work for a newcomer",
    steps: [
      {
        type: "thought",
        text: "I need to explain AI agents simply: what they are, how they think, and what sets them apart from chatbots.",
        modules: ["llm", "planning"],
      },
      {
        type: "action",
        text: 'retrieve_knowledge("AI agent architecture, ReAct pattern, tool-augmented LLMs")',
        modules: ["llm", "memory"],
      },
      {
        type: "observation",
        text: "Loaded: ReAct loop (Thought→Action→Observation), tool use, memory systems, planning, reflection.",
        modules: ["memory", "llm"],
      },
      {
        type: "thought",
        text: "An AI agent is like giving an LLM hands and eyes — it can think, act, observe, and reflect. Let me build this analogy.",
        modules: ["llm", "reflection"],
      },
      {
        type: "action",
        text: 'format_explanation(style="analogy", audience="beginner", include_diagram=true)',
        modules: ["llm", "tools"],
      },
      {
        type: "observation",
        text: "Formatted: brain analogy, step-by-step ReAct example, chatbot vs agent comparison.",
        modules: ["tools", "llm"],
      },
      {
        type: "result",
        text: "AI Agent = LLM brain + tools for hands + memory for experience + reflection for self-improvement. Unlike chatbots, agents plan multi-step tasks, use tools, and self-correct via the ReAct loop — exactly what you're watching now!",
        modules: ["llm", "environment"],
      },
    ],
  },
];

const SPEED_CONFIG = {
  slow: { charDelay: 35, stepPause: 1500 },
  normal: { charDelay: 18, stepPause: 800 },
  fast: { charDelay: 6, stepPause: 300 },
};

const STEP_LABELS = {
  thought: "💭 Thought",
  action: "⚡ Action",
  observation: "👁 Observe",
  result: "✅ Result",
};

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px var(--glow-color); }
  50% { box-shadow: 0 0 20px var(--glow-color), 0 0 35px var(--glow-color); }
`;

const dashFlow = keyframes`
  to { stroke-dashoffset: -12; }
`;

const blinkCursor = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ExplorerContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: ${(p) => p.theme.timelineBackground};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid ${(p) => p.theme.timelineEventBorder};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const DiagramArea = styled.div`
  position: relative;
  width: 100%;
  height: 380px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Node = styled.div`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 0.9rem;
  background: ${(p) => p.theme.cardBoxBackground};
  border: 1.5px solid
    ${(p) => (p.$active ? p.theme.primary : p.theme.cardBoxBorder)};
  border-radius: 10px;
  cursor: pointer;
  transition:
    border-color 0.3s,
    background 0.3s,
    color 0.3s,
    box-shadow 0.3s;
  font-family: "Courier New", monospace;
  color: ${(p) => (p.$active || p.$selected ? p.theme.primary : p.theme.text)};
  text-align: center;
  z-index: 2;
  user-select: none;
  white-space: nowrap;
  --glow-color: ${(p) => p.theme.primary}60;

  ${(p) =>
    p.$active &&
    css`
      animation: ${pulseGlow} 1.5s ease-in-out infinite;
      background: ${p.theme.buttonHoverBackground};
      font-weight: bold;
    `}

  ${(p) =>
    p.$selected &&
    !p.$active &&
    css`
      border-color: ${p.theme.primary};
      background: ${p.theme.buttonHoverBackground};
    `}

  ${(p) =>
    p.$isCore &&
    css`
      padding: 0.6rem 1.1rem;
      border-width: 2px;
      .icon {
        font-size: 1.3rem;
      }
      .name-full {
        font-size: 0.85rem;
        font-weight: 600;
      }
      .name-short {
        font-size: 0.7rem;
        font-weight: 600;
      }
      @media (max-width: 768px) {
        padding: 0.4rem 0.7rem;
        .icon {
          font-size: 1.1rem;
        }
      }
    `}

  &:hover {
    transform: translate(-50%, -50%) scale(1.06);
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 0 15px ${(p) => p.theme.primary}30;
  }

  .icon {
    font-size: 1.1rem;
    display: block;
    margin-bottom: 2px;
  }

  .name-full {
    font-size: 0.75rem;
    letter-spacing: 0.3px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .name-short {
    display: none;
    font-size: 0.6rem;
    letter-spacing: 0.3px;
    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.55rem;
    .icon {
      font-size: 0.9rem;
    }
  }
`;

const SvgLayer = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const Line = styled.line`
  vector-effect: non-scaling-stroke;
  stroke: ${(p) => (p.$active ? p.theme.primary : p.theme.cardBoxBorder)};
  stroke-width: ${(p) => (p.$active ? 2.5 : 1.2)};
  opacity: ${(p) => (p.$active ? 0.85 : 0.35)};
  transition:
    stroke 0.3s,
    opacity 0.3s,
    stroke-width 0.3s;

  ${(p) =>
    p.$active &&
    css`
      stroke-dasharray: 8 4;
      animation: ${dashFlow} 0.6s linear infinite;
    `}
`;

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const Btn = styled.button`
  padding: 0.4rem 0.85rem;
  background: ${(p) =>
    p.$active ? p.theme.primary : p.theme.timelineEventBackground};
  color: ${(p) => (p.$active ? p.theme.background : p.theme.text)};
  border: 1px solid ${(p) => p.theme.primary};
  border-radius: 8px;
  font-size: 0.78rem;
  font-family: "Courier New", monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(p) => (p.$active ? `0 0 10px ${p.theme.primary}40` : "none")};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 0 12px ${(p) => p.theme.primary}40;
    background: ${(p) =>
      p.$active ? p.theme.hover : p.theme.buttonHoverBackground};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.6rem;
    font-size: 0.68rem;
  }
`;

const Select = styled.select`
  padding: 0.4rem 0.85rem;
  background: ${(p) => p.theme.timelineEventBackground};
  color: ${(p) => p.theme.text};
  border: 1px solid ${(p) => p.theme.primary};
  border-radius: 8px;
  font-size: 0.78rem;
  font-family: "Courier New", monospace;
  cursor: pointer;
  outline: none;
  max-width: 200px;

  option {
    background: ${(p) => p.theme.background};
    color: ${(p) => p.theme.text};
  }

  @media (max-width: 768px) {
    font-size: 0.68rem;
    padding: 0.35rem 0.6rem;
    max-width: 150px;
  }
`;

const Sep = styled.div`
  width: 1px;
  height: 22px;
  background: ${(p) => p.theme.cardBoxBorder};
  @media (max-width: 768px) {
    display: none;
  }
`;

const Terminal = styled.div`
  margin-top: 1rem;
  background: ${(p) => p.theme.timelineEventBackground};
  border: 1px solid ${(p) => p.theme.timelineEventBorder};
  border-radius: 12px;
  padding: 1rem 1.2rem;
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
  line-height: 1.65;
  height: 240px;
  overflow-y: auto;
  box-shadow: inset 0 0 20px ${(p) => p.theme.timelineEventShadow};
  color: ${(p) => p.theme.text};
  white-space: pre-wrap;
  word-break: break-word;

  @media (max-width: 768px) {
    height: 200px;
    font-size: 0.7rem;
    padding: 0.8rem;
  }
`;

const StepLine = styled.div`
  margin-bottom: 0.5rem;
  animation: ${fadeIn} 0.25s ease;

  .label {
    font-weight: bold;
    color: ${(p) => {
      const dk = p.theme.background === "#000000";
      const m = {
        thought: dk ? "#61dafb" : "#0277bd",
        action: dk ? "#e5c07b" : "#bf360c",
        observation: p.theme.primary,
        result: dk ? "#c678dd" : "#7b1fa2",
      };
      return m[p.$type] || p.theme.text;
    }};
  }

  .text {
    opacity: 0.92;
  }
`;

const Cursor = styled.span`
  animation: ${blinkCursor} 1s step-end infinite;
  color: ${(p) => p.theme.primary};
`;

const Dim = styled.span`
  opacity: 0.5;
`;
const Pri = styled.span`
  color: ${(p) => p.theme.primary};
`;

const AgentArchitectureExplorer = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [scenarioIdx, setScenarioIdx] = useState(-1);
  const [stepIdx, setStepIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState("normal");
  const [typedText, setTypedText] = useState("");
  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeModules, setActiveModules] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const terminalRef = useRef(null);
  const typingTimer = useRef(null);
  const pauseTimer = useRef(null);
  const playingRef = useRef(false);
  const speedRef = useRef("normal");

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const scenario = scenarioIdx >= 0 ? SCENARIOS[scenarioIdx] : null;

  const clearTimers = useCallback(() => {
    clearTimeout(typingTimer.current);
    clearTimeout(pauseTimer.current);
  }, []);

  useEffect(() => {
    const el = terminalRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [typedText, completedSteps, selectedModule]);

  useEffect(() => {
    if (stepIdx < 0 || !scenario) return;
    const step = scenario.steps[stepIdx];
    if (!step) return;

    setActiveModules(step.modules);
    setSelectedModule(null);
    setIsTyping(true);
    setTypedText("");

    let i = 0;
    const full = step.text;

    const tick = () => {
      i++;
      if (i <= full.length) {
        setTypedText(full.slice(0, i));
        typingTimer.current = setTimeout(
          tick,
          SPEED_CONFIG[speedRef.current].charDelay,
        );
      } else {
        setIsTyping(false);
        setCompletedSteps((prev) => [
          ...prev,
          { type: step.type, text: step.text },
        ]);
        setTypedText("");

        if (playingRef.current) {
          const next = stepIdx + 1;
          if (next < scenario.steps.length) {
            pauseTimer.current = setTimeout(
              () => setStepIdx(next),
              SPEED_CONFIG[speedRef.current].stepPause,
            );
          } else {
            setIsPlaying(false);
            pauseTimer.current = setTimeout(() => setActiveModules([]), 1500);
          }
        } else {
          pauseTimer.current = setTimeout(() => setActiveModules([]), 2000);
        }
      }
    };

    typingTimer.current = setTimeout(
      tick,
      SPEED_CONFIG[speedRef.current].charDelay,
    );

    return () => {
      clearTimeout(typingTimer.current);
      clearTimeout(pauseTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIdx, scenarioIdx]);

  const handleScenario = useCallback(
    (e) => {
      clearTimers();
      setIsPlaying(false);
      setCompletedSteps([]);
      setTypedText("");
      setStepIdx(-1);
      setActiveModules([]);
      setSelectedModule(null);
      setIsTyping(false);
      setScenarioIdx(parseInt(e.target.value, 10));
    },
    [clearTimers],
  );

  const handlePlayPause = useCallback(() => {
    if (!scenario) return;
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setSelectedModule(null);

    if (stepIdx < 0) {
      setStepIdx(0);
    } else if (!isTyping) {
      const next = stepIdx + 1;
      if (next < scenario.steps.length) {
        setStepIdx(next);
      } else {
        setCompletedSteps([]);
        setTypedText("");
        setActiveModules([]);
        setStepIdx(0);
      }
    }
  }, [scenario, stepIdx, isPlaying, isTyping]);

  const handleStep = useCallback(() => {
    if (!scenario) return;
    setIsPlaying(false);
    setSelectedModule(null);

    if (isTyping) {
      clearTimers();
      const step = scenario.steps[stepIdx];
      setIsTyping(false);
      setCompletedSteps((prev) => [
        ...prev,
        { type: step.type, text: step.text },
      ]);
      setTypedText("");
      const next = stepIdx + 1;
      if (next < scenario.steps.length) {
        pauseTimer.current = setTimeout(() => setStepIdx(next), 80);
      } else {
        pauseTimer.current = setTimeout(() => setActiveModules([]), 1000);
      }
    } else {
      const next = stepIdx < 0 ? 0 : stepIdx + 1;
      if (next < scenario.steps.length) setStepIdx(next);
    }
  }, [scenario, stepIdx, isTyping, clearTimers]);

  const handleReset = useCallback(() => {
    clearTimers();
    setIsPlaying(false);
    setCompletedSteps([]);
    setTypedText("");
    setStepIdx(-1);
    setActiveModules([]);
    setIsTyping(false);
  }, [clearTimers]);

  const handleModuleClick = useCallback(
    (id) => {
      if (scenario && stepIdx >= 0) return;
      if (selectedModule === id) {
        setSelectedModule(null);
        setActiveModules([]);
      } else {
        setSelectedModule(id);
        setActiveModules([id]);
      }
    },
    [scenario, stepIdx, selectedModule],
  );

  const modData = selectedModule
    ? MODULES.find((m) => m.id === selectedModule)
    : null;
  const done =
    scenario &&
    !isTyping &&
    stepIdx >= 0 &&
    completedSteps.length >= scenario.steps.length;
  const currentStep = scenario && stepIdx >= 0 ? scenario.steps[stepIdx] : null;

  const showWelcome = !scenario && !selectedModule;
  const showModuleInfo =
    selectedModule && modData && (!scenario || stepIdx < 0);
  const showScenarioReady = scenario && stepIdx < 0 && !selectedModule;
  const showSimulation = scenario && stepIdx >= 0;

  return (
    <ExplorerContainer>
      <DiagramArea>
        <SvgLayer viewBox="0 0 100 100" preserveAspectRatio="none">
          {CONNECTIONS.map((c, i) => {
            const f = MODULES.find((m) => m.id === c.from);
            const t = MODULES.find((m) => m.id === c.to);
            const simActive =
              activeModules.includes(c.from) && activeModules.includes(c.to);
            const exploreActive =
              selectedModule &&
              !showSimulation &&
              (c.from === selectedModule || c.to === selectedModule);
            return (
              <Line
                key={i}
                x1={f.x}
                y1={f.y}
                x2={t.x}
                y2={t.y}
                $active={simActive || exploreActive}
              />
            );
          })}
        </SvgLayer>

        {MODULES.map((m) => (
          <Node
            key={m.id}
            $x={m.x}
            $y={m.y}
            $active={activeModules.includes(m.id)}
            $selected={selectedModule === m.id}
            $isCore={m.id === "llm"}
            onClick={() => handleModuleClick(m.id)}
          >
            <span className="icon">{m.icon}</span>
            <span className="name-full">{m.name}</span>
            <span className="name-short">{m.short}</span>
          </Node>
        ))}
      </DiagramArea>

      <Controls>
        <Select value={scenarioIdx} onChange={handleScenario}>
          <option value={-1}>-- Select Scenario --</option>
          {SCENARIOS.map((s, i) => (
            <option key={s.id} value={i}>
              {s.name}
            </option>
          ))}
        </Select>
        <Sep />
        <Btn onClick={handlePlayPause} disabled={!scenario} $active={isPlaying}>
          {isPlaying ? "⏸ Pause" : "▶ Play"}
        </Btn>
        <Btn onClick={handleStep} disabled={!scenario || done}>
          → Step
        </Btn>
        <Btn onClick={handleReset} disabled={!scenario || stepIdx < 0}>
          ↺ Reset
        </Btn>
        <Sep />
        <Btn $active={speed === "slow"} onClick={() => setSpeed("slow")}>
          Slow
        </Btn>
        <Btn $active={speed === "normal"} onClick={() => setSpeed("normal")}>
          Normal
        </Btn>
        <Btn $active={speed === "fast"} onClick={() => setSpeed("fast")}>
          Fast
        </Btn>
      </Controls>

      <Terminal ref={terminalRef}>
        {showWelcome && (
          <>
            <Dim>{"> AI Agent Architecture Explorer v1.0\n"}</Dim>
            <Dim>{"> Type: Interactive Demonstration\n\n"}</Dim>
            {
              "Click any module above to learn about it,\nor select a scenario to watch an AI agent\nreason step-by-step through a real task.\n\n"
            }
            <Dim>{"Modules: "}</Dim>
            <Pri>{MODULES.map((m) => m.name).join(" · ")}</Pri>
            {"\n"}
            <Cursor>{"█"}</Cursor>
          </>
        )}

        {showModuleInfo && (
          <>
            <Dim>{`> module.inspect("${modData.id}")\n\n`}</Dim>
            <Pri>{`  ${modData.icon} ${modData.name}\n`}</Pri>
            <Dim>{`  ${"─".repeat(32)}\n`}</Dim>
            {`  ${modData.description}\n\n`}
            <Dim>{"  Techniques: "}</Dim>
            <Pri>{modData.techniques}</Pri>
            {"\n\n"}
            <Dim>{"  Research: "}</Dim>
            <Pri>{modData.research}</Pri>
            {"\n\n"}
            <Cursor>{"█"}</Cursor>
          </>
        )}

        {showScenarioReady && (
          <>
            <Dim>{"> Scenario: "}</Dim>
            <Pri>{scenario.name}</Pri>
            {"\n"}
            {`> ${scenario.description}\n\n`}
            <Dim>{"Press ▶ Play or → Step to begin.\n"}</Dim>
            <Cursor>{"█"}</Cursor>
          </>
        )}

        {showSimulation && (
          <>
            <Dim>{`> ${scenario.name}\n${"─".repeat(40)}\n\n`}</Dim>

            {completedSteps.map((s, i) => (
              <StepLine key={i} $type={s.type}>
                <span className="label">{STEP_LABELS[s.type]}: </span>
                <span className="text">{s.text}</span>
                {"\n"}
              </StepLine>
            ))}

            {isTyping && currentStep && (
              <StepLine $type={currentStep.type}>
                <span className="label">{STEP_LABELS[currentStep.type]}: </span>
                <span className="text">{typedText}</span>
                <Cursor>{"█"}</Cursor>
              </StepLine>
            )}

            {done && (
              <>
                {"\n"}
                <Dim>{`${"─".repeat(40)}\n`}</Dim>
                <Dim>{"> Complete. Select another scenario or ↺ Reset.\n"}</Dim>
                <Cursor>{"█"}</Cursor>
              </>
            )}
          </>
        )}
      </Terminal>
    </ExplorerContainer>
  );
};

export default AgentArchitectureExplorer;
