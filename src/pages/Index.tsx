import { useState } from 'react';
import QuizCard from '../components/QuizCard';
import WishCard from '../components/WishCard';
import { Heart, HeartPulse, Gift, Sparkles } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import FallingHearts from '../components/FallingHearts';

const Index = () => {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [showWishes, setShowWishes] = useState(false);

    const quizzes = [
        {
            question: 'Điều gì khiến tình yêu trở nên đặc biệt?',
            options: ['Vì nó là món quà vô giá', 'Vì nó làm cuộc sống có ý nghĩa hơn', 'Vì nó biến những điều bình thường thành phi thường', 'Tất cả các câu trên'],
            correctAnswer: 'Tất cả các câu trên'
        },
        {
            question: 'Yêu là gì?',
            options: ['Là tha thứ mọi lỗi lầm', 'Là chấp nhận mọi khuyết điểm', 'Là cùng nhau trưởng thành', 'Tất cả các câu trên'],
            correctAnswer: 'Tất cả các câu trên'
        }
    ];

    const wishes = [
        {
            wish: 'Mỗi khoảnh khắc bên chị đều là những kỷ niệm đẹp mà em sẽ trân trọng mãi mãi. ',
            from: 'Chị Loan cute hehe '
        }
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
        <div className='relative min-h-screen bg-gradient-to-br from-valentine-light via-white to-valentine-pink p-6 overflow-hidden'>
            <FallingHearts />
            <AudioPlayer />
            <div className='relative z-10 max-w-4xl mx-auto'>
                <div className='text-center mb-12 animate-fade-up'>
                    <div className='flex justify-center gap-2 mb-4'>
                        <HeartPulse className='w-8 h-8 text-valentine-purple animate-float' />
                        <Heart className='w-8 h-8 text-valentine-purple animate-float delay-100' />
                        <Gift className='w-8 h-8 text-valentine-purple animate-float delay-200' />
                    </div>
                    <div className='relative inline-block'>
                        <h1 className='text-5xl font-bold text-valentine-dark mb-2 bg-clip-text text-transparent bg-gradient-to-r from-valentine-purple to-pink-400'>Valentine's Day</h1>
                        <Sparkles className='absolute -top-4 -right-8 w-6 h-6 text-yellow-400 animate-pulse' />
                        <Sparkles className='absolute -bottom-2 -left-8 w-6 h-6 text-yellow-400 animate-pulse delay-300' />
                    </div>
                    <p className='text-valentine-purple text-lg mt-4 font-medium'>Hãy cùng nhau khám phá những câu đố về tình yêu nhé! 💝</p>
                </div>

                <div className='relative'>
                    {!showWishes ? (
                        <div className='transform transition-all hover:scale-102'>
                            <QuizCard {...quizzes[currentQuizIndex]} onCorrectAnswer={handleCorrectAnswer} />
                        </div>
                    ) : (
                        <div className='grid gap-6 md:grid-cols-2 animate-fade-up'>
                            {wishes.map((wish, index) => (
                                <WishCard key={index} {...wish} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;
