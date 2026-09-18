import React from 'react';
import { AfuCharacter, XiaohuaCharacter, XiaoyongCharacter } from './Characters';
import { X, CheckCircle2, Star, Sparkles, Volume2 } from 'lucide-react';
import { speakText } from '../utils/audio';

interface IntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechEnabled: boolean;
  onStartQuiz?: () => void;
  isInitialTutorial?: boolean;
}

export const CharacterIntroModal: React.FC<IntroModalProps> = ({
  isOpen,
  onClose,
  speechEnabled,
  onStartQuiz,
  isInitialTutorial = false,
}) => {
  if (!isOpen) return null;

  const handleReadIntro = () => {
    speakText(
      '歡迎來到臺灣記憶之旅！我是小導遊阿福，不用急，我們慢慢來！還有文化好友小花，與元氣郵差小勇。每關有五題，答對答錯都有星星獎勵，讓我們一起輕鬆重溫寶島回憶！',
      speechEnabled
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full p-5 sm:p-8 shadow-2xl border-4 border-amber-300 relative my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intro-title"
      >
        {/* Close Button */}
        <button
          id="btn-close-intro-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          aria-label="關閉說明視窗"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-base sm:text-lg font-black mb-2 border border-amber-300">
            <span>✨</span> 貼心陪伴伙伴介紹
          </div>
          <h2 id="intro-title" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            認識陪伴您的三位好朋友
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-1 font-medium">
            專為長者貼心設計，全程放鬆遊玩，無時間限制與倒數壓力！
          </p>

          <button
            id="btn-speech-intro"
            onClick={handleReadIntro}
            className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-sm sm:text-base cursor-pointer transition-colors"
          >
            <Volume2 className="w-5 h-5 text-emerald-600" />
            <span>朗讀導覽介紹</span>
          </button>
        </div>

        {/* 3 Original Characters Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* 1. 阿福 (A-Fu) */}
          <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-4 flex flex-col items-center text-center">
            <AfuCharacter size={110} pose="wave" />
            <h3 className="text-lg sm:text-xl font-black text-amber-950 mt-2">
              阿福（黑熊小導遊）
            </h3>
            <p className="text-sm sm:text-base text-slate-700 font-bold mt-1">
              個性溫暖有耐心
            </p>
            <div className="bg-white/80 border border-amber-200 rounded-xl px-3 py-2 mt-2 w-full text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-amber-800">負責：</span>說明規則、溫柔鼓勵
            </div>
            <p className="mt-2 text-xs sm:text-sm font-black text-amber-900 bg-amber-200/60 px-3 py-1 rounded-full">
              「不用急，我們慢慢來！」
            </p>
          </div>

          {/* 2. 小花 (Xiao-Hua) */}
          <div className="bg-rose-50/70 border-2 border-rose-200 rounded-2xl p-4 flex flex-col items-center text-center">
            <XiaohuaCharacter size={110} />
            <h3 className="text-lg sm:text-xl font-black text-rose-950 mt-2">
              小花（文化好朋友）
            </h3>
            <p className="text-sm sm:text-base text-slate-700 font-bold mt-1">
              身穿臺灣傳統花布衣裳
            </p>
            <div className="bg-white/80 border border-rose-200 rounded-xl px-3 py-2 mt-2 w-full text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-rose-800">負責：</span>解說典故、陪伴查看答案
            </div>
            <p className="mt-2 text-xs sm:text-sm font-black text-rose-900 bg-rose-200/60 px-3 py-1 rounded-full">
              「原來是這樣，我們又學會了！」
            </p>
          </div>

          {/* 3. 小勇 (Xiao-Yong) */}
          <div className="bg-emerald-50/70 border-2 border-emerald-200 rounded-2xl p-4 flex flex-col items-center text-center">
            <XiaoyongCharacter size={110} pose="celebrate" />
            <h3 className="text-lg sm:text-xl font-black text-emerald-950 mt-2">
              小勇（元氣郵差）
            </h3>
            <p className="text-sm sm:text-base text-slate-700 font-bold mt-1">
              戴著復古郵差帽與小背包
            </p>
            <div className="bg-white/80 border border-emerald-200 rounded-xl px-3 py-2 mt-2 w-full text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-emerald-800">負責：</span>過關通知、頒發星星獎勵
            </div>
            <p className="mt-2 text-xs sm:text-sm font-black text-emerald-900 bg-emerald-200/60 px-3 py-1 rounded-full">
              「太棒了！我們要前往下一關了！」
            </p>
          </div>
        </div>

        {/* Senior-Friendly Gameplay Rules Highlights */}
        <div className="bg-amber-100/50 border border-amber-200 rounded-2xl p-4 mb-6">
          <h4 className="text-base sm:text-lg font-black text-amber-950 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-700" />
            遊戲貼心原則：
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-slate-700 font-medium">
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400 mt-1 flex-shrink-0" />
              <span>
                <strong>每關固定 5 題：</strong>完成五題即可晉級，不以答對數限制。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
              <span>
                <strong>答對獲智慧星：</strong>答對獲得金光閃閃的智慧星！
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
              <span>
                <strong>答錯獲學習星：</strong>完全沒有懲罰或紅叉，陪伴您學習。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
              <span>
                <strong>大字體與語音朗讀：</strong>看不太清楚時可隨時聽語音！
              </span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          {isInitialTutorial && onStartQuiz ? (
            <button
              id="btn-modal-start-quiz"
              onClick={() => {
                onClose();
                onStartQuiz();
              }}
              className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>開始臺灣記憶之旅</span>
              <span>➔</span>
            </button>
          ) : (
            <button
              id="btn-modal-got-it"
              onClick={onClose}
              className="w-full sm:w-auto px-10 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-black text-lg sm:text-xl rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>我知道了，繼續遊玩</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
