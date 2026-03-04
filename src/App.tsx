import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import QuizModePage from "./pages/QuizModePage.tsx";
import PracticePage from "./pages/PracticePage.tsx";
import ExamPage from "./pages/ExamPage.tsx";
import FlashcardPage from "./pages/FlashcardPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home - Select Course */}
        <Route path="/" element={<HomePage />} />

        {/* Quiz Mode Selection */}
        <Route path="/quiz/:courseId" element={<QuizModePage />} />

        {/* Practice Mode */}
        <Route
          path="/quiz/:courseId/practice/:chapterId"
          element={<PracticePage />}
        />

        {/* Exam Mode */}
        <Route path="/quiz/:courseId/exam" element={<ExamPage />} />

        {/* Flashcard Mode */}
        <Route path="/flashcard/:courseId" element={<FlashcardPage />} />
        {/* Catch‑all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
