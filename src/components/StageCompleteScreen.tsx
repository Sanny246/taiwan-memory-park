import React, { useEffect } from 'react';
import { CharacterTrio } from './Characters';
import { GentleCelebrationFX, GentleStageFireworks } from './CelebrationEffects';
import { STAGES } from '../data/questions';
import { StageScore, GameSettings } from '../types';
import { Star, Sparkles, ArrowRight, Volume2, Bell, BellOff, Sparkle } from 'lucide-react';
import { playStageFanfare, speakText } from '../utils/audio';

interface StageCompleteScreenProps {
  completedStageId: number;
  stageScore: StageScore;
  totalWisdomStars: number;
  totalLearningStars: number;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onProceedToNextStage: () => void;
}

export const StageCompleteScreen: React.FC<StageCompleteScreenProps> = ({
  completedStageId,
  stageScore,
  totalWisdomStars,
  totalLearningStars,
  settings,
  onUpdateSettings,
  onProceedToNextStage,
}) => {
  const currentStageInfo = STAGES.find(s => s.id === completedStageId) || STAGES[0];
  const nextStageInfo = STAGES.find(s => s.id === completedStageId + 1);

  useEffect(() => {
    // Play cheerful gentle fanfare
    playStageFanfare(settings.soundEnabled);

    // Read aloud progress announcement
    const tts = `太棒了！你又進階了！你已經完成5題，準備前往下一關！在本關共獲得 ${stageScore.wisdomStars} 顆智慧星，以及 ${stageScore.learningStars} 顆學習星！請按前往下一關按鈕繼續！`;
    speakText(tts, settings.speechEnabled);
  }, [completedStageId, stageScore, settings.soundEnabled, settings.speechEnabled]);

  const handleReadAgain = () => {
    const tts = `太棒了！你又進階了！你已經完成5題，準備前往下一關！在本關共獲得 ${stageScore.wisdomStars} 顆智慧星，以及 ${stageScore.learningStars} 顆學習星！`;
    speakText(tts, settings.speechEnabled);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 relative">
      {/* Gentle celebratory fireworks and ribbons */}
      <GentleStageFireworks enabled={settings.animationsEnabled} />
      <GentleCelebrationFX enabled={settings.animationsEnabled} type="ribbons" count={30} />

      {/* Main Celebration Card */}
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50/50 border-4 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-center">
        {/* Top Controls: Close Animation & Audio Toggle */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            id="btn-stage-toggle-anim"
            onClick={() => onUpdateSettings({ animationsEnabled: !settings.animationsEnabled })}
            className={`px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              settings.animationsEnabled
                ? 'bg-amber-100 border-amber-300 text-amber-900'
                : 'bg-slate-100 border-slate-300 text-slate-500'
            }`}
          >
            <Sparkle className="w-4 h-4" />
            <span>{settings.animationsEnabled ? '動畫：開啟中' : '動畫：已關閉'}</span>
          </button>

          <button
            id="btn-stage-toggle-sound"
            onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
            className={`px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              settings.soundEnabled
                ? 'bg-amber-100 border-amber-300 text-amber-900'
                : 'bg-slate-100 border-slate-300 text-slate-500'
            }`}
          >
            {settings.soundEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
            <span>{settings.soundEnabled ? '音效：開啟中' : '音效：已關閉'}</span>
          </button>
        </div>

        {/* 3 Characters Celebrating Together */}
        <div className="mb-4">
          <CharacterTrio size={120} />
        </div>

        {/* Large Celebration Headline */}
        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 px-5 py-1.5 rounded-full text-base sm:text-xl font-black mb-3">
          <span>🎉</span> 順利通過 {currentStageInfo.title}
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-amber-950 tracking-tight mb-2">
          太棒了！你又進階了！
        </h2>

        <p className="text-xl sm:text-2xl font-black text-slate-700 mb-6">
          你已經完成5題，準備前往下一關！
        </p>

        {/* Voice Readout Button */}
        <div className="flex justify-center mb-6">
          <button
            id="btn-stage-voice-read"
            onClick={handleReadAgain}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-100/80 hover:bg-amber-200 border border-amber-300 text-amber-900 font-bold text-sm sm:text-base cursor-pointer transition-colors"
          >
            <Volume2 className="w-5 h-5 text-amber-700" />
            <span>重聽通關祝賀</span>
          </button>
        </div>

        {/* Stars Breakdown Card for Current Stage */}
        <div className="bg-white/90 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 max-w-xl mx-auto shadow-sm mb-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-4">
            🌟 本關榮譽星章
          </h3>

          <div className="grid grid-cols-2 gap-4 text-center">
            {/* Wisdom Stars in this stage */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-1">
                <Star className="w-8 h-8 fill-amber-400 text-amber-500" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-amber-900">
                {stageScore.wisdomStars}
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-800 mt-1">
                智慧星（精準答對）
              </span>
            </div>

            {/* Learning Stars in this stage */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-1">
                <Sparkles className="w-8 h-8 text-emerald-500 fill-emerald-200" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-emerald-900">
                {stageScore.learningStars}
              </span>
              <span className="text-sm sm:text-base font-bold text-emerald-800 mt-1">
                學習星（積極參與）
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-around text-slate-600 font-bold text-sm sm:text-base">
            <span>累計總智慧星：<strong className="text-amber-700 text-lg">{totalWisdomStars}</strong> 顆</span>
            <span className="text-slate-300">|</span>
            <span>累計總學習星：<strong className="text-emerald-700 text-lg">{totalLearningStars}</strong> 顆</span>
          </div>
        </div>

        {/* Next Stage Teaser & Button */}
        {nextStageInfo && (
          <div className="mb-8 max-w-md mx-auto bg-amber-50/70 border border-amber-200 rounded-2xl p-3 text-slate-700 font-bold text-base sm:text-lg">
            下一關卡：<span className="text-amber-900 font-black">{nextStageInfo.title}</span>
          </div>
        )}

        {/* Big Action Button: Never auto jump, user clicks to continue */}
        <div className="flex justify-center">
          <button
            id="btn-proceed-next-stage"
            onClick={onProceedToNextStage}
            className="w-full sm:w-auto px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-2xl sm:text-3xl rounded-3xl shadow-xl hover:shadow-2xl transform active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-emerald-500"
          >
            <span>前往下一關</span>
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
