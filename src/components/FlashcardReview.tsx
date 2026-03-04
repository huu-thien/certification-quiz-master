import React from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { FlashcardState, Flashcard } from "../types";

interface FlashcardReviewProps {
  state: FlashcardState;
  currentFlashcard: Flashcard | null;
  progress: { current: number; total: number; percentage: number };
  stats: { know: number; unknown: number; total: number };
  onFlip: () => void;
  onMarkKnow: () => void;
  onMarkUnknown: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onBack: () => void;
  /** optional callback when user wants to jump to a specific card (not yet rendered in UI) */
  onGoToCard?: (index: number) => void;
  isFlipped: boolean;
  onRestart: () => void;
}

export const FlashcardReview: React.FC<FlashcardReviewProps> = ({
  state,
  currentFlashcard,
  progress,
  stats,
  onFlip,
  onMarkKnow,
  onMarkUnknown,
  onNext,
  onPrevious,
  onBack,
  isFlipped,
  onRestart,
}) => {
  const isCompleted = progress.total > 0 && stats.total === progress.total;

  if (!currentFlashcard && !isCompleted) {
    return (
      <div className="h-screen bg-gradient-to-r from-indigo-50 via-white to-pink-50 flex flex-col items-center justify-center p-6">
        <p className="text-gray-700 mb-4">Không có flashcard để hiển thị.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          ← Quay về trang trước
        </button>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="h-screen bg-gradient-to-r from-indigo-50 via-white to-pink-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md text-center">
          <div className="mb-4 flex justify-center">
            <div className="p-4 bg-indigo-50 rounded-full">
              <CheckCircle size={56} className="text-indigo-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Chúc mừng — Bạn đã hoàn thành!
          </h2>
          <p className="text-gray-600 mb-6">Hoàn thành {progress.total} thẻ.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Đã Nắm Vững</p>
              <p className="text-lg font-bold text-green-600">{stats.know}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Cần Ôn Lại</p>
              <p className="text-lg font-bold text-orange-600">
                {stats.unknown}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Tổng</p>
              <p className="text-lg font-bold text-slate-700">
                {progress.total}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                onRestart();
              }}
              className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl shadow-sm hover:bg-indigo-700 transition-all"
            >
              Làm lại
            </button>
            <button
              onClick={onBack}
              className="w-full py-3 px-6 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl shadow-sm hover:bg-gray-50 transition-all"
            >
              ← Quay lại chọn chương
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-6 overflow-hidden">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-between">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow hover:shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            Quay Lại
          </button>

          {/* Progress Info */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">
              {state.courseId === "psm1" ? "Practice" : "Chương"}{" "}
              {currentFlashcard?.chapter}
            </p>
            <p className="font-bold text-gray-800">
              {progress.current} / {progress.total}
            </p>
          </div>

          <div className="w-32 text-right">
            {/* legend */}
            <div className="text-xs text-gray-500">Chú thích:</div>
            <div className="flex items-center gap-2 justify-end mt-1 text-xs">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>Chưa
              đánh dấu
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>Đã nắm
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>Cần ôn
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="relative h-3 bg-white rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {Math.round(progress.percentage)}% Hoàn Thành
          </p>
        </div>

        {/* Stats summary (optional) */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <p className="text-gray-600 text-sm">Đã Nắm Vững</p>
            <p className="text-xl font-bold text-green-600">{stats.know}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Cần Ôn Lại</p>
            <p className="text-xl font-bold text-orange-600">{stats.unknown}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Tổng</p>
            <p className="text-xl font-bold text-blue-600">{progress.total}</p>
          </div>
        </div>

        {/* Main Flashcard Container */}
        <div
          className="relative flex-1 flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <button
            onClick={onPrevious}
            disabled={progress.current === 1}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow disabled:opacity-30"
          >
            <ChevronLeft size={24} />
          </button>
          <div
            onClick={onFlip}
            className="w-full max-w-3xl h-full max-h-[60vh] bg-white rounded-3xl shadow-xl p-8 cursor-pointer flex flex-col items-center justify-center relative transform transition-all hover:shadow-2xl hover:scale-[1.02]"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 0.6s ease-in-out",
            }}
          >
            <style>{`.flashcard-front, .flashcard-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; } .flashcard-back { position: absolute; top: 0; left: 0; transform: rotateY(180deg); }`}</style>

            <div className="flashcard-front w-full flex flex-col items-center justify-center">
              <div className="mb-4 flex items-center gap-2 text-purple-600">
                <BookOpen size={18} />
                <span className="text-sm font-semibold tracking-widest">
                  CÂU HỎI
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 leading-tight">
                {currentFlashcard?.term}
              </h2>
              <p className="text-gray-400 mt-6 text-sm">
                💡 Nhấp vào thẻ để xem câu trả lời
              </p>
            </div>

            <div className="flashcard-back">
              <div className="mb-4 flex items-center gap-2 text-pink-600">
                <CheckCircle size={18} />
                <span className="text-sm font-semibold tracking-widest">
                  CÂU TRẢ LỜI
                </span>
              </div>
              <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed font-medium px-4">
                {currentFlashcard?.definition}
              </p>
              <p className="text-gray-400 mt-6 text-sm">
                💡 Nhấp vào thẻ để xem câu hỏi
              </p>
            </div>
          </div>
          <button
            onClick={onNext}
            disabled={progress.current === progress.total}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow disabled:opacity-30"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mark buttons */}
        <div className="max-w-3xl mx-auto w-full space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onMarkUnknown}
              className="py-3 px-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <AlertCircle size={20} />
            </button>
            <button
              onClick={onMarkKnow}
              className="py-3 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
