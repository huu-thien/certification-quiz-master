import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { QuizModeSelector } from "../components/QuizModeSelector";
import { getCourseConfig } from "../data";

export default function QuizModePage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  const [isSelectingChapter, setIsSelectingChapter] = useState(false);

  const course = courseId ? getCourseConfig(courseId) : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Khóa học không tồn tại</p>
      </div>
    );
  }

  return (
    <QuizModeSelector
      course={course}
      isSelectingChapter={isSelectingChapter}
      onStartPractice={(chapterId, subsection, count) => {
        let path = `/quiz/${courseId}/practice/${chapterId}`;
        if (subsection) {
          path += `/${encodeURIComponent(subsection)}`;
        }
        if (count && count > 0) {
          const url = new URL(window.location.href);
          url.pathname = path;
          url.searchParams.set("count", String(count));
          navigate(url.pathname + url.search);
          return;
        }
        navigate(path);
      }}
      onStartExam={() => {
        navigate(`/quiz/${courseId}/exam`);
      }}
      onStartFlashcard={(chapterId) => {
        if (chapterId) {
          navigate(`/flashcard/${courseId}/${chapterId}`);
        } else {
          navigate(`/flashcard/${courseId}`);
        }
      }}
      onBack={() => {
        navigate(-1);
      }}
      onSelectCourse={() => {
        setIsSelectingChapter(!isSelectingChapter);
      }}
    />
  );
}
