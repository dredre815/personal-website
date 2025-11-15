import styled from 'styled-components';
import { useEffect, useRef, useState, useCallback } from 'react';

const PlaygroundContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: ${props => props.theme.timelineBackground};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.theme.timelineEventBorder};
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 500px;
  }
`;

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: ${props => props.theme.timelineEventBackground};
  box-shadow: inset 0 0 30px ${props => props.theme.timelineEventShadow};
  cursor: crosshair;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: crisp-edges;
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ControlButton = styled.button`
  padding: 0.6rem 1.2rem;
  min-width: 90px;
  background: ${props => props.$active 
    ? props.theme.primary 
    : props.theme.timelineEventBackground};
  color: ${props => props.$active 
    ? props.theme.background 
    : props.theme.text};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  box-shadow: ${props => props.$active 
    ? `0 0 15px ${props.theme.primary}40` 
    : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px ${props => props.theme.primary}60;
    background: ${props => props.$active 
      ? props.theme.hover 
      : props.theme.buttonHoverBackground};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    min-width: 80px;
  }
`;

const InfoDisplay = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${props => props.theme.timelineEventBackground};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: ${props => props.theme.text};
  box-shadow: 0 4px 12px ${props => props.theme.timelineEventShadow};
  opacity: ${props => props.$show ? 1 : 0};
  pointer-events: none;
  transition: opacity 0.3s ease;
  max-width: 200px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.6rem 1rem;
    max-width: 150px;
  }
`;

const StatusBar = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.8rem;
  }
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .label {
    color: ${props => props.theme.researchCardSecondary};
  }
  
  .value {
    color: ${props => props.theme.primary};
    font-weight: bold;
  }
