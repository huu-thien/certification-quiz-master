export interface Question {
  id: string | number;
  chapter: number;
  question: string;
  options: string[];
  correctAnswer?: number; // single-select answer
  correctAnswers?: number[]; // multi-select answers
  isMultiSelect?: boolean;
  explanation?: string;
  explanationVN?: string;
}

export interface CourseConfig {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  examQuestionsCount?: number;
  examDuration: number;
  passingScore: number;
  chapters: {
    [key: number]: string;
  };
}

export type QuizMode = "idle" | "practice" | "exam" | "flashcard";

export interface QuizState {
  mode: QuizMode;
  courseId: string;
  currentIdx: number;
  answers: Record<number, number | number[]>; // single or multiple answers
  isSubmitted: boolean;
  questions: Question[];
  selectedChapter?: number;
}

export interface Flashcard {
  id: string;
  chapter: number;
  term: string;
  definition: string;
}

export interface FlashcardState {
  mode: "idle" | "reviewing";
  courseId: string;
  currentIdx: number; // index into the full flashcards array
  isFlipped: boolean;
  answers: Record<string, "know" | "unknown">; // keyed by flashcard.id
  flashcards: Flashcard[]; // full list for the course/chapter
  selectedChapter?: number;
}
