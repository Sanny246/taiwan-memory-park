import React from 'react';
import { Volume2, VolumeX, Sparkles, Star, Info, Bell, BellOff, ZoomIn } from 'lucide-react';
import { GameSettings, FontSizeLevel } from '../types';

interface HeaderBarProps {
  currentStageId?: number;
  totalStages?: number;
  stageName?: string;
  wisdomStars: number;
  learningStars: number;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onOpenIntro: () => void;
  onGoHome?: () => void;
  showHomeButton?: boolean;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentStageId,
  totalStages = 4,
  stageName,
  wisdomStars,
  learningStars,
  settings,
  onUpdateSettings,
  onOpenIntro,
  onGoHome,
  showHomeButton = false,
}) => {
  const toggleFontSize = () => {
    const sequence: FontSizeLevel[] = ['large', 'extra', 'normal'];
    const nextIdx = (sequence.indexOf(settings.fontSize) + 1) % sequence.length;
    onUpdateSettings({ fontSize: sequence[nextIdx] });
  };

  const fontSizeLabel = {
    normal: '標準字',
    large: '大字體',
    extra: '特大字',
  }[settings.fontSize];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-amber-200/80 shadow-xs px-3 sm:px-6 py-2.5 sm:py-3 transition-all">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Title and Stage indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          {showHomeButton && onGoHome && (
            <button
              id="btn-nav-home"
              onClick={onGoHome}
              aria-label="回首頁"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-sm sm:text-base font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>🏠</span>
              <span className="hidden sm:inline">回首頁</span>
            </button>
          )}

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-1.5">
                <span className="text-amber-600">🇹🇼</span> 臺灣記憶之旅
              </h1>
              {currentStageId && (
                <span className="px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  第 {currentStageId}/{totalStages} 關
                </span>
              )}
            </div>
            {stageName && (
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                當前關卡：<span className="text-amber-800 font-bold">{stageName}</span>
              </p>
            )}
          </div>
        </div>

        {/* Center/Right: Stars tally and accessible toggles */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3 ml-auto">
          {/* Star Counters - Big & Clear */}
          <div className="flex items-center gap-2 bg-amber-50/90 border border-amber-200 px-3 py-1 rounded-2xl text-sm sm:text-base font-bold text-slate-800">
            <div className="flex items-center gap-1 text-amber-700" title="智慧星（答對累積）">
              <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              <span className="text-base sm:text-lg font-black">{wisdomStars}</span>
              <span className="text-xs sm:text-sm text-amber-800 hidden xs:inline">智慧星</span>
            </div>
            <div className="w-px h-5 bg-amber-200" />
            <div className="flex items-center gap-1 text-emerald-700" title="學習星（陪伴參與）">
              <Sparkles className="w-5 h-5 text-emerald-500 fill-emerald-200" />
              <span className="text-base sm:text-lg font-black">{learningStars}</span>
              <span className="text-xs sm:text-sm text-emerald-800 hidden xs:inline">學習星</span>
            </div>
          </div>

          {/* Quick senior-friendly toggles */}
          <div className="flex items-center gap-1.5">
            {/* Font Size Toggle */}
            <button
              id="btn-toggle-fontsize"
              onClick={toggleFontSize}
              title={`切換字體大小（目前：${fontSizeLabel}）`}
              className="px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ZoomIn className="w-4 h-4 text-slate-600" />
              <span>{fontSizeLabel}</span>
            </button>

            {/* Speech Readout Toggle */}
            <button
              id="btn-toggle-speech"
              onClick={() => onUpdateSettings({ speechEnabled: !settings.speechEnabled })}
              title={settings.speechEnabled ? '語音朗讀：開啟' : '語音朗讀：關閉'}
              className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center gap-1 text-xs sm:text-sm font-bold ${
                settings.speechEnabled
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100'
                  : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {settings.speechEnabled ? (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              ) : (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
              )}
              <span className="hidden sm:inline">
                {settings.speechEnabled ? '語音開' : '語音關'}
              </span>
            </button>

            {/* Sound Chime Toggle */}
            <button
              id="btn-toggle-sound"
              onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
              title={settings.soundEnabled ? '音效：開啟' : '音效：關閉'}
              className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center gap-1 text-xs sm:text-sm font-bold ${
                settings.soundEnabled
                  ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100'
                  : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {settings.soundEnabled ? (
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              ) : (
                <BellOff className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
              )}
              <span className="hidden md:inline">
                {settings.soundEnabled ? '音效開' : '音效關'}
              </span>
            </button>

            {/* Character & Instructions Modal Button */}
            <button
              id="btn-open-guide-intro"
              onClick={onOpenIntro}
              title="查看角色導覽與遊戲玩法"
              className="p-2 sm:px-3 rounded-xl border border-amber-300 bg-amber-100/80 hover:bg-amber-200 text-amber-950 text-xs sm:text-sm font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Info className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">角色導覽</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
