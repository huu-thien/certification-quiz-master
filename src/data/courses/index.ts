import type { CourseConfig, Question } from "../../types";
import { allQuestions as questionsISTQB } from "./istqb/questions";
import { questionsPSM1, type QuestionPSM1 } from "./psm1/questions";
// flashcard data for courses.  we export the arrays below so other
// modules can import them without needing to know the exact file path.
// `istqb/flashcards.ts` defines `allFlashcards`, so alias it here for
// backwards compatibility with the rest of the codebase.
export { allFlashcards as istqbFlashcards } from "./istqb/flashcards";
export {
  psm1Flashcards,
  PSM1_FLASHCARD_SECTIONS,
} from "./psm1/flashcards"; // PSM1 flashcards + section labels
import {
  EXAM_CONFIGS,
  ExamType,
  getMinCorrectAnswers,
} from "../../constants/exam-config";

// Convert PSM1 questions to unified Question interface
const convertPSM1toQuestion = (q: QuestionPSM1): Question => ({
  id: q.id,
  chapter: q.chapter,
  question: q.question,
  options: q.options || [],
  correctAnswer: q.correctAnswer,
  correctAnswers: q.correctAnswers,
  isMultiSelect: q.isMultiSelect,
  explanation: q.explanation,
  explanationVN: q.explanationVN,
});

// ISTQB Foundation Configuration
export const ISTQB_CHAPTERS: Record<number, string> = {
  1: "Fundamentals of Testing",
  2: "Testing throughout the SDLC",
  3: "Static Testing",
  4: "Test Techniques",
  5: "Test Management",
  6: "Test Tools",
};

// normalize optional fields coming from the raw ISTQB export
export const ISTQB_QUESTIONS: Question[] = questionsISTQB.map((q) => ({
  ...q,
  options: q.options || [],
}));

export const istqbConfig: CourseConfig = {
  id: "istqb",
  name: EXAM_CONFIGS[ExamType.ISTQB_FOUNDATION].name,
  description: "ISTQB Certified Tester Foundation Level",
  totalQuestions: ISTQB_QUESTIONS.length,
  examDuration: EXAM_CONFIGS[ExamType.ISTQB_FOUNDATION].duration,
  passingScore: getMinCorrectAnswers(ExamType.ISTQB_FOUNDATION),
  chapters: ISTQB_CHAPTERS,
  examQuestionsCount: EXAM_CONFIGS[ExamType.ISTQB_FOUNDATION].questionsCount,
};

export const PSM1_QUESTIONS: Question[] = questionsPSM1.map(
  convertPSM1toQuestion,
);

// For PSM1 we use the chapter field as the practice test number.  Users expect
// to see "Practice 1", "Practice 2", etc.  We also expose six entries here so
// the selectors render something meaningful when course.chapters is interrogated.
export const PSM1_CHAPTERS: Record<number, string> = {
  1: "Practice Test 1",
  2: "Practice Test 2",
  3: "Practice Test 3",
  4: "Practice Test 4",
  5: "Practice Test 5",
  6: "Practice Test 6",
};

export const psm1Config: CourseConfig = {
  id: "psm1",
  name: EXAM_CONFIGS[ExamType.PSM1].name,
  description: "Scrum Master Certification (PSM I)",
  totalQuestions: PSM1_QUESTIONS.length,
  examDuration: EXAM_CONFIGS[ExamType.PSM1].duration,
  passingScore: getMinCorrectAnswers(ExamType.PSM1),
  chapters: PSM1_CHAPTERS,
  examQuestionsCount: EXAM_CONFIGS[ExamType.PSM1].questionsCount,
};

// Course Registry
export const COURSES: Record<string, CourseConfig> = {
  istqb: istqbConfig,
  psm1: psm1Config,
};

export const getCourseConfig = (courseId: string): CourseConfig | null => {
  return COURSES[courseId] || null;
};

export const getAllCourses = (): CourseConfig[] => {
  return Object.values(COURSES).filter((course) => course.totalQuestions > 0);
};

export const getQuestionsByCourse = (courseId: string): Question[] => {
  if (courseId === "istqb") {
    return ISTQB_QUESTIONS;
  }
  if (courseId === "psm1") {
    return PSM1_QUESTIONS;
  }
  return [];
};

export const getQuestionsByChapterAndCourse = (
  courseId: string,
  chapterId: number,
  subsectionTitle?: string,
): Question[] => {
  const questions = getQuestionsByCourse(courseId);
  let filtered = questions.filter((q) => q.chapter === chapterId);
  if (subsectionTitle) {
    filtered = filtered.filter((q) => q.subsectionTitle === subsectionTitle);
  }
  return [...filtered].sort(() => Math.random() - 0.5);
};

export const getAvailableChaptersByCourse = (courseId: string): number[] => {
  const questions = getQuestionsByCourse(courseId);
  const chapters = questions.map((q) => q.chapter);
  const unique = Array.from(new Set(chapters));

  // Sort chapters numerically.  PSM1 practice tests should appear in
  // sequential order (1‑6) when the user is choosing which practice
  // test to start.  The question ordering itself remains randomized when
  // the test begins.
  return unique.sort((a, b) => a - b);
};

export const getRandomExamQuestions = (
  courseId: string,
  count?: number,
): Question[] => {
  const questions = getQuestionsByCourse(courseId);
  const config = getCourseConfig(courseId);

  const examCount = count || config?.examQuestionsCount || 40;

  return [...questions].sort(() => Math.random() - 0.5).slice(0, examCount);
};

// Helper to list subsection titles inside a chapter
export const getSubsectionsByChapterAndCourse = (
  courseId: string,
  chapterId: number,
): string[] => {
  const questions = getQuestionsByCourse(courseId);
  const filtered = questions.filter((q) => q.chapter === chapterId);
  const unique = Array.from(
    new Set(filtered.map((q) => q.subsectionTitle).filter(Boolean)),
  ) as string[];
  // sort alphabetically so the UI order is predictable
  return unique.sort((a, b) => a.localeCompare(b));
};
