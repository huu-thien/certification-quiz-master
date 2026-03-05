import type { Question } from "../types";

// Re-export courses and configs
export {
  ISTQB_CHAPTERS,
  ISTQB_QUESTIONS,
  istqbConfig,
  PSM1_CHAPTERS,
  PSM1_QUESTIONS,
  psm1Config,
  COURSES,
  getCourseConfig,
  getAllCourses,
  getQuestionsByCourse,
  getQuestionsByChapterAndCourse,
  getAvailableChaptersByCourse,
  getSubsectionsByChapterAndCourse,
  getRandomExamQuestions,
} from "./courses";

// Re-export flashcards + PSM1 section labels
export {
  istqbFlashcards,
  psm1Flashcards,
  PSM1_FLASHCARD_SECTIONS,
} from "./courses";

// Legacy exports for backward compatibility
export const CHAPTER_TITLES: Record<number, string> = {
  1: "Fundamentals of Testing",
  2: "Testing throughout the SDLC",
  3: "Static Testing",
  4: "Test Techniques",
  5: "Test Management",
  6: "Test Tools",
};

// Import for legacy support
import { ISTQB_QUESTIONS } from "./courses";
export const allQuestions: Question[] = [...ISTQB_QUESTIONS];

export const getQuestionsByChapter = (chapterId: number): Question[] => {
  const filtered = allQuestions.filter((q) => q.chapter === chapterId);
  return [...filtered].sort(() => Math.random() - 0.5);
};

export const getAvailableChapters = (): number[] => {
  const chapters = allQuestions.map((q) => q.chapter);
  return Array.from(new Set(chapters)).sort((a, b) => a - b);
};

// Get random questions from all courses (for backward compatibility)
export const getRandomExamQuestionsLegacy = (
  count: number = 40,
): Question[] => {
  return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, count);
};
