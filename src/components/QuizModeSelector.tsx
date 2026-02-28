import { BookOpen, Trophy } from "lucide-react";
import type { CourseConfig } from "../types";
import { getAvailableChaptersByCourse } from "../data";

interface QuizModeSelectorProps {
  course: CourseConfig;
  isSelectingChapter: boolean;
  onStartPractice: (chapterId: number) => void;
  onStartExam: () => void;
  onBack: () => void;
  onSelectCourse: () => void;
}

export const QuizModeSelector = ({
  course,
  isSelectingChapter,
  onStartPractice,
  onStartExam,
  onBack,
  onSelectCourse,
}: QuizModeSelectorProps) => {
  const chapters = getAvailableChaptersByCourse(course.id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-8">
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 whitespace-nowrap">
          {course.name}
        </h1>
        <p className="text-gray-600">
          {isSelectingChapter
            ? "Chọn chương bạn muốn ôn tập"
            : course.description}
        </p>
      </div>

      {isSelectingChapter ? (
        // Chapter Selection Screen
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((chapterId) => (
              <button
                key={chapterId}
                onClick={() => onStartPractice(chapterId)}
                className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all text-left"
              >
                <span className="text-xl font-bold text-gray-800">
                  Chương {chapterId}
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  {course.chapters[chapterId] || "Chưa có tiêu đề"}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Quay lại
            </button>
          </div>
        </div>
      ) : (
        // Mode and Course Selection Screen
        <div className="w-full max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Practice Mode */}
            <button
              onClick={onSelectCourse}
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:scale-105 transform transition-all"
            >
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BookOpen size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện tập</h2>
              <p className="text-gray-500 mt-2 text-center">
                Học theo từng chương, có giải thích chi tiết ngay lập tức.
              </p>
            </button>

            {/* Exam Mode */}
            <button
              onClick={onStartExam}
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-500 hover:shadow-2xl hover:scale-105 transform transition-all"
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

          {/* Back button */}
          <div className="text-center">
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-gray-600 underline font-medium"
            >
              Quay lại chọn bộ thi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
