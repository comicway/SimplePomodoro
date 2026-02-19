import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PomodoroTimer from './src/components/PomodoroTimer';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <PomodoroTimer />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

