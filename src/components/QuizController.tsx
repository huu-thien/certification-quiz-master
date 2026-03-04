import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { QuizCard } from "./QuizCard";
import { QuestionNavigator } from "./QuestionNavigator";
import { Timer } from "./Timer";
import type { QuizState, CourseConfig } from "../types";

interface QuizControllerProps {
  state: QuizState;
  courseConfig: CourseConfig | null;
  score: number;
  isPassed: boolean;
  isAllAnswered: boolean;
  onGoToQuestion: (index: number) => void;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
  onSelectAnswer: (answer: number) => void;
  onSubmitExam: () => void;
  onBack: () => void;
  onTimeout: () => void;
}

export const QuizController = ({
  state,
  courseConfig,
  score,
  isPassed,
  isAllAnswered,
  onGoToQuestion,
  onGoToPrevious,
  onGoToNext,
  onSelectAnswer,
  onSubmitExam,
  onBack,
  onTimeout,
}: QuizControllerProps) => {
  const currentQuestion = state.questions[state.currentIdx];
  const currentChapter =
    state.mode === "practice" ? state.selectedChapter : null;

  let headerTitle = "";
  if (state.mode === "exam") {
    headerTitle = `Thi thử ${courseConfig?.name || ""}`;
  } else if (state.mode === "practice" && currentChapter && courseConfig) {
    headerTitle = `Ôn tập Chương ${currentChapter}: ${
      courseConfig.chapters[currentChapter] || "Unknown"
    }`;
  }

  const handleBack = () => {
    if (state.mode === "exam" && !state.isSubmitted) {
      if (
        !window.confirm(
          "Bạn đang làm bài thi! Thoát sẽ mất dữ liệu. Chắc chắn chứ?",
        )
      )
        return;
    }
    onBack();
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="h-screen bg-gray-50 p-4 md:p-8 flex flex-col overflow-hidden">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
        {/* Sidebar Left */}
        <aside className="md:w-64 shrink-0 flex flex-col overflow-hidden">
          <QuestionNavigator
            total={state.questions.length}
            currentIdx={state.currentIdx}
            answers={state.answers}
            onSelect={onGoToQuestion}
          />
        </aside>

        {/* Main Content */}
        <main className="w-[50vw] flex-1 flex flex-col gap-4 overflow-hidden min-w-0">
          {/* CONTEXT BAR */}
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors font-medium hover:bg-red-50 p-2 rounded-lg cursor-pointer"
                aria-label={state.isSubmitted ? "Back to home" : "Back"}
              >
                <RotateCcw size={18} />
              </button>
              <div
                className={`p-2 rounded-lg ${
                  state.mode === "exam"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <BookOpen size={20} />
              </div>
              <div>
                <h1 className="font-bold text-gray-800">{headerTitle}</h1>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {state.mode === "exam" ? "Mock Exam Mode" : "Practice Mode"}
                </p>
              </div>
            </div>
            {state.mode === "exam" && !state.isSubmitted && courseConfig && (
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 shadow-inner">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Time
                </span>
                <Timer
                  duration={courseConfig.examDuration}
                  onTimeout={onTimeout}
                />
              </div>
            )}
          </div>

          {/* RESULTS SUMMARY */}
          {state.isSubmitted && (
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Kết quả bài thi
                </h2>
                <p className="text-gray-500">
                  Bạn đã hoàn thành bài thi với số điểm:
                </p>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-black ${
                    isPassed ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {score} / {state.questions.length}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mt-1">
                  {isPassed ? "ĐẠT" : "KHÔNG ĐẠT"}
                </div>
              </div>
            </div>
          )}

          {/* QUIZ CARD - grows to fill space */}
          <div className="flex-1 flex items-center justify-center min-h-0">
            <div className="w-full h-full max-h-[70vh] overflow-hidden">
              <QuizCard
                mode={state.mode}
                data={currentQuestion}
                isSubmitted={state.isSubmitted}
                selectedAnswer={state.answers[state.currentIdx]}
                onAnswer={onSelectAnswer}
              />
            </div>
          </div>

          {/* BOTTOM CONTROLS - pinned at bottom */}
          <div className="flex-shrink-0 flex items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            {/* Previous Button */}
            <button
              disabled={state.currentIdx === 0}
              onClick={onGoToPrevious}
              className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-30 transition-all font-medium cursor-pointer"
            >
              <ArrowLeft size={18} /> Trước
            </button>

            {/* Next or Submit Button */}
            {state.currentIdx === state.questions.length - 1 &&
            state.mode === "exam" &&
            !state.isSubmitted ? (
              <button
                onClick={onSubmitExam}
                disabled={!isAllAnswered}
                className={`flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl shadow-lg transition-all font-bold cursor-pointer ${
                  isAllAnswered
                    ? "bg-green-600 hover:bg-green-700 animate-pulse text-white"
                    : "bg-gray-300 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isAllAnswered ? "Nộp bài" : "Chưa hoàn thành"}{" "}
                <Trophy size={18} />
              </button>
            ) : (
              <button
                disabled={state.currentIdx === state.questions.length - 1}
                onClick={onGoToNext}
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 disabled:opacity-30 transition-all font-bold cursor-pointer"
              >
                Sau <ArrowRight size={18} />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
