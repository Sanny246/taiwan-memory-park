import React, { useEffect } from 'react';
import { AfuCharacter } from './Characters';
import { STAGES } from '../data/questions';
import { Play, Volume2, Sparkles, Star, BookOpen, ShieldCheck } from 'lucide-react';
import { speakText } from '../utils/audio';

interface HomeScreenProps {
  onStartGame: () => void;
  onOpenIntro: () => void;
  speechEnabled: boolean;
  totalWisdomStars: number;
  totalLearningStars: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartGame,
  onOpenIntro,
  speechEnabled,
  totalWisdomStars,
  totalLearningStars,
}) => {
  useEffect(() => {
    // Speak friendly welcome on mount
    const welcomeText = '歡迎來到臺灣記憶之旅！我是小導遊阿福，不用急，我們慢慢來！請點擊綠色的開始挑戰按鈕！';
    speakText(welcomeText, speechEnabled);
  }, [speechEnabled]);

  const handleSpeechWelcome = () => {
    speakText(
      '歡迎來到臺灣記憶之旅！我是小導遊阿福。不用急，我們慢慢來！每一題都有大大的圖片與文字，答對答錯都有星星，讓我們輕鬆出發吧！',
      speechEnabled
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-b from-amber-50 to-orange-50/40 border-4 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-center mb-8">
        {/* Background decorative soft shapes */}
        <div className="absolute -top-12 -left-12 w-44 h-44 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-200/30 rounded-full blur-2xl pointer-events-none" />

        {/* Character: Afu waving warmly */}
        <div className="flex flex-col items-center justify-center mb-3">
          <AfuCharacter
            size={160}
            pose="wave"
            showSpeechBubble={true}
            bubbleText="不用急，我們慢慢來！"
          />
        </div>

        {/* App Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-3">
          臺灣記憶之旅
        </h1>
        <p className="text-lg sm:text-2xl text-amber-950 font-bold max-w-2xl mx-auto leading-relaxed">
          長者友善・輕鬆動動腦・重溫寶島溫暖記憶
        </p>

        {/* Voice readout button */}
        <div className="mt-4 flex justify-center">
          <button
            id="btn-home-welcome-voice"
            onClick={handleSpeechWelcome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-amber-100 text-amber-950 border-2 border-amber-300 font-bold text-base sm:text-lg shadow-sm transition-all cursor-pointer"
          >
            <Volume2 className="w-5 h-5 text-amber-700" />
            <span>聽阿福的歡迎語</span>
          </button>
        </div>

        {/* Big Start Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="btn-home-start-challenge"
            onClick={onStartGame}
            className="w-full sm:w-auto px-10 sm:px-14 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-2xl sm:text-3xl rounded-3xl shadow-xl hover:shadow-2xl transform active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-emerald-500"
          >
            <Play className="w-8 h-8 fill-current" />
            <span>開始挑戰</span>
          </button>

          <button
            id="btn-home-view-intro"
            onClick={onOpenIntro}
            className="w-full sm:w-auto px-8 py-5 bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xl sm:text-2xl rounded-3xl border-2 border-amber-300 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-6 h-6 text-amber-800" />
            <span>認識角色與玩法</span>
          </button>
        </div>

        {/* Current Total Stars Tally */}
        {(totalWisdomStars > 0 || totalLearningStars > 0) && (
          <div className="mt-6 inline-flex items-center gap-4 bg-white/90 border border-amber-300 px-5 py-2 rounded-2xl shadow-xs">
            <span className="font-bold text-slate-700 text-sm sm:text-base">目前累積：</span>
            <div className="flex items-center gap-1.5 text-amber-700 font-black text-base sm:text-lg">
              <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              <span>{totalWisdomStars} 顆智慧星</span>
            </div>
            <div className="w-px h-4 bg-amber-300" />
            <div className="flex items-center gap-1.5 text-emerald-700 font-black text-base sm:text-lg">
              <Sparkles className="w-5 h-5 fill-emerald-200 text-emerald-500" />
              <span>{totalLearningStars} 顆學習星</span>
            </div>
          </div>
        )}
      </div>

      {/* 4 Stages Preview Overview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span>🗺️</span> 四大關卡規劃（每關固定5題）
          </h2>
          <span className="text-sm sm:text-base text-slate-500 font-medium">
            共 20 題隨機題庫
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STAGES.map(stage => (
            <div
              key={stage.id}
              className="bg-white border-2 border-slate-200 hover:border-amber-400 rounded-2xl p-5 shadow-xs transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-xl font-black text-amber-900 flex-shrink-0">
                {stage.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 truncate">
                    {stage.title.replace(`第${stage.id}關：`, '')}
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                    5 題
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Senior-friendly Guarantee Badges */}
      <div className="bg-emerald-50/70 border-2 border-emerald-200 rounded-2xl p-5 flex flex-wrap items-center justify-around gap-4 text-center">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>全正面鼓勵・零挫折感</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
          <span className="text-lg">🔍</span>
          <span>超大字體與專屬插圖</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
          <span className="text-lg">🔊</span>
          <span>清晰語音朗讀輔助</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
          <span className="text-lg">⭐</span>
          <span>完成 5 題即自然晉級</span>
        </div>
      </div>
    </div>
  );
};
