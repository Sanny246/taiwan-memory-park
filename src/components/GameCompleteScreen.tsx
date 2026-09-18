import React, { useEffect } from 'react';
import { CharacterTrio } from './Characters';
import { GentleCelebrationFX, GentleStageFireworks } from './CelebrationEffects';
import { GameSettings } from '../types';
import { Star, Sparkles, RotateCcw, Volume2, Award, HeartHandshake } from 'lucide-react';
import { playStageFanfare, speakText } from '../utils/audio';

interface GameCompleteScreenProps {
  totalWisdomStars: number;
  totalLearningStars: number;
  settings: GameSettings;
  onRestartGame: () => void;
}

export const GameCompleteScreen: React.FC<GameCompleteScreenProps> = ({
  totalWisdomStars,
  totalLearningStars,
  settings,
  onRestartGame,
}) => {
  useEffect(() => {
    playStageFanfare(settings.soundEnabled);

    const tts = `恭喜完成臺灣記憶之旅！阿福、小花、小勇三位好朋友向您熱烈道賀！您總共獲得 ${totalWisdomStars} 顆智慧星，以及 ${totalLearningStars} 顆學習星！您的記憶力真好，謝謝您的熱情參與！`;
    speakText(tts, settings.speechEnabled);
  }, [totalWisdomStars, totalLearningStars, settings.soundEnabled, settings.speechEnabled]);

  const handleReadCongratulation = () => {
    const tts = `恭喜完成臺灣記憶之旅！阿福、小花、小勇向您道賀！總共獲得 ${totalWisdomStars} 顆智慧星與 ${totalLearningStars} 顆學習星，您的記憶力與精神太棒了！`;
    speakText(tts, settings.speechEnabled);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative">
      <GentleStageFireworks enabled={settings.animationsEnabled} />
      <GentleCelebrationFX enabled={settings.animationsEnabled} type="ribbons" count={36} />

      <div className="bg-gradient-to-b from-amber-50 via-white to-emerald-50/50 border-4 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
        {/* Trio Congratulating */}
        <div className="mb-4">
          <CharacterTrio size={130} />
        </div>

        {/* Celebration Title */}
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-5 py-2 rounded-full text-base sm:text-xl font-black mb-3">
          <Award className="w-6 h-6 text-amber-600" />
          <span>通關榮譽證書</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-amber-950 tracking-tight mb-3">
          恭喜完成臺灣記憶之旅！
        </h1>

        <p className="text-xl sm:text-2xl text-slate-700 font-bold max-w-xl mx-auto leading-relaxed mb-6">
          阿福、小花與小勇感謝您的溫暖同行，您經歷了生活、地名、民俗與傳奇四大關卡，太厲害了！
        </p>

        {/* Voice Readout Button */}
        <div className="flex justify-center mb-8">
          <button
            id="btn-complete-voice-read"
            onClick={handleReadCongratulation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-950 font-bold text-base sm:text-lg cursor-pointer transition-colors shadow-xs"
          >
            <Volume2 className="w-5 h-5 text-amber-700" />
            <span>聆聽伙伴道賀詞</span>
          </button>
        </div>

        {/* Total Stars Summary Certificate */}
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 border-3 border-amber-300 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-md mb-8">
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-black text-slate-800 mb-4">
            <HeartHandshake className="w-7 h-7 text-rose-500" />
            <span>本次旅程獲得榮譽總星數</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Wisdom Stars Total */}
            <div className="bg-white border-2 border-amber-300 rounded-2xl p-5 flex flex-col items-center shadow-xs">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                <Star className="w-9 h-9 fill-amber-400 text-amber-500" />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-amber-900">
                {totalWisdomStars}
              </span>
              <span className="text-base sm:text-lg font-bold text-amber-800 mt-1">
                顆智慧星（答對答成）
              </span>
            </div>

            {/* Learning Stars Total */}
            <div className="bg-white border-2 border-emerald-300 rounded-2xl p-5 flex flex-col items-center shadow-xs">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                <Sparkles className="w-9 h-9 text-emerald-500 fill-emerald-200" />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-emerald-900">
                {totalLearningStars}
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-800 mt-1">
                顆學習星（熱心參與）
              </span>
            </div>
          </div>

          <p className="mt-5 text-base sm:text-lg font-bold text-slate-700 bg-amber-100/60 rounded-xl py-2 px-4">
            🌟 總計 20 題全數完成！每一步都是珍貴的臺灣文化記憶！
          </p>
        </div>

        {/* Action Button: Play Again */}
        <div className="flex justify-center">
          <button
            id="btn-play-again"
            onClick={onRestartGame}
            className="w-full sm:w-auto px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-2xl sm:text-3xl rounded-3xl shadow-xl hover:shadow-2xl transform active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-emerald-500"
          >
            <RotateCcw className="w-7 h-7" />
            <span>再次體驗記憶之旅</span>
          </button>
        </div>
      </div>
    </div>
  );
};
