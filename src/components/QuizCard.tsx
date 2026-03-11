import {
  Lightbulb,
  CheckCircle2,
  XCircle,
  Circle,
  Check,
  Loader2,
  RefreshCw,
  Sparkles,
  Languages,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { Question } from "../types";
import type { QuizModeKey } from "../constants";

interface QuizCardProps {
  mode: QuizModeKey;
  data: Question;
  isSubmitted: boolean;
  selectedAnswer?: number | number[];
  checked?: boolean;
  onAnswer: (ans: number) => void;
  onCheck?: () => void;
}

interface AIResult {
  questionVN: string;
  optionsVN: string[];
  explanation: string;
}

// ─── Fetch explanation qua proxy /api/explain ──────────────────────────────
async function fetchExplanation(question: Question): Promise<AIResult> {
  const res = await fetch("/api/explain", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: question.question,
      options: question.options,
      correctAnswer: question.correctAnswer,
      correctAnswers: question.correctAnswers,
      isMultiSelect: question.isMultiSelect ?? false,
    }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!data.explanation) throw new Error("Empty response");
  return data as AIResult;
}

// Module-level cache — tồn tại suốt session, không bị React StrictMode reset
const explanationCache = new Map<string, AIResult>();

const MAX_RETRIES = 3;
const optionLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

// ─── ExplanationPanel ──────────────────────────────────────────────────────
type FetchState = "idle" | "loading" | "success" | "error" | "fallback";

