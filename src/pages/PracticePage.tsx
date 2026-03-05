import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { QuizController } from "../components/QuizController";
import { useQuizState } from "../hooks/useQuiz";
import { getCourseConfig } from "../data";

export default function PracticePage() {
  const navigate = useNavigate();
  const { courseId, chapterId, subsection } = useParams<{
    courseId: string;
    chapterId: string;
    subsection?: string;
  }>();

  const {
    state,
    startPractice,
    submitExam,
    resetQuiz,
    selectAnswer,
    checkCurrent,
    goToQuestion,
    goToPrevious,
    goToNext,
    score,
    isPassed,
    isAllAnswered,
    courseConfig,
  } = useQuizState();

  const chapter = parseInt(chapterId || "1");
  const sub = subsection || undefined;

  // Start practice mode on mount
  useEffect(() => {
    if (courseId && state.mode === "idle") {
      startPractice(courseId, chapter, sub);
    }
  }, [courseId, chapter, sub, state.mode, startPractice]);

  const course = courseId ? getCourseConfig(courseId) : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Khóa học không tồn tại</p>
      </div>
    );
  }

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
      onCheck={checkCurrent}
      onSubmitExam={submitExam}
      onBack={() => {
        resetQuiz();
        navigate(-1);
      }}
      onTimeout={() => {
        alert("Hết giờ! Bài thi sẽ tự động nộp.");
        submitExam();
      }}
    />
  );
}
