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
  onGoToCard: (index: number) => void;
  onBack: () => void;
  isFlipped: boolean;
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
  onGoToCard,
  onBack,
  isFlipped,
}) => {
  if (!currentFlashcard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full">
              <CheckCircle size={64} className="text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ôn Tập Hoàn Tất!
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-gray-600 text-sm mb-1">Đã Nắm Vững</p>
              <p className="text-3xl font-bold text-green-600">{stats.know}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <p className="text-gray-600 text-sm mb-1">Cần Ôn Lại</p>
              <p className="text-3xl font-bold text-orange-600">
                {stats.unknown}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-gray-600 text-sm mb-1">Tổng Số Thẻ</p>
              <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            </div>
          </div>

          <button
            onClick={onBack}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all hover:shadow-lg transform hover:scale-105"
          >
            ← Quay Lại Chọn Chương
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow hover:shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft size={20} />
            Quay Lại
          </button>

          {/* Progress Info */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Chương {currentFlashcard.chapter}
            </p>
            <p className="font-bold text-gray-800">
              {progress.current} / {progress.total}
            </p>
          </div>

          <div className="w-48"></div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative h-3 bg-white rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {Math.round(progress.percentage)}% Hoàn Thành
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Đã Nắm Vững</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.know}
                </p>
              </div>
              <CheckCircle size={32} className="text-green-500 opacity-30" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Cần Ôn Lại</p>
                <p className="text-3xl font-bold text-orange-600">
                  {stats.unknown}
                </p>
              </div>
              <AlertCircle size={32} className="text-orange-500 opacity-30" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Tổng Số Thẻ</p>
                <p className="text-3xl font-bold text-blue-600">
                  {progress.total}
                </p>
              </div>
              <BookOpen size={32} className="text-blue-500 opacity-30" />
            </div>
          </div>
        </div>

        {/* Main Flashcard Container */}
        <div
          className="flex justify-center mb-10"
          style={{ perspective: "1200px" }}
        >
          <div
            className="w-full max-w-3xl h-96 bg-white rounded-3xl shadow-xl p-12 cursor-pointer flex flex-col items-center justify-center relative transform transition-all hover:shadow-2xl hover:scale-[1.02]"
            onClick={onFlip}
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 0.6s ease-in-out",
            }}
          >
            {/* Card Flip Animation */}
            <style>{`
              .flashcard-front,
              .flashcard-back {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .flashcard-back {
                position: absolute;
                top: 0;
                left: 0;
                transform: rotateY(180deg);
              }
            `}</style>
            {/* Front Side - Term */}
            <div className="flashcard-front w-full flex flex-col items-center justify-center">
              <div className="mb-6 flex items-center gap-2 text-purple-600">
                <BookOpen size={20} />
                <span className="text-sm font-semibold tracking-widest">
                  CÂU HỎI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 leading-tight">
                {currentFlashcard.term}
              </h2>
              <p className="text-gray-400 mt-10 text-sm animate-bounce">
                💡 Nhấp vào thẻ để xem câu trả lời
              </p>
            </div>

            {/* Back Side - Definition */}
            <div className="flashcard-back">
              <div className="mb-6 flex items-center gap-2 text-pink-600">
                <CheckCircle size={20} />
                <span className="text-sm font-semibold tracking-widest">
                  CÂU TRẢ LỜI
                </span>
              </div>
              <p className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed font-medium px-4">
                {currentFlashcard.definition}
              </p>
              <p className="text-gray-400 mt-10 text-sm animate-bounce">
                💡 Nhấp vào thẻ để xem câu hỏi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Mark Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onMarkUnknown}
            className="py-4 px-6 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            <AlertCircle size={24} />
            Cần Ôn Lại
          </button>
          <button
            onClick={onMarkKnow}
            className="py-4 px-6 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle size={24} />
            Đã Nắm Vững
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onPrevious}
            disabled={progress.current === 1}
            className="py-3 px-6 bg-white hover:bg-gray-50 disabled:bg-gray-100 text-gray-700 font-semibold rounded-xl shadow hover:shadow-md disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            Thẻ Trước
          </button>
          <button
            onClick={onNext}
            disabled={progress.current === progress.total}
            className="py-3 px-6 bg-white hover:bg-gray-50 disabled:bg-gray-100 text-gray-700 font-semibold rounded-xl shadow hover:shadow-md disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            Thẻ Tiếp
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Card Navigator */}
      <div className="mt-10 max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-gray-700 mb-4">
          🎯 Nhảy Tới Thẻ:
        </p>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {state.flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => onGoToCard(index)}
                className={`w-10 h-10 rounded-lg font-bold text-sm transition-all transform hover:scale-110 ${
                  index === state.currentIdx
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-110"
                    : state.answers[index]
                      ? "bg-green-200 text-green-800 hover:bg-green-300"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
