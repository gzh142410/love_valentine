
import { useState } from "react";
import QuizCard from "../components/QuizCard";
import WishCard from "../components/WishCard";
import { Heart, HeartPulse, Gift } from "lucide-react";

const Index = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showWishes, setShowWishes] = useState(false);

  const quizzes = [
    {
      question: "Điều gì khiến tình yêu trở nên đặc biệt?",
      options: [
        "Vì nó là món quà vô giá",
        "Vì nó làm cuộc sống có ý nghĩa hơn",
        "Vì nó biến những điều bình thường thành phi thường",
        "Tất cả các câu trên",
      ],
      correctAnswer: "Tất cả các câu trên",
    },
    {
      question: "Yêu là gì?",
      options: [
        "Là tha thứ mọi lỗi lầm",
        "Là chấp nhận mọi khuyết điểm",
        "Là cùng nhau trưởng thành",
        "Tất cả các câu trên",
      ],
      correctAnswer: "Tất cả các câu trên",
    },
  ];

  const wishes = [
    {
      wish: "Chúc người yêu của anh/em có một Valentine ngọt ngào và hạnh phúc. Cảm ơn em/anh đã luôn bên cạnh và là động lực để anh/em tiến về phía trước.",
      from: "Người yêu của bạn",
    },
    {
      wish: "Mỗi khoảnh khắc bên em/anh đều là những kỷ niệm đẹp mà anh/em sẽ trân trọng mãi mãi. Chúc tình yêu của chúng ta ngày càng bền chặt.",
      from: "Người thương của bạn",
    },
  ];

  const handleCorrectAnswer = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setTimeout(() => {
        setCurrentQuizIndex(currentQuizIndex + 1);
      }, 1000);
    } else {
      setShowWishes(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-light via-white to-valentine-pink p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <div className="flex justify-center gap-2 mb-4">
            <HeartPulse className="w-8 h-8 text-valentine-purple animate-float" />
            <Heart className="w-8 h-8 text-valentine-purple animate-float" />
            <Gift className="w-8 h-8 text-valentine-purple animate-float" />
          </div>
          <h1 className="text-4xl font-bold text-valentine-dark mb-2">
            Valentine's Day
          </h1>
          <p className="text-valentine-purple text-lg">
            Hãy cùng nhau khám phá những câu đố về tình yêu nhé!
          </p>
        </div>

        {!showWishes ? (
          <QuizCard
            {...quizzes[currentQuizIndex]}
            onCorrectAnswer={handleCorrectAnswer}
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {wishes.map((wish, index) => (
              <WishCard key={index} {...wish} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
