import { useState } from "react";
import { CourseSelector } from "./components/CourseSelector";
import { QuizModeSelector } from "./components/QuizModeSelector";
import { QuizController } from "./components/QuizController";
import { useQuizState } from "./hooks/useQuiz";
import { getAllCourses } from "./data";
import type { CourseConfig } from "./types";

export default function App() {
  // State for course and mode selection
  const [selectedCourse, setSelectedCourse] = useState<CourseConfig | null>(null);
  const [isSelectingChapter, setIsSelectingChapter] = useState(false);

  // Quiz state management
  const {
    state,
    startPractice,
    startExam,
    submitExam,
    resetQuiz,
    selectAnswer,
    goToQuestion,
    goToPrevious,
    goToNext,
    score,
    isPassed,
    isAllAnswered,
    courseConfig,
  } = useQuizState();

  // Menu: Select Course
  if (!selectedCourse) {
    const availableCourses = getAllCourses();
    return (
      <CourseSelector
        courses={availableCourses}
        onSelectCourse={(course) => {
          setSelectedCourse(course);
          setIsSelectingChapter(false);
        }}
      />
    );
  }

  // Menu: Quiz mode selection (practice vs exam) & chapter selection
  if (state.mode === "idle") {
    return (
      <QuizModeSelector
        course={selectedCourse}
        isSelectingChapter={isSelectingChapter}
        onStartPractice={(chapterId) => {
          startPractice(selectedCourse.id, chapterId);
          setIsSelectingChapter(false);
        }}
        onStartExam={() => {
          startExam(selectedCourse.id);
        }}
        onBack={() => {
          setSelectedCourse(null);
          setIsSelectingChapter(false);
          resetQuiz();
        }}
        onSelectCourse={() => {
          setIsSelectingChapter(!isSelectingChapter);
        }}
      />
    );
  }

  // Quiz: Active quiz or review
  return (
    <QuizController
      state={state}
      courseConfig={courseConfig}
      score={score}
      isPassed={isPassed}
      isAllAnswered={isAllAnswered}
      onGoToQuestion={goToQuestion}
      onGoToPrevious={goToPrevious}
      onGoToNext={goToNext}
      onSelectAnswer={selectAnswer}
      onSubmitExam={submitExam}
      onBack={() => {
        setSelectedCourse(null);
        setIsSelectingChapter(false);
        resetQuiz();
      }}
      onTimeout={() => {
        alert("Hết giờ! Bài thi sẽ tự động nộp.");
        submitExam();
      }}
    />
  );
}
