import React from 'react';

interface CharacterProps {
  size?: number | string;
  className?: string;
  pose?: 'default' | 'wave' | 'explain' | 'celebrate' | 'comfort';
  showSpeechBubble?: boolean;
  bubbleText?: string;
  speechPosition?: 'top' | 'right' | 'left';
}

/**
 * 阿福 (A-Fu): 臺灣黑熊小導遊
 * - 圓潤黑熊造型、胸前白V字
 * - 穿著復古背心，配戴小領巾
 * - 溫暖、耐心、揮手歡迎
 */
export const AfuCharacter: React.FC<CharacterProps> = ({
  size = 140,
  className = '',
  pose = 'default',
  showSpeechBubble = false,
  bubbleText = '不用急，我們慢慢來！',
  speechPosition = 'top',
}) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {showSpeechBubble && (
        <div
          className={`z-20 bg-amber-50 border-2 border-amber-300 text-amber-950 font-bold px-4 py-2 rounded-2xl shadow-md text-base sm:text-lg mb-2 flex items-center gap-1.5 animate-bounce-slight ${
            speechPosition === 'right'
              ? 'absolute -top-3 -right-36 sm:-right-44'
              : speechPosition === 'left'
              ? 'absolute -top-3 -left-36 sm:-left-44'
              : 'relative'
          }`}
        >
          <span className="text-xl">🐻</span>
          <span>{bubbleText}</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-amber-300" />
        </div>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
        aria-label="臺灣黑熊導遊阿福"
      >
        <defs>
          <radialGradient id="afu-body-grad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="85%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#111827" />
          </radialGradient>
          <linearGradient id="afu-vest-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="afu-scarf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Shadow base */}
        <ellipse cx="80" cy="150" rx="42" ry="7" fill="#E2E8F0" />

        {/* Bear Ears */}
        {/* Left Ear */}
        <circle cx="46" cy="46" r="16" fill="url(#afu-body-grad)" />
        <circle cx="46" cy="46" r="9" fill="#FBCFE8" opacity="0.8" />
        {/* Right Ear */}
        <circle cx="114" cy="46" r="16" fill="url(#afu-body-grad)" />
        <circle cx="114" cy="46" r="9" fill="#FBCFE8" opacity="0.8" />

        {/* Bear Body */}
        <ellipse cx="80" cy="115" rx="44" ry="34" fill="url(#afu-body-grad)" />

        {/* Taiwan Black Bear White Crescent 'V' */}
        <path
          d="M 52 108 Q 80 134 108 108 Q 96 122 80 125 Q 64 122 52 108 Z"
          fill="#FFFBEB"
          stroke="#FDE68A"
          strokeWidth="1.5"
        />

        {/* Retro Vest */}
        <path
          d="M 44 112 Q 56 100 80 102 Q 104 100 116 112 L 114 140 Q 80 144 46 140 Z"
          fill="url(#afu-vest-grad)"
          stroke="#92400E"
          strokeWidth="1.5"
        />
        {/* Vest Collar / Front Lapels */}
        <path d="M 68 103 L 64 138" stroke="#78350F" strokeWidth="2" />
        <path d="M 92 103 L 96 138" stroke="#78350F" strokeWidth="2" />
        {/* Vest Buttons */}
        <circle cx="80" cy="114" r="2.5" fill="#FEF08A" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="80" cy="126" r="2.5" fill="#FEF08A" stroke="#B45309" strokeWidth="0.8" />

        {/* Retro Red Neckerchief (領巾) */}
        <path
          d="M 66 94 Q 80 102 94 94 Q 86 108 80 112 Q 74 108 66 94 Z"
          fill="url(#afu-scarf-grad)"
          stroke="#991B1B"
          strokeWidth="1.2"
        />
        {/* Scarf knot & tails */}
        <circle cx="80" cy="100" r="4.5" fill="#B91C1C" />
        <path d="M 78 102 L 73 115 L 79 113 Z" fill="#EF4444" />
        <path d="M 82 102 L 87 115 L 81 113 Z" fill="#DC2626" />

        {/* Left Arm / Hand */}
        {pose === 'wave' || pose === 'default' ? (
          // Friendly waving left arm (viewer's left)
          <g>
            <path
              d="M 45 110 Q 26 95 30 76 Q 37 72 44 86 Q 48 98 47 112"
              fill="url(#afu-body-grad)"
            />
            {/* Paw pad */}
            <circle cx="34" cy="78" r="7" fill="#1F2937" />
            <circle cx="34" cy="78" r="4" fill="#FBCFE8" opacity="0.8" />
          </g>
        ) : (
          <path d="M 42 110 Q 32 122 38 132" stroke="#1F2937" strokeWidth="12" strokeLinecap="round" />
        )}

        {/* Right Arm / Hand */}
        <path
          d="M 118 110 Q 128 122 122 132"
          stroke="#1F2937"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Bear Head */}
        <ellipse cx="80" cy="65" rx="38" ry="32" fill="url(#afu-body-grad)" />

        {/* Snout Area (Cream) */}
        <ellipse cx="80" cy="73" rx="16" ry="12" fill="#FEF3C7" />

        {/* Nose */}
        <path
          d="M 74 68 Q 80 66 86 68 Q 84 74 80 75 Q 76 74 74 68 Z"
          fill="#111827"
        />
        {/* Smile */}
        <path
          d="M 73 76 Q 80 82 87 76"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Eyes (Warm & Kind) */}
        <circle cx="66" cy="60" r="4.5" fill="#111827" />
        <circle cx="64.5" cy="58.5" r="1.5" fill="#FFFFFF" />
        <circle cx="94" cy="60" r="4.5" fill="#111827" />
        <circle cx="92.5" cy="58.5" r="1.5" fill="#FFFFFF" />

        {/* Cheerful Eyebrows */}
        <path d="M 61 53 Q 66 50 71 53" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 89 53 Q 94 50 99 53" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />

        {/* Warm Blushing Cheeks */}
        <circle cx="56" cy="70" r="6" fill="#F472B6" opacity="0.45" />
        <circle cx="104" cy="70" r="6" fill="#F472B6" opacity="0.45" />

        {/* Guide Hat or Small Guide Badge */}
        <ellipse cx="80" cy="38" rx="20" ry="4" fill="#B45309" />
        <path d="M 65 38 C 65 26 95 26 95 38 Z" fill="#D97706" stroke="#92400E" strokeWidth="1" />
        <circle cx="80" cy="32" r="3" fill="#F59E0B" />
      </svg>

      <span className="mt-1 text-sm sm:text-base font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-200">
        阿福 (小導遊)
      </span>
    </div>
  );
};

