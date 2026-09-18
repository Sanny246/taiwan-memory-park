import React from 'react';

interface IllustrationProps {
  name: string;
  className?: string;
  size?: number;
}

export const OptionIllustration: React.FC<IllustrationProps> = ({
  name,
  className = '',
  size = 64,
}) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 80 80',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: `inline-block flex-shrink-0 drop-shadow-sm select-none ${className}`,
  };

  switch (name) {
    case 'pineapple-cake':
      return (
        <svg {...commonProps}>
          <rect x="12" y="24" width="56" height="40" rx="8" fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" />
          <rect x="16" y="28" width="48" height="32" rx="6" fill="#FBBF24" />
          {/* Lattice score marks */}
          <path d="M26 28 L54 60 M40 28 L64 52 M16 40 L36 60 M54 28 L26 60 M64 36 L40 60 M36 28 L16 48" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          {/* Small pineapple leaf accent */}
          <path d="M40 22 C36 12 40 8 40 8 C40 8 44 12 40 22" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
        </svg>
      );

    case 'hamburger':
      return (
        <svg {...commonProps}>
          {/* Top bun */}
          <path d="M14 36 C14 20 66 20 66 36 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <circle cx="30" cy="26" r="1.5" fill="#FEF3C7" />
          <circle cx="42" cy="24" r="1.5" fill="#FEF3C7" />
          <circle cx="50" cy="28" r="1.5" fill="#FEF3C7" />
          {/* Lettuce */}
          <path d="M12 36 Q22 42 32 36 Q42 42 52 36 Q62 42 68 36" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
          {/* Tomato */}
          <rect x="16" y="40" width="48" height="6" rx="3" fill="#EF4444" />
          {/* Patty */}
          <rect x="14" y="47" width="52" height="10" rx="4" fill="#78350F" />
          {/* Bottom bun */}
          <path d="M14 58 Q40 62 66 58 L64 68 Q40 72 16 68 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        </svg>
      );

    case 'pizza':
      return (
        <svg {...commonProps}>
          <path d="M40 12 L68 64 Q40 72 12 64 Z" fill="#FBBF24" stroke="#B45309" strokeWidth="2.5" />
          <path d="M12 64 Q40 72 68 64 L66 69 Q40 77 14 69 Z" fill="#D97706" />
          {/* Pepperoni & toppings */}
          <circle cx="40" cy="38" r="6" fill="#DC2626" />
          <circle cx="30" cy="54" r="5.5" fill="#DC2626" />
          <circle cx="52" cy="52" r="5.5" fill="#DC2626" />
          <circle cx="34" cy="42" r="2" fill="#10B981" />
          <circle cx="48" cy="42" r="2" fill="#10B981" />
        </svg>
      );

    case 'zongzi':
      return (
        <svg {...commonProps}>
          {/* Bamboo leaf wrapped triangle */}
          <path d="M40 12 L70 56 Q40 74 10 56 Z" fill="#059669" stroke="#064E3B" strokeWidth="2.5" />
          <path d="M40 12 L40 65" stroke="#047857" strokeWidth="2" />
          <path d="M22 38 Q40 46 58 38" stroke="#047857" strokeWidth="2" />
          {/* Tied String */}
          <path d="M14 52 Q40 60 66 52" stroke="#FDE68A" strokeWidth="3" />
          <circle cx="40" cy="56" r="3.5" fill="#F59E0B" />
          <path d="M40 56 L34 68 M40 56 L46 68" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'mooncake':
      return (
        <svg {...commonProps}>
          <circle cx="40" cy="40" r="30" fill="#D97706" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="40" cy="40" r="24" fill="#F59E0B" />
          {/* Fluted flower edges */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={i}
              cx={40 + 26 * Math.cos((angle * Math.PI) / 180)}
              cy={40 + 26 * Math.sin((angle * Math.PI) / 180)}
              r="4.5"
              fill="#B45309"
            />
          ))}
          {/* Traditional engraved center pattern */}
          <rect x="30" y="30" width="20" height="20" rx="3" fill="#B45309" />
          <text x="40" y="45" fontSize="13" fontWeight="bold" fill="#FFFBEB" textAnchor="middle">月</text>
        </svg>
      );

    case 'tangyuan':
      return (
        <svg {...commonProps}>
          {/* Bowl */}
          <path d="M12 36 Q40 76 68 36 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2.5" />
          <ellipse cx="40" cy="36" rx="28" ry="8" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          {/* Sweet soup */}
          <ellipse cx="40" cy="36" rx="24" ry="6" fill="#FEF3C7" />
          {/* Tangyuan balls */}
          <circle cx="30" cy="32" r="9" fill="#F43F5E" stroke="#E11D48" strokeWidth="1" />
          <circle cx="48" cy="33" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="39" cy="42" r="8" fill="#F43F5E" stroke="#E11D48" strokeWidth="1" />
          <ellipse cx="40" cy="68" rx="14" ry="4" fill="#CBD5E1" />
        </svg>
      );

    case 'dumpling':
      return (
        <svg {...commonProps}>
          <path d="M12 46 Q40 18 68 46 Q40 68 12 46 Z" fill="#FFFBEB" stroke="#D97706" strokeWidth="2.5" />
          {/* Pleats */}
          <path d="M22 40 Q26 48 30 40 Q35 50 40 40 Q45 50 50 40 Q54 48 58 40" stroke="#B45309" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'color-red':
      return (
        <svg {...commonProps}>
          {/* Auspicious Red Packet with Gold Fu */}
          <rect x="20" y="14" width="40" height="54" rx="7" fill="#DC2626" stroke="#991B1B" strokeWidth="2.5" />
          <path d="M20 14 Q40 32 60 14" fill="#B91C1C" stroke="#991B1B" strokeWidth="2" />
          <circle cx="40" cy="42" r="14" fill="#FBBF24" />
          <text x="40" y="48" fontSize="16" fontWeight="bold" fill="#B91C1C" textAnchor="middle">春</text>
        </svg>
      );

    case 'color-gray':
      return (
        <svg {...commonProps}>
          <rect x="18" y="18" width="44" height="44" rx="12" fill="#9CA3AF" stroke="#4B5563" strokeWidth="3" />
          <circle cx="40" cy="40" r="14" fill="#D1D5DB" />
          <text x="40" y="45" fontSize="14" fontWeight="bold" fill="#4B5563" textAnchor="middle">灰</text>
        </svg>
      );

    case 'color-black':
      return (
        <svg {...commonProps}>
          <rect x="18" y="18" width="44" height="44" rx="12" fill="#1F2937" stroke="#111827" strokeWidth="3" />
          <circle cx="40" cy="40" r="14" fill="#374151" />
          <text x="40" y="45" fontSize="14" fontWeight="bold" fill="#F9FAFB" textAnchor="middle">黑</text>
        </svg>
      );

    case 'puppet-hand':
      return (
        <svg {...commonProps}>
          {/* Glove puppet */}
          <rect x="24" y="24" width="32" height="36" rx="6" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <circle cx="40" cy="18" r="10" fill="#FCD5C3" stroke="#B45309" strokeWidth="1.5" />
          <path d="M30 14 Q40 8 50 14" fill="#1E293B" />
          <circle cx="36" cy="17" r="1.5" fill="#1E293B" />
          <circle cx="44" cy="17" r="1.5" fill="#1E293B" />
          {/* Hand slipping into puppet */}
          <path d="M32 54 L32 72 Q40 76 48 72 L48 54 Z" fill="#FCD5C3" stroke="#F97316" strokeWidth="2" />
          <line x1="38" y1="62" x2="38" y2="70" stroke="#F97316" strokeWidth="1.5" />
          <line x1="42" y1="62" x2="42" y2="70" stroke="#F97316" strokeWidth="1.5" />
        </svg>
      );

    case 'puppet-foot':
      return (
        <svg {...commonProps}>
          <path d="M26 66 Q20 50 24 34 Q28 22 38 22 Q46 22 46 32 Q46 44 42 66 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2.5" />
          <ellipse cx="34" cy="24" rx="9" ry="5" fill="#60A5FA" />
          <ellipse cx="50" cy="48" rx="8" ry="18" fill="#93C5FD" opacity="0.6" />
          <text x="40" y="74" fontSize="10" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">踩踏</text>
        </svg>
      );

    case 'puppet-wind':
      return (
        <svg {...commonProps}>
          <path d="M12 30 Q30 22 46 28 Q56 32 54 40 Q50 46 44 42 Q40 38 46 32" stroke="#06B6D4" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M18 44 Q36 38 52 44 Q66 50 62 58 Q58 64 50 60 Q46 56 52 50" stroke="#38BDF8" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M10 58 Q24 54 36 58" stroke="#93C5FD" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'taipei-101':
      return (
        <svg {...commonProps}>
          {/* Spire */}
          <line x1="40" y1="6" x2="40" y2="20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          {/* Pagoda tiers */}
          {[20, 28, 36, 44, 52].map((y, i) => (
            <path
              key={i}
              d={`M ${40 - 10 - i * 2} ${y + 8} L ${40 - 8 - i * 2} ${y} L ${40 + 8 + i * 2} ${y} L ${40 + 10 + i * 2} ${y + 8} Z`}
              fill="#059669"
              stroke="#047857"
              strokeWidth="1.5"
            />
          ))}
          {/* Base */}
          <rect x="18" y="60" width="44" height="14" rx="2" fill="#047857" />
          <rect x="26" y="66" width="28" height="8" fill="#FDE68A" />
        </svg>
      );

    case 'tainan-city':
      return (
        <svg {...commonProps}>
          {/* Historical temple roof */}
          <path d="M8 36 Q40 22 72 36 L64 42 Q40 32 16 42 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <path d="M6 34 Q10 24 18 32 M74 34 Q70 24 62 32" stroke="#DC2626" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Pillars and walls */}
          <rect x="20" y="42" width="40" height="28" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <rect x="24" y="44" width="6" height="26" fill="#B45309" />
          <rect x="50" y="44" width="6" height="26" fill="#B45309" />
          <rect x="34" y="52" width="12" height="18" rx="2" fill="#DC2626" />
        </svg>
      );

    case 'hualien-county':
      return (
        <svg {...commonProps}>
          {/* Green mountains & ocean wave */}
          <path d="M10 60 L32 24 L52 48 L70 60 Z" fill="#059669" stroke="#047857" strokeWidth="2" />
          <path d="M30 60 L48 34 L66 60 Z" fill="#10B981" />
          {/* Pacific wave */}
          <path d="M8 64 Q24 56 40 64 Q56 72 72 64" stroke="#0284C7" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M12 70 Q28 64 44 70 Q60 76 72 70" stroke="#38BDF8" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'nantou-sunmoon':
      return (
        <svg {...commonProps}>
          {/* Sun & Moon Lake */}
          <circle cx="58" cy="24" r="10" fill="#F59E0B" />
          <path d="M58 14 A10 10 0 0 0 58 34 A7 7 0 0 1 58 14" fill="#FBBF24" />
          {/* Mountains */}
          <path d="M8 52 Q28 32 46 48 Q64 36 74 52 Z" fill="#0D9488" />
          {/* Water lake */}
          <rect x="8" y="52" width="64" height="20" rx="4" fill="#0284C7" />
          {/* Small boat */}
          <path d="M30 60 L46 60 L42 66 L34 66 Z" fill="#FFFFFF" stroke="#475569" strokeWidth="1.5" />
          <line x1="38" y1="52" x2="38" y2="60" stroke="#475569" strokeWidth="1.5" />
          <polygon points="38,53 46,57 38,59" fill="#EF4444" />
        </svg>
      );

    case 'yilan-county':
      return (
        <svg {...commonProps}>
          {/* Turtle Island on sea */}
          <path d="M14 54 Q28 42 42 42 Q52 42 60 48 Q68 44 70 54 Z" fill="#047857" stroke="#064E3B" strokeWidth="2" />
          {/* Turtle head */}
          <circle cx="68" cy="50" r="5" fill="#047857" />
          <rect x="8" y="54" width="64" height="18" fill="#38BDF8" />
          <path d="M8 60 Q24 56 40 60 Q56 64 72 60" stroke="#0284C7" strokeWidth="2.5" fill="none" />
        </svg>
      );

    case 'pingtung-county':
      return (
        <svg {...commonProps}>
          {/* Lighthouse */}
          <rect x="34" y="24" width="12" height="42" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <rect x="32" y="66" width="16" height="8" rx="2" fill="#334155" />
          <circle cx="40" cy="20" r="6" fill="#FBBF24" />
          {/* Light rays */}
          <path d="M34 20 L16 12 M46 20 L64 12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'chiayi-alishan':
      return (
        <svg {...commonProps}>
          {/* Alishan sunrise & forest train */}
          <circle cx="40" cy="24" r="12" fill="#EF4444" />
          <path d="M8 44 Q28 26 48 40 Q64 30 72 44 Z" fill="#047857" />
          {/* Red Forest Train */}
          <rect x="18" y="46" width="44" height="20" rx="5" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <rect x="24" y="50" width="8" height="8" rx="1" fill="#FEF08A" />
          <rect x="36" y="50" width="8" height="8" rx="1" fill="#FEF08A" />
          <rect x="48" y="50" width="8" height="8" rx="1" fill="#FEF08A" />
          {/* Wheels */}
          <circle cx="28" cy="66" r="4" fill="#1F2937" />
          <circle cx="52" cy="66" r="4" fill="#1F2937" />
        </svg>
      );

    case 'miaoli-county':
      return (
        <svg {...commonProps}>
          {/* Tung blossom / wood craft */}
          <circle cx="40" cy="40" r="8" fill="#FEF08A" />
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <ellipse
              key={i}
              cx={40 + 18 * Math.cos((angle * Math.PI) / 180)}
              cy={40 + 18 * Math.sin((angle * Math.PI) / 180)}
              rx="9"
              ry="12"
              transform={`rotate(${angle + 90} ${40 + 18 * Math.cos((angle * Math.PI) / 180)} ${40 + 18 * Math.sin((angle * Math.PI) / 180)})`}
              fill="#FFFFFF"
              stroke="#FBCFE8"
              strokeWidth="1.5"
            />
          ))}
          <circle cx="40" cy="40" r="5" fill="#F43F5E" />
        </svg>
      );

    case 'taitung-county':
      return (
        <svg {...commonProps}>
          {/* Hot air balloon */}
          <path d="M40 10 C22 10 20 34 32 48 L48 48 C60 34 58 10 40 10 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="2" />
          <path d="M30 14 Q40 40 36 48" stroke="#FBBF24" strokeWidth="3" fill="none" />
          <path d="M50 14 Q40 40 44 48" stroke="#38BDF8" strokeWidth="3" fill="none" />
          {/* Basket */}
          <line x1="34" y1="48" x2="36" y2="58" stroke="#78350F" strokeWidth="1.5" />
          <line x1="46" y1="48" x2="44" y2="58" stroke="#78350F" strokeWidth="1.5" />
          <rect x="34" y="58" width="12" height="10" rx="2" fill="#D97706" />
        </svg>
      );

    case 'pingxi-lantern':
      return (
        <svg {...commonProps}>
          {/* Glowing Sky Lantern */}
          <path d="M26 22 Q40 14 54 22 L62 58 Q40 68 18 58 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
          <ellipse cx="40" cy="60" rx="14" ry="4" fill="#B91C1C" />
          {/* Warm inner fire glow */}
          <circle cx="40" cy="48" r="10" fill="#FEF08A" opacity="0.9" />
          <circle cx="40" cy="48" r="5" fill="#F59E0B" />
          {/* Blessings text */}
          <text x="40" y="38" fontSize="11" fontWeight="bold" fill="#FFFBEB" textAnchor="middle">平安</text>
        </svg>
      );

    case 'kaohsiung-city':
      return (
        <svg {...commonProps}>
          {/* 85 Sky Tower */}
          <path d="M30 28 L30 68 L36 68 L36 44 L44 44 L44 68 L50 68 L50 28 L44 24 L44 14 L36 14 L36 24 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
          <line x1="40" y1="8" x2="40" y2="14" stroke="#0284C7" strokeWidth="2" />
          <rect x="12" y="68" width="56" height="6" rx="2" fill="#047857" />
        </svg>
      );

    case 'changhua-county':
      return (
        <svg {...commonProps}>
          {/* Baguashan Buddha */}
          <circle cx="40" cy="26" r="10" fill="#475569" />
          <path d="M26 44 Q40 36 54 44 L58 64 Q40 70 22 64 Z" fill="#334155" />
          {/* Lotus base */}
          <path d="M18 64 Q40 76 62 64" stroke="#F43F5E" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'yanshui-fireworks':
      return (
        <svg {...commonProps}>
          {/* Fireworks wooden rack & sparks */}
          <rect x="22" y="24" width="36" height="42" rx="3" fill="#B45309" stroke="#78350F" strokeWidth="2" />
          {/* Firecracker tubes grid */}
          <line x1="22" y1="38" x2="58" y2="38" stroke="#78350F" strokeWidth="2" />
          <line x1="22" y1="52" x2="58" y2="52" stroke="#78350F" strokeWidth="2" />
          <line x1="34" y1="24" x2="34" y2="66" stroke="#78350F" strokeWidth="2" />
          <line x1="46" y1="24" x2="46" y2="66" stroke="#78350F" strokeWidth="2" />
          {/* Golden/Red spark bursts */}
          <circle cx="16" cy="18" r="3" fill="#F59E0B" />
          <circle cx="64" cy="20" r="3" fill="#EF4444" />
          <circle cx="40" cy="14" r="4" fill="#FEF08A" />
          <line x1="40" y1="14" x2="40" y2="24" stroke="#F59E0B" strokeWidth="2" />
        </svg>
      );

    case 'taichung-city':
      return (
        <svg {...commonProps}>
          {/* Taichung Park lakeside pavilion */}
          <path d="M18 36 Q40 20 62 36 L54 42 Q40 30 26 42 Z" fill="#DC2626" />
          <rect x="28" y="42" width="24" height="22" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.5" />
          <rect x="12" y="64" width="56" height="8" rx="2" fill="#0284C7" />
        </svg>
      );

    case 'keelung-city':
      return (
        <svg {...commonProps}>
          {/* Keelung Harbor & ship */}
          <path d="M14 50 L66 50 L58 64 L22 64 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <rect x="28" y="34" width="24" height="16" rx="2" fill="#0284C7" />
          <rect x="36" y="24" width="8" height="10" fill="#EF4444" />
          <rect x="8" y="64" width="64" height="8" fill="#38BDF8" />
        </svg>
      );

    case 'lantern-wish':
      return (
        <svg {...commonProps}>
          {/* Sky lantern with handwritten wishes */}
          <path d="M24 16 Q40 10 56 16 L64 54 Q40 64 16 54 Z" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2.5" />
          <circle cx="40" cy="54" r="8" fill="#FEF08A" />
          <text x="40" y="32" fontSize="10" fontWeight="bold" fill="#DC2626" textAnchor="middle">願望</text>
          <text x="40" y="44" fontSize="10" fontWeight="bold" fill="#DC2626" textAnchor="middle">祝福</text>
        </svg>
      );

    case 'shopping-list':
      return (
        <svg {...commonProps}>
          {/* Notepad & checklist */}
          <rect x="20" y="14" width="40" height="52" rx="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2.5" />
          <rect x="26" y="24" width="6" height="6" rx="1" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          <line x1="36" y1="27" x2="52" y2="27" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <rect x="26" y="36" width="6" height="6" rx="1" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          <line x1="36" y1="39" x2="52" y2="39" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <rect x="26" y="48" width="6" height="6" rx="1" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          <line x1="36" y1="51" x2="52" y2="51" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'car-plate':
      return (
        <svg {...commonProps}>
          {/* License plate */}
          <rect x="10" y="26" width="60" height="28" rx="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
          <text x="40" y="45" fontSize="13" fontWeight="900" fill="#1E293B" textAnchor="middle" letterSpacing="1">ABC-888</text>
        </svg>
      );

    case 'taipei-beitou':
      return (
        <svg {...commonProps}>
          {/* Hot spring tub with steam */}
          <ellipse cx="40" cy="54" rx="28" ry="14" fill="#0284C7" stroke="#78350F" strokeWidth="3" />
          <path d="M30 40 Q34 32 30 24" stroke="#94A3B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M40 42 Q44 30 40 20" stroke="#94A3B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M50 40 Q54 32 50 24" stroke="#94A3B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'hualien-ruisui':
      return (
        <svg {...commonProps}>
          {/* Friendly dairy pasture & milk bottle */}
          <rect x="28" y="24" width="24" height="42" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <rect x="34" y="16" width="12" height="8" rx="2" fill="#38BDF8" />
          <circle cx="40" cy="45" r="7" fill="#38BDF8" />
          <text x="40" y="49" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">鮮乳</text>
        </svg>
      );

    case 'sea-fishing':
      return (
        <svg {...commonProps}>
          {/* Fishing boat on sea */}
          <path d="M12 50 L68 50 L58 64 L22 64 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
          <line x1="38" y1="20" x2="38" y2="50" stroke="#78350F" strokeWidth="2.5" />
          <polygon points="38,22 56,36 38,46" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Waves & small fish */}
          <path d="M8 66 Q24 60 40 66 Q56 72 72 66" stroke="#0284C7" strokeWidth="3" fill="none" />
        </svg>
      );

    case 'mountain-ski':
      return (
        <svg {...commonProps}>
          {/* Skis in snow */}
          <line x1="20" y1="16" x2="52" y2="66" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <line x1="28" y1="16" x2="60" y2="66" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <line x1="16" y1="30" x2="44" y2="68" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <rect x="8" y="64" width="64" height="8" rx="2" fill="#E2E8F0" />
        </svg>
      );

    case 'desert-travel':
      return (
        <svg {...commonProps}>
          {/* Desert dune & camel */}
          <path d="M8 62 Q28 44 48 54 Q64 48 72 62 Z" fill="#F59E0B" />
          <circle cx="58" cy="22" r="10" fill="#EF4444" />
          {/* Camel silhouette */}
          <ellipse cx="36" cy="46" rx="10" ry="7" fill="#78350F" />
          <circle cx="28" cy="38" r="4" fill="#78350F" />
          <line x1="32" y1="52" x2="30" y2="62" stroke="#78350F" strokeWidth="2.5" />
          <line x1="42" y1="52" x2="44" y2="62" stroke="#78350F" strokeWidth="2.5" />
        </svg>
      );

    case 'lantern-festival':
      return (
        <svg {...commonProps}>
          {/* Traditional festival lantern */}
          <circle cx="40" cy="40" r="22" fill="#DC2626" stroke="#B91C1C" strokeWidth="2" />
          <ellipse cx="40" cy="40" rx="14" ry="22" fill="#EF4444" />
          <ellipse cx="40" cy="40" rx="6" ry="22" fill="#FDE047" />
          {/* Hanging tassel */}
          <line x1="40" y1="62" x2="40" y2="74" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="10" x2="40" y2="18" stroke="#B45309" strokeWidth="2" />
        </svg>
      );

    case 'dragon-boat':
      return (
        <svg {...commonProps}>
          {/* Dragon boat */}
          <path d="M8 46 Q40 56 68 40 L64 54 Q38 64 12 54 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          {/* Dragon head */}
          <path d="M64 40 Q74 30 70 20 Q64 26 62 36 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          {/* Drum & oars */}
          <rect x="36" y="38" width="8" height="10" rx="2" fill="#D97706" />
          <line x1="22" y1="52" x2="16" y2="64" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="52" x2="42" y2="64" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'maple-leaves':
      return (
        <svg {...commonProps}>
          {/* Autumn maple leaves */}
          <path d="M40 14 L46 26 L56 22 L52 34 L64 38 L54 44 L58 56 L46 50 L40 64 L34 50 L22 56 L26 44 L16 38 L28 34 L24 22 L34 26 Z" fill="#EA580C" stroke="#C2410C" strokeWidth="2" />
          <line x1="40" y1="36" x2="40" y2="68" stroke="#7C2D12" strokeWidth="2" />
        </svg>
      );

    case 'tribe-thao':
      return (
        <svg {...commonProps}>
          {/* Thao white deer symbol & lake canoe */}
          <circle cx="40" cy="40" r="28" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
          {/* Sacred white deer silhouette */}
          <path d="M30 50 Q36 34 44 32 Q48 24 50 18 Q54 22 52 28 Q56 30 54 36 Q48 44 48 52 Z" fill="#15803D" />
          {/* Deer antlers */}
          <path d="M50 18 L54 10 M52 14 L58 14" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
          <text x="40" y="68" fontSize="11" fontWeight="bold" fill="#15803D" textAnchor="middle">邵族</text>
        </svg>
      );

    case 'tribe-amis':
      return (
        <svg {...commonProps}>
          {/* Amis feather sun headdress */}
          <circle cx="40" cy="46" r="16" fill="#FDE047" stroke="#DC2626" strokeWidth="2.5" />
          {/* Feathers */}
          {[0, 30, 60, 90, 120, 150, 180].map((deg, i) => (
            <line
              key={i}
              x1={40 + 16 * Math.cos(((deg - 180) * Math.PI) / 180)}
              y1={46 + 16 * Math.sin(((deg - 180) * Math.PI) / 180)}
              x2={40 + 26 * Math.cos(((deg - 180) * Math.PI) / 180)}
              y2={46 + 26 * Math.sin(((deg - 180) * Math.PI) / 180)}
              stroke="#DC2626"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
          <text x="40" y="50" fontSize="10" fontWeight="bold" fill="#991B1B" textAnchor="middle">阿美</text>
        </svg>
      );

    case 'tribe-tao':
      return (
        <svg {...commonProps}>
          {/* Tao Tatala boat eye symbol */}
          <circle cx="40" cy="40" r="26" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
          <circle cx="40" cy="40" r="18" fill="#DC2626" />
          <circle cx="40" cy="40" r="10" fill="#1F2937" />
          <circle cx="40" cy="40" r="4" fill="#FFFFFF" />
          {/* Sun rays around eye */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((d, i) => (
            <circle
              key={i}
              cx={40 + 22 * Math.cos((d * Math.PI) / 180)}
              cy={40 + 22 * Math.sin((d * Math.PI) / 180)}
              r="2"
              fill="#1F2937"
            />
          ))}
        </svg>
      );

    case 'tribe-paiwan':
      return (
        <svg {...commonProps}>
          {/* Paiwan ceramic pot & snake rhombus */}
          <ellipse cx="40" cy="44" rx="22" ry="20" fill="#D97706" stroke="#92400E" strokeWidth="2.5" />
          <rect x="32" y="20" width="16" height="8" rx="2" fill="#B45309" />
          {/* Rhombus patterns */}
          <polygon points="40,34 46,42 40,50 34,42" fill="#FEF3C7" stroke="#78350F" strokeWidth="1.5" />
        </svg>
      );

    case 'tribe-kavalan':
      return (
        <svg {...commonProps}>
          {/* Kavalan banana weave */}
          <rect x="18" y="18" width="44" height="44" rx="6" fill="#FEF3C7" stroke="#92400E" strokeWidth="2.5" />
          <line x1="26" y1="18" x2="26" y2="62" stroke="#B45309" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="36" y1="18" x2="36" y2="62" stroke="#B45309" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="46" y1="18" x2="46" y2="62" stroke="#B45309" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="54" y1="18" x2="54" y2="62" stroke="#B45309" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      );

    case 'mazu-fisher':
      return (
        <svg {...commonProps}>
          {/* Mazu golden crown aura & sea guardian */}
          <circle cx="40" cy="38" r="26" fill="#FEF9C3" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="40" cy="34" r="12" fill="#FCD5C3" />
          {/* Empress Crown */}
          <path d="M28 24 L52 24 L48 16 L32 16 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          <circle cx="40" cy="18" r="2" fill="#EF4444" />
          {/* Protective ocean waves */}
          <path d="M16 62 Q28 54 40 62 Q52 70 64 62" stroke="#0284C7" strokeWidth="3" fill="none" />
        </svg>
      );

    case 'mountain-hiker':
      return (
        <svg {...commonProps}>
          {/* Hiker silhouette with stick */}
          <circle cx="34" cy="22" r="7" fill="#15803D" />
          <path d="M30 30 L38 30 L40 50 L34 50 Z" fill="#166534" />
          {/* Backpack */}
          <rect x="22" y="32" width="10" height="16" rx="3" fill="#D97706" />
          {/* Walking stick */}
          <line x1="48" y1="28" x2="48" y2="68" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'shepherd':
      return (
        <svg {...commonProps}>
          {/* Shepherd & sheep */}
          <circle cx="48" cy="46" r="14" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="36" cy="42" r="6" fill="#1E293B" />
          {/* Crook */}
          <path d="M24 24 Q30 16 34 22 L34 66" stroke="#B45309" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'blessing-peace':
      return (
        <svg {...commonProps}>
          {/* Temple incense burner & peace amulet */}
          <path d="M22 36 L58 36 L54 62 L26 62 Z" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <circle cx="40" cy="48" r="7" fill="#EF4444" />
          <text x="40" y="52" fontSize="9" fontWeight="bold" fill="#FFFBEB" textAnchor="middle">平</text>
          {/* Incense smoke coils */}
          <path d="M34 32 Q32 20 36 12" stroke="#CBD5E1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M46 32 Q48 20 44 12" stroke="#CBD5E1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'wish-snow':
      return (
        <svg {...commonProps}>
          {/* Snowflake */}
          <circle cx="40" cy="40" r="24" fill="#EFF6FF" />
          <line x1="40" y1="18" x2="40" y2="62" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="40" x2="62" y2="40" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="24" x2="56" y2="56" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="56" y1="24" x2="24" y2="56" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'harvest-grape':
      return (
        <svg {...commonProps}>
          {/* Bunch of grapes */}
          <path d="M38 12 Q40 18 40 24" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 18 Q48 14 54 18" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
          {/* Grape spheres */}
          {[
            [32, 28], [42, 28], [50, 32],
            [28, 38], [38, 38], [48, 40],
            [34, 48], [44, 48],
            [40, 58],
          ].map(([gx, gy], i) => (
            <circle key={i} cx={gx} cy={gy} r="6" fill="#7C3AED" stroke="#5B21B6" strokeWidth="1.5" />
          ))}
        </svg>
      );

    case 'taipei-wanhua':
      return (
        <svg {...commonProps}>
          {/* Longshan Temple swallowtail ridge */}
          <path d="M8 32 Q40 14 72 32 L64 38 Q40 24 16 38 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <path d="M6 30 Q12 18 20 28 M74 30 Q68 18 60 28" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="22" y="38" width="36" height="28" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <circle cx="40" cy="50" r="6" fill="#DC2626" />
          <text x="40" y="54" fontSize="8" fontWeight="bold" fill="#FFFBEB" textAnchor="middle">龍山</text>
        </svg>
      );

    case 'taipei-xinyi':
      return (
        <svg {...commonProps}>
          {/* Modern financial district skyscrapers */}
          <rect x="16" y="32" width="16" height="36" rx="2" fill="#64748B" />
          <rect x="36" y="16" width="18" height="52" rx="2" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
          <rect x="58" y="28" width="12" height="40" rx="2" fill="#0D9488" />
          <line x1="45" y1="8" x2="45" y2="16" stroke="#F59E0B" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <rect x="16" y="16" width="48" height="48" rx="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="40" cy="40" r="12" fill="#94A3B8" />
        </svg>
      );
  }
};
