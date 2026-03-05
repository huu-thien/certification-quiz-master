import React, { useState, useEffect } from "react";
import { BookOpen, Trophy, Lightbulb } from "lucide-react";
import type { CourseConfig } from "../types";
import {
  getAvailableChaptersByCourse,
  getSubsectionsByChapterAndCourse,
  getQuestionsByChapterAndCourse,
} from "../data";

interface QuizModeSelectorProps {
  course: CourseConfig;
  isSelectingChapter: boolean;
  onStartPractice: (chapterId: number, subsectionTitle?: string) => void;
  onStartExam: () => void;
  onStartFlashcard?: (chapterId?: number) => void;
  onBack: () => void;
  onSelectCourse: () => void;
}

export const QuizModeSelector = ({
  course,
  isSelectingChapter,
  onStartPractice,
  onStartExam,
  onStartFlashcard,
  onBack,
  onSelectCourse,
}: QuizModeSelectorProps) => {
  const chapters = getAvailableChaptersByCourse(course.id);

  // when ISTQB and user is in chapter selection mode, we may ask for
  // a subsection after the chapter is chosen.
  const [chosenChapter, setChosenChapter] = useState<number | null>(null);
  const subsections =
    chosenChapter !== null && course.id === "istqb"
      ? getSubsectionsByChapterAndCourse(course.id, chosenChapter)
      : [];

  const resetSelection = () => setChosenChapter(null);

  // whenever the selection mode is toggled off we should drop any
  // stored chapter so the next time user enters they start fresh.
  React.useEffect(() => {
    if (!isSelectingChapter) {
      resetSelection();
    }
  }, [isSelectingChapter]);

  // header subtitle adapts when user drills into ISTQB chapter
  let subtitle: string;
  if (isSelectingChapter) {
    if (course.id === "psm1") {
      subtitle = "Chọn practice test bạn muốn ôn tập";
    } else if (course.id === "istqb") {
      subtitle =
        chosenChapter === null
          ? "Chọn chương bạn muốn ôn tập"
          : "Chọn chủ đề con bạn muốn ôn tập";
    } else {
      subtitle = "Chọn chương bạn muốn ôn tập";
    }
  } else {
    subtitle = course.description;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-8">
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 whitespace-nowrap">
          {course.name}
        </h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {isSelectingChapter ? (
        // Practice/Chapter (and possibly subsection) selection screen
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chosenChapter === null ? (
              // first show chapter/practice cards
              chapters.map((chapterId) => {
                const isPsm = course.id === "psm1";
                const label = isPsm
                  ? `Practice ${chapterId}`
                  : `Chương ${chapterId}`;
                const count = getQuestionsByChapterAndCourse(
                  course.id,
                  chapterId,
                ).length;
                const subtitle = isPsm
                  ? `${count} câu hỏi`
                  : course.chapters[chapterId] || "Chưa có tiêu đề";
                return (
                  <button
                    key={chapterId}
                    onClick={() => {
                      if (course.id === "istqb") {
                        setChosenChapter(chapterId);
                      } else {
                        onStartPractice(chapterId);
                      }
                    }}
                    className="group flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all text-left cursor-pointer"
                  >
                    <span className="text-xl font-bold text-gray-800">
                      {label}
                    </span>
                    <span className="text-sm text-gray-500 mt-1">
                      {subtitle}
                    </span>
                  </button>
                );
              })
            ) : (
              // if an ISTQB chapter was selected, display subsections
              <>
                <button
                  key="all"
                  onClick={() => onStartPractice(chosenChapter)}
                  className="group flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all text-left cursor-pointer"
                >
                  <span className="text-xl font-bold text-gray-800">
                    Toàn bộ chương
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    {
                      getQuestionsByChapterAndCourse(course.id, chosenChapter)
                        .length
                    }{" "}
                    câu hỏi
                  </span>
                </button>
                {subsections.map((title, idx) => {
                  const count = getQuestionsByChapterAndCourse(
                    course.id,
                    chosenChapter,
                    title,
                  ).length;
                  return (
                    <button
                      key={idx}
                      onClick={() => onStartPractice(chosenChapter, title)}
                      className="group flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all text-left cursor-pointer"
                    >
                      <span className="text-xl font-bold text-gray-800">
                        {title}
                      </span>
                      <span className="text-sm text-gray-500 mt-1">
                        {count} câu hỏi
                      </span>
                    </button>
                  );
                })}
              </>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            {chosenChapter !== null && (
              <button
                onClick={resetSelection}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              >
                Quay lại chương
              </button>
            )}
            <button
              onClick={onBack}
              className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
            >
              Quay lại
            </button>
          </div>
        </div>
      ) : (
        // Mode and Course Selection Screen
        <div className="w-full max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Practice Mode */}
            <button
              onClick={onSelectCourse}
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:scale-105 transform transition-all cursor-pointer"
            >
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BookOpen size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện tập</h2>
              <p className="text-gray-500 mt-2 text-center">
                {course.id === "psm1"
                  ? "Học theo từng practice test, có giải thích chi tiết ngay lập tức."
                  : "Học theo từng chương, có giải thích chi tiết ngay lập tức."}
              </p>
            </button>

            {/* Exam Mode */}
            <button
              onClick={onStartExam}
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-500 hover:shadow-2xl hover:scale-105 transform transition-all cursor-pointer"
            >
              <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Trophy size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Thi thử</h2>
              <p className="text-gray-500 mt-2 text-center">
                Bắt đầu tính thời gian và làm bài như thi thật
              </p>
            </button>

            {/* Flashcard Mode */}
            <button
              onClick={() => onStartFlashcard?.()}
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-green-500 hover:shadow-2xl hover:scale-105 transform transition-all cursor-pointer"
            >
              <div className="p-4 bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Lightbulb size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Thẻ ghi nhớ</h2>
              <p className="text-gray-500 mt-2 text-center">
                Ôn tập với flashcard và đánh dấu khái niệm đã biết
              </p>
            </button>
          </div>

          {/* Back button */}
          <div className="text-center">
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-gray-600 underline font-medium cursor-pointer"
            >
              Quay lại chọn bộ thi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
