import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3; // Set initial volume to 30%
        }
    }, []);

    return (
        <div className='fixed bottom-4 right-4 z-50'>
            <audio ref={audioRef} autoPlay loop src='./iu.mp3' />
            <button onClick={togglePlay} className='bg-valentine-pink/80 hover:bg-valentine-pink p-3 rounded-full shadow-lg transition-all'>
                {isPlaying ? <Volume2 className='w-6 h-6 text-valentine-purple' /> : <VolumeX className='w-6 h-6 text-valentine-purple' />}
            </button>
        </div>
    );
};

export default AudioPlayer;
