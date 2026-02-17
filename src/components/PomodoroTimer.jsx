import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { Audio } from 'expo-av';
import TimerDisplay from './TimerDisplay';
import TaskList from './TaskList';

const POMODORO_DURATION_SECONDS = 25 * 60;

const PomodoroTimer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const playAlarm = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/alarm.mp3')
    );
    await sound.playAsync();
  };

  const handleTimerComplete = () => {
    playAlarm();
    setIsPlaying(false);
    setCompletedPomodoros(prev => prev + 1);
    return { shouldRepeat: true, delay: 1 };
  };

  const formatTime = (seconds) => {
    return format(new Date(seconds * 1000), 'mm:ss');
  };

  const handleTaskSubmit = () => {
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
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
        <TaskList
          tasks={tasks}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          handleTaskSubmit={handleTaskSubmit}
          handleDeleteTask={handleDeleteTask}
          handleTaskCompletion={handleTaskCompletion}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 40,
  }
});

export default PomodoroTimer;