/**
 * 小花 (Xiao-Hua): 溫暖親切的卡通人物
 * - 穿著臺灣復古客家/傳統花布元素服飾 (牡丹花紋、粉紅/桃紅/青碧)
 * - 溫暖親切，陪伴使用者查看答案與臺灣文化
 */
export const XiaohuaCharacter: React.FC<CharacterProps> = ({
  size = 140,
  className = '',
  showSpeechBubble = false,
  bubbleText = '原來是這樣，我們又學會一件事了！',
  speechPosition = 'top',
}) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {showSpeechBubble && (
        <div
          className={`z-20 bg-rose-50 border-2 border-rose-300 text-rose-950 font-bold px-4 py-2 rounded-2xl shadow-md text-base sm:text-lg mb-2 flex items-center gap-1.5 animate-bounce-slight ${
            speechPosition === 'right'
              ? 'absolute -top-3 -right-36 sm:-right-44'
              : speechPosition === 'left'
              ? 'absolute -top-3 -left-36 sm:-left-44'
              : 'relative'
          }`}
        >
          <span className="text-xl">🌸</span>
          <span>{bubbleText}</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-rose-300" />
        </div>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
        aria-label="親切小夥伴小花"
      >
        <defs>
          <linearGradient id="xh-skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF1E8" />
            <stop offset="100%" stopColor="#FCD5C3" />
          </linearGradient>
          <linearGradient id="xh-dress-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="50%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#BE185D" />
          </linearGradient>
          {/* Taiwan Vintage Floral Pattern Motif */}
          <pattern id="tw-floral-pat" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#BE185D" />
            <circle cx="10" cy="10" r="5" fill="#F43F5E" />
            <circle cx="10" cy="10" r="2.5" fill="#FDE047" />
            <circle cx="4" cy="4" r="2" fill="#34D399" />
            <circle cx="16" cy="16" r="2" fill="#38BDF8" />
            <path d="M 2 10 Q 5 6 10 10 Q 5 14 2 10" fill="#10B981" opacity="0.8" />
            <path d="M 18 10 Q 15 6 10 10 Q 15 14 18 10" fill="#10B981" opacity="0.8" />
          </pattern>
        </defs>

        {/* Shadow base */}
        <ellipse cx="80" cy="150" rx="38" ry="6" fill="#E2E8F0" />

        {/* Bun / Back Hair */}
        <circle cx="45" cy="55" r="14" fill="#374151" />
        <circle cx="115" cy="55" r="14" fill="#374151" />
        {/* Hair ties */}
        <ellipse cx="45" cy="55" rx="16" ry="6" fill="#F43F5E" />
        <ellipse cx="115" cy="55" rx="16" ry="6" fill="#F43F5E" />

        {/* Vintage Floral Tunic/Dress (Taiwan Retro Floral Pattern) */}
        <path
          d="M 52 110 Q 80 100 108 110 L 122 144 Q 80 148 38 144 Z"
          fill="url(#tw-floral-pat)"
          stroke="#9D174D"
          strokeWidth="1.5"
        />

        {/* Floral collar */}
        <path
          d="M 64 105 Q 80 115 96 105 L 80 120 Z"
          fill="#FFF1F2"
          stroke="#F43F5E"
          strokeWidth="1.5"
        />

        {/* Friendly Hands placed together warmly */}
        <ellipse cx="80" cy="132" rx="11" ry="8" fill="#FCD5C3" stroke="#F43F5E" strokeWidth="1" />
        <path d="M 76 130 Q 80 134 84 130" stroke="#E11D48" strokeWidth="1.5" fill="none" />

        {/* Neck */}
        <rect x="74" y="94" width="12" height="14" rx="4" fill="url(#xh-skin-grad)" />

        {/* Head */}
        <ellipse cx="80" cy="68" rx="33" ry="30" fill="url(#xh-skin-grad)" />

        {/* Hair Front (Neat soft bangs) */}
        <path
          d="M 47 62 C 47 38 113 38 113 62 C 105 52 90 48 80 50 C 70 48 55 52 47 62 Z"
          fill="#374151"
        />

        {/* Taiwan Floral Hairclip */}
        <g transform="translate(104, 46)">
          <circle cx="0" cy="0" r="7" fill="#F43F5E" />
          <circle cx="0" cy="0" r="3" fill="#FDE047" />
          <circle cx="4" cy="-4" r="2.5" fill="#34D399" />
        </g>

        {/* Eyes (Smiling curves or sparkling warm eyes) */}
        <path
          d="M 64 66 Q 70 60 76 66"
          stroke="#1F2937"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 84 66 Q 90 60 96 66"
          stroke="#1F2937"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Eyebrows */}
        <path d="M 63 58 Q 70 55 77 58" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        <path d="M 83 58 Q 90 55 97 58" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />

        {/* Cheerful Smile */}
        <path
          d="M 72 78 Q 80 86 88 78"
          stroke="#BE123C"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="#FFF1F2"
        />

        {/* Rosy Cheeks */}
        <ellipse cx="60" cy="74" rx="7" ry="5" fill="#FB7185" opacity="0.6" />
        <ellipse cx="100" cy="74" rx="7" ry="5" fill="#FB7185" opacity="0.6" />
      </svg>

      <span className="mt-1 text-sm sm:text-base font-bold text-rose-900 bg-rose-100/90 px-2.5 py-0.5 rounded-full border border-rose-200">
        小花 (文化好朋友)
      </span>
    </div>
  );
};

