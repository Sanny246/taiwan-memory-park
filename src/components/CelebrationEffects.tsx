import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  enabled: boolean;
  type?: 'stars' | 'fireworks' | 'ribbons';
  count?: number;
}

/**
 * Gentle, slow-falling celebratory stars and ribbon particles
 * Specifically tuned for seniors:
 * - NO rapid flashing or strobe effects
 * - Soft pastel and warm gold colors
 * - Does not block clicks or cover buttons (pointer-events-none)
 * - Can be completely disabled via settings
 */
export const GentleCelebrationFX: React.FC<ConfettiProps> = ({
  enabled,
  type = 'stars',
  count = 24,
}) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      rotation: number;
      shape: 'star' | 'circle' | 'ribbon';
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    if (!enabled) {
      setParticles([]);
      return;
    }

    const colors = [
      '#F59E0B', // Warm Amber
      '#10B981', // Emerald
      '#F43F5E', // Rose
      '#38BDF8', // Sky Blue
      '#FBBF24', // Golden Star
      '#A855F7', // Gentle Purple
    ];

    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 92 + 4, // 4% to 96%
      y: Math.random() * -20 - 5, // start slightly above screen
      size: type === 'stars' ? Math.random() * 12 + 14 : Math.random() * 10 + 12,
      color: colors[i % colors.length],
      rotation: Math.random() * 360,
      shape: (type === 'stars'
        ? 'star'
        : i % 3 === 0
        ? 'star'
        : i % 3 === 1
        ? 'ribbon'
        : 'circle') as 'star' | 'circle' | 'ribbon',
      delay: (i * 0.12) % 1.5,
      duration: Math.random() * 1.5 + 2.5, // 2.5s to 4s slow gentle fall
    }));

    setParticles(newParticles);
  }, [enabled, type, count]);

  if (!enabled || particles.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute transform-gpu"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `gentleFall ${p.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p.delay}s infinite`,
          }}
        >
          {p.shape === 'star' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill={p.color}
              className="drop-shadow-sm opacity-90"
              style={{ transform: `rotate(${p.rotation}deg)` }}
            >
              <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
            </svg>
          )}

          {p.shape === 'ribbon' && (
            <div
              className="rounded-full opacity-85"
              style={{
                width: p.size * 0.4,
                height: p.size * 1.4,
                backgroundColor: p.color,
                transform: `rotate(${p.rotation}deg)`,
              }}
            />
          )}

          {p.shape === 'circle' && (
            <div
              className="rounded-full opacity-80"
              style={{
                width: p.size * 0.8,
                height: p.size * 0.8,
                backgroundColor: p.color,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * Gentle Soft Fireworks for Stage Advancement
 * Soft blooming radial rings, NO harsh flashes
 */
export const GentleStageFireworks: React.FC<{ enabled: boolean }> = ({ enabled }) => {
  if (!enabled) return null;

  const bursts = [
    { x: '20%', y: '25%', color: '#F59E0B', delay: '0.1s' },
    { x: '78%', y: '22%', color: '#10B981', delay: '0.4s' },
    { x: '50%', y: '16%', color: '#F43F5E', delay: '0.7s' },
    { x: '32%', y: '32%', color: '#38BDF8', delay: '1.0s' },
    { x: '68%', y: '30%', color: '#FBBF24', delay: '1.3s' },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden="true"
    >
      {bursts.map((b, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: b.x,
            top: b.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Gentle Expanding Ring */}
          <div
            className="rounded-full border-4"
            style={{
              borderColor: b.color,
              animation: `softFireworkBurst 2.2s ease-out ${b.delay} infinite`,
            }}
          />
          {/* Gentle Sparkling Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full shadow-sm"
              style={{
                backgroundColor: b.color,
                animation: `softSparkle 2.2s ease-out ${b.delay} infinite`,
                transform: `rotate(${angle}deg) translate(40px)`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
