import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FlashcardChapterSelector } from "../components/FlashcardChapterSelector";
import { FlashcardReview } from "../components/FlashcardReview";
import { useFlashcardState } from "../hooks/useFlashcard";
import { getCourseConfig } from "../data";

export default function FlashcardPage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const {
    state,
    currentFlashcard,
    progress,
    stats,
    startReview,
    flipCard,
    markAnswer,
    goToNext,
    goToPrevious,
    goToCard,
    resetReview,
  } = useFlashcardState();

  const course = courseId ? getCourseConfig(courseId) : null;

  // Start flashcard review when chapter is selected
  useEffect(() => {
    if (courseId && selectedChapter !== null && state.mode === "idle") {
      startReview(courseId, selectedChapter);
    }
  }, [courseId, selectedChapter, state.mode, startReview]);

  if (!course) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Khóa học không tồn tại</p>
      </div>
    );
  }

  // Show chapter selector if no chapter is selected
  if (selectedChapter === null) {
    return (
      <FlashcardChapterSelector
        course={course}
        onSelectChapter={(chapterId) => {
          setSelectedChapter(chapterId);
        }}
        onSelectAll={() => {
          setSelectedChapter(-1); // -1 means all chapters
        }}
        onBack={() => {
          navigate(-1);
        }}
      />
    );
  }

  // Show flashcard review
  return (
    <FlashcardReview
      state={state}
      currentFlashcard={currentFlashcard}
      progress={progress}
      stats={stats}
      isFlipped={state.isFlipped}
      onFlip={flipCard}
      onMarkKnow={() => markAnswer("know")}
      onMarkUnknown={() => markAnswer("unknown")}
      onNext={goToNext}
      onPrevious={goToPrevious}
      onGoToCard={goToCard}
      onBack={() => {
        resetReview();
        setSelectedChapter(null);
      }}
      onRestart={() => startReview(courseId || "", state.selectedChapter)}
    />
  );
}
