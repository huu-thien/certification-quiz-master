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
    checked: {},
    results: {},
    isSubmitted: false,
    questions: [],
    selectedChapter: undefined,
    selectedSubsection: undefined,
  });

  const startPractice = useCallback(
    (
      courseId: string,
      chapterId: number,
      subsectionTitle?: string,
      count?: number,
    ) => {
      const allQuestions = getQuestionsByChapterAndCourse(
        courseId,
        chapterId,
        subsectionTitle,
      );
      const questions =
        count && count > 0 ? allQuestions.slice(0, count) : allQuestions;

      setState((prev) => ({
        ...prev,
        mode: "practice",
        courseId,
        selectedChapter: chapterId,
        selectedSubsection: subsectionTitle,
        questions,
        answers: {},
        checked: {},
        results: {},
        currentIdx: 0,
        isSubmitted: false,
      }));
    },
    [],
  );

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
      checked: {},
      results: {},
    }));
  }, []);

  const selectAnswer = useCallback((answer: number) => {
    setState((prev) => {
      const currentQuestion = prev.questions[prev.currentIdx];

      // Multi-select: toggle answer in array
      if (currentQuestion?.isMultiSelect) {
        const currentAnswers = prev.answers[prev.currentIdx];
        const answers = Array.isArray(currentAnswers)
          ? [...currentAnswers]
          : [];

        // changing an answer should clear any previous "checked" flag so
        // the user has to press Kiểm tra again.
        const newChecked = { ...prev.checked };
        if (newChecked[prev.currentIdx]) {
          delete newChecked[prev.currentIdx];
        }
        const newResults = { ...(prev.results || {}) };
        if (newResults[prev.currentIdx] !== undefined) {
          delete newResults[prev.currentIdx];
        }

        const idx = answers.indexOf(answer);
        if (idx >= 0) {
          answers.splice(idx, 1); // remove
        } else {
          answers.push(answer); // add
        }
        answers.sort((a, b) => a - b);

        const newAnswers = { ...prev.answers };
        if (answers.length > 0) {
          newAnswers[prev.currentIdx] = answers;
        } else {
          delete newAnswers[prev.currentIdx]; // Remove key if empty
        }

        return {
          ...prev,
          answers: newAnswers,
          checked: newChecked,
          results: newResults,
        };
      }

      // Single-select: set single answer
      const newChecked = { ...prev.checked };
      if (newChecked[prev.currentIdx]) {
        delete newChecked[prev.currentIdx];
      }
      const newResults = { ...(prev.results || {}) };
      if (newResults[prev.currentIdx] !== undefined) {
        delete newResults[prev.currentIdx];
      }

      return {
        ...prev,
        answers: { ...prev.answers, [prev.currentIdx]: answer },
        checked: newChecked,
        results: newResults,
      };
    });
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

  const checkCurrent = useCallback(() => {
    setState((prev) => {
      const idx = prev.currentIdx;
      const question = prev.questions[idx];
      const userAnswer = prev.answers[idx];

      if (!question || userAnswer === undefined) {
        return {
          ...prev,
          checked: { ...prev.checked, [idx]: true },
        };
      }

      let isCorrect = false;
      if (question.isMultiSelect && question.correctAnswers) {
        const userAnswers = Array.isArray(userAnswer)
          ? [...userAnswer].sort((a, b) => a - b)
          : [];
        const correctAnswers = [...question.correctAnswers].sort(
          (a, b) => a - b,
        );
        isCorrect =
          userAnswers.length === correctAnswers.length &&
          userAnswers.every((ans, i) => ans === correctAnswers[i]);
      } else {
        isCorrect = userAnswer === question.correctAnswer;
      }

      return {
        ...prev,
        checked: { ...prev.checked, [idx]: true },
        results: {
          ...(prev.results || {}),
          [idx]: isCorrect ? "correct" : "incorrect",
        },
      };
    });
  }, []);

  const score = useMemo(() => {
    // Practice: use checked results so users must press "Kiểm tra"
    if (state.mode === "practice") {
      const results = state.results || {};
      return Object.values(results).filter((r) => r === "correct").length;
    }

    // Exam: derive from all answers
    return Object.keys(state.answers).filter((k) => {
      const qIdx = Number(k);
      const question = state.questions[qIdx];
      const userAnswer = state.answers[qIdx];

      if (!question) return false;

      if (question.isMultiSelect && question.correctAnswers) {
        const userAnswers = Array.isArray(userAnswer)
          ? [...userAnswer].sort((a, b) => a - b)
          : [];
        const correctAnswers = [...question.correctAnswers].sort(
          (a, b) => a - b,
        );

        if (userAnswers.length !== correctAnswers.length) return false;
        return userAnswers.every((ans, i) => ans === correctAnswers[i]);
      }

      return userAnswer === question.correctAnswer;
    }).length;
  }, [state.mode, state.answers, state.questions, state.results]);

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
    checkCurrent,
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