`;

const NeuralNetworkPlayground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState('normal');
  const [particleCount, setParticleCount] = useState('medium');
  const [hoveredNeuron, setHoveredNeuron] = useState(null);
  const [stats, setStats] = useState({ neurons: 19, connections: 84, particles: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredConnection, setHoveredConnection] = useState(null);

  // Neural Network Configuration
  const networkConfig = {
    layers: [4, 6, 6, 3], // Input, Hidden1, Hidden2, Output
    neuronRadius: { desktop: 12, mobile: 8 },
    connectionWidth: { desktop: 1.5, mobile: 1 },
  };

  const speedMultipliers = {
    slow: 0.5,
    normal: 1,
    fast: 2
  };

  const particleLimits = {
    low: 20,
    medium: 40,
    high: 60
  };

  // Initialize neurons positions
  const initializeNeurons = useCallback((width, height, isMobile) => {
    const neurons = [];
    const layerCount = networkConfig.layers.length;
    
    // Add horizontal padding and increase layer spacing for better visual clarity
    const horizontalPadding = isMobile ? width * 0.08 : width * 0.12;
    const availableWidth = width - (horizontalPadding * 2);
    const horizontalSpacing = availableWidth / (layerCount - 1);
    
    const neuronRadius = isMobile 
      ? networkConfig.neuronRadius.mobile 
      : networkConfig.neuronRadius.desktop;

    networkConfig.layers.forEach((neuronCount, layerIndex) => {
      const verticalSpacing = height / (neuronCount + 1);
      
      for (let i = 0; i < neuronCount; i++) {
        neurons.push({
          x: horizontalPadding + (horizontalSpacing * layerIndex),
          y: verticalSpacing * (i + 1),
          layer: layerIndex,
          index: i,
          radius: neuronRadius,
          activation: Math.random(),
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
          energy: 0
        });
      }
    });

    // Create connections
    let neuronIndex = 0;
    for (let layer = 0; layer < layerCount - 1; layer++) {
      const currentLayerSize = networkConfig.layers[layer];
      const nextLayerSize = networkConfig.layers[layer + 1];
      const currentLayerStart = neuronIndex;
      const nextLayerStart = neuronIndex + currentLayerSize;

      for (let i = 0; i < currentLayerSize; i++) {
        for (let j = 0; j < nextLayerSize; j++) {
          neurons[currentLayerStart + i].connections.push({
            to: nextLayerStart + j,
            weight: Math.random() * 0.5 + 0.5,
            particles: []
          });
        }
      }
      neuronIndex += currentLayerSize;
    }

    return neurons;
  }, [networkConfig.layers, networkConfig.neuronRadius]);

  // Create particle (now uses current speed multiplier from state)
  const createParticle = useCallback((fromNeuron, toNeuron, connection, currentSpeed) => {
    return {
      x: fromNeuron.x,
      y: fromNeuron.y,
      targetX: toNeuron.x,
      targetY: toNeuron.y,
      progress: 0,
      speed: (Math.random() * 0.01 + 0.01) * speedMultipliers[currentSpeed],
      size: Math.random() * 2 + 2,
      brightness: Math.random() * 0.5 + 0.5,
      energy: connection.weight
    };
  }, [speedMultipliers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const isMobile = window.innerWidth <= 768;
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    let neurons = initializeNeurons(width, height, isMobile);
    let time = 0; // Animation time for natural neuron activations

    // Helper function to activate neuron
    const activateNeuron = (neuron, intensity = 2) => {
      neuron.energy = intensity;
      neuron.activation = 1;
      
      // Create particles for all connections
      neuron.connections.forEach(connection => {
        const toNeuron = neurons[connection.to];
        const currentMaxParticles = particleLimits[particleCount];
        if (connection.particles.length < currentMaxParticles / neurons.length) {
          connection.particles.push(createParticle(neuron, toNeuron, connection, speed));
        }
      });
    };

    // Helper function to check point-to-line distance
    const pointToLineDistance = (px, py, x1, y1, x2, y2) => {
      const A = px - x1;
      const B = py - y1;
      const C = x2 - x1;
      const D = y2 - y1;
      
      const dot = A * C + B * D;
      const lenSq = C * C + D * D;
      let param = lenSq !== 0 ? dot / lenSq : -1;
      
      let xx, yy;
      if (param < 0) {
        xx = x1;
        yy = y1;
      } else if (param > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
      }
      
      const dx = px - xx;
      const dy = py - yy;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      let foundNeuron = null;
      let foundConnection = null;

      // Check neurons
      for (const neuron of neurons) {
        const dx = x - neuron.x;
        const dy = y - neuron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < neuron.radius * 2) {
          foundNeuron = {
            layer: neuron.layer,
            index: neuron.index,
            activation: (neuron.activation * 100).toFixed(1)
          };

          // If dragging, activate this neuron
          if (isDragging) {
            activateNeuron(neuron, 1.5);
          }
          break;
        }
      }

      // Check connections if no neuron found
      if (!foundNeuron) {
        for (let i = 0; i < neurons.length; i++) {
          const neuron = neurons[i];
          for (const connection of neuron.connections) {
            const toNeuron = neurons[connection.to];
            const dist = pointToLineDistance(x, y, neuron.x, neuron.y, toNeuron.x, toNeuron.y);
            
            if (dist < 8) {
              foundConnection = {
                from: i,
                to: connection.to,
                weight: connection.weight.toFixed(3)
              };
              break;
            }
          }
          if (foundConnection) break;
        }
      }

      setHoveredNeuron(foundNeuron);
      setHoveredConnection(foundConnection);
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      handleClick(e); // Also trigger click behavior
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check for neuron click
      for (const neuron of neurons) {
        const dx = x - neuron.x;
        const dy = y - neuron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < neuron.radius * 2) {
          activateNeuron(neuron, 2);
          return;
        }
      }

      // Check for connection click
      for (let i = 0; i < neurons.length; i++) {
        const neuron = neurons[i];
        for (const connection of neuron.connections) {
          const toNeuron = neurons[connection.to];
          const dist = pointToLineDistance(x, y, neuron.x, neuron.y, toNeuron.x, toNeuron.y);
          
          if (dist < 8) {
            // Pulse along this specific connection
            const currentMaxParticles = particleLimits[particleCount];
            for (let j = 0; j < 5; j++) {
              if (connection.particles.length < currentMaxParticles / neurons.length) {
                connection.particles.push(createParticle(neuron, toNeuron, connection, speed));
              }
            }
            return;
          }
        }
      }
    };

    const handleDoubleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Find clicked neuron
      for (const neuron of neurons) {
        const dx = x - neuron.x;
        const dy = y - neuron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < neuron.radius * 2) {
          // Chain reaction: activate this neuron and all neurons it connects to
          activateNeuron(neuron, 3);
          
          // Activate connected neurons after a delay
          const currentNeurons = neurons; // Store reference to avoid closure issue
          neuron.connections.forEach((connection, idx) => {
            setTimeout(() => {
              const toNeuron = currentNeurons[connection.to];
              activateNeuron(toNeuron, 2);
            }, idx * 100);
          });
          break;
        }
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Right-click to deactivate neuron
      for (const neuron of neurons) {
        const dx = x - neuron.x;
        const dy = y - neuron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < neuron.radius * 2) {
          neuron.energy = 0;
          neuron.activation = 0.2;
          // Clear particles from this neuron's connections
          neuron.connections.forEach(connection => {
            connection.particles = [];
          });
          break;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('dblclick', handleDoubleClick);
    canvas.addEventListener('contextmenu', handleContextMenu);

    // Get theme-aware colors
    const getColors = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const primary = computedStyle.getPropertyValue('--primary').trim();
      const isDark = computedStyle.getPropertyValue('--background').trim() === '#000000';
      
      return {
        primary,
        isDark,
        neuronFill: isDark ? 'rgba(0, 255, 0, 0.15)' : 'rgba(26, 137, 23, 0.15)',
        neuronStroke: primary,
        connectionBase: isDark ? 'rgba(0, 255, 0, 0.1)' : 'rgba(26, 137, 23, 0.1)',
        connectionActive: primary,
        particleColor: primary,
        glowColor: primary
      };
    };

    // Animation loop
    const animate = () => {
      const colors = getColors();
      
      // Always update animation time and physics if running
      if (isRunning) {
        time += 0.016 * speedMultipliers[speed];
      }

      // Clear canvas (always, even when paused)
      ctx.fillStyle = colors.isDark 
        ? 'rgba(0, 0, 0, 0.1)' 
        : 'rgba(248, 249, 250, 0.1)';
      ctx.fillRect(0, 0, width, height);

      let totalParticles = 0;
      const currentMaxParticles = particleLimits[particleCount];

      // Draw connections and particles
      neurons.forEach((neuron, index) => {
        neuron.connections.forEach((connection) => {
          const toNeuron = neurons[connection.to];
          
          // Check if this connection is hovered
          const isHovered = hoveredConnection && 
            hoveredConnection.from === index && 
            hoveredConnection.to === connection.to;
          
          // Draw connection line
          const baseAlpha = 0.1 + connection.weight * 0.3;
          const alpha = isHovered ? baseAlpha + 0.4 : baseAlpha;
          const lineWidth = isHovered ? 3 : (isMobile 
            ? networkConfig.connectionWidth.mobile 
            : networkConfig.connectionWidth.desktop);
          
          ctx.strokeStyle = colors.isDark
            ? `rgba(0, 255, 0, ${alpha})`
            : `rgba(26, 137, 23, ${alpha})`;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(toNeuron.x, toNeuron.y);
          ctx.stroke();

          // Update and draw particles
          if (isRunning) {
            connection.particles = connection.particles.filter(particle => {
              particle.progress += particle.speed * speedMultipliers[speed];
              
              if (particle.progress >= 1) {
                toNeuron.energy = Math.min(toNeuron.energy + particle.energy * 0.5, 2);
                return false;
              }

              particle.x = neuron.x + (toNeuron.x - neuron.x) * particle.progress;
              particle.y = neuron.y + (toNeuron.y - neuron.y) * particle.progress;

              // Draw particle with glow
              const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
              );
              gradient.addColorStop(0, colors.isDark 
                ? `rgba(0, 255, 0, ${particle.brightness})` 
                : `rgba(26, 137, 23, ${particle.brightness})`);
              gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
              
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
              ctx.fill();

              totalParticles++;
              return true;
            });

            // Randomly create new particles
            if (Math.random() < 0.02 * speedMultipliers[speed] && 
                connection.particles.length < currentMaxParticles / neurons.length) {
              connection.particles.push(createParticle(neuron, toNeuron, connection, speed));
            }
          } else {
            // When paused, still draw existing particles
            connection.particles.forEach(particle => {
              particle.x = neuron.x + (toNeuron.x - neuron.x) * particle.progress;
              particle.y = neuron.y + (toNeuron.y - neuron.y) * particle.progress;

              const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
              );
              gradient.addColorStop(0, colors.isDark 
                ? `rgba(0, 255, 0, ${particle.brightness})` 
                : `rgba(26, 137, 23, ${particle.brightness})`);
              gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
              
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
              ctx.fill();

              totalParticles++;
            });
          }
        });

        // Update neuron activation only when running
        if (isRunning) {
          neuron.activation = Math.max(0.2, neuron.activation * 0.995 + Math.random() * 0.01);
          neuron.pulsePhase += 0.05 * speedMultipliers[speed];
          neuron.energy *= 0.95;
        }
      });

      // Draw neurons
      neurons.forEach((neuron) => {
        const pulse = Math.sin(neuron.pulsePhase) * 0.3 + 1;
        const radius = neuron.radius * (1 + neuron.energy * 0.3) * pulse;
        const glowRadius = radius * 2;

        // Outer glow
        const outerGlow = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, glowRadius
        );
        const glowAlpha = (neuron.activation * 0.3 + neuron.energy * 0.3) * (colors.isDark ? 1 : 0.5);
        outerGlow.addColorStop(0, colors.isDark 
          ? `rgba(0, 255, 0, ${glowAlpha})` 
          : `rgba(26, 137, 23, ${glowAlpha})`);
        outerGlow.addColorStop(1, 'rgba(0, 255, 0, 0)');
        
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Neuron body
        ctx.fillStyle = colors.isDark 
          ? `rgba(0, 255, 0, ${0.2 + neuron.activation * 0.3})` 
          : `rgba(26, 137, 23, ${0.15 + neuron.activation * 0.2})`;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Neuron border
        ctx.strokeStyle = colors.isDark 
          ? `rgba(0, 255, 0, ${0.6 + neuron.activation * 0.4})` 
          : `rgba(26, 137, 23, ${0.7 + neuron.activation * 0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner highlight
        const highlight = ctx.createRadialGradient(
          neuron.x - radius * 0.3, 
          neuron.y - radius * 0.3, 
          0,
          neuron.x, 
          neuron.y, 
          radius
        );
        highlight.addColorStop(0, colors.isDark 
          ? 'rgba(255, 255, 255, 0.3)' 
          : 'rgba(255, 255, 255, 0.5)');
        highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update stats
      setStats({
        neurons: neurons.length,
        connections: neurons.reduce((sum, n) => sum + n.connections.length, 0),
        particles: totalParticles
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      const newIsMobile = window.innerWidth <= 768;
      neurons = initializeNeurons(rect.width, rect.height, newIsMobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('dblclick', handleDoubleClick);
      canvas.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, speed, particleCount, isDragging, hoveredConnection]);

  return (
    <PlaygroundContainer>
      <CanvasWrapper>
        <Canvas ref={canvasRef} />
        <InfoDisplay $show={hoveredNeuron !== null || hoveredConnection !== null}>
          {hoveredNeuron && (
            <>
              <div>🔘 Layer: {hoveredNeuron.layer}</div>
              <div>🎯 Neuron: {hoveredNeuron.index}</div>
              <div>⚡ Activation: {hoveredNeuron.activation}%</div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>
                Click to activate<br/>
                Double-click for chain<br/>
                Right-click to reset
              </div>
            </>
          )}
          {hoveredConnection && !hoveredNeuron && (
            <>
              <div>🔗 Connection</div>
              <div>From: L{Math.floor(hoveredConnection.from / 10)}</div>
              <div>To: L{Math.floor(hoveredConnection.to / 10)}</div>
              <div>⚖️ Weight: {hoveredConnection.weight}</div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>
                Click to send pulse
              </div>
            </>
          )}
        </InfoDisplay>
      </CanvasWrapper>

      <ControlPanel>
        <ControlButton 
          onClick={() => setIsRunning(!isRunning)}
          $active={isRunning}
        >
          {isRunning ? '⏸ Pause' : '▶ Play'}
        </ControlButton>
        
        <ControlButton 
          onClick={() => setSpeed('slow')}
          $active={speed === 'slow'}
        >
          🐌 Slow
        </ControlButton>
        
        <ControlButton 
          onClick={() => setSpeed('normal')}
          $active={speed === 'normal'}
        >
          🚶 Normal
        </ControlButton>
        
        <ControlButton 
          onClick={() => setSpeed('fast')}
          $active={speed === 'fast'}
        >
          🚀 Fast
        </ControlButton>
        
        <div style={{ width: '100%', height: '1px', background: 'rgba(128,128,128,0.2)' }} />
        
        <ControlButton 
          onClick={() => setParticleCount('low')}
          $active={particleCount === 'low'}
        >
          💧 Low
        </ControlButton>
        
        <ControlButton 
          onClick={() => setParticleCount('medium')}
          $active={particleCount === 'medium'}
        >
          💦 Medium
        </ControlButton>
        
        <ControlButton 
          onClick={() => setParticleCount('high')}
          $active={particleCount === 'high'}
        >
          🌊 High
        </ControlButton>
      </ControlPanel>

      <StatusBar>
        <StatusItem>
          <span className="label">Neurons:</span>
          <span className="value">{stats.neurons}</span>
        </StatusItem>
        <StatusItem>
          <span className="label">Connections:</span>
          <span className="value">{stats.connections}</span>
        </StatusItem>
        <StatusItem>
          <span className="label">Active Particles:</span>
          <span className="value">{stats.particles}</span>
        </StatusItem>
      </StatusBar>
    </PlaygroundContainer>
  );
};

export default NeuralNetworkPlayground;

