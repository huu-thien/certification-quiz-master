import { Lightbulb } from "lucide-react";
import type { CourseConfig } from "../types";
import { PSM1_FLASHCARD_SECTIONS } from "../data";

interface FlashcardChapterSelectorProps {
  course: CourseConfig;
  onSelectChapter: (chapterId: number) => void;
  onSelectAll: () => void;
  onBack: () => void;
}

export const FlashcardChapterSelector = ({
  course,
  onSelectChapter,
  onBack,
}: FlashcardChapterSelectorProps) => {
  const chapters =
    course.id === "psm1"
      ? Object.entries(PSM1_FLASHCARD_SECTIONS)
      : Object.entries(course.chapters);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Lightbulb className="text-purple-600" size={36} />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ôn Tập Flash Card
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          {course.id === "psm1"
            ? "Chọn phần Scrum Guide muốn ôn tập:"
            : "Chọn chương muốn ôn tập:"}{" "}
          <strong>{course.name}</strong>
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="w-full max-w-4xl">
        {/* All Chapters Button */}
        {chapters.length === 0 && (
          <p className="text-center text-gray-500 mb-4">
            Không có chương nào để hiển thị.
          </p>
        )}

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {chapters.map(([chapterId, chapterName]) => (
            <button
              key={chapterId}
              onClick={() => onSelectChapter(parseInt(chapterId))}
              className="group flex flex-col p-5 bg-white rounded-xl shadow-md border border-transparent hover:border-purple-300 hover:shadow-lg transition-all hover:scale-105 transform text-left cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                  <Lightbulb size={22} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {course.id === "psm1"
                      ? `Phần ${chapterId}`
                      : `Chương ${chapterId}`}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-11">
                {chapterName}
              </p>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors cursor-pointer"
        >
          ← Quay Lại
        </button>
      </div>
    </div>
  );
};
