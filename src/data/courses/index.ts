import type { CourseConfig, Question } from "../../types";
import { questionsChapter1 } from "../chapter1";
import { questionsChapter2 } from "../chapter2";
import { questionsChapter3 } from "../chapter3";
import { questionsChapter4 } from "../chapter4";
import { questionsChapter5 } from "../chapter5";
import { questionsChapter6 } from "../chapter6";

// ISTQB Foundation Configuration
export const ISTQB_CHAPTERS: Record<number, string> = {
  1: "Fundamentals of Testing",
  2: "Testing throughout the SDLC",
  3: "Static Testing",
  4: "Test Techniques",
  5: "Test Management",
  6: "Test Tools",
};

export const ISTQB_QUESTIONS: Question[] = [
  ...questionsChapter1,
  ...questionsChapter2,
  ...questionsChapter3,
  ...questionsChapter4,
  ...questionsChapter5,
  ...questionsChapter6,
];

export const istqbConfig: CourseConfig = {
  id: "istqb",
  name: "ISTQB Foundation",
  description: "ISTQB Certified Tester Foundation Level",
  totalQuestions: ISTQB_QUESTIONS.length,
  examDuration: 3600, // 60 minutes
  passingScore: 26,
  chapters: ISTQB_CHAPTERS,
};

// PSM1 Configuration (Template - thêm câu hỏi sau)
export const PSM1_QUESTIONS: Question[] = [];

export const PSM1_CHAPTERS: Record<number, string> = {
  1: "Scrum Framework",
  2: "The Team",
  3: "Events",
  4: "Artifacts",
};

export const psm1Config: CourseConfig = {
  id: "psm1",
  name: "Professional Scrum Master I",
  description: "Scrum Master Certification (PSM I)",
  totalQuestions: PSM1_QUESTIONS.length,
  examDuration: 3600,
  passingScore: 60,
  chapters: PSM1_CHAPTERS,
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
  chapterId: number
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
  count?: number
): Question[] => {
  const questions = getQuestionsByCourse(courseId);
  const examCount = count || getCourseConfig(courseId)?.totalQuestions || 40;
  return [...questions].sort(() => Math.random() - 0.5).slice(0, examCount);
};
