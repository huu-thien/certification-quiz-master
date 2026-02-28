import type { Question } from "../types";
import { questionsChapter1 } from "./chapter1";
import { questionsChapter2 } from "./chapter2";
import { questionsChapter3 } from "./chapter3";
import { questionsChapter4 } from "./chapter4";
import { questionsChapter5 } from "./chapter5";
import { questionsChapter6 } from "./chapter6";

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
  getRandomExamQuestions,
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

export const allQuestions: Question[] = [
  ...questionsChapter1,
  ...questionsChapter2,
  ...questionsChapter3,
  ...questionsChapter4,
  ...questionsChapter5,
  ...questionsChapter6,
];

export const getQuestionsByChapter = (chapterId: number): Question[] => {
  const filtered = allQuestions.filter((q) => q.chapter === chapterId);
  return [...filtered].sort(() => Math.random() - 0.5);
};

export const getAvailableChapters = (): number[] => {
  const chapters = allQuestions.map((q) => q.chapter);
  return Array.from(new Set(chapters)).sort((a, b) => a - b);
};

// Get random questions from all courses (for backward compatibility)
export const getRandomExamQuestionsLegacy = (count: number = 40): Question[] => {
  return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, count);
};
