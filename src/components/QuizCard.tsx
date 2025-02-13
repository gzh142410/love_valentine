
import { useState } from "react";
import { Heart } from "lucide-react";

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onCorrectAnswer: () => void;
}

const QuizCard = ({ question, options, correctAnswer, onCorrectAnswer }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      onCorrectAnswer();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-fade-up">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="text-valentine-purple w-6 h-6 animate-float" />
        <h3 className="text-lg font-medium text-valentine-dark">{question}</h3>
      </div>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full text-left p-3 rounded-lg transition-all ${
              selectedAnswer === option
                ? isCorrect
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
                : "bg-valentine-light hover:bg-valentine-pink/50"
            } border-2 border-transparent hover:border-valentine-purple`}
          >
            {option}
          </button>
        ))}
      </div>
      {isCorrect !== null && (
        <p
          className={`mt-4 text-center ${
            isCorrect ? "text-green-600" : "text-red-600"
          } animate-fade-in`}
        >
          {isCorrect ? "Câu trả lời chính xác!" : "Hãy thử lại nhé!"}
        </p>
      )}
    </div>
  );
};

export default QuizCard;