/**
 * 小勇 (Xiao-Yong): 活潑但不吵鬧的卡通小人物
 * - 復古郵差帽 (深綠復古帽附金徽章)、小斜背包
 * - 負責進階通知、星星獎勵、煙火慶祝
 */
export const XiaoyongCharacter: React.FC<CharacterProps> = ({
  size = 140,
  className = '',
  pose = 'celebrate',
  showSpeechBubble = false,
  bubbleText = '太棒了！我們要前往下一關了！',
  speechPosition = 'top',
}) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {showSpeechBubble && (
        <div
          className={`z-20 bg-emerald-50 border-2 border-emerald-300 text-emerald-950 font-bold px-4 py-2 rounded-2xl shadow-md text-base sm:text-lg mb-2 flex items-center gap-1.5 animate-bounce-slight ${
            speechPosition === 'right'
              ? 'absolute -top-3 -right-36 sm:-right-44'
              : speechPosition === 'left'
              ? 'absolute -top-3 -left-36 sm:-left-44'
              : 'relative'
          }`}
        >
          <span className="text-xl">⭐</span>
          <span>{bubbleText}</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-emerald-300" />
        </div>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
        aria-label="郵差帽夥伴小勇"
      >
        <defs>
          <linearGradient id="xy-cap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#065F46" />
          </linearGradient>
          <linearGradient id="xy-shirt-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="xy-bag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Shadow base */}
        <ellipse cx="80" cy="150" rx="38" ry="6" fill="#E2E8F0" />

        {/* Body / Shirt */}
        <path
          d="M 52 110 Q 80 102 108 110 L 115 142 Q 80 146 45 142 Z"
          fill="url(#xy-shirt-grad)"
          stroke="#0369A1"
          strokeWidth="1.5"
        />

        {/* Messenger Bag Strap across chest */}
        <line x1="56" y1="106" x2="108" y2="136" stroke="#5B21B6" strokeWidth="5" strokeLinecap="round" />

        {/* Retro Postal Messenger Bag (小背包) */}
        <rect
          x="94"
          y="120"
          width="26"
          height="22"
          rx="5"
          fill="url(#xy-bag-grad)"
          stroke="#451A03"
          strokeWidth="1.2"
        />
        {/* Bag Flap & Buckle */}
        <path d="M 94 126 Q 107 131 120 126" stroke="#451A03" strokeWidth="1.5" fill="none" />
        <circle cx="107" cy="128" r="2" fill="#FDE047" />

        {/* Arms / Hands */}
        {pose === 'celebrate' ? (
          // Raising hand holding a bright star
          <g>
            {/* Left Arm raised with star */}
            <path
              d="M 52 112 Q 32 95 36 78"
              stroke="#0284C7"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Hand */}
            <circle cx="36" cy="74" r="6" fill="#FCD5C3" />
            {/* Golden Star in hand */}
            <g transform="translate(36, 60) scale(0.9)">
              <polygon
                points="0,-14 4,-4 14,-3 6,5 8,15 0,9 -8,15 -6,5 -14,-3 -4,-4"
                fill="#FBBF24"
                stroke="#D97706"
                strokeWidth="1.5"
              />
              <circle cx="0" cy="0" r="3" fill="#FFFBEB" />
            </g>

            {/* Right Arm cheering */}
            <path
              d="M 108 112 Q 124 100 128 88"
              stroke="#0284C7"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <circle cx="129" cy="84" r="6" fill="#FCD5C3" />
          </g>
        ) : (
          <g>
            <path d="M 52 112 Q 40 125 44 136" stroke="#0284C7" strokeWidth="9" strokeLinecap="round" />
            <path d="M 108 112 Q 120 125 116 136" stroke="#0284C7" strokeWidth="9" strokeLinecap="round" />
          </g>
        )}

        {/* Neck */}
        <rect x="74" y="94" width="12" height="14" rx="4" fill="#FCD5C3" />

        {/* Head */}
        <ellipse cx="80" cy="68" rx="32" ry="30" fill="#FCD5C3" />

        {/* Hair sideburns */}
        <path d="M 49 60 Q 48 72 52 74" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />
        <path d="M 111 60 Q 112 72 108 74" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />

        {/* Eyes (Energetic, happy) */}
        <ellipse cx="67" cy="66" rx="4.5" ry="5.5" fill="#1F2937" />
        <circle cx="65.5" cy="64" r="1.8" fill="#FFFFFF" />
        <ellipse cx="93" cy="66" rx="4.5" ry="5.5" fill="#1F2937" />
        <circle cx="91.5" cy="64" r="1.8" fill="#FFFFFF" />

        {/* Cheerful Smile */}
        <path
          d="M 71 78 Q 80 88 89 78"
          stroke="#1F2937"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="#EF4444"
        />

        {/* Peach Cheeks */}
        <circle cx="60" cy="74" r="6" fill="#F43F5E" opacity="0.45" />
        <circle cx="100" cy="74" r="6" fill="#F43F5E" opacity="0.45" />

        {/* Vintage Postal Cap (復古郵差帽) */}
        {/* Cap visor / brim */}
        <ellipse cx="80" cy="46" rx="38" ry="9" fill="#064E3B" stroke="#022C22" strokeWidth="1" />
        {/* Cap crown */}
        <path
          d="M 48 46 C 48 24 112 24 112 46 Z"
          fill="url(#xy-cap-grad)"
          stroke="#064E3B"
          strokeWidth="1.5"
        />
        {/* Cap band */}
        <path
          d="M 48 44 Q 80 49 112 44"
          stroke="#D97706"
          strokeWidth="3.5"
          fill="none"
        />
        {/* Vintage Brass Emblem on Cap */}
        <circle cx="80" cy="36" r="5" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />
        {/* Postal Pigeon/Horn mini emblem */}
        <path d="M 78 36 Q 80 34 82 36" stroke="#451A03" strokeWidth="1.2" fill="none" />
      </svg>

      <span className="mt-1 text-sm sm:text-base font-bold text-emerald-900 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-200">
        小勇 (元氣郵差)
      </span>
    </div>
  );
};

/**
 * Three Characters Celebration Trio Component
 * Used in:
 * - 每五題完成：三位角色一起慶祝
 * - 完成遊戲：三位角色向使用者道賀
 */
export const CharacterTrio: React.FC<{ size?: number; className?: string }> = ({
  size = 110,
  className = '',
}) => {
  return (
    <div className={`flex items-end justify-center gap-2 sm:gap-6 ${className}`}>
      <div className="transform -rotate-3 hover:rotate-0 transition-transform">
        <XiaohuaCharacter size={size} pose="comfort" />
      </div>
      <div className="transform -translate-y-2 scale-105 z-10">
        <AfuCharacter size={size + 15} pose="wave" />
      </div>
      <div className="transform rotate-3 hover:rotate-0 transition-transform">
        <XiaoyongCharacter size={size} pose="celebrate" />
      </div>
    </div>
  );
};
