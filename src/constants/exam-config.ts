export const ExamType = {
  ISTQB_FOUNDATION: "istqb",
  PSM1: "psm1",
} as const;

export type ExamTypeKey = (typeof ExamType)[keyof typeof ExamType];

export const QuizMode = {
  IDLE: "idle",
  PRACTICE: "practice",
  EXAM: "exam",
  FLASHCARD: "flashcard",
} as const;

export type QuizModeKey = (typeof QuizMode)[keyof typeof QuizMode];

export interface ExamConfig {
  id: string;
  name: string;
  questionsCount: number;
  duration: number;
  passingScore: number;
}

export const EXAM_CONFIGS: Record<string, ExamConfig> = {
  [ExamType.ISTQB_FOUNDATION]: {
    id: "istqb",
    name: "ISTQB Foundation",
    questionsCount: 40,
    duration: 5400,
    passingScore: 65,
  },
  [ExamType.PSM1]: {
    id: "psm1",
    name: "Professional Scrum Master I",
    questionsCount: 80,
    duration: 3600,
    passingScore: 80,
  },
};

export const getExamConfig = (examType: string): ExamConfig | null => {
  return EXAM_CONFIGS[examType] || null;
};

export const getMinCorrectAnswers = (examType: string): number => {
  const config = getExamConfig(examType);
  if (!config) return 0;
  return Math.ceil((config.passingScore / 100) * config.questionsCount);
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
