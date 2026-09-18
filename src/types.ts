export type CharacterId = 'afu' | 'xiaohua' | 'xiaoyong';

export interface QuestionOption {
  id: string;
  text: string;
  illustrationKey: string;
}

export interface Question {
  id: number;
  stageId: number;
  stageName: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
}

export interface StageInfo {
  id: number;
  title: string;
  subtitle: string;
  themeColor: string;
  badgeBg: string;
  description: string;
}

export type ScreenType = 'home' | 'intro' | 'quiz' | 'stage_complete' | 'game_complete';

export type FontSizeLevel = 'normal' | 'large' | 'extra';

export interface GameSettings {
  speechEnabled: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  fontSize: FontSizeLevel;
}

export interface StageScore {
  wisdomStars: number;
  learningStars: number;
}
