import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

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
        <View style={styles.container}>
            <Text style={styles.title}>Pomodoro Timer</Text>
            <CountdownCircleTimer
                key={timerKey}
                isPlaying={isPlaying}
                duration={duration}
                colors={['#FF6347', '#FF6347', '#FF6347']}
                colorsTime={[duration, duration / 2, 0]}
                onComplete={onComplete}
                size={300}
                strokeWidth={15}
            >
                {({ remainingTime }) => (
                    <View style={styles.timerContent}>
                        <Text style={styles.timeText}>{formatTime(remainingTime)}</Text>
                        <View style={styles.controls}>
                            <TouchableOpacity style={styles.button} onPress={() => togglePlay(remainingTime)}>
                                <Text style={styles.buttonText}>{isPlaying ? 'Pausar' : 'Comenzar'}</Text>
                            </TouchableOpacity>
                            {isPlaying && (
                                <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetTimer}>
                                    <Text style={styles.buttonText}>Reiniciar</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <Text style={styles.completedText}>Completados: {completedCount}</Text>
                    </View>
                )}
            </CountdownCircleTimer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    timerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
    },
    controls: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#FF6347',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    resetButton: {
        backgroundColor: '#666',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    completedText: {
        marginTop: 15,
        fontSize: 16,
        color: '#666',
    }
});

export default TimerDisplay;
