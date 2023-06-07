import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function DiagnosisInterface() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, How can I help you today? </Text>
      <Button title="Diagnosis Survey" onPress={() => console.log('Button pressed')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
