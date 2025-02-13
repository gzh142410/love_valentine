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
            question: 'Điều gì làm nên một tình yêu đẹp?',
            options: [
                'Sự chân thành và tin tưởng',
                'Sự thấu hiểu và chia sẻ',
                'Cùng nhau vượt qua khó khăn',
                'Tất cả các điều trên'
            ],
            correctAnswer: 'Tất cả các điều trên'
        },
        {
            question: 'Tình yêu giống như điều gì nhất?',
            options: [
                'Như ánh nắng sưởi ấm tâm hồn',
                'Như dòng suối mát lành',
                'Như bài hát ngọt ngào',
                'Như cánh hoa tươi thắm'
            ],
            correctAnswer: 'Như ánh nắng sưởi ấm tâm hồn'
        },
        {
            question: 'Điều gì là quan trọng nhất trong tình yêu?',
            options: [
                'Sự chân thành',
                'Lòng thủy chung',
                'Sự quan tâm',
                'Tất cả đều quan trọng như nhau'
            ],
            correctAnswer: 'Tất cả đều quan trọng như nhau'
        },
        {
            question: 'Tình yêu đẹp nhất khi nào?',
            options: [
                'Khi ta biết hy sinh vì nhau',
                'Khi ta luôn bên nhau mọi lúc',
                'Khi ta cùng nhau trưởng thành',
                'Tất cả các thời điểm trên'
            ],
            correctAnswer: 'Tất cả các thời điểm trên'
        }
    ];

    const wishes = [
        {
            wish: 'Chúc chị luôn xinh đẹp, hạnh phúc và tràn đầy năng lượng. Mong rằng sau này chị và em có thể là một điều gì đó tuyệt vời hơn nữa ',
            from: 'Chị iu '
        },
        {
            wish: 'Cảm ơn chị đã luôn , chia sẻ những niềm vui nỗi buồn  cùng em ',
            from: 'Chị siu cute'
        },
        {
            wish: 'Mỗi ngày bên chị là một ngày tràn ngập hạnh phúc. ',
            from: 'Người thương của chị'
        },
        {
            wish: 'Chị là điều tuyệt vời nhất mà cuộc đời đã mang đến cho cho. Cảm ơn chị vì tất cả!',
            from: 'Người luôn thương chị'
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
                        <h1 className='text-5xl font-bold text-valentine-dark mb-2 bg-clip-text text-transparent bg-gradient-to-r from-valentine-purple to-pink-400'>
                            Chuyện Tình Yêu Của Chúng Ta
                        </h1>
                        <Sparkles className='absolute -top-4 -right-8 w-6 h-6 text-yellow-400 animate-pulse' />
                        <Sparkles className='absolute -bottom-2 -left-8 w-6 h-6 text-yellow-400 animate-pulse delay-300' />
                    </div>
                    <p className='text-valentine-purple text-lg mt-4 font-medium'>
                        Hãy cùng nhau khám phá những điều thú vị về tình yêu của chúng ta nhé! 💝
                    </p>
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
