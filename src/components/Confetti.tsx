import React, { useEffect, useRef } from 'react';

// Confetti particle type
interface Particle {
  x: number;
  y: number;
  color: string;
  radius: number;
  speed: number;
  angle: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'square' | 'triangle';
}

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Superhero-themed colors
    const colors = [
      '#f44336', // Red (Spider-Man/Iron Man)
      '#2196f3', // Blue (Spider-Man)
      '#ffc107', // Yellow/Gold (Iron Man)
      '#212121', // Dark Grey (Batman)
      '#f5f5f5', // Light Grey (Batman symbol)
      '#4caf50', // Green (Robin)
    ];
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = 150;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.random() * 6 + 4,
        speed: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        rotation: 0,
        rotationSpeed: Math.random() * 0.2 - 0.1,
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as any,
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        // Update position
        p.y += p.speed;
        p.x += Math.sin(p.angle) * 0.5;
        p.rotation += p.rotationSpeed;
        
        // Reset if out of bounds
        if (p.y > canvas.height) {
          p.y = -p.radius;
          p.x = Math.random() * canvas.width;
        }
        
        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'square') {
          ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
        } else if (p.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -p.radius);
          ctx.lineTo(p.radius, p.radius);
          ctx.lineTo(-p.radius, p.radius);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    let animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.7 }}
    />
  );
};

export default Confetti;