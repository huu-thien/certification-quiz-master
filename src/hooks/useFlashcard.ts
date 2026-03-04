import { useState, useCallback, useMemo } from "react";
import type { FlashcardState, Flashcard } from "../types";
import { istqbFlashcards } from "../data";

// Mock flashcard getter - will import real data when available
const getFlashcardsByCourse = (courseId: string): Flashcard[] => {
  if (courseId === "istqb") {
    return istqbFlashcards as Flashcard[];
  }
  return [];
};

const getFlashcardsByChapterAndCourse = (
  courseId: string,
  chapterId: number,
): Flashcard[] => {
  const flashcards = getFlashcardsByCourse(courseId);
  return flashcards.filter((f) => f.chapter === chapterId);
};

export const useFlashcardState = () => {
  const [state, setState] = useState<FlashcardState>({
    mode: "idle",
    courseId: "istqb",
    currentIdx: 0,
    isFlipped: false,
    answers: {},
    flashcards: [],
    selectedChapter: undefined,
  });

  const startReview = useCallback((courseId: string, chapterId?: number) => {
    let flashcards: Flashcard[] = [];

    // chapterId = -1 means all chapters, undefined/null means all chapters
    if (chapterId && chapterId > 0) {
      // Specific chapter selected
      flashcards = getFlashcardsByChapterAndCourse(courseId, chapterId);
    } else {
      // All chapters
      flashcards = getFlashcardsByCourse(courseId);
    }

    setState((prev) => ({
      ...prev,
      mode: "reviewing",
      courseId,
      flashcards,
      currentIdx: 0,
      answers: {},
      isFlipped: false,
      selectedChapter: chapterId && chapterId > 0 ? chapterId : undefined,
    }));
  }, []);

  const flipCard = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isFlipped: !prev.isFlipped,
    }));
  }, []);

  const goToNext = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIdx: Math.min(prev.currentIdx + 1, prev.flashcards.length - 1),
    }));
  }, []);

  const goToPrevious = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIdx: Math.max(0, prev.currentIdx - 1),
    }));
  }, []);

  const goToCard = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentIdx: Math.max(0, Math.min(index, prev.flashcards.length - 1)),
    }));
  }, []);

  const markAnswer = useCallback(
    (answer: "know" | "unknown") => {
      setState((prev) => ({
        ...prev,
        answers: { ...prev.answers, [prev.currentIdx]: answer },
        isFlipped: false,
      }));
      goToNext();
    },
    [goToNext],
  );

  const resetReview = useCallback(() => {
    setState((prev) => ({
      ...prev,
      mode: "idle",
      currentIdx: 0,
      answers: {},
      flashcards: [],
      isFlipped: false,
      selectedChapter: undefined,
    }));
  }, []);

  const currentFlashcard = useMemo(() => {
    return state.flashcards[state.currentIdx] || null;
  }, [state.flashcards, state.currentIdx]);

  const progress = useMemo(() => {
    return {
      current: state.currentIdx + 1,
      total: state.flashcards.length,
      percentage: state.flashcards.length
        ? ((state.currentIdx + 1) / state.flashcards.length) * 100
        : 0,
    };
  }, [state.currentIdx, state.flashcards.length]);

  const stats = useMemo(() => {
    const know = Object.values(state.answers).filter(
      (a) => a === "know",
    ).length;
    const unknown = Object.values(state.answers).filter(
      (a) => a === "unknown",
    ).length;
    return { know, unknown, total: know + unknown };
  }, [state.answers]);

  return {
    state,
    currentFlashcard,
    progress,
    stats,
    startReview,
    flipCard,
    markAnswer,
    goToNext,
    goToPrevious,
    goToCard,
    resetReview,
  };
};
