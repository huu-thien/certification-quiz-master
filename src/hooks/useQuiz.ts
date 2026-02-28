import { useState, useCallback, useMemo } from "react";
import type { QuizState, Question } from "../types";
import {
  getRandomExamQuestions,
  getQuestionsByChapterAndCourse,
  getCourseConfig,
} from "../data";

export const useQuizState = () => {
  const [state, setState] = useState<QuizState>({
    mode: "idle",
    courseId: "istqb",
    currentIdx: 0,
    answers: {},
    isSubmitted: false,
    questions: [],
    selectedChapter: undefined,
  });

  const startPractice = useCallback((courseId: string, chapterId: number) => {
    const questions = getQuestionsByChapterAndCourse(courseId, chapterId);
    setState((prev) => ({
      ...prev,
      mode: "practice",
      courseId,
      selectedChapter: chapterId,
      questions,
      answers: {},
      currentIdx: 0,
      isSubmitted: false,
    }));
  }, []);

  const startExam = useCallback((courseId: string) => {
    const config = getCourseConfig(courseId);
    if (!config) return;
    const questions = getRandomExamQuestions(
      courseId,
      config.examQuestionsCount,
    );
    setState((prev) => ({
      ...prev,
      mode: "exam",
      courseId,
      questions,
      answers: {},
      currentIdx: 0,
      isSubmitted: false,
      selectedChapter: undefined,
    }));
  }, []);

  const submitExam = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isSubmitted: true,
      currentIdx: 0,
    }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState((prev) => ({
      ...prev,
      mode: "idle",
      currentIdx: 0,
      answers: {},
      isSubmitted: false,
      questions: [],
      selectedChapter: undefined,
    }));
  }, []);

  const selectAnswer = useCallback((answer: number) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentIdx]: answer },
    }));
  }, []);

  const goToQuestion = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentIdx: Math.max(0, Math.min(index, prev.questions.length - 1)),
    }));
  }, []);

  const goToPrevious = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIdx: Math.max(0, prev.currentIdx - 1),
    }));
  }, []);

  const goToNext = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIdx: Math.min(prev.currentIdx + 1, prev.questions.length - 1),
    }));
  }, []);

  const currentQuestion: Question | null = useMemo(() => {
    return state.questions[state.currentIdx] || null;
  }, [state.questions, state.currentIdx]);

  const score = useMemo(() => {
    return Object.keys(state.answers).filter(
      (k) =>
        state.answers[Number(k)] === state.questions[Number(k)]?.correctAnswer,
    ).length;
  }, [state.answers, state.questions]);

  const courseConfig = getCourseConfig(state.courseId);
  const isPassed = courseConfig ? score >= courseConfig.passingScore : false;

  const isAllAnswered =
    Object.keys(state.answers).length === state.questions.length;

  return {
    state,
    startPractice,
    startExam,
    submitExam,
    resetQuiz,
    selectAnswer,
    goToQuestion,
    goToPrevious,
    goToNext,
    currentQuestion,
    score,
    isPassed,
    isAllAnswered,
    courseConfig,
  };
};
