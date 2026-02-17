import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PomodoroTimer from './src/components/PomodoroTimer';

export default function App() {
  return (
    <View style={styles.container}>
      <PomodoroTimer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

