import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { QuizController } from "../components/QuizController";
import { useQuizState } from "../hooks/useQuiz";
import { getCourseConfig } from "../data";

export default function ExamPage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();

  const {
    state,
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

  // Start exam mode on mount
  useEffect(() => {
    if (courseId && state.mode === "idle") {
      startExam(courseId);
    }
  }, [courseId, state.mode, startExam]);

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