const ExplanationPanel = ({ data }: { data: Question }) => {
  const hasStatic = !!(data.explanationVN || data.explanation);

  const [aiResult, setAiResult] = useState<AIResult | null>(
    () => explanationCache.get(data.id.toString()) ?? null,
  );
  const [state, setState] = useState<FetchState>(() =>
    explanationCache.has(data.id.toString()) ? "success" : "idle",
  );
  const isFetching = useRef(false);
  const retryCount = useRef(0);

  // Reset khi chuyển câu hỏi
  useEffect(() => {
    const cached = explanationCache.get(data.id.toString());
    if (cached) {
      setAiResult(cached);
      setState("success");
    } else {
      setAiResult(null);
      setState("idle");
    }
    isFetching.current = false;
    retryCount.current = 0;
  }, [data.id]);

  // Hàm fetch với auto-retry
  const doFetch = (question: Question) => {
    isFetching.current = true;
    setState("loading");

    fetchExplanation(question)
      .then((result) => {
        explanationCache.set(question.id.toString(), result);
        setAiResult(result);
        setState("success");
        isFetching.current = false;
      })
      .catch(() => {
        retryCount.current += 1;

        if (retryCount.current < MAX_RETRIES) {
          // Thử lại sau 1.5s
          setTimeout(() => doFetch(question), 1500);
        } else {
          // Đã thử 3 lần — fallback sang giải thích tĩnh nếu có
          isFetching.current = false;
          setState(hasStatic ? "fallback" : "error");
        }
      });
  };

  // Auto-fetch khi panel mở
  useEffect(() => {
    if (explanationCache.has(data.id.toString())) return;
    if (isFetching.current) return;
    doFetch(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.id]);

  // Retry thủ công (reset counter)
  const retry = () => {
    retryCount.current = 0;
    doFetch(data);
  };

  const correctIdxs: number[] = data.isMultiSelect
    ? (data.correctAnswers ?? [])
    : data.correctAnswer !== undefined
      ? [data.correctAnswer]
      : [];

  return (
    <div className="mt-6 rounded-2xl overflow-hidden border border-blue-200 shadow-sm">

      {/* Loading */}
      {state === "loading" && (
        <div className="p-6 bg-blue-50 flex items-center gap-3 text-blue-600">
          <Loader2 className="w-5 h-5 animate-spin shrink-0" />
          <span className="text-sm font-medium">
            Đang dịch và phân tích…
            {retryCount.current > 0 && (
              <span className="ml-1 text-blue-400">
                (thử lần {retryCount.current + 1}/{MAX_RETRIES})
              </span>
            )}
          </span>
        </div>
      )}

      {/* Error — hết retry, không có fallback */}
      {state === "error" && (
        <div className="p-6 bg-red-50 flex items-start gap-3 text-red-600">
          <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">
              Không thể tải giải thích sau {MAX_RETRIES} lần thử.
            </p>
            <button
              onClick={retry}
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Thử lại
            </button>
          </div>
        </div>
      )}

      {/* Fallback — hết retry, dùng giải thích tĩnh */}
      {state === "fallback" && hasStatic && (
        <div className="p-5 bg-amber-50 border-b border-amber-100">
          <div className="flex items-center gap-2 mb-3 text-amber-700">
            <Lightbulb size={15} />
            <span className="text-xs font-bold uppercase tracking-wider">Giải thích</span>
            <span className="ml-auto text-xs text-amber-500 font-medium">
              AI không khả dụng · dùng bản tĩnh
            </span>
            <button
              onClick={retry}
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Thử lại AI
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm font-medium">
            {data.explanationVN || data.explanation}
          </p>
        </div>
      )}

      {/* Success — AI result */}
      {state === "success" && aiResult && (
        <>
          {/* Section 1: Dịch nghĩa */}
          <div className="p-5 bg-indigo-50 border-b border-indigo-100">
            <div className="flex items-center gap-2 mb-3 text-indigo-700">
              <Languages size={15} />
              <span className="text-xs font-bold uppercase tracking-wider">Dịch nghĩa</span>
              <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded-full">
                <Sparkles size={10} /> AI · Groq
              </span>
            </div>

            {/* Câu hỏi dịch */}
            <p className="text-indigo-900 font-semibold text-sm mb-3">
              ❓ {aiResult.questionVN}
            </p>

            {/* Đáp án dịch */}
            <div className="space-y-1.5">
              {aiResult.optionsVN.map((opt, i) => {
                const isCorrect = correctIdxs.includes(i);
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2 text-sm px-3 py-2 rounded-lg ${
                      isCorrect
                        ? "bg-green-100 text-green-800 font-semibold"
                        : "bg-white/70 text-gray-600"
                    }`}
                  >
                    <span className={`shrink-0 font-bold w-5 ${isCorrect ? "text-green-600" : "text-gray-400"}`}>
                      {optionLabels[i]}.
                    </span>
                    <span>{opt}</span>
                    {isCorrect && (
                      <CheckCircle2 className="w-4 h-4 shrink-0 ml-auto text-green-500 mt-0.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Giải thích */}
          <div className="p-5 bg-blue-50">
            <div className="flex items-center gap-2 mb-3 text-blue-700">
              <Lightbulb size={15} />
              <span className="text-xs font-bold uppercase tracking-wider">Giải thích</span>
            </div>
            <div className="space-y-2">
              {aiResult.explanation
                .split(/(?<=[.!?])\s*(?=Đáp án|$)/)
                .map((s) => s.trim())
                .filter(Boolean)
                .map((sentence, idx) => (
                  <p
                    key={idx}
                    className={`text-sm leading-relaxed ${
                      idx === 0
                        ? "text-gray-800 font-semibold"
                        : "text-gray-600 font-medium"
                    }`}
                  >
                    {idx > 0 && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mb-0.5 align-middle" />
                    )}
                    {sentence}
                  </p>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ─── QuizCard ──────────────────────────────────────────────────────────────
export const QuizCard = ({
  mode,
  data,
  isSubmitted,
  selectedAnswer,
  checked,
  onAnswer,
  onCheck,
}: QuizCardProps) => {
  const showExplanation = mode === "practice" ? !!checked : isSubmitted;
  const getLabel = (i: number) => `${String.fromCharCode(65 + i)}.`;

  const isMultiSelect = data.isMultiSelect;
  const selectedAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : [];
  const correctAnswers = isMultiSelect ? data.correctAnswers || [] : [];
  const singleCorrectAnswer = !isMultiSelect ? data.correctAnswer : undefined;

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col">
      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
        <h2 className="text-xl font-bold text-gray-700 mb-6">{data.question}</h2>

        {isMultiSelect && (
          <p className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-2 rounded-lg mb-4">
            ⚠️ Chọn tất cả đáp án đúng
          </p>
        )}

        {data.options.map((opt: string, i: number) => {
          const isSelected = isMultiSelect
            ? selectedAnswers.includes(i)
            : selectedAnswer === i;
          const isCorrect = isMultiSelect
            ? correctAnswers.includes(i)
            : i === singleCorrectAnswer;

          let baseClass =
            "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 font-medium cursor-pointer";

          if (showExplanation) {
            if (isCorrect) baseClass += " border-green-500 bg-green-50 text-green-800";
            else if (isSelected && !isCorrect) baseClass += " border-red-500 bg-red-50 text-red-800";
            else baseClass += " border-gray-200 opacity-50 text-gray-500";
          } else {
            baseClass += isSelected
              ? " border-blue-500 bg-blue-50 text-blue-800"
              : " border-gray-200 hover:border-blue-300 text-gray-700";
          }

          const renderIcon = () => {
            if (showExplanation) {
              if (isCorrect) return <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" />;
              if (isSelected && !isCorrect) return <XCircle className="w-6 h-6 shrink-0 text-red-600" />;
            }
            if (isMultiSelect) {
              return (
                <div className={`w-6 h-6 shrink-0 border-2 rounded flex items-center justify-center ${
                  isSelected ? "border-blue-600 bg-blue-600" : "border-gray-300 bg-white"
                }`}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
              );
            }
            return (
              <Circle className={`w-6 h-6 shrink-0 ${isSelected ? "text-blue-600" : "text-gray-300"}`} />
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

        {mode === "practice" && !showExplanation && (
          <div className="mt-4 flex justify-center">
            <button
              disabled={isMultiSelect ? selectedAnswers.length === 0 : selectedAnswer === undefined}
              onClick={() => onCheck?.()}
              className={`px-6 py-3 rounded-xl shadow font-semibold ${
                (isMultiSelect ? selectedAnswers.length === 0 : selectedAnswer === undefined)
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Kiểm tra
            </button>
          </div>
        )}

        {showExplanation && <ExplanationPanel data={data} />}
      </div>
    </div>
  );
};
