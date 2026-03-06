import type { QuizMode } from "../types";

interface QuestionNavigatorProps {
  total: number;
  currentIdx: number;
  answers: Record<number, number | number[]>;
  checked?: Record<number, boolean>;
  results?: Record<number, "correct" | "incorrect">;
  mode: QuizMode;
  onSelect: (index: number) => void;
}
export const QuestionNavigator = ({
  total,
  currentIdx,
  answers,
  checked = {},
  results = {},
  mode,
  onSelect,
}: QuestionNavigatorProps) => {
  const getButtonClass = (i: number) => {
    const isCurrent = i === currentIdx;
    const isAnswered = answers[i] !== undefined;
    const result = results[i];

    if (isCurrent)
      return "ring-2 ring-blue-500 ring-offset-1 bg-blue-50 text-blue-700 shadow-md";

    // Practice mode: encode correctness with colors once checked
    if (mode === "practice" && checked[i]) {
      if (result === "correct")
        return "bg-green-500 text-white hover:bg-green-600";
      if (result === "incorrect")
        return "bg-red-500 text-white hover:bg-red-600";
    }

    if (isAnswered) return "bg-blue-600 text-white hover:bg-blue-700";
    return "bg-gray-100 text-gray-500 hover:bg-gray-200";
  };

  const correctCount = Object.values(results).filter(
    (r) => r === "correct",
  ).length;
  const incorrectCount = Object.values(results).filter(
    (r) => r === "incorrect",
  ).length;

  return (
    // Make navigator fill available vertical space inside sidebar
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3 gap-2 text-xs shrink-0">
        <h3 className="font-bold text-gray-700 uppercase tracking-wider">
          Danh sách câu hỏi
        </h3>
        {mode === "practice" && (
          <div className="flex items-center gap-3">
            <span className="text-green-600 font-semibold">
              Đúng: {correctCount}
            </span>
            <span className="text-red-500 font-semibold">
              Sai: {incorrectCount}
            </span>
          </div>
        )}
      </div>

      {/* Vùng cuộn: Sử dụng flex-1 và overflow-y-auto */}
      <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
        <div className="grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-6 md:grid-cols-4 gap-1.5 sm:gap-2 p-1.5 sm:p-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`w-full aspect-[4/3] sm:aspect-square rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center cursor-pointer ${getButtonClass(
                i,
              )}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Bảng chú thích (Legend) - Gắn chặt ở dưới cùng, không bị cuộn */}
      <div className="pt-4 mt-4 border-t border-gray-100 shrink-0">
        <div className="grid grid-cols-1 gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-600"></span> Đã trả lời
            (chưa kiểm tra)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-green-500"></span> Trả lời đúng
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-red-500"></span> Trả lời sai
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-gray-200"></span> Chưa trả lời
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border-2 border-blue-500 bg-blue-50"></span>{" "}
            Đang xem
          </div>
        </div>
      </div>
    </div>
  );
};
