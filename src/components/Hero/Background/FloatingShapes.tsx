'use client';

import { Box } from '@chakra-ui/react';
import { MotionBox } from '../utils/motionComponents';

interface SpaceElement {
  type: 'star' | 'circle';
  size: number;
  top: string;
  left: string;
  delay: number;
  opacity: number;
  color: string;
  rotation?: number;
}

const FloatingShapes = () => {
  const spaceElements: SpaceElement[] = [
    // Stars - twinkling celestial objects
    { type: 'star', size: 25, top: '8%', left: '60%', delay: 1, opacity: 0.35, color: 'rgba(255, 255, 255, 0.18)' },
    { type: 'star', size: 20, top: '45%', left: '85%', delay: 3, opacity: 0.32, color: 'rgba(159, 122, 234, 0.14)' },
    { type: 'star', size: 30, top: '75%', left: '15%', delay: 5, opacity: 0.28, color: 'rgba(255, 255, 255, 0.16)' },
    { type: 'star', size: 18, top: '30%', left: '25%', delay: 1.8, opacity: 0.30, color: 'rgba(49, 130, 206, 0.12)' },
    { type: 'star', size: 22, top: '15%', left: '80%', delay: 4.2, opacity: 0.33, color: 'rgba(255, 255, 255, 0.15)' },
    { type: 'star', size: 28, top: '65%', left: '70%', delay: 6, opacity: 0.29, color: 'rgba(159, 122, 234, 0.13)' },
    
    // Saturn-like planets with rings
    { type: 'circle', size: 50, top: '12%', left: '10%', delay: 2, opacity: 0.22, color: 'rgba(255, 255, 255, 0.12)', rotation: 15 },
    { type: 'circle', size: 35, top: '55%', left: '40%', delay: 4, opacity: 0.25, color: 'rgba(159, 122, 234, 0.11)', rotation: -30 },
    { type: 'circle', size: 42, top: '25%', left: '45%', delay: 1.5, opacity: 0.20, color: 'rgba(49, 130, 206, 0.10)', rotation: 45 },
    { type: 'circle', size: 38, top: '80%', left: '60%', delay: 3.5, opacity: 0.24, color: 'rgba(255, 255, 255, 0.13)', rotation: -15 },
    { type: 'circle', size: 45, top: '40%', left: '75%', delay: 5.5, opacity: 0.21, color: 'rgba(159, 122, 234, 0.09)', rotation: 60 },
  ];

  // Create different shape paths
  const createStarPath = (size: number) => {
    const centerX = size / 2;
    const centerY = size / 2;
    const outerRadius = size * 0.4;
    const innerRadius = size * 0.2;
    
    let path = '';
    for (let i = 0; i < 10; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / 5) * i - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }
    path += ' Z';
    return path;
  };

  const createSaturnPath = (size: number) => {
    const centerX = size / 2;
    const centerY = size / 2;
    const planetRadius = size * 0.25;
    const ringRadius1 = size * 0.35;
    const ringRadius2 = size * 0.4;
    
    // Planet body + two rings
    return `
      M ${centerX + planetRadius} ${centerY} 
      A ${planetRadius} ${planetRadius} 0 1 1 ${centerX - planetRadius} ${centerY} 
      A ${planetRadius} ${planetRadius} 0 1 1 ${centerX + planetRadius} ${centerY}
      M ${centerX + ringRadius1} ${centerY}
      A ${ringRadius1} ${ringRadius1 * 0.3} 0 1 1 ${centerX - ringRadius1} ${centerY}
      A ${ringRadius1} ${ringRadius1 * 0.3} 0 1 1 ${centerX + ringRadius1} ${centerY}
      M ${centerX + ringRadius2} ${centerY}
      A ${ringRadius2} ${ringRadius2 * 0.25} 0 1 1 ${centerX - ringRadius2} ${centerY}
      A ${ringRadius2} ${ringRadius2 * 0.25} 0 1 1 ${centerX + ringRadius2} ${centerY}
    `;
  };

  const getShapePath = (type: SpaceElement['type'], size: number) => {
    switch (type) {
      case 'star': return createStarPath(size);
      case 'circle': return createSaturnPath(size);
      default: return createStarPath(size);
    }
  };

  const getAnimationVariant = (type: SpaceElement['type']) => {
    switch (type) {
      case 'star':
        return {
          y: [0, -25, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        };
      case 'circle':
        return {
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        };
      default:
        return {
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        };
    }
  };

  return (
    <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={2} overflow="hidden">
      {spaceElements.map((element, index) => (
        <MotionBox
          key={index}
          position="absolute"
          top={element.top}
          left={element.left}
          width={`${element.size}px`}
          height={`${element.size}px`}
          opacity={element.opacity}
          transform={element.rotation ? `rotate(${element.rotation}deg)` : undefined}
          animate={getAnimationVariant(element.type)}
          transition={{
            duration: element.type === 'star' ? 18 + Math.random() * 8 : 22 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: element.type === 'star' ? "easeInOut" : "linear",
          }}
        >
          <svg width={element.size} height={element.size}>
            <path
              d={getShapePath(element.type, element.size)}
              fill={element.color}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="0.8"
              filter="url(#spaceGlass)"
            />
            <defs>
              <filter id="spaceGlass" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
                <feOffset in="blur" dx="0" dy="1" result="offset"/>
                <feFlood floodColor="rgba(255,255,255,0.15)" result="white"/>
                <feComposite in="white" in2="offset" operator="in" result="highlight"/>
                <feMerge>
                  <feMergeNode in="highlight"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </MotionBox>
      ))}
    </Box>
  );
};

export default FloatingShapes;