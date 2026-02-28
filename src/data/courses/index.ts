import type { CourseConfig, Question } from "../../types";
import { questionsISTQB } from "../istqb";
import { questionsPSM1 } from "../psm1";
import {
  EXAM_CONFIGS,
  ExamType,
  getMinCorrectAnswers,
} from "../../constants/exam-config";

// ISTQB Foundation Configuration
export const ISTQB_CHAPTERS: Record<number, string> = {
  1: "Fundamentals of Testing",
  2: "Testing throughout the SDLC",
  3: "Static Testing",
  4: "Test Techniques",
  5: "Test Management",
  6: "Test Tools",
};

export const ISTQB_QUESTIONS: Question[] = [...questionsISTQB];

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

export const PSM1_QUESTIONS: Question[] = [...questionsPSM1];

export const PSM1_CHAPTERS: Record<number, string> = {
  1: "Scrum Framework",
  2: "The Team",
  3: "Events",
  4: "Artifacts",
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
): Question[] => {
  const questions = getQuestionsByCourse(courseId);
  const filtered = questions.filter((q) => q.chapter === chapterId);
  return [...filtered].sort(() => Math.random() - 0.5);
};

export const getAvailableChaptersByCourse = (courseId: string): number[] => {
  const questions = getQuestionsByCourse(courseId);
  const chapters = questions.map((q) => q.chapter);
  return Array.from(new Set(chapters)).sort((a, b) => a - b);
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
