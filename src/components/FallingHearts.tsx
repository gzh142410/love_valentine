import { useEffect, useState } from 'react';

interface Heart {
    id: number;
    x: number;
    size: number;
    opacity: number;
    speed: number;
    color: string;
}

const FallingHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    const colors = ['text-pink-300', 'text-pink-400', 'text-red-300', 'text-red-400', 'text-valentine-pink', 'text-valentine-purple'];

    useEffect(() => {
        const createHeart = () => {
            const heart: Heart = {
                id: Date.now(),
                x: Math.random() * 100, // Random position across screen width
                size: Math.random() * (30 - 15) + 15, // Random size between 15-30px
                opacity: Math.random() * (1 - 0.4) + 0.4, // Random opacity between 0.4-1
                speed: Math.random() * (3 - 1) + 1, // Random speed
                color: colors[Math.floor(Math.random() * colors.length)]
            };
            setHearts((prev) => [...prev, heart]);

            // Remove heart after animation
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== heart.id));
            }, 10000);
        };

        const interval = setInterval(createHeart, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='fixed inset-0 pointer-events-none overflow-hidden'>
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className={`absolute animate-falling-heart ${heart.color}`}
                    style={{
                        left: `${heart.x}%`,
                        fontSize: `${heart.size}px`,
                        opacity: heart.opacity,
                        animationDuration: `${10 / heart.speed}s`
                    }}
                >
                    ❤
                </div>
            ))}
        </div>
    );
};

export default FallingHearts;
