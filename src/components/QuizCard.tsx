import { Lightbulb, CheckCircle2, XCircle, Circle, Check } from "lucide-react";
import type { Question } from "../types";
import type { QuizModeKey } from "../constants";

interface QuizCardProps {
  mode: QuizModeKey;
  data: Question;
  isSubmitted: boolean;
  selectedAnswer?: number | number[];
  onAnswer: (ans: number) => void;
}

export const QuizCard = ({
  mode,
  data,
  isSubmitted,
  selectedAnswer,
  onAnswer,
}: QuizCardProps) => {
  const showExplanation =
    mode === "practice" ? selectedAnswer !== undefined : isSubmitted;
  const getLabel = (i: number) => `${String.fromCharCode(65 + i)}.`;

  // Multi-select helpers
  const isMultiSelect = data.isMultiSelect;
  const selectedAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : [];
  const correctAnswers = isMultiSelect ? data.correctAnswers || [] : [];
  const singleCorrectAnswer = !isMultiSelect ? data.correctAnswer : undefined;

  return (
    <div className="w- h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col">
      {/* scrollable container contains question, options and explanation */}
      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {data.question}
        </h2>

        {isMultiSelect && (
          <p className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-2 rounded-lg mb-4">
            ⚠️ Choose all correct answers
          </p>
        )}

        {data.options.map((opt: string, i: number) => {
          // Multi-select logic
          const isSelected = isMultiSelect
            ? selectedAnswers.includes(i)
            : selectedAnswer === i;
          const isCorrect = isMultiSelect
            ? correctAnswers.includes(i)
            : i === singleCorrectAnswer;

          let baseClass =
            "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 font-medium cursor-pointer";

          if (showExplanation) {
            if (isCorrect)
              baseClass += " border-green-500 bg-green-50 text-green-800";
            else if (isSelected && !isCorrect)
              baseClass += " border-red-500 bg-red-50 text-red-800";
            else baseClass += " border-gray-200 opacity-50 text-gray-500";
          } else {
            baseClass += isSelected
              ? " border-blue-500 bg-blue-50 text-blue-800"
              : " border-gray-200 hover:border-blue-300 text-gray-700";
          }

          const renderIcon = () => {
            if (showExplanation) {
              if (isCorrect)
                return (
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" />
                );
              if (isSelected && !isCorrect)
                return <XCircle className="w-6 h-6 shrink-0 text-red-600" />;
            }

            // Checkbox or Radio icon
            if (isMultiSelect) {
              return (
                <div
                  className={`w-6 h-6 shrink-0 border-2 rounded flex items-center justify-center ${
                    isSelected
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
              );
            }

            return (
              <Circle
                className={`w-6 h-6 shrink-0 ${
                  isSelected ? "text-blue-600" : "text-gray-300"
                }`}
              />
            );
          };

          return (
            <button
              key={i}
              disabled={showExplanation}
              onClick={() => onAnswer(i)}
              className={baseClass}
            >
              {renderIcon()}
              <span className="font-bold uppercase w-6">{getLabel(i)}</span>
              {opt}
            </button>
          );
        })}
        {showExplanation && (
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl shadow-sm animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-3 text-blue-800">
              <div className="p-1.5 bg-blue-200 rounded-lg">
                <Lightbulb size={18} />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Giải thích chi tiết
              </h3>
            </div>

            <p className="text-gray-800 leading-relaxed font-medium text-lg">
              {/* explanationVN is preferred, but if absent (as is common in PSM1)
                  fall back to the English explanation so the user still sees
                  something useful. */}
              {data.explanationVN || data.explanation}
            </p>

            {/* only show the "Reference (English)" block when we have both
                a Vietnamese explanation *and* an English one, otherwise the
                fallback above already handles displaying english text. */}
            {data.explanationVN && data.explanation && (
              <div className="mt-5 pt-4 border-t border-blue-200">
                <p className="text-xs text-blue-600 font-bold uppercase mb-1">
                  Reference (English)
                </p>
                <p className="text-blue-700 italic text-sm leading-relaxed">
                  {data.explanation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
