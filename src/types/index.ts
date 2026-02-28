export interface Question {
  id: string | number;
  chapter: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationVN: string;
}
