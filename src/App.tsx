import { useState } from "react";
import { QuizCard } from "./components/QuizCard";
import { QuestionNavigator } from "./components/QuestionNavigator";
import {
  CHAPTER_TITLES,
  getAvailableChapters,
  getQuestionsByChapter,
  getRandomExamQuestions,
} from "./data";
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { Timer } from "./components/Timer";
import type { Question } from "./types";

export default function App() {
  const [mode, setMode] = useState<"idle" | "practice" | "exam">("idle");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);

  const [isSelectingChapter, setIsSelectingChapter] = useState(false);

  // Hàm khởi tạo bài thi
  const startExam = () => {
    // Lấy 40 câu hỏi ngẫu nhiên từ data layer
    const shuffled = getRandomExamQuestions(40);
    setExamQuestions(shuffled);
    setAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setMode("exam");
  };

  const handleSelectChapter = (chapterId: number) => {
    const questions = getQuestionsByChapter(chapterId);
    setExamQuestions(questions);
    setAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setMode("practice");
  };

  // Tính điểm
  const score = Object.keys(answers).filter(
    (k) => answers[Number(k)] === examQuestions[Number(k)].correctAnswer
  ).length;
  const isPassed = score >= 26;

  // Xử lý nộp bài
  const handleSubmit = () => {
    if (window.confirm("Bạn có chắc chắn muốn nộp bài?")) {
      setIsSubmitted(true);
      setCurrentIdx(0);
    }
  };

  // Xử lý quay lại trang chủ
  const handleBack = () => {
    if (mode === "exam" && !isSubmitted) {
      if (
        !window.confirm(
          "Bạn đang làm bài thi! Thoát sẽ mất dữ liệu. Chắc chắn chứ?"
        )
      )
        return;
    }
    setMode("idle");
  };

  if (mode === "idle") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            ISTQB Quiz Master
          </h1>
          <p className="text-gray-600">
            {isSelectingChapter
              ? "Chọn chương bạn muốn ôn tập"
              : "Chọn chế độ để bắt đầu hành trình ôn tập"}
          </p>
        </div>

        {isSelectingChapter ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {getAvailableChapters().map((chapterId) => (
              <button
                key={chapterId}
                onClick={() => handleSelectChapter(chapterId)}
                className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all text-left"
              >
                <span className="text-xl font-bold text-gray-800">
                  Chương {chapterId}
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  {CHAPTER_TITLES[chapterId] || "Chưa có tiêu đề"}
                </span>
              </button>
            ))}

            <button
              onClick={() => setIsSelectingChapter(false)}
              className="col-span-full mt-4 text-gray-400 hover:text-gray-600 underline font-medium"
            >
              Quay lại
            </button>
          </div>
        ) : (
          /* MÀN HÌNH CHỌN CHẾ ĐỘ (Mặc định) */
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
            <button
              onClick={() => setIsSelectingChapter(true)} // Chỉ chuyển sang chọn chương
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all"
            >
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BookOpen size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện tập</h2>
              <p className="text-gray-500 mt-2 text-center">
                Học theo từng chương, có giải thích chi tiết ngay lập tức.
              </p>
            </button>

            <button
              onClick={startExam} // Thi thử vào thẳng
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-500 hover:shadow-2xl transition-all"
            >
              <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Trophy size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Thi thử</h2>
              <p className="text-gray-500 mt-2 text-center">
                Bắt đầu tính thời gian và làm bài như thi thật
              </p>
            </button>
          </div>
        )}
      </div>
    );
  }
  const isAllAnswered = Object.keys(answers).length === examQuestions.length;
  const currentChapter = mode === "practice" ? examQuestions[0]?.chapter : null;

  // Xác định nội dung tiêu đề chính
  const headerTitle =
    mode === "exam"
      ? "Thi thử ISTQB (Full Exam)"
      : `Ôn tập Chương ${currentChapter}: ${
          CHAPTER_TITLES[currentChapter!] || "Unknown"
        }`;
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar Left */}
        <aside className="md:w-64 shrink-0">
          <QuestionNavigator
            total={examQuestions.length}
            currentIdx={currentIdx}
            answers={answers}
            onSelect={setCurrentIdx}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6">
          {/* CONTEXT BAR (Header mới) */}
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  mode === "exam"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {/* Có thể thêm icon nhỏ ở đây */}
                <BookOpen size={20} />
              </div>
              <div>
                <h1 className="font-bold text-gray-800">{headerTitle}</h1>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {mode === "exam" ? "Mock Exam Mode" : "Practice Mode"}
                </p>
              </div>
            </div>
          </div>
          {/* 1. HEADER (Thay đổi hiển thị dựa trên trạng thái nộp bài) */}
          <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 min-h-[72px]">
            {/* 1. Bên trái: Nút hành động */}
            <div className="flex-1 flex justify-start">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors font-medium hover:bg-red-50 px-3 py-2 rounded-lg"
              >
                <RotateCcw size={18} /> {isSubmitted ? "Về trang chủ" : "Thoát"}
              </button>
            </div>

            {/* 2. Chính giữa: Tiêu đề / Trạng thái câu hỏi */}
            <div className="flex-1 text-center font-bold text-gray-700 text-lg">
              {isSubmitted ? (
                <span className="text-blue-600">Xem lại bài thi</span>
              ) : (
                <span>
                  Câu {currentIdx + 1} / {examQuestions.length}
                </span>
              )}
            </div>

            {/* 3. Bên phải: Timer (Dùng flex justify-end để căn phải) */}
            <div className="flex-1 flex justify-end">
              {mode === "exam" && !isSubmitted && (
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 shadow-inner">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Time
                  </span>
                  <Timer
                    duration={3600}
                    onTimeout={() => {
                      alert("Hết giờ! Bài thi sẽ tự động nộp.");
                      setIsSubmitted(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* 2. RESULTS SUMMARY (Ưu tiên hiển thị lên đầu khi đã nộp bài) */}
          {isSubmitted && (
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
                  {score} / 40
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mt-1">
                  {isPassed ? "ĐẠT" : "KHÔNG ĐẠT"}
                </div>
              </div>
            </div>
          )}

          {/* 3. QUIZ CARD (Giới hạn chiều cao nếu cần thiết hoặc cuộn bên trong) */}
          <div className="grow">
            <QuizCard
              mode={mode} // <--- Thêm prop mode
              data={examQuestions[currentIdx]}
              isSubmitted={isSubmitted}
              selectedAnswer={answers[currentIdx]}
              onAnswer={(ans: number) => {
                if (mode === "exam" && isSubmitted) return;
                setAnswers((prev) => ({ ...prev, [currentIdx]: ans }));
              }}
            />
          </div>

          {/* 4. BOTTOM CONTROLS */}
          <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            {/* 1. Nút Trước */}
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => prev - 1)}
              className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-30 transition-all font-medium"
            >
              <ArrowLeft size={18} /> Trước
            </button>

            {/* 2. Logic Nút Sau / Nộp bài */}
            {currentIdx === examQuestions.length - 1 &&
            mode === "exam" &&
            !isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!isAllAnswered} // Chặn nộp nếu chưa làm hết
                className={`flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl shadow-lg transition-all font-bold ${
                  isAllAnswered
                    ? "bg-green-600 hover:bg-green-700 animate-pulse text-white"
                    : "bg-gray-300 text-gray-400 cursor-not-allowed" // CSS lúc disabled
                }`}
              >
                {isAllAnswered ? "Nộp bài" : "Chưa hoàn thành"}{" "}
                <Trophy size={18} />
              </button>
            ) : (
              <button
                disabled={currentIdx === examQuestions.length - 1}
                onClick={() => setCurrentIdx((prev) => prev + 1)}
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 disabled:opacity-30 transition-all font-bold"
              >
                Sau <ArrowRight size={18} />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
