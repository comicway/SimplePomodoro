import { useState } from 'react';
import { format } from 'date-fns';
import useSound from 'use-sound';
import alarmSound from './microwave-timer.mp3';
import TimerDisplay from './TimerDisplay';
import TaskList from './TaskList';

const POMODORO_DURATION_SECONDS = 25 * 60; // 25 minutos estándar

const PomodoroTimer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const [playAlarm] = useSound(alarmSound);

  const handleTimerComplete = () => {
    playAlarm();
    setIsPlaying(false);
    setCompletedPomodoros(prev => prev + 1);
    return [true, 1000]; // Reiniciar después de 1 segundo
  };

  const formatTime = (seconds) => {
    return format(new Date(seconds * 1000), 'mm:ss');
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToDelete));
  };

  const handleTaskCompletion = (indexToToggle) => {
    setTasks(prevTasks => prevTasks.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    ));
  };

  const togglePlay = (remainingTime) => {
    if (remainingTime === 0) {
      setTimerKey(prev => prev + 1);
    }
    setIsPlaying(!isPlaying);
  };

  const resetTimer = () => {
    setTimerKey(prev => prev + 1);
    setIsPlaying(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <TimerDisplay
          timerKey={timerKey}
          isPlaying={isPlaying}
          duration={POMODORO_DURATION_SECONDS}
          onComplete={handleTimerComplete}
          formatTime={formatTime}
          togglePlay={togglePlay}
          resetTimer={resetTimer}
          completedCount={completedPomodoros}
        />
      </div>
      <div className="container mx-auto">
        <TaskList
          tasks={tasks}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          handleTaskSubmit={handleTaskSubmit}
          handleDeleteTask={handleDeleteTask}
          handleTaskCompletion={handleTaskCompletion}
        />
      </div>
    </>
  );
};

export default PomodoroTimer;