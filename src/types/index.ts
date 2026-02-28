export interface Question {
  id: string | number;
  chapter: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationVN: string;
}

export interface CourseConfig {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  examDuration: number;
  passingScore: number;
  chapters: {
    [key: number]: string;
  };
}

export type QuizMode = 'idle' | 'practice' | 'exam';

export interface QuizState {
  mode: QuizMode;
  courseId: string;
  currentIdx: number;
  answers: Record<number, number>;
  isSubmitted: boolean;
  questions: Question[];
  selectedChapter?: number;
}
