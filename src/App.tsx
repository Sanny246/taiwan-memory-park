import { useState, useEffect, useCallback } from 'react';
import { ScreenType, GameSettings, StageScore } from './types';
import { HeaderBar } from './components/HeaderBar';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { StageCompleteScreen } from './components/StageCompleteScreen';
import { GameCompleteScreen } from './components/GameCompleteScreen';
import { CharacterIntroModal } from './components/CharacterIntroModal';
import { getStageQuestions, STAGES } from './data/questions';

export default function App() {
  const [screen, setScreen] = useState<ScreenType>('home');
  const [currentStageId, setCurrentStageId] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentStageQuestions, setCurrentStageQuestions] = useState(() => getStageQuestions(1));

  // Cumulative star counts
  const [totalWisdomStars, setTotalWisdomStars] = useState<number>(0);
  const [totalLearningStars, setTotalLearningStars] = useState<number>(0);

  // Per-stage scores
  const [stageScores, setStageScores] = useState<Record<number, StageScore>>({
    1: { wisdomStars: 0, learningStars: 0 },
    2: { wisdomStars: 0, learningStars: 0 },
    3: { wisdomStars: 0, learningStars: 0 },
    4: { wisdomStars: 0, learningStars: 0 },
  });

  // Senior accessibility settings
  const [settings, setSettings] = useState<GameSettings>({
    speechEnabled: true,
    soundEnabled: true,
    animationsEnabled: true,
    fontSize: 'large', // Default to senior-friendly large text
  });

  const [isIntroModalOpen, setIsIntroModalOpen] = useState<boolean>(false);
  const [isInitialTutorial, setIsInitialTutorial] = useState<boolean>(false);

  // Update accessibility settings
  const handleUpdateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Start a fresh game from stage 1
  const startNewGame = useCallback(() => {
    setCurrentStageId(1);
    setCurrentQuestionIndex(0);
    setCurrentStageQuestions(getStageQuestions(1));
    setTotalWisdomStars(0);
    setTotalLearningStars(0);
    setStageScores({
      1: { wisdomStars: 0, learningStars: 0 },
      2: { wisdomStars: 0, learningStars: 0 },
      3: { wisdomStars: 0, learningStars: 0 },
      4: { wisdomStars: 0, learningStars: 0 },
    });
    setScreen('quiz');
  }, []);

  // Handle start button on Home screen
  const handleStartFromHome = () => {
    startNewGame();
  };

  // Open Intro from header or button
  const handleOpenIntro = (isTutorial = false) => {
    setIsInitialTutorial(isTutorial);
    setIsIntroModalOpen(true);
  };

  // When moving to the next question
  const handleNextQuestion = (isCorrect: boolean) => {
    // Record scores
    if (isCorrect) {
      setTotalWisdomStars(prev => prev + 1);
      setStageScores(prev => ({
        ...prev,
        [currentStageId]: {
          ...prev[currentStageId],
          wisdomStars: (prev[currentStageId]?.wisdomStars || 0) + 1,
        },
      }));
    } else {
      setTotalLearningStars(prev => prev + 1);
      setStageScores(prev => ({
        ...prev,
        [currentStageId]: {
          ...prev[currentStageId],
          learningStars: (prev[currentStageId]?.learningStars || 0) + 1,
        },
      }));
    }

    // Check if 5 questions in current stage are completed
    if (currentQuestionIndex < 4) {
      // Proceed to next question in this stage
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Stage finished (5 questions done)
      if (currentStageId < 4) {
        setScreen('stage_complete');
      } else {
        // Stage 4 finished -> All 20 questions done!
        setScreen('game_complete');
      }
    }
  };

  // Proceed to next stage after celebration
  const handleProceedToNextStage = () => {
    const nextStage = currentStageId + 1;
    setCurrentStageId(nextStage);
    setCurrentQuestionIndex(0);
    setCurrentStageQuestions(getStageQuestions(nextStage));
    setScreen('quiz');
  };

  // Return to home screen
  const handleGoHome = () => {
    setScreen('home');
  };

  const currentStageInfo = STAGES.find(s => s.id === currentStageId);
  const currentQuestion = currentStageQuestions[currentQuestionIndex];

  // Scroll to top when changing screens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen, currentQuestionIndex]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 flex flex-col selection:bg-amber-200">
      {/* Top Accessible Header */}
      <HeaderBar
        currentStageId={screen === 'quiz' ? currentStageId : undefined}
        totalStages={4}
        stageName={screen === 'quiz' ? currentStageInfo?.title : undefined}
        wisdomStars={totalWisdomStars}
        learningStars={totalLearningStars}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onOpenIntro={() => handleOpenIntro(false)}
        onGoHome={handleGoHome}
        showHomeButton={screen !== 'home'}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {screen === 'home' && (
          <HomeScreen
            onStartGame={handleStartFromHome}
            onOpenIntro={() => handleOpenIntro(false)}
            speechEnabled={settings.speechEnabled}
            totalWisdomStars={totalWisdomStars}
            totalLearningStars={totalLearningStars}
          />
        )}

        {screen === 'quiz' && currentQuestion && (
          <QuizScreen
            question={currentQuestion}
            questionIndex={currentQuestionIndex}
            totalInStage={5}
            stageId={currentStageId}
            stageName={currentStageInfo?.title.replace(`第${currentStageId}關：`, '') || ''}
            settings={settings}
            onNextQuestion={handleNextQuestion}
          />
        )}

        {screen === 'stage_complete' && (
          <StageCompleteScreen
            completedStageId={currentStageId}
            stageScore={stageScores[currentStageId] || { wisdomStars: 0, learningStars: 0 }}
            totalWisdomStars={totalWisdomStars}
            totalLearningStars={totalLearningStars}
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onProceedToNextStage={handleProceedToNextStage}
          />
        )}

        {screen === 'game_complete' && (
          <GameCompleteScreen
            totalWisdomStars={totalWisdomStars}
            totalLearningStars={totalLearningStars}
            settings={settings}
            onRestartGame={handleGoHome}
          />
        )}
      </main>

      {/* Character Introduction and Rules Modal */}
      <CharacterIntroModal
        isOpen={isIntroModalOpen}
        onClose={() => setIsIntroModalOpen(false)}
        speechEnabled={settings.speechEnabled}
        onStartQuiz={startNewGame}
        isInitialTutorial={isInitialTutorial}
      />

      {/* Senior-Friendly Warm Footer */}
      <footer className="bg-amber-100/50 border-t border-amber-200/80 py-4 px-4 text-center text-xs sm:text-sm text-amber-900 font-bold mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span>🐻 阿福</span>
            <span>🌸 小花</span>
            <span>⭐ 小勇</span>
            <span className="text-slate-500 font-normal">・ 臺灣記憶之旅 原創陪伴角色</span>
          </div>
          <p className="text-slate-600 font-medium">
            長者友善設計・大字體・零挫折感・原創臺灣民俗手繪插畫
          </p>
        </div>
      </footer>
    </div>
  );
}
