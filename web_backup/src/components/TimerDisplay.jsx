import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const TimerDisplay = ({
    timerKey,
    isPlaying,
    duration,
    onComplete,
    formatTime,
    togglePlay,
    resetTimer,
    completedCount
}) => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <h1 className='mx-auto'>Pomodoro Timer</h1>
            <CountdownCircleTimer
                key={timerKey}
                isPlaying={isPlaying}
                duration={duration}
                colors={['#FF6347', '#FF6347', '#FF6347']}
                colorsTime={[duration, duration / 2, 0]}
                onComplete={onComplete}
                size={350}
                strokeWidth={20}
            >
                {({ remainingTime }) => (
                    <div className="timer-display">
                        <span className="time">{formatTime(remainingTime)}</span>
                        <div className="controls">
                            <button onClick={() => togglePlay(remainingTime)}>
                                {isPlaying ? 'Pausar' : 'Comenzar'}
                            </button>
                            <button
                                onClick={resetTimer}
                                style={{ display: isPlaying ? 'block' : 'none' }}
                            >
                                Reiniciar
                            </button>
                        </div>
                        {completedCount}
                    </div>
                )}
            </CountdownCircleTimer>
        </div>
    );
};

export default TimerDisplay;
