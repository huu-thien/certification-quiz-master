import { PackageOpen } from "lucide-react";
import type { CourseConfig } from "../types";

interface CourseSelectorProps {
  courses: CourseConfig[];
  onSelectCourse: (course: CourseConfig) => void;
}

export const CourseSelector = ({
  courses,
  onSelectCourse,
}: CourseSelectorProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-2">
          Chọn Bộ Thi
        </h1>
        <p className="text-gray-600">
          Chọn bộ thi bạn muốn ôn tập hoặc thi thử
        </p>
      </div>

      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="group flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-indigo-500 hover:shadow-2xl transition-all text-left hover:scale-105 transform cursor-pointer"
            >
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full mb-4 w-fit group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <PackageOpen size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {course.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {course.description}
              </p>
              <div className="flex gap-4 text-xs font-semibold text-gray-500">
                <span>📚 {course.totalQuestions} câu hỏi</span>
                <span>⏱️ {course.examDuration / 60} phút</span>
              </div>
            </button>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-500">Không có bộ thi nào được kích hoạt</p>
          </div>
        )}
      </div>
    </div>
  );
};
