import React, { useState, useEffect } from 'react';
import { Question, GameSettings } from '../types';
import { OptionIllustration } from './Illustrations';
import { XiaoyongCharacter, XiaohuaCharacter } from './Characters';
import { GentleCelebrationFX } from './CelebrationEffects';
import { Volume2, Star, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import {
  playCorrectChime,
  playEncourageChime,
  speakText,
  stopSpeech,
} from '../utils/audio';
import { ENCOURAGEMENT_MESSAGES } from '../data/questions';

interface QuizScreenProps {
  question: Question;
  questionIndex: number; // 0 to 4 in stage
  totalInStage: number; // 5
  stageId: number;
  stageName: string;
  settings: GameSettings;
  onNextQuestion: (isCorrect: boolean) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionIndex,
  totalInStage = 5,
  stageId,
  stageName,
  settings,
  onNextQuestion,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [encouragementText, setEncouragementText] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  // When question changes, reset state and read question aloud if speechEnabled
  useEffect(() => {
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowFeedback(false);
    setEncouragementText('');
    stopSpeech();

    // Friendly prompt reading for seniors
    const readPrompt = `第 ${questionIndex + 1} 題：${question.question}`;
    speakText(readPrompt, settings.speechEnabled);
  }, [question, questionIndex, settings.speechEnabled]);

  const handleSelectOption = (optionId: string, optionText: string) => {
    if (isAnswered) return; // Prevent double taps

    const correct = optionText === question.correctAnswer;
    setSelectedOptionId(optionId);
    setIsAnswered(true);
    setIsCorrect(correct);

    // Fast visual feedback within 0.5s: immediate trigger!
    setShowFeedback(true);

    if (correct) {
      // Pick random encouraging message from the 5 specified
      const randomMsg =
        ENCOURAGEMENT_MESSAGES[
          Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length)
        ];
      setEncouragementText(randomMsg);

      // Play harp glissando
      playCorrectChime(settings.soundEnabled);

      // Auto-read encouraging message + explanation
      const tts = `${randomMsg} 正確答案是：${question.correctAnswer}。${question.explanation}`;
      speakText(tts, settings.speechEnabled);
    } else {
      // Gentle chime, strictly NO harsh failure sound
      playEncourageChime(settings.soundEnabled);

      // Auto-read correct answer and warm comfort
      const tts = `沒關係，我們一起看看答案！正確答案是：${question.correctAnswer}。${question.explanation}。你已經記住了，下一題一定會更熟悉！`;
      speakText(tts, settings.speechEnabled);
    }
  };

  const handleReReadQuestion = () => {
    const prompt = `第 ${questionIndex + 1} 題：${question.question}`;
    speakText(prompt, settings.speechEnabled);
  };

  const handleReReadExplanation = () => {
    if (isCorrect) {
      speakText(
        `${encouragementText} 正確答案是：${question.correctAnswer}。${question.explanation}`,
        settings.speechEnabled
      );
    } else {
      speakText(
        `正確答案是：${question.correctAnswer}。${question.explanation}。你已經記住了，下一題一定會更熟悉！`,
        settings.speechEnabled
      );
    }
  };

  // Font size classes calculation
  const questionTextClass = {
    normal: 'text-2xl sm:text-3xl',
    large: 'text-3xl sm:text-4xl',
    extra: 'text-4xl sm:text-5xl',
  }[settings.fontSize];

  const optionTextClass = {
    normal: 'text-xl sm:text-2xl',
    large: 'text-2xl sm:text-3xl',
    extra: 'text-3xl sm:text-4xl',
  }[settings.fontSize];

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Gentle Floating celebration stars when correct */}
      {showFeedback && isCorrect && (
        <GentleCelebrationFX enabled={settings.animationsEnabled} type="stars" count={22} />
      )}

      {/* Stage & Progress Indicator */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-amber-200/80 shadow-xs mb-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-sm sm:text-base font-bold bg-amber-100 text-amber-900 border border-amber-300">
              第 {stageId} 關：{stageName}
            </span>
          </div>

          <div className="text-right">
            <span className="text-base sm:text-lg font-black text-slate-700">
              第 <span className="text-amber-600 text-xl sm:text-2xl">{questionIndex + 1}</span> / {totalInStage} 題
            </span>
          </div>
        </div>

        {/* 5-Step Visual Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden flex gap-1 p-0.5 border border-slate-200">
          {Array.from({ length: totalInStage }).map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 rounded-full transition-all duration-300 ${
                idx < questionIndex
                  ? 'bg-emerald-500'
                  : idx === questionIndex
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border-3 border-amber-300/80 p-5 sm:p-8 shadow-md relative mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-xl font-bold text-sm sm:text-base w-fit">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            題目請看這裡：
          </span>

          <button
            id="btn-reread-question"
            onClick={handleReReadQuestion}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm sm:text-base font-bold w-fit cursor-pointer transition-colors"
            title="朗讀題目"
          >
            <Volume2 className="w-4 h-4 text-emerald-600" />
            <span>重聽題目</span>
          </button>
        </div>

        {/* Question Text */}
        <h2 className={`${questionTextClass} font-black text-slate-900 tracking-tight leading-snug`}>
          {question.question}
        </h2>
      </div>

      {/* 3 Large Options Grid with Illustrations and High Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionId === option.id;
          const isThisOptionCorrect = option.text === question.correctAnswer;

          // Feedback style classes
          let buttonStyle =
            'bg-white border-3 border-slate-300 hover:border-amber-400 text-slate-800 shadow-sm hover:shadow-md hover:bg-amber-50/40';

          if (showFeedback) {
            if (isThisOptionCorrect) {
              // Both for correct answer click and wrong answer feedback:
              // Soft green border + gold glow (正確答案出現綠色及金色柔光 / 柔和綠色外框標示正確答案)
              buttonStyle =
                'bg-emerald-50/90 border-4 border-emerald-500 ring-4 ring-amber-300/80 text-emerald-950 shadow-xl';
            } else if (isSelected && !isThisOptionCorrect) {
              // Selected wrong answer: Neutral soft highlight, NO red X, NO harsh red!
              buttonStyle =
                'bg-amber-50/60 border-3 border-amber-300 text-slate-700 opacity-80';
            } else {
              buttonStyle = 'bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={option.id}
              id={`option-button-${idx}`}
              onClick={() => handleSelectOption(option.id, option.text)}
              disabled={isAnswered}
              className={`p-4 sm:p-6 rounded-3xl transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-h-[160px] sm:min-h-[190px] relative transform active:scale-98 ${buttonStyle}`}
            >
              {/* Option Number Tag */}
              <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-slate-100 text-slate-700 border border-slate-300 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>

              {/* Illustration */}
              <div className="my-2 transform transition-transform hover:scale-105">
                <OptionIllustration name={option.illustrationKey} size={76} />
              </div>

              {/* Text */}
              <span className={`${optionTextClass} font-black mt-1 leading-tight tracking-tight`}>
                {option.text}
              </span>

              {/* Soft glow label for correct answer */}
              {showFeedback && isThisOptionCorrect && (
                <span className="mt-2 text-sm sm:text-base font-bold text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full flex items-center gap-1 border border-emerald-300">
                  <span>✨</span> 正確答案
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Visual Feedback (< 0.5s) Container */}
      {showFeedback && (
        <div
          id="quiz-feedback-panel"
          className={`rounded-3xl border-3 p-5 sm:p-8 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
            isCorrect
              ? 'bg-gradient-to-r from-emerald-50 via-amber-50/50 to-emerald-50 border-emerald-400 ring-4 ring-amber-300/50'
              : 'bg-gradient-to-r from-rose-50 via-amber-50/40 to-rose-50 border-rose-300'
          }`}
        >
          {isCorrect ? (
            /* ===== 答對回饋區 ===== */
            <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8">
              {/* Xiao-Yong slides in from side with star */}
              <div className="flex-shrink-0 animate-in slide-in-from-left-6 duration-300">
                <XiaoyongCharacter
                  size={140}
                  pose="celebrate"
                  showSpeechBubble={true}
                  bubbleText="太棒了！"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                {/* Large Encouragement Subtitle */}
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1 rounded-full text-base sm:text-lg font-bold mb-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <span>獲得 1 顆智慧星！</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-emerald-800 tracking-tight mb-3">
                  {encouragementText}
                </h3>

                {/* Answer Explanation */}
                <div className="bg-white/90 border border-emerald-200 rounded-2xl p-4 mb-4">
                  <p className="text-lg sm:text-xl font-bold text-slate-800">
                    <span className="text-emerald-700">【正確解答】</span> {question.correctAnswer}
                  </p>
                  <p className="text-base sm:text-lg text-slate-700 mt-1">
                    {question.explanation}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Big Next Question Button */}
                  <button
                    id="btn-correct-next-question"
                    onClick={() => onNextQuestion(true)}
                    className="flex-1 sm:flex-none px-8 sm:px-12 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-emerald-500"
                  >
                    <span>下一題</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <button
                    id="btn-listen-again"
                    onClick={handleReReadExplanation}
                    className="px-4 py-3 bg-white hover:bg-slate-100 border border-emerald-300 text-emerald-900 font-bold text-sm sm:text-base rounded-2xl cursor-pointer flex items-center gap-2"
                  >
                    <Volume2 className="w-5 h-5 text-emerald-600" />
                    <span>重聽說明</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ===== 答錯回饋區（零懲罰、小花溫馨陪伴、獲得學習星） ===== */
            <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8">
              {/* Xiao-Hua appears beside question to accompany */}
              <div className="flex-shrink-0 animate-in fade-in duration-300">
                <XiaohuaCharacter
                  size={140}
                  showSpeechBubble={true}
                  bubbleText="我們一起看看答案！"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                {/* Participation star encouragement */}
                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-900 border border-rose-300 px-4 py-1 rounded-full text-base sm:text-lg font-bold mb-2">
                  <Sparkles className="w-5 h-5 fill-emerald-200 text-emerald-600" />
                  <span>獲得 1 顆學習星！</span>
                </div>

                {/* Step 2: 沒關係，我們一起看看答案！ */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-2">
                  沒關係，我們一起看看答案！
                </h3>

                {/* Step 3 & 4: 正確答案與簡短說明 */}
                <div className="bg-white/95 border-2 border-emerald-400 rounded-2xl p-4 mb-3">
                  <p className="text-lg sm:text-xl font-bold text-slate-900">
                    <span className="text-emerald-700">【正確答案是】</span> {question.correctAnswer}
                  </p>
                  <p className="text-base sm:text-lg text-slate-700 mt-1">
                    {question.explanation}
                  </p>
                </div>

                {/* Step 6: 你已經記住了，下一題一定會更熟悉！ */}
                <p className="text-base sm:text-lg font-bold text-rose-800 bg-rose-100/70 border border-rose-200 px-4 py-2 rounded-xl mb-4">
                  🌱 你已經記住了，下一題一定會更熟悉！
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Step 7: 大型「我知道了，下一題」按鈕 */}
                  <button
                    id="btn-wrong-next-question"
                    onClick={() => onNextQuestion(false)}
                    className="flex-1 sm:flex-none px-8 sm:px-12 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-amber-500"
                  >
                    <span>我知道了，下一題</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <button
                    id="btn-listen-again-wrong"
                    onClick={handleReReadExplanation}
                    className="px-4 py-3 bg-white hover:bg-slate-100 border border-rose-300 text-rose-900 font-bold text-sm sm:text-base rounded-2xl cursor-pointer flex items-center gap-2"
                  >
                    <Volume2 className="w-5 h-5 text-rose-600" />
                    <span>重聽正確答案</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
