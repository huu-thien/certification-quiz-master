interface QuestionNavigatorProps {
  total: number;
  currentIdx: number;
  answers: Record<number, number>;
  onSelect: (index: number) => void;
}
export const QuestionNavigator = ({
  total,
  currentIdx,
  answers,
  onSelect,
}: QuestionNavigatorProps) => {
  const getButtonClass = (i: number) => {
    const isCurrent = i === currentIdx;
    const isAnswered = answers[i] !== undefined;

    if (isCurrent)
      return "ring-2 ring-blue-500 ring-offset-1 bg-blue-50 text-blue-700 shadow-md";
    if (isAnswered) return "bg-blue-600 text-white hover:bg-blue-700";
    return "bg-gray-100 text-gray-500 hover:bg-gray-200";
  };

  return (
    // Make navigator fill available vertical space inside sidebar
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
      <h3 className="font-bold text-gray-700 mb-4 text-xs uppercase tracking-wider shrink-0">
        Danh sách câu hỏi
      </h3>

      {/* Vùng cuộn: Sử dụng flex-1 và overflow-y-auto */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-4 gap-2 p-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`w-full aspect-square rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center cursor-pointer ${getButtonClass(
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
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-3 h-3 rounded bg-blue-600"></span> Đã trả lời
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-3 h-3 rounded bg-gray-200"></span> Chưa trả lời
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-3 h-3 rounded border-2 border-blue-500 bg-blue-50"></span>{" "}
            Đang xem
          </div>
        </div>
      </div>
    </div>
  );
};
